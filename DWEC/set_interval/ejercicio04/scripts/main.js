const COLORES = [
	'red', 'blue', 'green', 'magenta'
];
const CUADRO = document.getElementById('cuadro-color');

var i;
var z;
var random;
var colorSeleccionado;

CUADRO.style.backgroundColor = 'white';

function buttonClicked() {
	i = 0;
	z = 0;
	random = getRandom(20, 80);
	comprobar(carouselColores);
}

function comprobar(callback) {
	
	let options = document.querySelectorAll('input');

	options.forEach(function (color) {
		
		if (color.checked) {
			colorSeleccionado = color.value;
		}

	});

	callback();
}

function carouselColores() {	

	if (i < random) {

		CUADRO.style.backgroundColor = COLORES[z];
		z++;
		i++;

		if (z == COLORES.length) {
			z = 0;
		}

		setTimeout(carouselColores, 50);
	}
	else {
		resultado(colorSeleccionado);
	}
	
}

function resultado(colorSeleccionado) {
	
	let color = CUADRO.style.backgroundColor;

	if (color == colorSeleccionado) {
		alert('ENHORABUENA!! HAS GANADO!!!\nHa salido: ' + color);
		CUADRO.style.backgroundColor = 'white';
	}
	else {
		alert('NOOOOOOO... HAS PERDIDO......\nHa salido: ' + color);
		CUADRO.style.backgroundColor = 'white';
	}
}

function getRandom(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}
