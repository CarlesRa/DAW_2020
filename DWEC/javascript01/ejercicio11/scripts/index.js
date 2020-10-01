var numIntroducido;
var contadorPares = 0;
var contadorImpares = 0;
var contadorNaN = 0;
var numeros = [];
var seguirPidiendo = true;

pedirNumeros();

numeros.forEach(contarTipos);

mostrarResultado();

function pedirNumeros() {

	while (seguirPidiendo) {

		numIntroducido = prompt('Introduzca un número entero.' + 
														'\nSALIR, pulse 0'); 
	
		if (numIntroducido == 0) {
	
			seguirPidiendo = false;
	
		} else {
			numeros.push(numIntroducido);
		}
	}
}

function contarTipos(numero) {

	if (isNaN(numero)) {
		contadorNaN++;
	}
	else if (numero % 2 == 0){
		contadorPares++;
	}
	else {
		contadorImpares++;
	}
}

function mostrarResultado() {
	window.document.writeln('<h1>De los números introducidos:</h1>');
	window.document.writeln('<h2>' + numeros + '</h2>');
	window.document.writeln('<h2>Hay:</h2>');
	window.document.write('<h3>Números pares: ' + contadorPares +
	'<br/>Números impares: ' + contadorImpares +
								 '<br/>Elementos NaN: ' + contadorNaN);
}

