const iniciarSesion = document.querySelector('#loginForm');
const obtenerDatos = JSON.parse(localStorage.getItem("UsuarioKey", usuario));

const loginAdministrador = (e) =>{
    e.preventDefault();
    console.log("estamos en login");
    console.log(obtenerDatos);
    const usuario = document.querySelector('#usuario');
    const pass = document.querySelector('#contrasena1');
    if(usuario.value === obtenerDatos.usuario && usuario.value === obtenerDatos.contrasenia){
        
    }
    
}




iniciarSesion.addEventListener("submit", loginAdministrador);