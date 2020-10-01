var fechaAComprobar;

while (fechaAComprobar != 0) {

	fechaAComprobar = prompt('Introduce una fecha en formato: dd/mm/aaaa' +
													 '\nSALIR: 0');

	if (fechaAComprobar) {
		if (esFechaValida(fechaAComprobar)) {
			alert(mostrarFecha(fechaAComprobar));
		}
		else {
			alert('La fecha introducida no es valida.');
		}
	}												 
	else {
		fechaAComprobar = 0;
	}
}

function esFechaValida(fecha) {

	let fechaAux = fecha.split('/');
	let continuar = false;

	//Máximo 31 días
	if (fechaAux[1] == 1 ||
			fechaAux[1] == 3 ||
			fechaAux[1] == 5 ||
			fechaAux[1] == 7 ||
			fechaAux[1] == 8 ||
			fechaAux[1] == 10 ||
			fechaAux[1] == 12) {

		if ((fechaAux[0] > 0 && fechaAux[0] <= 31) &&
				fechaAux[0].length === 2) {
			continuar = true;
		}
	}
	//Máximo 30 dias
	else if (fechaAux[1] == 1 ||
					 fechaAux[1] == 4 ||
					 fechaAux[1] == 6 ||
					 fechaAux[1] == 9 ||
					 fechaAux[1] == 11) {
		console.log('entra 30');
		if ((fechaAux[0] > 0 && fechaAux[0] <= 30) &&
				fechaAux[0].length === 2) {
			continuar = true;
		}
	}
	//Si es bisiesto el dia tiene máximo 29, si no 28
	else if (fechaAux[1] == 2 &&
						fechaAux[0].length === 2) {

		//Comprueba si el año es bisiesto, un año bisiesto 
		//es divisible por 4 y por 400, pero no por 100.
		if (((fechaAux[2] % 4 == 0) && 
				 (fechaAux[2] % 100 != 0)) || (fechaAux[2] % 400 == 0)) {
			if ((fechaAux[0] > 0 && fechaAux[0] <= 29)) {
				console.log('es bisiesto');
				continuar = true;
			}
		}
		else {
			if (fechaAux[0] > 0 && fechaAux[0] <= 28) {
				console.log('No bisiesto');
				continuar = true;
			}
		}
	}

	//comprueba que el més sea correcto.
	if (!((fechaAux[1] > 0 && fechaAux[1] <= 12) &&
				 fechaAux[1].length === 2 && continuar)) {
		continuar = false;
	}

	//Comprueba que el año sea crrecto.
	if (!(fechaAux[2].length === 4 && continuar)) {
		continuar = false;
	}

	if (continuar) {
		return true;
	}
	else {
		return false;
	}
}

function mostrarFecha(fechaAMostrar) {

	const DIAS = new Array("Domingo", "Lunes", "Martes", "Miercoles", 
											 "Jueves", "Viernes", "Sabado");
	
	const MESES = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
												"Junio", "Julio", "Agosto", "Septiembre", "Octubre",
												"Noviembre", "Diciembre");	
	
												
	let ultimoDia;

	let dia = parseInt(fechaAMostrar.substring(0, 3));
	let mes = parseInt(fechaAMostrar.substring(3, 5));
	let anyo = parseInt(fechaAMostrar.substring(6, fechaAMostrar.length));											

	let fecha = new Date(anyo, mes - 1, dia);

	ultimoDia = new Date(anyo, mes, 0).getDate();

	return DIAS[fecha.getDay()] + ', ' + fecha.getDate() +
				 ' de ' + MESES[fecha.getMonth()] + ' de ' + fecha.getFullYear() + 
				 '\n El primer dia del mes era: ' + DIAS[new Date(anyo, mes - 1, 01).getDay()] +
				 '\n El último dia del mes era: ' + DIAS[new Date(anyo, mes - 1, ultimoDia).getDay()];
}