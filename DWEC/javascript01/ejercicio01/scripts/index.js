var nombre;
var edad;
var estadoCivil;
var datoCorrecto = false;
var continuar = false;
var pedirDatos = true;

while (pedirDatos) {
	
	nombre = pedirNombre();
	edad = pedirEdad();
	estadoCivil = pedirEstadoCivil();

	if (nombre != null && 
			edad != null && 
			estadoCivil != null) {

			pedirDatos = false;
			alert('Nombre: ' + nombre +
						'\nEdad: ' + edad +
						'\nEstado Civil: ' + estadoCivil);
	} else {
		pedirDatos = 
		window.confirm('No ha introducido todos los datos y no ' + 
									 'se imprimira nada por pantalla, ' + 
									 '¿Desea introducirlos correctamente?');
									 console.log(pedirDatos);
	}
}

function pedirNombre () {

	let dato;

	while (!datoCorrecto && !continuar) {
		
		dato = prompt('Introduzca su nombre:');

		if (isNaN(dato) && dato != null) {
			ponerEnTrue();
		}
		else if (dato == null) {
			continuar = true;
		}
		else {
			alert('Debe introducir un nombre válido,'+
						'no pueden ser números.');
		}
	}
	ponerEnFalse();
	return dato;
}

function pedirEdad () {

	let dato;

	while (!datoCorrecto && !continuar) {
		
		dato = prompt('Introduzca su edad');

		if (!isNaN(dato) && dato != null &&
				dato > 0 && dato < 120) {

			ponerEnTrue();
		}
		else if (dato == null) {
			continuar = true;
		}
		else {
			alert('Debe introducir una edad válida,'+
						'no pueden ser letras.');
		}
	}
	ponerEnFalse();
	return dato;
}

function pedirEstadoCivil() {

	let dato;

	while (!datoCorrecto && !continuar) {
		dato = prompt('Introduzca su estado civil');

		if (dato != null) {

			if (dato.toLowerCase() === 'casado' ||
				dato.toLowerCase() === 'soltero' || 
				dato.toLowerCase() === 'viudo' ||
				dato.toLowerCase() === 'casada' ||
				dato.toLowerCase() === 'soltera' || 
				dato.toLowerCase() === 'viuda') {

				ponerEnTrue();
			} else {
				alert('Debe introducir un estado civil válido,'+
							'introduzca casado/a, soltero/a o viudo/a.');
			}
		}
		else if (dato == null) {
			continuar = true;
		}
	}
	ponerEnFalse();
	return dato;
}

function ponerEnFalse() {
	datoCorrecto = false;
	continuar = false;
}

function ponerEnTrue() {
	datoCorrecto = true;
	continuar = true;
}

