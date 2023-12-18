const param = new URLSearchParams(window.location.search);
const valor = param.get("value");
const musicas = JSON.parse(localStorage.getItem("musicaKey")) || [];
const musicasEncontradas = [];
const tabla = document.querySelector("table");
let encontro = false;

for (let i = 0; i < musicas.length; i++) {
  if (
    valor === musicas[i].titulo ||
    (valor === musicas[i].artista && valor === musicas[i].categoria)
  ) {
    encontro = true;
    musicasEncontradas.push(musicas[i]);
  }
}

if (encontro) {
  const titulo = document.getElementById("admin-titulo");
  titulo.innerHTML = "Total de resultados: "+ musicasEncontradas.length;
  for (let i = 0; i < musicasEncontradas.length; i++) {
    tabla.innerHTML += `<tr><td>${musicasEncontradas[i].titulo}</td><td>${musicasEncontradas[i].artista}</td><td>${musicasEncontradas[i].duracion}</td><td>${musicasEncontradas[i].categoria}</td></tr>`;
  }
} else {
  tabla.className = "d-none";
}
