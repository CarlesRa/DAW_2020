
function unCheckCheckBox(id) {

	const checkBoxes = 
				document.querySelectorAll("input[type=checkbox]")
		.forEach(x => {
			if (x.id !== id) {
				x.checked = false;
			}
		});
}

function validarFormulario() {
	
	const nombre = document.forma.nombre;
	const direccion = document.forma.direccion;
	const nif = document.forma.nif;
	const fecha = document.forma.fecha;
	const password = document.forma.pass;
	const cpostal = document.forma.cpostal;
	const telefono = document.forma.telefono;
	const email = document.forma.email;
	const cPassword = document.forma.cpass;

	if (!validarNombre(nombre)) {
		return false;
	}
	if (!validarDireccion(direccion)) {
		return false;
	}
	if (!validarNif(nif)) {
		return false;
	}
	if (!validarFecha(fecha)) {
		return false;
	}
	if (!validarCodigoPostal(cpostal)) {
		return false;
	}
	if (!validarTelefono(telefono)) {
		return false;
	}
	if (!validarEmail(email)) {
		return false;
	}
	if (!validarPassword(password)) {
		return false;
	}
	if (!validarConfirmarPassword(cPassword)) {
		return false;
	}

	alert('Formulario enviado correctamente!!');
	return true;
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

function validarDireccion(direccion) {

	if (direccion.value.length < 9) {
		direccion.required = true;
		document.getElementById("error-direccion")
			.innerHTML = "Debe introducir mínimo 9 caracteres...";
		direccion.focus();
		return false;
	}
	else {
		direccion.required = false;
		document.getElementById("error-direccion").innerHTML = "";	
		return true;
	}
	
}

function validarNif(nif) {

	if(libValidarNif(nif.value)) {
		nif.required = false;
		document.getElementById("error-nif").innerHTML = "";
		return true;
	}
	else {
		nif.required = true;
		document.getElementById("error-nif").innerHTML = 
								"Por favor introduce un NIF valido";
		nif.focus();
		return false;
	}
}

function validarFecha(fecha) {

	if (libExisteFecha(fecha.value)) {
		fecha.required = false;
		document.getElementById("error-fecha").innerHTML = "";
		return true;
	}
	else {
		fecha.required = true;
		document.getElementById("error-fecha").innerHTML = 
						 "Introduzca una fecha valida...";
		fecha.focus();
		return false;
	}
}

function validarCodigoPostal(cpostal) {

	if (cpostal.value.length === 5) {
		cpostal.required = false;
		document.getElementById("error-cpostal").innerHTML = "";
		return true;
	}
	else {
		cpostal.required = true;
		document.getElementById("error-cpostal").innerHTML = 
						 "Introduzca un código postal valido...";
		cpostal.focus();
		return false;
	}
}

function validarTelefono(telefono) {

	if (telefono.value.toString().length >= 9) {
		telefono.required = false;
		document.getElementById("error-telefono").innerHTML = "";
		return true;
	}
	else {
		telefono.required = true;
		document.getElementById("error-telefono").innerHTML = 
						 "Introduzca un teléfono valido...";
		telefono.focus();
		return false;
	}
}

function validarEmail(email) {

	if (libEsEmail(email.value)) {
		email.required = false;
		document.getElementById("error-email").innerHTML = "";
		return true;
	}
	else {
		email.required = true;
		document.getElementById("error-email").innerHTML = 
						 "La dirección de correo no es valida...";
		email.focus();
		return false;
	}
}

function validarPassword(passwd) {

	if (passwd.value.length >= 6) {
		passwd.required = false;
		document.getElementById("error-pass").innerHTML = "";
		return true;
	}
	else {
		passwd.required = true;
		document.getElementById("error-pass").innerHTML = 
						 "El password debe contener almenos 6 caracteres....";
		passwd.focus();
		return false;
	}

}

function validarConfirmarPassword(cPassword) {

	const password = document.forma.pass.value;

	if (cPassword.value === password) {
		cPassword.required = false;
		document.getElementById("error-cpass").innerHTML = "";
		return true;
	}
	else {
		cPassword.required = true;
		document.getElementById("error-cpass").innerHTML = 
						 "Las password no coinciden...";
		cPassword.focus();
		return false;
	}
}