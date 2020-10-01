var numero;
var arrayBidimensional = [
	[],
	[],
	[],
	[]
];
var indiceColumna = 1;

for (let i=0; i<arrayBidimensional.length - 1; i++) {
	
	while (arrayBidimensional[i].length !== 4) {
		numero = prompt('Introduce el número de la fila ' +
						 (i+1) + ' de la columna ' + indiceColumna);

		if (!isNaN(numero)) {
			arrayBidimensional[i].push(parseInt(numero));
			indiceColumna++;
		}
	}
	
	indiceColumna = 1;
}

console.table(arrayBidimensional);

calcularResultados();

imprimirResultado();

function calcularResultados() {

	let sumaColumnas;
	let sumaFilas;
	
	for (let i=0; i<arrayBidimensional.length - 1; i++) {
		sumaColumnas = 0;
		
		
		for (let z=0; z<arrayBidimensional[i].length; z++) {
			sumaColumnas += arrayBidimensional[i][z];
		}

		arrayBidimensional[i].push(sumaColumnas);
	}

	for (let i=0; i<arrayBidimensional[0].length; i++) {
		sumaFilas = 0;

		for (let z=0; z<arrayBidimensional.length - 1; z++) {
			sumaFilas += arrayBidimensional[z][i];
		}

		arrayBidimensional[arrayBidimensional.length - 1].push(sumaFilas);
	}
}

function imprimirResultado() {

	let table = document.createElement('table');

	for (let row of arrayBidimensional) {
		table.insertRow();

		for (let cell of row) {
			let newCell = table.rows[table.rows.length - 1].insertCell();
			let emptyCell = table.rows[table.rows.length - 1].insertCell();
			newCell.textContent = cell;
			emptyCell.textContent = "-----";
		}
	}

	document.body.appendChild(table);
}
