<?php
include "mysql.php";

switch ($_GET["DELETED"]){
	case "DELETED":
		$mysql->query("delete from other__alphareactor");
		$mysql->query("delete from mineral__photonscale");
		break;
	case "DELETED":
		$mysql->query("delete from mineral__randomite");
		break;
	default:
		header("Location: https://map.pso2.ru/");
}