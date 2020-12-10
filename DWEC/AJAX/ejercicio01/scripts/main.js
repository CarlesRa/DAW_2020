var formulario = document.getElementById('forma');
var estados;

function mostrarContenidos() {
	
	let inputBusqueda = document.getElementById('busqueda');
	estados = '';
	if (inputBusqueda.value.length <= 0) {
		alert('Debe introducir una URL!!');
	}
	else {
		getFile(inputBusqueda.value);
	}
}

function getFile(url) {

	let xhttp = new XMLHttpRequest();

	xhttp.addEventListener('readystatechange', estadosPeticion, false);
	xhttp.addEventListener('loadend', codigosEstado, false);
	xhttp.addEventListener('load', cargarContenido, false);

	xhttp.open("GET", url, true);
	xhttp.send();

}


function estadosPeticion() {

	let estadoPeticion = document.getElementById('es-peticion');

	estados += 'Estado ' + filtrarEstados(this.readyState) + '\n';
	console.log(estados);
	estadoPeticion.innerHTML = estados;
}

function codigosEstado() {
	let codEstad = document.getElementById('co-estado');
	codEstad.innerHTML = this.status;
}

function cargarContenido() {
	let zonaTexto = document.getElementById('texto');
	zonaTexto.innerHTML = this.response;
}

function filtrarEstados(estado) {

	switch(estado) {

		case 1:
			return '1: opened';
			break;
		case 2:
			return '2: headers-received';
			break;
		case 3:
			return '3: loading';
			break;
		case 4: 
			return '4: done';
			break;
	}
}



