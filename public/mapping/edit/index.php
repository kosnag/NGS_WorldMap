<?php
include "../api/mysql.php";

$query = $mysql->query("select session from kosnag_map.".$datatables["auth"]["sessions"]." where session='".$_COOKIE["session"]."' ");
$session_check = $query->fetch_assoc();
if (!isset($session_check["session"])){
    header("Location: /mapping");
}
?>
<!DOCTYPE html>
<html>
  	<head>
		<title>PSO2NGS Interactive Map | MAPPING MODE</title>
		<meta charset="utf-8"/>
		<link rel="stylesheet" href="edit/style.css"/>
		<link rel="stylesheet" href="cursor/style.css"/>
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
	</head>
	<body>
		<ngsmap-mapping-edit><map></map></ngsmap-mapping-edit>
		<script src="edit/map.js"></script>
		<script src="edit/popup.js"></script>
		<script src="edit/markers.js"></script>
	</body>
</html>