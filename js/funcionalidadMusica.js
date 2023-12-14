const musica = document.querySelector('#audio')
const progresoMusica = document.querySelector('#progresoMusica')
const controlIcono = document.querySelector('#controlIcon')
const tiempoInput = document.querySelector('#tiempoInput')
const iconoMuted = document.querySelector('#iconoMuted')
const cambiarIcono = document.querySelector('#cambiarIcono')

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

if(musica.play()){
    setInterval(() => {
        progresoMusica.value = musica.currentTime;
        tiempoInput.innerHTML = formatearTiempo(musica.currentTime)
    }, 500)
}

progresoMusica.onchange = () => {
    musica.play()
    musica.currentTime = progresoMusica.value;
    controlIcono.classList.add("fa-pause")
    controlIcono.classList.remove("fa-play")
}

const mutearCancion = () => {
    if(iconoMuted.classList.contains("fa-volume-xmark")) {
        musica.muted = false;
        iconoMuted.classList.remove("fa-volume-xmark")
        iconoMuted.classList.add("fa-volume-high")
    } else {
        musica.muted = true
        iconoMuted.classList.add("fa-volume-xmark")
        iconoMuted.classList.remove("fa-volume-high")
    }
}

const cambiarMusica = () => {
    window.location.href = window.location.origin + '/pages/canciones/cancionDos.html'
}

const formatearTiempo = (tiempo) => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = Math.floor(tiempo % 60);
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}