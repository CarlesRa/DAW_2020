const ALTO = document.querySelector('#alto');
const ANCHO = document.querySelector('#ancho');

ALTO.textContent = window.innerHeight;
ANCHO.textContent = window.innerWidth;

function actualizarValores() {
	ALTO.textContent = window.innerHeight;
	ANCHO.textContent = window.innerWidth;
	alert('Se ha redimensionado la pantalla');
}

window.addEventListener('resize', actualizarValores);
