const TAMAÑO_ORIGINAL = 1;
const INPUT = document.getElementsByTagName('input')[0];
const parrafos = document.getElementsByTagName('p');
var tamañoVariado;

//seteo el valor del fontsize para que devuelva valor
for (let i=0; i<parrafos.length; i++) {
	parrafos[i].style.fontSize = TAMAÑO_ORIGINAL + "em";
}


function agrandar() {
	
	let elemento;
	
	if (elemento = document.getElementById(INPUT.value)) {

		tamañoVariado = fontSizeToNumber(elemento.style.fontSize);

		if ((tamañoVariado += 0.05) <= 2 ) {
			elemento.style.fontSize = (tamañoVariado + 0.05) + "em";
			console.log(elemento.style.fontSize);
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

		tamañoVariado = fontSizeToNumber(elemento.style.fontSize);

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

function fontSizeToNumber(fontSize) {
	return parseFloat(fontSize.split('em')[0]);
}