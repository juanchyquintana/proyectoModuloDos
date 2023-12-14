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
  return verificacion;
}

function validacionTotal(e) {
  e.preventDefault();
  const nombreBool = validarCaracteres(nombre, 100, 3),
    autorBool = validarCaracteres(autor, 70, 3),
    categoriaBool = validarCategoria();
  let tituloTexto = "",
    autorTexto = "",
    categoriaTexto = "",
    musicaTexto = "";
  if (nombreBool === false) {
    tituloTexto = "<p>El titulo esta incorrecto, vuelve a intentarlo</p>";
  }
  if (autorBool === false) {
    autorTexto = "<p>El autor esta incorrecto, vuelve a intentarlo</p>";
  }
  if (categoriaBool === false) {
    categoriaTexto =
      "<p>La categoria no esta en el rango que dimos vuelve a intentarlo</p>";
  }
  if (musica.value === "") {
    musicaTexto = "<p>No hay musica</p>";
  }
  if (nombreBool && autorBool && categoriaBool && musica.value !== "") {
    return true;
  } else {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
}
form.addEventListener("submit", validacionTotal);
