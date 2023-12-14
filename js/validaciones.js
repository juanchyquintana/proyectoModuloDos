import Swal from "sweetalert2";
const form = document.querySelector("form"),
  nombre = document.getElementById("nombre"),
  autor = document.getElementById("autor"),
  categoria = document.getElementById("categoria"),
  musica = document.getElementById("musica");

function validarCaracteres(input, max, min) {
  const valor = input.value.trim();
  return valor.length() >= min && valor.length() <= max && valor !== "";
}
function validarCategoria() {
  const generos = [
      "rock",
      "pop",
      "k-pop",
      "rap",
      "Electronica",
      "cumbia",
      "folcklore",
    ],
    valor = categoria.value.trim();
  let verificacion = false;
  for (let i = 0; i < generos.length; i++) {
    if (valor === generos[i]) {
      verificacion = true;
      break;
    }
  }
  return false;
}
function validarMusica() {
  
}
function validacionTotal(e) {
  e.preventDefault();
  const nombreBool = validarCaracteres(nombre, 100, 3),
    autorBool = validarCaracteres(autor, 70, 3),
    categoriaBool = validarCategoria();
}

form.addEventListener("submit", validacionTotal);
