const NUMERO_CONDICIONANTE = 0;
var numeros = [];
var numero;
var numMayor = 0;
var continuar = true;

while (continuar) {

	numero = prompt('Introduzca un número');
	if (parseInt(numero) === 0) {
		continuar = false;
	}
	else if (!isNaN(numero) && 
					 numero !== '' && 
					 numero != null) {
		numeros.push(numero);
		console.log(numero);
	}
}

numeros.forEach(mostrarNumMayor);

window.document.write('<h1>Dados los números</h1>' +
							 '<h3>' + numeros + '</h3>' +'<h1>El mayor es: ' + numMayor + '</h1>');

function mostrarNumMayor(element) {
	if (element > numMayor) {
		numMayor = element;
	}
}
