document.addEventListener("DOMContentLoaded", function () {
    const obtenerDatos = JSON.parse(localStorage.getItem("UsuarioKey")) || {};
    const formIniciarSesion = document.querySelector("#loginFormulario");
    const enSesion = JSON.parse(localStorage.getItem("EstadoEnSesion")) || false;
    const sesionUsuarioAdmin = document.querySelector("#sesionActiva");
  
    const loginAdministrador = (e) => {
      e.preventDefault();
      if (validarUsuario()) {
        console.log("usuario en sesion");
      } else {
        
        const usuario = document.querySelector("#usuario").value;
        const pass = document.querySelector("#contrasena1").value;
        if (
          usuario === obtenerDatos.usuario &&
          pass === obtenerDatos.contrasenia
        ) {
          localStorage.setItem("EstadoEnSesion", JSON.stringify(true));
          alertLoginOk();
          limpiarFormularioInicioSesion();
          sesionActiva();
        } else {
          alertLoginError();
          limpiarFormularioInicioSesion();
        }
      }
    };
  
    const validarUsuario = () => {
      return enSesion;
    };
  
    const sesionActiva = () => {
      sesionUsuarioAdmin.innerHTML = `<a class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" href="../pages/adminCRD.html"
      >Administrar música</a>
    <button type="button" class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" onclick="cerrarSesion()">Cerrar Sesión</button>`;
    };
    
  
    window.cerrarSesion = () => {
      localStorage.setItem("EstadoEnSesion", JSON.stringify(false));
      sesionUsuarioAdmin.innerHTML = `
        <a class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" href="#" data-bs-toggle="modal"
          data-bs-target="#loginModal">Iniciar Sesión</a>
        <a class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" href="#" data-bs-toggle="modal"
          data-bs-target="#registerModal">Registrarse</a>`
        window.location.href = '../index.html';
    };
    const limpiarFormularioInicioSesion = () => {
      formIniciarSesion.reset();
    };
  
    const alertLoginError = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos! vuelve a intentarlo..",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#f18b42",
      });
    };
  
    const alertLoginOk = () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Bienvenido administrador",
      });
    };
  
    document.querySelectorAll(".toggle-password").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const inputElement = document.getElementById(targetId);
        const icon = this.querySelector("i");
  
        if (inputElement.type === "password") {
          inputElement.type = "text";
          icon.classList.remove("bi-eye-fill");
          icon.classList.add("bi-eye-slash");
        } else {
          inputElement.type = "password";
          icon.classList.remove("bi-eye-slash");
          icon.classList.add("bi-eye-fill");
        }
      });
    });
    if(validarUsuario()){
      sesionActiva();
    }
  
    formIniciarSesion.addEventListener("submit", loginAdministrador);
  });

