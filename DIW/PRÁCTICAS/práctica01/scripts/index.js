
initListeners();

function initListeners() {
	let irYo = document.getElementById("ir-yo");
	let irAficiones = document.getElementById("ir-aficiones");
	let yo = document.getElementById("yo");


	irYo.addEventListener(
		"click",
		function () {
			let yo = document.getElementById("yo");
			yo.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});

		}
	);

	irAficiones.addEventListener(
		'click',
		function () {
			let aficiones = document.getElementById("aficiones");
			aficiones.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		});

}

