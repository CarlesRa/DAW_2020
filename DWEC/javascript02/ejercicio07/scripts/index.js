var array = new Array(12, "hola", '@#~', 25, "Luis", "a24", 67, new Date().getDate());
var arrayNumerico = [];
var arrayNoNumerico = [];

for (let i=0; i<array.length; i++) {

	if (isNaN(array[i])) {
		arrayNoNumerico.push(array[i]);
	}
	else {
		arrayNumerico.push(array[i]);
	}
}

window.document.write('<h1>Dado el Array:</h1>');
window.document.write('<h2>' + array + '</h2>');

window.document.write('<h2>Numérico: ' + arrayNumerico + '</h2>');
window.document.write('<h2>Alfanumérico: ' + arrayNoNumerico + '</h2>');