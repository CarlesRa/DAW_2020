var numIntroducido;
var seguirPidiendo = true;

while (seguirPidiendo) {

	numIntroducido = prompt('Introduzca un número del 1 al 5' + 
													'\nSALIR: pulse el número 0'); 
	if (numIntroducido == 0) {
		seguirPidiendo = false;
	}
	else if (numIntroducido >= 1 && 
			numIntroducido <= 5 && 
			!isNaN(numIntroducido)) {
		
		alert('Ha introducido el número: ' + numIntroducido);
	}
	else {
		alert('Solo se haceptan números del 1 al 5');
	}
}