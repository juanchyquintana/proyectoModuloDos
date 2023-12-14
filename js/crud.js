import Musica from "./classMusica.js";

const musica = JSON.parse(localStorage.getItem("musicaKey")) || [];
const formularioAgregarMusica = document.querySelector("#formularioMusica");
const nombreCancion = document.querySelector("#nombre");
const artista = document.querySelector("#autor");
const categoria = document.querySelector("#categoria");
const imagen = document.querySelector("#musica");
const duracion = document.querySelector("#duracion");
let patronDuracionCancion =
  /^(?:(?:(?:(?:[0-5]?[0-9]):)?[0-5]?[0-9])|(?:(?:[0-5]?[0-9])s))$/;

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

  if (!patronDuracionCancion.test(duracion.value)) {
    alert("no es un numero valido");
    return;
  }

  if (
    [
      nombreCancion.value,
      artista.value,
      categoria.value,
      imagen.value,
      duracion.value,
    ].includes("")
  ) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Campos Vacios",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    musica.push(musicaNueva);

    guardarMusicaLocalStorage();

    limparFormularioMusicaAdmin();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Agregado Correctamente",
    });
  }
};

const guardarMusicaLocalStorage = () => {
  localStorage.setItem("musicaKey", JSON.stringify(musica));
};

const limparFormularioMusicaAdmin = () => {
  formularioAgregarMusica.reset();
};

formularioAgregarMusica.addEventListener("submit", crearMusica);


const cargaInicial = () => {
  const musicaAlmacenada = JSON.parse(localStorage.getItem("musicaKey")) || [];

  if (musicaAlmacenada.length > 0) {
    musicaAlmacenada.map((cancion, posicion) =>
      crearFila(cancion, posicion + 1)
    );
  }
};

const crearFila = (cancion, fila) => {
  const tablaMusica = document.querySelector("#tablaMusica");
  tablaMusica.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${cancion.titulo}</td>
    <td>${cancion.artista}</td>
    <td>${cancion.duracion}</td>
    <td class= "d-md-flex gap-3">
     <button class="boton" id="boton-borrar" onclick="eliminarCancion('${cancion.id}')">
     <span class="bn39span">Borrar</span>
     </button>
     <button class="boton" id="boton-editar" onclick="eliminarCancion('${cancion.id}')">
     <span class="bn39span">editar</span>
     </button>
     <button class="boton" id="boton-verMas" onclick="eliminarCancion('${cancion.id}')">
     <span class="bn39span">Ver mas</span>
     </button>
    </td>
  </tr>`;
};

document.addEventListener("DOMContentLoaded", cargaInicial);
