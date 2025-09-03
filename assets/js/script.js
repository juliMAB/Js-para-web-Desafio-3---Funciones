// Requerimiento 2.2 y 2.3
// - Recibir el elemento clickeado como argumento
// - Permitir pasar un color, por defecto 'green'

function pintar(elemento, color = 'green') {
  if (!elemento) return;
  elemento.style.backgroundColor = color;
}

// Seleccionamos el elemento una vez
const ele = document.getElementById('ele1');

// Por defecto, al cargar la página, si no tiene color, pintamos en verde
// (opcional; el enunciado pide que el color por defecto sea verde)
if (ele && !ele.style.backgroundColor) {
  pintar(ele); // usa 'green' por defecto
}

// Al hacer click, pasamos 'yellow' como color solicitado
ele?.addEventListener('click', function (event) {
  // event.currentTarget es el elemento con el listener
  pintar(event.currentTarget, 'yellow');
});

//todos los ifs y ? adicionales son para detectar que el elemento se encuentra en el DOM antes de operar sobre él