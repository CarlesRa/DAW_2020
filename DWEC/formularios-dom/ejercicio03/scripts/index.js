function cambiarColores() {

	const parrafos = document.getElementById("parrafos").children;
	
	for (let i=0; i<parrafos.length; i++) {

		if (i % 2 === 0) {
			parrafos[i].style.backgroundColor = "green";
		}
		else {
			parrafos[i].style.backgroundColor = "blue";
		}
	}

}