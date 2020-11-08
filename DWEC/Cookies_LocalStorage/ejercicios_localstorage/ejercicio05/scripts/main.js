const nombre = document.forma.nombre;
const apellido = document.forma.apellido;
const dni = document.forma.dni;
const email = document.forma.email;
const gustos = document.forma.gustos;

function guardar() {

	let isOk = true;

	if (!validarNombre(nombre)) {
		isOk = false;
	}
	else if (!validarApellido(apellido)) {
		isOk = false;
	}
	else if (!validarDni(dni)) {
		isOk = false;
	}
	else if (!validarEmail(email)) {
		isOk = false;
	}
	else if (!validarGustos(gustos)) {
		isOk = false;
	}

	if (!isOk) {
		return isOk;
	}
	else {
		let arrGustos = new Array();

		gustos.forEach(gusto => {
			if (gusto.checked) {
				arrGustos.push(gusto.value);
			}
		});
		
		localStorage.setItem('nombre', nombre.value);
		localStorage.setItem('apellido', apellido.value);
		localStorage.setItem('dni', dni.value);
		localStorage.setItem('email', email.value);
		localStorage.setItem('gustos', arrGustos);
		
		return isOk;
	}
}

function recuperar() {
	
	let values = localStorage;

	if (values.length <= 0) {
		alert('No hay datos almacenados');
		return false;
	}
	nombre.value = localStorage.getItem('nombre');
	apellido.value = localStorage.getItem('apellido');
	dni.value = localStorage.getItem('dni');
	email.value = localStorage.getItem('email');

	let gustosFromStorage = localStorage.getItem('gustos').split(',');

	gustos.forEach(gusto => {

		gustosFromStorage.forEach(value => {

			if (gusto.value == value) {
				gusto.checked = true;
			}
		});
	});
}

function borrar() {
	let values = localStorage;

	if (values.length <= 0) {
		alert('No hay datos almacenados');
		return false;
	}
	
	localStorage.clear();
	document.forma.reset();
}

function validarNombre(nombre) {

	if (nombre.value.length < 3) {
		nombre.required = true;
		document.getElementById("error-nombre")
			.innerHTML = "Debe introducir mínimo 3 caracteres...";
		
		nombre.focus();
		return false;
	}
	else {
		nombre.required = false;
		document.getElementById("error-nombre").innerHTML = "";
		return true;
	}
	
}

function validarApellido(apellido) {

	if (apellido.value.length < 3) {
		apellido.required = true;
		document.getElementById("error-apellido")
			.innerHTML = "Debe introducir mínimo 3 caracteres...";
		
		apellido.focus();
		return false;
	}
	else {
		apellido.required = false;
		document.getElementById("error-apellido").innerHTML = "";
		return true;
	}
}

function validarDni(nif) {

	
	label = document.getElementById('error-dni');

	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
								'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
								'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let numero;
	let letra;
	let letraCorrecta;

	if (nif.value.length < 9) {
		label.innerHTML = 'Mínimo 9 caracteres...';
		dni.required = true;
		dni.focus();
		return false;
	}
	label.innerHTML = '';
	numero = nif.value.substring(0, 8);
	letra = nif.value.substring(8, 9).toUpperCase();
	letraCorrecta = letras[numero % 23];

	if (letra != letraCorrecta) {
		label.innerHTML = 'La letra no es correcta...';
		dni.required = true;
		dni.focus();
		return false;
	}
	dni.required = false;
	return true;
}

function validarEmail(email) {

	let label = document.getElementById('error-email');
	let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

	if (!regexEmail.test(email.value)) {
		email.required = true;
		email.focus();
		label.innerHTML = 'Introduce una dirección correcta...';
		return false;
	}
	email.required = false;
	label.innerHTML = '';
	return true;
}

function validarGustos(gustos) {

	let label = document.getElementById('error-gustos');
	let contador = 0;

	gustos.forEach(gusto => {
		if (gusto.checked) {
			contador++;
		}
	});

	if (contador == 0) {
		label.innerHTML = 'Seleccione almenos 1 opción';
		return false;
	}
	label.innerHTML = '';
	return true;
}