var imgContainer = document.getElementById('ffac');
var dniInput = document.getElementById('dni');
var refInput = document.getElementById('ref');
var precioInput = document.getElementById('precio');
var cantidadInput = document.getElementById('cantidad');
var textDniError = document.createElement('span');
var textCantidadError = document.createElement('span');
var tabla = document.getElementById('lineas');
var tBodyTabla = document.createElement('tbody');
var datosTabla = new Array();
var hijos = new Array();

/**
 * Función para controlar el doble click sobre
 * la imagen de fruta
 * @param {el id de la fruta} idFruta 
 */
function frutaSeleccionada(idFruta) {
	
	const fruta = document.getElementById(idFruta);
	const imgElement = document.createElement('img');

	imgElement.src = "imagenes/" + idFruta + ".jpg";
	
	if (imgContainer.children.length > 0) {
		imgContainer.removeChild(imgContainer.children[0]);
	}

	imgContainer.appendChild(imgElement); 
	refInput.value = idFruta;
	precioInput.value = fruta.innerText.split(" ")[2].substring(0, 1);
	dniInput.focus();
}

/**
 * función para validar el formulario y
 * lanzar el metodo de insertarFruta cuando OK
 */
function validarFormulario() {
	const dni = document.miform.dni.value;
	const cantidad = document.miform.cantidad.value;
	const ref = document.miform.ref.value;
	const precio = document.miform.precio.value;
	let isOk = true;
	let total;

	if (!validarProductoSeleccionado(ref, precio)) {
		isOk = false;
	}
	else {
		if (!validarDni(dni)) {
			isOk = false;
		}
		if (!validarCantidad(cantidad)) {
			isOk = false;
		}
	}

	if (isOk) {

		total = parseFloat(precio) * parseFloat(cantidad);

		let datosFuta = [
			dni, ref, precio, cantidad, total.toFixed(2)
		];

		insertarProudctoFactura(datosFuta);
		removerCamposForm();
	}
	return isOk;
}

function validarDni(nif) {

	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
								'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
								'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	let numero;
	let letra;
	let letraCorrecta;

	if (nif.length != 9) {
		errorDni();
		return false;
	}
		
	numero = nif.substring(0, 8);
	letra = nif.substring(8, 9).toUpperCase();
	letraCorrecta = letras[numero % 23];

	if (letra != letraCorrecta) {
		errorDni();
		return false;
	}
	
	dniOk();
	return true;
}

function validarCantidad(cantidad) {
	if (!isNaN(parseInt(cantidad))) {
		cantidadOk();
		return true;
	}
	else {
		errorCantidad();
		return false;
	}
		
}

function validarProductoSeleccionado(ref, precio) {

	if (ref.length == 0 || precio.length == 0) {
		alert('Debe seleccionar una fruta!!');
		return false;
	}
	else 
		return true;
}

/**
 * función para mostrar un mensaje de error 
 * en el campo dni
 */
function errorDni() {

	let textSpan;
	
	
	if (dniInput.children.length > 0) {
		textDniError.remove();
		textDniError = document.createElement('span');
	}
	textSpan = document.createTextNode('Introduce un Dni valido...');
	textDniError.appendChild(textSpan);
	textDniError.style.color = "red";
	textDniError.style.marginLeft = "25%";
	dniInput.appendChild(document.createElement('br'));
	dniInput.after(textDniError);
	dniInput.focus();
}

/**
 * elimina el mensaje de error del campo dni
 */
function dniOk() {
	if (dniInput.children.length > 0) {
		textDniError.remove();
	}
}

/**
 * función para mostrar un mensaje de error 
 * en el campo cantidad
 */
function errorCantidad() {

	let text;

	if (cantidadInput.children.length > 0) {
		textCantidadError.remove();
		textCantidadError = document.createElement('span');
	}
	text = document.createTextNode('Solo se aceptan números...');
	textCantidadError.appendChild(text);
	textCantidadError.style.color = "red";
	textCantidadError.style.marginLeft = "50%";
	textCantidadError.appendChild(document.createElement('br'))
	cantidadInput.appendChild(document.createElement('br'));
	cantidadInput.after(textCantidadError); 
	cantidadInput.focus();
}

