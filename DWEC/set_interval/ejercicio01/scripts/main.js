var interval;
var texto = document.getElementById('texto');
var puntero = 0;

function empezar() {
	let input = document.getElementById('cantidad');
	if (input.value) {
		interval = setInterval(alternarColores, input.value);
	}	
	else {
		alert('Debe introducir una cantidad');
	}
}

function detener() {
	window.clearInterval(interval);
}

function alternarColores() {
	const COLORES = [
		'red', 'blue', 'green'
	]
	texto.style.color = COLORES[puntero];
	puntero++;
	if (puntero == COLORES.length) {
		puntero = 0;
	}
}