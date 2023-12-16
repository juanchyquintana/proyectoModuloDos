
const obtenerDatos = JSON.parse(localStorage.getItem("UsuarioKey", usuario));
const formIniciarSesion = document.querySelector('#loginFormario');
const ventanaModalLogin = document.querySelector('#loginModal');

console.log(window.location.href);
console.log(formIniciarSesion);
const loginAdministrador = (e) =>{
    e.preventDefault();
    console.log("estamos en login");
    console.log(obtenerDatos);
    const usuario = document.querySelector('#usuario').value;
    const pass = document.querySelector('#contrasena1').value;
    if(usuario === obtenerDatos.usuario && pass === obtenerDatos.contrasenia){
        alertLoginOk();
        limpiarFormularioInicioSesion();
        window.setInterval(cerrarModal,2000);
    }else{
        alertLoginError();
    }
    
}

const cerrarModal = () =>{
    window.location.href = window.location.href;
}

const limpiarFormularioInicioSesion = () =>{
    formIniciarSesion.reset();
}

const alertLoginError = () =>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos! vuelve a intentarlo..",
      });
}

const alertLoginOk = () =>{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        // timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
}

// window.detalleContacto = (idContacto) => {
//     console.log(window.location);
//     // window.location.origin devuelve el nombre del dominio siempre de mi pagina web
//     // Los parametros siempre se agregan al final de una url con un simbolo de pregunta ?id=
//     window.location.href =
//       window.location.origin + "/pages/detalleContacto.html?id=" + idContacto;
//   };

formIniciarSesion.addEventListener("submit", loginAdministrador);

document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const inputElement = document.getElementById(targetId);
        const icon = this.querySelector('i');

        if (inputElement.type === 'password') {
            inputElement.type = 'text';
            icon.classList.remove('bi-eye-fill');
            icon.classList.add('bi-eye-slash');
        } else {
            inputElement.type = 'password';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye-fill');
        }
    });
});
