<?php
include "mysql.php";

switch ($_GET["DELETED"]){
	case "DELETED":
		$mysql->query("delete from other__alphareactor");
		break;
	default:
		header("Location: https://map.pso2.ru/");
}