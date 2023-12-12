import Musica from "./classMusica.js";

const musica = JSON.parse(localStorage.getItem("musicaKey")) || [];
const formularioAgregarMusica = document.querySelector("#");
const nombreCancion = document.querySelector("#");
const artista = document.querySelector("#autor");
const categoria = document.querySelector("#categoria");
const imagen = document.querySelector("#");
const duracion = document.querySelector("#");

const crearMusica = (e) => {
  e.preventDefault();

  const musicaNueva = new Musica(
    crypto.randomUUID(),
    nombreCancion.value,
    artista.value,
    categoria.value,
    imagen.value,
    duracion.value
  );

  if (
    [
      nombreCancion.value,
      artista.value,
      categoria.value,
      imagen.value,
      duracion.value,
    ].includes("")
  ) {
    alert("Todos los campos son obligatorios");
  } else {
    musica.push(musicaNueva);

    guardarMusicaLocalStorage();

    limparFormularioMusicaAdmin();

    crearCampoNuevo(musicaNueva, musica.length)
  }
};

const guardarMusicaLocalStorage = () => {
  localStorage.setItem("musicaKey", JSON.stringify(musica));
};

const limparFormularioMusicaAdmin = () => {
  formularioAgregarMusica.reset();
};

const crearCampoNuevo = () => {}
const cargaInicial = () => {};

formularioAgregarMusica.addEventListener("submit", crearMusica);
