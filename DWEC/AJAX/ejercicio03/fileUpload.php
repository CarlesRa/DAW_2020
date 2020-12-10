<?php 
	header("Content-Type: application/json");

	$v = json_decode(stripslashes(file_get_contents("php://input")));
	//$v = json_decode(stripslashes($_POST["data"]));

	$fp = fopen('./factura/factura.json', 'w');
	fwrite($fp, json_encode($v));
?>