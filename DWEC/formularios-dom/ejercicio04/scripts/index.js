const FRASE ="Dato nº: ";
var datos = [];

addFila();

function addFila() {

	datos.push(FRASE);
	
	let fila = document.createElement("li");
	let contenido = document.createTextNode(FRASE + datos.length);

	fila.appendChild(contenido);
	document.getElementById("lista").appendChild(fila);
}	

function removeFila() {

	if (datos.length === 1) {
		alert("La lista no puede quedar sin datos");
		return false;
	}

	const ELEMENTOS_LISTA = document.getElementById("lista").children;
	const filaAEliminar = ELEMENTOS_LISTA[datos.length - 1];
	filaAEliminar.parentNode.removeChild(filaAEliminar);

	datos.length = datos.length - 1;


}