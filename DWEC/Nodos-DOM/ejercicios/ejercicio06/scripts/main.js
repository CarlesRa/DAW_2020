const TAMAÑO_ORIGINAL = 1;
const INPUT = document.getElementsByTagName('input')[0];
var tamañoVariado = TAMAÑO_ORIGINAL;

function agrandar() {
	
	let elemento;

	if (elemento = document.getElementById(INPUT.value)) {
		if ((tamañoVariado += 0.05) <= 2 ) {
			elemento.style.fontSize = (tamañoVariado + 0.05) + "em";
		}
		else {
			alert('No se puede apmpliar tanto!!!');
		}
	}	
	else {
		showErrorAllert();
	}
}


function reducir() {

	let elemento;

	if (elemento = document.getElementById(INPUT.value)) {
		if ((tamañoVariado -= 0.05) >= 0.9 ) {
			elemento.style.fontSize = (tamañoVariado - 0.05) + "em";
		}
		else {
			alert('No se puede reducir más!!!');
		}
	}
	else 
		showErrorAllert();
}

function original() {

	let elemento;

	if (elemento = document.getElementById(INPUT.value)) {
		elemento.style.fontSize = TAMAÑO_ORIGINAL + "em";
	}
	else	
		showErrorAllert();
		
}

function showErrorAllert() {
	alert('No existe ningun elemento con ese ID!!!');
}