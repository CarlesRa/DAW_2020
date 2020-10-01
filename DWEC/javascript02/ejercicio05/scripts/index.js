var frase;

while (frase != 0) {

	frase = prompt('Introduzca una frase\nSALIR: Pulse 0');

	if (frase != 0) {
		if (frase == null) {
			frase = 0;
		}
		else if (esPalindromo(frase)) {
			alert('La frase: ' + frase + ': \n**¡¡ES UN PALÍNDROMO!!**');
		} 
		else {
			alert('La frase: ' + frase + ' NO es un palíndromo');
		}
	}
}

function esPalindromo(frase) {
	
	if (frase != null) {

		let fraseAux = frase
										.toLowerCase()
										.replaceAll(/[\. ,:-]+/g, "")
										.normalize("NFD")
										.replace(/[\u0300-\u036f]/g, "");

										console.log(fraseAux);

		let puntero = (fraseAux.length - 1);

		for (let i=0; i<fraseAux.length; i++) {

			if (fraseAux.charAt(i) != fraseAux.charAt(puntero)) {
				return false;
			}
			puntero--;
		}

	return true;
	}
	
}