/**
 * elimina el mensaje de error del campo cantidad
 */
function cantidadOk() {
	if (cantidadInput.children.length > 0) {
		textCantidadError.remove();
	}
}

/**
 * Resetea el formulario y la imagen
 */
function removerCamposForm() {
	imgContainer.removeChild(imgContainer.firstChild);
	document.miform.reset();
}

/**
 * Función para insertar una fruta en la tabla
 * @param {Array con los datos a insertar} datosFruta 
 */
function insertarProudctoFactura(datosFruta) {

	
	let tR = document.createElement('tr');
	
	datosFruta.forEach(dato => {

		let tD = document.createElement('td');
		let text = document.createTextNode(dato);
		tD.appendChild(text);
		tR.appendChild(tD);
	});
	
	let button = document.createElement('button');
	button.style.backgroundColor = 'black';
	button.textContent = 'Borrar';
	button.style.color = 'white';
	
	button.addEventListener('click', function() {
		borrarProductoFila(tR);
	});
	
	tR.appendChild(button);
	tBodyTabla.appendChild(tR);
	tabla.appendChild(tBodyTabla);
	
	calcularTotal();
}

/**
 * función que calcula el total de la factura 
 * y lo inserta.
 */
function calcularTotal() {

	const total = document.getElementsByClassName('total');
	let totalFactura = 0;

	for (let i=0; i<tBodyTabla.childNodes.length; i++) {
		totalFactura += 
			parseFloat(tBodyTabla.childNodes[i].childNodes[4].textContent);
	}

	total[0].textContent = totalFactura.toFixed(2);
}

function borrarProductoFila(element) {

	element.remove();
	calcularTotal();
}

/**
 * función que guarda la factura en el localstorage
 * como un array
 */
function almacenarFactura() {
	
	let cantidadProductos = tBodyTabla.childNodes.length;

	if (cantidadProductos > 0) {

		for (let i=0; i<tBodyTabla.childNodes.length; i++) {
			let hijo = new Array();
			for (let z=0; z<tBodyTabla.childNodes[i].childNodes.length - 1; z++) {
				hijo.push(tBodyTabla.childNodes[i].childNodes[z].textContent);
			}
			hijos.push(hijo);
		}
		
		for (let i=0; i<cantidadProductos; i++) {
			tBodyTabla.childNodes[0].remove();
		}
	
		calcularTotal();
	
		//SALVAR LA FACTURA CON AJAX
		let ajax = new XMLHttpRequest();
		ajax.open("POST", 'fileUpload.php', true);
		ajax.setRequestHeader("Content-Type", "application/json");
		ajax.addEventListener('readystatechange', mostrarEstados, false);
		let data = JSON.stringify(hijos);
		ajax.send(data);
	}
	else {
		alert('No hay productos en el carrito!!!');
	}
}

/**
 * Lanzo la alerta si se ha guardado con éxito.
 */
function mostrarEstados() {
	if (this.readyState === 4 && this.status === 200) {
		alert('Factura guardada con éxito');
	}
}


/**
 * función que recupera la factura y 
 * llama al metodo de cargar en la
 */
function recuperarFactura() {
	/* Reseteo el array para poder añadir más productos 
	a la factura ya existente */
	hijos = new Array(); 

	if (tBodyTabla.childNodes.length > 0) {
		alert('Ya existe una tabla cargada!!');
	}
	else {
		//RECUPERAR CON AJAX
		let ajax = new XMLHttpRequest();
		ajax.addEventListener('load', facturaRecuperada, false);
		ajax.open("GET", "./factura/factura.json", true);
		ajax.send();
	}
}

/**
 * Función que se dispara cuando se recupera la factura
 */
function facturaRecuperada() {
	console.log("Entra recuperadafactura: " + this.response);
	let productos = JSON.parse(this.response);
	productos.forEach(producto => {
		insertarProudctoFactura(producto);
	});
}