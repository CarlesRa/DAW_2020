var ciudadesArray;
var arrayAux = new Array();
var lista = document.getElementById('mostrar');

getFile();

function getFile() {

	let xhttp = new XMLHttpRequest();

	xhttp.addEventListener('load', cargarContenido, false);
	xhttp.open("GET", './ciudades.txt', true);
	xhttp.send();

}

function buscarCoincidencia(termino) {

	if (ciudadesArray.length > 0 && termino.length > 0) {

		ciudadesArray.forEach(ciudad => {

			if (ciudad.indexOf(termino.toUpperCase()) != -1) {
				if (arrayAux.indexOf(ciudad) == -1) {

					arrayAux.push(ciudad);
				}
			}
			else {

				if (arrayAux.indexOf(ciudad) != -1) {

					arrayAux.splice(arrayAux.indexOf(ciudad), 1);
				}
			}
			imprimirCiudades(arrayAux);
		});
	}
	else 
		lista.innerHTML = '';
}

function imprimirCiudades(ciudades) {

	lista.innerHTML = '';

	ciudades.forEach(ciudad => {

		let li = document.createElement('li');
		li.appendChild(document.createTextNode(ciudad));
		lista.appendChild(li);
	});
}

function cargarContenido() {

	ciudadesArray = this.response.split(';'); 
}



