function comprobarNomofobia() {
	let checkBoxes = document.querySelectorAll('input');
	let contador = 0;
	
	checkBoxes.forEach(function(check) {
		if (check.checked) {
			contador++;
			check.checked = false;
		}
	});

	if (contador < 5) {
		alert('Resultado: En principio no tienes nada de que preocuparte.'+
					'\nConsejo: No tienes nada de que preocuparte.');
	}
	else if (contador == 5 && contador <= 6) {
		alert('Resultado: Empiezas a tener signos de dependencia del móvil.'+
					'\nConsejo: Puedes utilizar técnicas como apagar el móvil cuando no '
					+ 'lo necesitas, cuando duermes, etc.');
	}
	else if (contador > 6 && contador <=8 ) {
		alert('Resultado: Tienes una gran dependencia del móvil.'+
					'\nConsejo: Deberías seguir un plan de desintoxicación del móvil '+
					'como por ejemplo dejar el móvil en casa cuando vas a comprar, '+
					'apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc');
	}
	else if (contador > 8) {
		alert('Resultado: Tus síntomas de dependencia son muy preocupantes.'+
		'\nConsejo: Además de todas las técnicas de los apartados ' +
		'anteriores deberías plantearte un plan de desintoxicación '+
		'del móvil que consista en estar una o dos semanas sin utilizarlo. '+
		'Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional.');
	}
}
