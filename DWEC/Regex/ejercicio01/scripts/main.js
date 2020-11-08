const regexComprobarEntero = /^[0-9]+$/;
const regexComprobarDni = /^[0-9]{8}[a-z]$/gi
const regexComprobarMatriculaCoche = /^[0-9]{4}[a-z]{3}$/gi
const regexComprobarTwitter = /(^@)([a-z 0-9 \- _])+$/gi;
const regexComprobarFormatoFecha = /(\d{2}[/]\d{2}[/]\d{4}$)/;
const regexComprobarEmail = /([a-z \- _ 0-9])@([\\.])([a-z]{2,3}$)/i;
const regexEliminarMalicioso =/((<script>).*(<\/script>))/;
const regexComprobarIban = /^(ES)(\d{22}$)/;
const regexSepararDigitosIban = /\d{4}/;
/* ([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10}) */
var aux = "ES1111111111111111111111";

if (regexComprobarIban.test(aux)) {
	console.log('si');
	console.log(separarIban(aux));
}
else {
	console.log('no');
}

function separarIban(iban) {

	let resultado = "";
	let contador = 0;

	for (let i=0; i<iban.length; i++) {

		resultado += iban.charAt(i);
		contador++;

		if (contador == 4 && i < iban.length - 1) {
			resultado += '-';
			contador = 0;
		}
	}
	return resultado;
}