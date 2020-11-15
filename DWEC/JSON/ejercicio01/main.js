/* 
$.getJSON("ciclos.json", function(json) {
	console.log(json); 
});
 */

fetch("ciclos.json")
.then(response => response.json())
.then(json => console.log(json));

var ciclos = [
	{"curso":"SMR","descripcion":"Sistemas microinformáticos y redes"}, 
	{"curso":"ASIR","descripcion":"Administración de sistemas informáticos y redes"},                  
	{"curso":"DAW","descripcion":"Desarrollo de aplicaciones web"},
	{"curso":"DAM", "descripcion":"Desarrollo de aplicaciones multiplataforma"}
];