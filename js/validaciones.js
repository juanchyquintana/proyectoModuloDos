const form = document.getElementById("formA"),
  nombre = document.getElementById("nombre"),
  autor = document.getElementById("autor"),
  categoria = document.getElementById("categoria"),
  musica = document.getElementById("musica");

function validarCaracteres(input, max, min) {
  const valor = input.value.trim();
  return valor.length >= min && valor.length <= max && valor !== "";
}
function validarCategoria() {
  const generos = [
      "rock",
      "pop",
      "k-pop",
      "rap",
      "electronica",
      "cumbia",
      "folcklore",
    ],
    valor = categoria.value.trim().toLowerCase();
  let verificacion = false;
  for (let i = 0; i < generos.length; i++) {
    if (valor === generos[i]) {
      verificacion = true;
      break;
    }
  }
  return verificacion;
}
function validacionTotal(e) {
  e.preventDefault();
  const nombreBool = validarCaracteres(nombre, 100, 3),
    autorBool = validarCaracteres(autor, 70, 3),
    categoriaBool = validarCategoria();
  let tituloTexto = "titulo valida",
    autorTexto = "autor valida",
    categoriaTexto = "categoria valida",
    musicaTexto = "archivo de musica valida";
  if (nombreBool === false) {
    tituloTexto = "<p>El titulo esta incorrecto, vuelve a intentarlo</p>";
  }
  if (autorBool === false) {
    autorTexto = "<p>El autor esta incorrecto, vuelve a intentarlo</p>";
  }
  if (categoriaBool === false) {
    categoriaTexto =
      "<p>La categoria no esta en el rango que dimos, vuelve a intentarlo</p>";
  }
  if (musica.value === "") {
    musicaTexto = "<p>No hay musica</p>";
  }
  if (nombreBool && autorBool && categoriaBool && musica.value !== "") {
    return true;
  } else {
    Swal.fire({
      title: "<strong>Opcion invalida</strong>",
      icon: "error",
      html: `
      <p>${tituloTexto}</p>
      <p>${autorTexto}</p>
      <p>${categoriaTexto}</p>
      <p>${musicaTexto}</p>
      `,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Aceptar
      `,
    });
  }
}
form.addEventListener("submit", validacionTotal);
