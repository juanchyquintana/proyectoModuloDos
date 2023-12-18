const param = new URLSearchParams(window.location.search);
const valor = param.get("value");
const musicas = JSON.parse(localStorage.getItem("musicaKey")) || [];
const musicasEncontradas = []
let encontro = false;

for(let i = 0; i < musicas.length; i++){
    if(valor === musicas[i].titulo || valor === musicas[i].artista && valor === musicas[i].categoria){
        encontro = true;
        musicasEncontradas.push(musicas[i].id)
    }
}
