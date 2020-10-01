const NOTAS_A_PEDIR = 3;
var nombreAlumno;
var notas = [];
var continuar = false;
var notaMedia;

pedirNombre();
pedirNotas();
notaMedia = calcularMedia(); 
console.log(notaMedia);
imprimirResultado(notaMedia);

function pedirNombre() {
	do {
		nombreAlumno = prompt('Introduzca el nombre del Alumno');
		if (nombreAlumno != null && 
				nombreAlumno !== '' &&
				isNaN(nombreAlumno)) {
			continuar = true;
		}
	} while(!continuar);
}

function pedirNotas() {

	for(let i=0; i<NOTAS_A_PEDIR; i++) {

		continuar = false;
		let nota = 0;
	
		while(!continuar) {
	
			nota = prompt('Introduzca la nota ' + (i+1));
			if (nota != null && 
					!isNaN(nota) &&
					nota >= 0 && 
					nota <= 10) {
				notas.push(parseInt(nota));
				console.log('entra if nota');
				continuar = true;
			} else {
				alert('Introduzca una nota valida de 0 a 10');
			}
		}
	}
}

function calcularMedia() {
	let sumaNotas = 0;

	for(let i=0; i<notas.length; i++) {
		sumaNotas += notas[i];
	}
	return (sumaNotas / notas.length);
}

function imprimirResultado(notaMedia) {

	window.document.writeln('<h1>' + nombreAlumno + 
				 ' ha sacado una nota media de ' +
					(notaMedia).toFixed(1));

	if (notaMedia >= 7) {
		window.document.write(': Promociona');
	} else {
		window.document.write(': NO promociona');
	}
}
