const progresoMusica = document.querySelector('#progresoMusica')
const musica = document.querySelector('#audio')
const controlIcono = document.querySelector('#controlIcon')

musica.onloadedmetadata = () => {
    progresoMusica.max = musica.duration;
    progresoMusica.value = musica.currentTime;
}

const inciarPausar = () => {
    if(controlIcono.classList.contains("fa-pause")) {
        musica.pause();
        controlIcono.classList.remove("fa-pause")
        controlIcono.classList.add("fa-play")
    } else {
        musica.play()
        controlIcono.classList.add("fa-pause")
        controlIcono.classList.remove("fa-play")
    }
}