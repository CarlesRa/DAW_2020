function cargarJSON() {
	fetch("ciclos.json")
		.then(response => response.json())
		.then(json => pintarJson(json));
}

function pintarJson(file) {
	let ciclos = file;

	let ul = document.getElementById('lista');

	ciclos.forEach(ciclo => {
		let li = document.createElement('li');
		let text = document.createTextNode(ciclo.curso + ' - ' + ciclo.descripcion);
		li.appendChild(text);
		ul.appendChild(li);
	});
}