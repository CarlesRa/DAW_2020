var numeros = [48, 23, 11, 66, 128, 99, 98, 42, 17, 54, 129, 576, 2, 23];

var resultado = ordenar(numeros);
window.document.write('<h4>' + resultado + '</h4>');

/**
 * Ordena un vector de números pasados como parámetro
 * @param {los números a ordenar} numeros 
 */



function ordenar(numerosAOrdenar) {

	let arrayPares = [];
	let arrayImpares = [];

	for (let i=0; i<numerosAOrdenar.length; i++) {

		if (numeros[i] % 2 == 0) {
			arrayPares.push(numerosAOrdenar[i]);
		}
		else {
			arrayImpares.push(numerosAOrdenar[i]);
		}
	}

	arrayPares.push(arrayImpares);

	return arrayPares;
}

/*  function ordenarNumeros(numeros) {

	const NUMEROS_ORDENADOS = numeros.sort(function(a){

		if (a % 2 == 0) {
			return 1;
		}
		else {
			return -1;
		}
	});

	return NUMEROS_ORDENADOS;
} */