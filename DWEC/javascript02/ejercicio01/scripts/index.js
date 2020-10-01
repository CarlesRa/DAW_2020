var posiblePrimo = 2;
var contadorPrimos = 0;

while (contadorPrimos != 100) {

	if (esPrimo(posiblePrimo)) {
		imprimirNumero(posiblePrimo);
		contadorPrimos++;
	}

	posiblePrimo++;
}

function esPrimo(num) {

	let contador = 0;

	for(let i=num; i>=1; i--) {

		if (num % i == 0) {
			contador++;
		}

		if (contador > 2) {
			break;
		}

	}

	if (contador == 2) {
		return true;
	} 
	else {
		return false;
	}
}

function imprimirNumero(num) {
	document.write('<h2><li>' + num + '</li></h2>');
} 