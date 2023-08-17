// Seleccionar el elemento del menú
let menu = document.querySelector('.menu');

// Variables de estado
let flag = false;
let contador = 0;

// Función para inicializar el juego
function iniciar() {
  // Obtener todas las imágenes del rompecabezas
  var imagenes = document.querySelectorAll('#cajaimagenes img');
  
  // Obtener los elementos donde se pueden soltar las imágenes
  soltar = document.getElementById('suelto');
  soltar2 = document.getElementById('suelto1');
  soltar3 = document.getElementById('suelto2');

  // Agregar eventos de arrastrar a las imágenes
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragstart', arrastrado, false);
  }

  // Agregar eventos a los elementos donde se pueden soltar las imágenes
  soltar.addEventListener('dragenter', function(e) {
    e.preventDefault();
  }, false);
  soltar.addEventListener('dragover', function(e) {
    e.preventDefault();
  }, false);
  soltar.addEventListener('drop', soltado, false);

  soltar2.addEventListener('dragenter', function(e) {
    e.preventDefault();
  }, false);
  soltar2.addEventListener('dragover', function(e) {
    e.preventDefault();
  }, false);
  soltar2.addEventListener('drop', soltado, false);

  soltar3.addEventListener('dragenter', function(e) {
    e.preventDefault();
  }, false);
  soltar3.addEventListener('dragover', function(e) {
    e.preventDefault();
  }, false);
  soltar3.addEventListener('drop', soltado, false);
}

// Función para capturar el elemento arrastrado
function arrastrado(e) {
  elemento = e.target;
  e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

// Función para soltar el elemento arrastrado
async function soltado(e) {
  e.preventDefault();
  console.log(e);
  let id = e.dataTransfer.getData('Text');
  let imagen = document.getElementById(id);
  imagen.style.display = 'none';
  e.target.innerHTML = '<img src="' + imagen.src + '" height="400px" width="275px">';
  contador++;
}

// Función para reiniciar el juego
function reinicio() {
  window.location.reload();
}

// Iniciar el juego al cargar la página
iniciar();

