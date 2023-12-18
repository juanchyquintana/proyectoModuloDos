const param = new URLSearchParams(window.location.search);
const valor = param.get("value");
const musicas = JSON.parse(localStorage.getItem("musicaKey")) || [];
const musicasEncontradas = [];
const tabla = document.querySelector("table");
let encontro = false;
const valorLowercase = valor.toLowerCase();

for (let i = 0; i < musicas.length; i++) {
  const titulo = musicas[i].titulo;
  const artista = musicas[i].artista;
  const categoria = musicas[i].categoria;
  if (
    valorLowercase === titulo.toLowerCase() ||
    valorLowercase === artista.toLowerCase() ||
    valorLowercase === categoria.toLowerCase()
  ) {
    encontro = true;
    musicasEncontradas.push(musicas[i]);
  }
}

if (encontro) {
  const titulo = document.getElementById("admin-titulo");
  titulo.innerHTML = "Total de resultados: " + musicasEncontradas.length;
  for (let i = 0; i < musicasEncontradas.length; i++) {
    tabla.innerHTML += `<tr><td>${musicasEncontradas[i].titulo}</td><td>${musicasEncontradas[i].artista}</td><td>${musicasEncontradas[i].duracion}</td><td>${musicasEncontradas[i].categoria}</td></tr>`;
  }
} else {
  tabla.className = "d-none";
}
