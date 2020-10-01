var num1;
var num2;
var continuar = false;

while (!continuar) {
	num1 = prompt('Introduce el primer número');

	if (!isNaN(num1)) {
		continuar = true;
	}
	else {
		mostrarAlertError();
	}
}

continuar = false;

while (!continuar) {
	num2 = prompt('Introduce el segundo número');

	if (!isNaN(num2)) {
		continuar = true;
	}
	else {
		mostrarAlertError();
	}
}

window.document.writeln('<h1>Dados los números: ' +
												num1 + ' y ' + num2 + '</h1>');
window.document.write('Suma: ' + suma(num1, num2));
window.document.write('<br/>Resta: ' + resta(num1, num2));
window.document.write('<br/>Producto: ' + producto(num1, num2));
window.document.write('<br/>Division: ' + division(num1, num2));


function suma(num1, num2) {
	return parseInt(num1) + parseInt(num2);
}

function resta(num1, num2) {
	return num1 - num2;
}

function producto(num1, num2) {
	return num1 * num2;
}

function division(num1, num2) {

	if (num2 == 0) {
		return 'Error, no se puede dividir por 0.....';
	}

	return num1 / num2;
}

function mostrarAlertError() {
	alert('Solo se aceptan números');
}