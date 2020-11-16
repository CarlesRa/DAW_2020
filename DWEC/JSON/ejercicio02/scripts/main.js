var gustos = document.getElementsByName('gusto');

function validarFormulario() {

	let nombre = document.forma.nombre;
	let apellido = document.forma.apellido;
	let dni = document.forma.dni;
	let email = document.forma.email;
	let isFormOk = true;
	
	if (!validarNombre(nombre.value)) {
		isFormOk = false;
	}
	else if (!validarApellido(apellido.value)) {
		isFormOk = false;
	}
	else if (!validarDni(dni.value)) {
		isFormOk = false;
	}
	else if (!validarEmail(email.value)) {
		isFormOk = false;
	}
	else if (!libValidarCheckBox(gustos)) {
		isFormOk = false;
	}

	if (isFormOk) {
		let formObject = {
			nombre, apellido, dni, email, gustos
		};
		formObject.nombre = nombre.value;
		formObject.apellido = apellido.value;
		formObject.dni = dni.value;
		formObject.email = email.value;
		formObject.gustos = new Array();

		gustos.forEach(gusto => {

			if (gusto.checked) {
				formObject.gustos.push(gusto.value);
			}
		});

		localStorage.setItem('formulario', JSON.stringify(formObject));
	}
	return isFormOk;

}

function recuperarFormulario() {
	if (localStorage.getItem('formulario')) {
		formObject = JSON.parse(localStorage.getItem('formulario'));
		nombre.value = formObject.nombre;
		apellido.value = formObject.apellido;
		dni.value = formObject.dni;
		email.value = formObject.email;

		gustos.forEach(gusto => {
			
			formObject.gustos.forEach(value => {
				if (gusto.value == value) {
					gusto.checked = true;
				}
			});
		});
	}
	else {
		alert('No hay datos guardados!!');
	}
}

function borrarStorage() {
	if (localStorage.getItem('formulario')) {
		localStorage.clear();
	}
}

function validarNombre(value) {

	let p = document.getElementById('pNombre');

	if (!libValidarCampoTexto(value)) {

		if (p.children.length > 2) {
			p.removeChild(p.lastChild);
		}
		
		let span = document.createElement('span');
		let texto = document.createTextNode('El nombre es obligatorio...');
		span.appendChild(texto);
		span.style.color = 'red';
		p.appendChild(span);

		return false;
	}
	else {
		if (p.children.length > 2) {
			p.removeChild(p.lastChild);
		}
		return true;
	}
}

function validarApellido(value) {

	let p = document.getElementById('pApellido');

	if (!libValidarCampoTexto(value)) {
		
		if (p.children.length > 2) {
			p.removeChild(p.lastChild);
		}

		let span = document.createElement('span');
		let texto = document.createTextNode('El apellido es obligatorio...');
		span.appendChild(texto);
		span.style.color = 'red';
		p.appendChild(span);

		return false;
	}
	else {
		if (p.children.length > 2) {
			p.removeChild(p.lastChild);
		}
		return true;
	}
}

function validarDni(value) {
	let p = document.getElementById('pDni');

	if (!libValidarNif(value)) {

		if (p.childNodes.length > 2) {
			p.removeChild(p.lastChild);
		}

		let span = document.createElement('span');
		let texto = document.createTextNode('DNI incorrecto...');
		span.appendChild(texto);
		span.style.color = 'red';
		p.appendChild(span);
		return false;
	}
	else {
		if (p.children.length > 2) {
			p.removeChild(p.lastChild);
		}
		return true;
	}
}

function validarEmail(value) {
	let p = document.getElementById('pEmail');

	if (!libEsEmail(value)) {
		let span = document.createElement('span');
		let texto = document.createTextNode('Email incorrecto...');

		if (p.childNodes.length > 4) {
			p.removeChild(p.lastChild);
		}

		span.appendChild(texto);
		span.style.color = 'red';
		p.appendChild(span);
		return false;
	}
	else {
		console.log(p.childNodes.length);
		if (p.childNodes.length > 4) {
			p.removeChild(p.lastChild);
		}
		return true;
	}
}