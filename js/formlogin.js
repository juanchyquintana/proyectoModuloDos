const obtenerDatos = JSON.parse(localStorage.getItem("UsuarioKey", usuario));
const formIniciarSesion = document.querySelector("#loginFormario");
const ventanaModalLogin = document.querySelector("#loginModal");

const loginAdministrador = (e) => {
  e.preventDefault();
  console.log("estamos en login");
  console.log(obtenerDatos);
  if (validarUsuario()) {
    sesionActiva();
  } else {
    console.log("usuario en sesion");
    const usuario = document.querySelector("#usuario").value;
    const pass = document.querySelector("#contrasena1").value;
    if (usuario === obtenerDatos.usuario && pass === obtenerDatos.contrasenia) {
      obtenerDatos.enSesion = true;
      localStorage.setItem("EstadoEnSesion", JSON.stringify(usuario));
      alertLoginOk();
      limpiarFormularioInicioSesion();
      sesionActiva();
      // setInterval(cerrarModal, 2000);
    } else {
      alertLoginError();
      limpiarFormularioInicioSesion();
    }
  }
};

const validarUsuario = () => {
  if (obtenerDatos.enSesion == false) {
    return false;
  }else{
    return true;
  }
};

const enSesion = JSON.parse(localStorage.getItem("EstadoEnSesion", usuario));
console.log("en sesion", enSesion);

const sesionActiva = () => {
  const sesionUsuarioAdmin = document.querySelector("#sesionActiva");
  console.log(sesionUsuarioAdmin);
  console.log(sesionUsuarioAdmin.children[0]);
  sesionUsuarioAdmin.innerHTML = `<a class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" href="../pages/adminCRD.html"
    >Administrar música</a>
  <a class="dropdown-item text-uppercase fw-bold hoverLinks lineaHover" href="#" onclick="cerrarSesion()">Cerrar Sesión</a>`;
};

// const cerrarModal = () =>{
//     window.location.href = window.location.href;

// }

window.cerrarSesion = () => {};

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

formIniciarSesion.addEventListener("submit", loginAdministrador);
