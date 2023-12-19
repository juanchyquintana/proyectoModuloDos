const musica = JSON.parse(localStorage.getItem("musicaKey")) || [];

const cargandoMusicaPrincipal = () => {
  if (musica.length > 0) {
    musica.map((cancion, posicion) =>
      crearFilaPrincipal(cancion, posicion + 1)
    );
  }
};

const crearFilaPrincipal = (cancion, fila) => {
  const tablaMusica = document.querySelector("#tablaPrincipal");
  tablaMusica.innerHTML += `<tr>
      <th scope="row">${fila}</th>
      <td>${cancion.titulo}</td>
      <td>${cancion.artista}</td>
      <td>${cancion.categoria}</td>
      <td>${cancion.duracion}</td>
    </tr>`;
};

cargandoMusicaPrincipal()
