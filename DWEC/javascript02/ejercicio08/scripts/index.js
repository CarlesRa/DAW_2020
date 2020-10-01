var numero;

while((numero = 
		prompt('Introduce un número de 3 dígitos\nSALIR: 0')) != 0) {
	if ((numero != null && numero.length === 3 &&  
			numero !== '') && !isNaN(numero) ) {
		if (esNumeroAmstrong(numero)) {

			alert('El número: ' + numero +
						'\n**¡¡Es un número de ARMSTRONG!!**');

		}
		else {
			alert('El número: ' + numero +
			'\nNO un número de ARMSTRONG....');
		}
	}
	else {
		alert('Solo se aceptan números de 3 dígitos...');	
	}

	


}


function esNumeroAmstrong(num) {
	let num1 = Math
		.pow(parseInt(num.substring(0, 1)), 3);

	let num2 = Math
		.pow(parseInt(num.substring(1, 2)), 3);

	let num3 = Math
		.pow(parseInt(num.substring(2)), 3);

	if (num == (num1 + num2 + num3)) {
		return true;
	}	
	else {
		return false;
	}
}