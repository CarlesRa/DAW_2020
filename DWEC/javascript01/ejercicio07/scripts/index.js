var num1;
var num2;
var resultadoSuma;
var resultadoProducto;
var datoCorrecto = false;
var pedirDatos = true;

while (pedirDatos) {
	num1 = pedirNumero();
	num2 = pedirNumero();

	if (num1 != null && num2 != null) {

		resultadoSuma = sumar(num1, num2);
		resultadoProducto = producto(num1, num2);
		pedirDatos = false;
		alert(
			'La suma es: ' + resultadoSuma +
			'\nEl producto es: ' + resultadoProducto
		);
	} else {
		pedirDatos = 
		window.confirm('Datos incorrectos!! ' + 
									 '\n¿Desea introducirlos correctamente?');
									 console.log(pedirDatos);
	}
 	
}

function pedirNumero() {
	let num;

	while (!datoCorrecto) {
		num = prompt('Introduzca un número: ');

		if (num != null && !isNaN(num) && num !== '') {
			datoCorrecto = true;
		}
		else if (num == null) {
			return;
		} 
		else {
			alert('Debe introducir un valor numérico...');
		}
	}
	datoCorrecto = false;
	return parseInt(num);
}

function sumar(num1, num2) {
	return num1 + num2;
}

function producto(num1, num2) {
	return num1 * num2;
}