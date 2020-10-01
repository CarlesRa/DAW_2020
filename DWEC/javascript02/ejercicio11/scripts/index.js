var grados = 53;

window.document.write('60º C es ' + celsiusToFahren(60) + 'º F');
window.document.write('<br/>45º F es ' + fahrenToCelsius(45) + 'º C');

function celsiusToFahren(gradosCelsius) {
	return (gradosCelsius * 1.8) + 32;
}

function fahrenToCelsius(gradosFahren) {
	return (gradosFahren -32) * 5/9;
}

