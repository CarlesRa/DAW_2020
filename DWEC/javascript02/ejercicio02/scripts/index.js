var frase;
var clave;
var contador;
var fraseSplit = [];

frase = prompt('Introduce una frase');
clave = prompt('Introduce la clave a buscar');

window.document.write('<h1>Sin replace</h1>');

window.document.write(reemplazarSinReplace(frase, clave));

function reemplazarSinReplace(frase, clave) {

	let posicion = frase.indexOf(clave);

	while (posicion > -1) {
		subrayar = frase.substring(posicion, posicion + clave.length);
		frase = frase.slice(0, posicion) + ("<u>" + subrayar + "</u>") + frase.slice(posicion + clave.length);
		posicion = frase.indexOf(clave, posicion + (clave.length + 6));
	}
	return frase;
}

window.document.write('<h1>Con replace</h1>');

window.document.write(reemplazarConReplace(frase, clave));


function reemplazarConReplace(frase, clave) {

	const fraseReemplazada = frase.replaceAll(clave, '<u>' + clave + '</u>');

	return fraseReemplazada;
}
