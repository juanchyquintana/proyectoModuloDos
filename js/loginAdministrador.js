const iniciarSesion = document.querySelector('#loginForm');
const obtenerDatos = JSON.parse(localStorage.getItem("UsuarioKey", usuario));
const ventanaModalLogin = document.querySelector('#loginModal');

const loginAdministrador = (e) =>{
    e.preventDefault();
    console.log("estamos en login");
    console.log(obtenerDatos);
    const usuario = document.querySelector('#usuario').value;
    const pass = document.querySelector('#contrasena1').value;
    if(usuario === obtenerDatos.usuario && pass === obtenerDatos.contrasenia){
        ventanaModalLogin.className = 'd-flex';
    }else{
        console.log("incorrecto");
    }
    
}

iniciarSesion.addEventListener("submit", loginAdministrador);