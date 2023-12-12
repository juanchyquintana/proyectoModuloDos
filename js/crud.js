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

    crearCampoNuevo(musicaNueva, musica.length);
  }
};

const guardarMusicaLocalStorage = () => {
  localStorage.setItem("musicaKey", JSON.stringify(musica));
};

const limparFormularioMusicaAdmin = () => {
  formularioAgregarMusica.reset();
};

const crearCampoNuevo = (musica, fila) => {
  const tablaMusica = document.querySelector("#");
  tablaMusica.innerHTML += `
    <tr>
        <td>${fila}</td>
        <td>${musica.nombreCancion}</td>
        <td>${musica.artista}</td>
        <td>${musica.duracion}</td>
    <td class="d-sm-flex">
      <a 
        type="button" 
        class="boton m-2" 
        id="boton-editar" 
        href="./adminU.html"
        >
            <span class="bn39span">Editar</span>
      </a>

      <button type="button" class="boton m-2" id="boton-borrar">
        <span class="bn39span">Borrar</span>
      </button>

      <a 
        type="button" 
        class="boton m-2" 
        id="boton-verMas" 
        href="#"
        >
            <span class="bn39span">Ver mas</span>
      </a>
    </td>
  </tr>
    `;
};

const cargaInicial = () => {
    if(musica.length > 0) {
        musica.map((musica, posicion) => crearCampoNuevo(musica, posicion + 1))
    }
};

formularioAgregarMusica.addEventListener("submit", crearMusica);
cargaInicial();
