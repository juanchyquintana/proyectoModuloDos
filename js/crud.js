import Musica from './classMusica.js';

const musica = JSON.parse(localStorage.getItem("musicaKey")) || [];
const formularioAgregarMusica = document.querySelector("#formularioMusica");
const nombreCancion = document.querySelector("#nombre");
const artista = document.querySelector("#autor");
const categoria = document.querySelector("#categoria");
const imagen = document.querySelector("#musica");
const duracion = document.querySelector("#duracion");
let patronDuracionCancion = /^(?:(?:(?:(?:[0-5]?[0-9]):)?[0-5]?[0-9])|(?:(?:[0-5]?[0-9])s))$/;

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

  if(!patronDuracionCancion.test(duracion.value)) {
    alert('no es un numero valido')
    return
  }

  if (
    [
      nombreCancion.value,
      artista.value,
      categoria.value,
      imagen.value,
      duracion.value
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
  const tablaMusica = document.querySelector("#tablaMusica");
  tablaMusica.innerHTML += `
    <tr>
        <td>${fila}</td>
        <td>${musica.titulo}</td>
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
