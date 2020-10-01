const INTERVALO = 11;
var numeros = [];
var contador = 0;
var aux = 0;

while (numeros.length != 25) {

	if (contador == (aux + INTERVALO)) {
		console.log('entra if');
		numeros.push(contador);
		aux = contador;
	}
	contador++;
}

numeros.forEach(printArrayElements);

function printArrayElements(element) {
	window.document.write(
		'<li>' + element + '</li>');
}

