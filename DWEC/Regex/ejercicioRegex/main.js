

function comprobarDni() {
	let re = new RegExp("^[0-9]{8}[a-zA-Z]{1}$");
	let inputDni = document.getElementById('dni');
	if (re.test(inputDni.value)) {

		if (libValidarNif(inputDni.value)) {
			alert('El dni es correcto!!');
		}
		else {
			alert('Dni INCORRECTO!! letra no valida');
		}
	}
	else {
		alert('Dni INCORRECTO!! formato incorrecto...');
	}
}

function comprobarEntero() {

	let re = new RegExp("^[0-9]+$");
	let num = document.getElementById('numero');

	if (re.test(num.value)) {
		alert('Es un numero entero!!!');
	}
	else {
		alert('Pillin NO ES UN ENTERO!!');
	}

}

function comprobarMatricula() {
	let re = new RegExp("^[0-9]{4}[A-Z]{3}$","g");
	let num = document.getElementById('matricula');

	if (re.test(num.value)) {
		alert('Es una matrícula correcta!!!');
	}
	else {
		alert('Pillin NO ES UNA MATRÍCULA VALIDA!!');
	}
}

function comprobarTwitter() {

	let re = new RegExp("(^@)([a-z 0-9 \- _])+$","gi");
	let nom = document.getElementById('twitter');

	if (re.test(nom.value)) {
		alert('Es una nick de twitter correcto!!!');
	}
	else {
		alert('Pillin NO ES UN NICK VALIDO!!');
	}
}

function comprobarFecha() {

	let re = new RegExp("([0-3])?[0-9]{1}(\/){1}([0-2])?[0-9]{1}(\/|\-|\.){1}[0-9]{2,4}");
	let fecha = document.getElementById('fecha');

	if (re.test(fecha.value)) {
		console.log('entra fecha');
		if (esFechaValida(fecha.value)) {
			alert('La fecha es correcta!!');
		}
		else {
			alert('Fecha INCORRECTA!! fecha no valida...');
		}
	}
	else {
		alert('Fecha INCORRECTA!! formato incorrecto...');
	}
}

function comprobarEmail() {

	let re = new RegExp("^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$");
	let email = document.getElementById('email');

	if (re.test(email.value)) {
		alert('Es un email correcto!!!');
	}
	else {
		alert('Pillin NO ES UN EMAIL!!');
	}
}

function comprobarEtiqueta() {
	let re = new RegExp("((<script>).*(<\/script>))");
	let email = document.getElementById('etiqueta');

	if (!re.test(email.value)) {
		alert('No contiene etiquetas maliciosas!!!');
	}
	else {
		alert('Pillin que me la quieres colar!!');
	}
}

function comprobarIban() {

	let re = new RegExp("^[ES]{2}([0-9a-zA-Z]{22})$");
	let iban = document.getElementById('iban');

	if (re.test(iban.value)) {
		alert('Es un Iban correcto!!');
		let p = document.getElementById('texto-iban');
		p.appendChild(document.createTextNode(imprimirIban(iban.value)));
	}
	else {
		alert('Pillin que me la quieres colar!!');
	}
}

function imprimirIban(iban) {

	let resultado = "";
	let contador = 0;
	for (let i=0; i<iban.length; i++) {
		resultado += iban.charAt(i);
		contador++;
		if (contador == 4 && i < iban.length - 1) {
			resultado += '-';
			contador = 0;
		}
	}
	return resultado;
}

 
function esFechaValida(fecha) {

	let fechaAux = fecha.split('/');
	let continuar = false;

	//Máximo 31 días
	if (fechaAux[1] == 1 ||
			fechaAux[1] == 3 ||
			fechaAux[1] == 5 ||
			fechaAux[1] == 7 ||
			fechaAux[1] == 8 ||
			fechaAux[1] == 10 ||
			fechaAux[1] == 12) {

		if ((fechaAux[0] > 0 && fechaAux[0] <= 31) &&
				fechaAux[0].length === 2) {
			continuar = true;
		}
	}
	//Máximo 30 dias
	else if (fechaAux[1] == 1 ||
					 fechaAux[1] == 4 ||
					 fechaAux[1] == 6 ||
					 fechaAux[1] == 9 ||
					 fechaAux[1] == 11) {
		console.log('entra 30');
		if ((fechaAux[0] > 0 && fechaAux[0] <= 30) &&
				fechaAux[0].length === 2) {
			continuar = true;
		}
	}
	//Si es bisiesto el dia tiene máximo 29, si no 28
	else if (fechaAux[1] == 2 &&
						fechaAux[0].length === 2) {

		//Comprueba si el año es bisiesto, un año bisiesto 
		//es divisible por 4 y por 400, pero no por 100.
		if (((fechaAux[2] % 4 == 0) && 
				 (fechaAux[2] % 100 != 0)) || (fechaAux[2] % 400 == 0)) {
			if ((fechaAux[0] > 0 && fechaAux[0] <= 29)) {
				console.log('es bisiesto');
				continuar = true;
			}
		}
		else {
			if (fechaAux[0] > 0 && fechaAux[0] <= 28) {
				console.log('No bisiesto');
				continuar = true;
			}
		}
	}

	//comprueba que el més sea correcto.
	if (!((fechaAux[1] > 0 && fechaAux[1] <= 12) &&
				 fechaAux[1].length === 2 && continuar)) {
		continuar = false;
	}

	//Comprueba que el año sea crrecto.
	if (Array.isArray(fechaAux) && fechaAux.length > 2 && !(fechaAux[2].length === 4 && continuar)) {
		continuar = false;
	}

	if (continuar) {
		return true;
	}
	else {
		return false;
	}
}


function libValidarNif(nif) {

	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
				  'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
				  'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var numero;
	var letra;
	var letraCorrecta;

	if (nif.length != 9) {
		return false;
	}
		
	numero = nif.substring(0, 8);
	letra = nif.substring(8, 9).toUpperCase();
	letraCorrecta = letras[numero % 23];

	if (letra != letraCorrecta) {
		return false;
	}

	return true;
}