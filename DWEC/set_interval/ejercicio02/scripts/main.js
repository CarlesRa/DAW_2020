const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
	"Velit modi eligendi sequi error incidunt illo ratione eum suscipit facere laudantium "+
	"deserunt libero dolorem ea iusto, quae officiis doloribus dolore corporis." +
	"Lorem ipsum dolor sit amet consectetur adipisicing elit." +
	"Velit modi eligendi sequi error incidunt illo ratione eum suscipit facere laudantium "+
	"deserunt libero dolorem ea iusto, quae officiis doloribus dolore corporis.";

	
	var i = 0;
	var velocidad = 50;
	
	escribirTexto();

function escribirTexto () {	

	if (i < texto.length) {

		document.getElementById('texto').innerHTML += texto.charAt(i);
		i++;
		setTimeout(escribirTexto, velocidad);
	}
	
}

function incrementarVelocidad() {
	velocidad -= 10;
}

function reducirVelocidad() {
	velocidad += 10;
}