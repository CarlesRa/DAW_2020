const MONEDAS = [500, 200, 100, 50, 20, 10, 5 , 2, 1];
var cantidadDinero; //almacenamos la cantidad de monedas
var continuar = false;

do {

	cantidadDinero = prompt('Introduzca una cantidad de dinero\n' + 
													'SALIR: 0');

	if (!isNaN(cantidadDinero) &&  
			cantidadDinero.length > 0 && 
			cantidadDinero != '') {
				
		continuar = true;
	}

} while(!continuar);

if (continuar) {
	descomponerDinero(cantidadDinero);
}

function descomponerDinero(cantidad) {

	let contador;
	let cantidadEntera = parseInt(cantidad);


	for (let i=0; i<MONEDAS.length; i++) {

		contador = 0;

		while ((cantidadEntera - MONEDAS[i]) >= 0) {
			cantidadEntera -= MONEDAS[i];
			contador++;
		}

		if (contador > 0) {
			imprimirResultado(MONEDAS[i], contador);
		}
	}
}

function imprimirResultado(billete, contador) {
	window.document.write('<h2><li>La cantidad de ' + billete + '€: ' + 
								   contador + '</li></h2>');
}