document.addEventListener('DOMContentLoaded', () => {
    const saltarTutorial = localStorage.getItem('saltarTutorial');
    if (saltarTutorial === 'true') {
        mostrarModal('none')
    } else {
        mostrarModal('modalStep1');
    }
});

const totalPasos = 3;
let pasoActual = 1;

function mostrarModal(modalId) {
    const modalAbrir = document.querySelector(`#${modalId}`);
    modalAbrir.classList.add('show');
    modalAbrir.style.display = 'block';
}

function cerrarModal(modalId) {
    const modalCerrar = document.querySelector(`#${modalId}`);
    modalCerrar.classList.remove('show');
    modalCerrar.style.display = 'none';
}

function pasoSiguiente(actualModal, siguienteModal) {
    cerrarModal(actualModal);

    if (pasoActual < totalPasos) {
        pasoActual++;
        mostrarModal(siguienteModal);
    } else {
        const saltarTutorialCheckbox = document.querySelector('#saltarTutorialCheckbox');
        if (saltarTutorialCheckbox.checked) {
            localStorage.setItem('saltarTutorial', 'true');
        }
        alert('Tutorial completado. Redirigiendo...');
        // window.location.href = 'index.html'; 
    }
}

function pasoAnterior(currentModalId, modalAnteriorID) {
    cerrarModal(currentModalId);

    if (pasoActual > 1) {
        pasoActual--;
        mostrarModal(modalAnteriorID);
    }
}

function tutorialCompletado() {

    if (pasoActual < totalPasos) {
        pasoActual++;
        mostrarModal(siguienteModal);
    } else {
        const saltarTutorialCheckbox = document.querySelector('#saltarTutorialCheckbox');
        if (saltarTutorialCheckbox.checked) {
            localStorage.setItem('saltarTutorial', 'true');
        }
    }
    
    Swal.fire({
        title: "Felicidades",
        text: "Haz finalizado el tutorial",
        imageUrl: "./img/PandaRitmoWeb.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });

      cerrarModal('modalStep3')
}
