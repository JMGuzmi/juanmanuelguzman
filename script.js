
// Obtener elementos del DOM
let video = document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton = document.getElementById("pause");
let restartButton = document.getElementById('restart');
let volumenRange = document.getElementById("volumenRange");
let muteButton = document.getElementById("mute");

// Función para reproducir el video
playBoton.addEventListener('click', () => {
    video.play();
});

// Función para pausar el video
pauseBoton.addEventListener('click', () => {
    video.pause();
});

// Función para reiniciar el video
restartButton.addEventListener('click', () => {
    video.currentTime = 0;
});

// Función para subir/bajar volumen
volumenRange.addEventListener("input", () => {
    video.volume = volumenRange.value;
});

// Función para mutear/desmutear el video
muteButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        volumenRange.value = video.volume;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        volumenRange.value = 0;
        muteButton.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
});

// Obtener elementos del DOM después de cierto tiempo (1 segundo en este caso)

setTimeout(() => {
    const duracionElement = document.getElementById('duracion');
    const tiempoActualElement = document.getElementById('tiempo-actual');
    const tiempoTotalElement = document.getElementById('tiempo-total');
    const barraProgresoElement = document.getElementById('barra-progreso');
    const progresoElement = document.getElementById('progreso');
    
    const duracionTotalSegundos = video.duration;
    const duracionMinutos = Math.floor(duracionTotalSegundos / 60);
    const duracionSegundos = Math.floor(duracionTotalSegundos % 60);
    tiempoTotalElement.textContent = `${duracionMinutos}:${duracionSegundos.toString().padStart(2, '0')}`;
  
    function actualizarProgreso() {
        const tiempoActualSegundos = video.currentTime;
        const porcentajeProgreso = (tiempoActualSegundos / duracionTotalSegundos) * 100;
        progresoElement.style.width = `${porcentajeProgreso}%`;
    
        const tiempoActualMinutos = Math.floor(tiempoActualSegundos / 60);
        const tiempoActualSegundosRestantes = Math.floor(tiempoActualSegundos % 60);
        tiempoActualElement.textContent = `${tiempoActualMinutos}:${tiempoActualSegundosRestantes.toString().padStart(2, '0')}`;
    }
  
    function establecerTiempoVideo(event) {
        const barraAncho = barraProgresoElement.clientWidth;
        const clicX = event.offsetX;
        const porcentajeClic = (clicX / barraAncho) * 100;
        const tiempoNuevoSegundos = (porcentajeClic / 100) * duracionTotalSegundos;
        video.currentTime = tiempoNuevoSegundos;
    }
  
    video.addEventListener('timeupdate', actualizarProgreso);
    barraProgresoElement.addEventListener('click', establecerTiempoVideo);
  
    duracionElement.classList.add('duracion-animada');
}, 1000);




