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

		<link rel="stylesheet" href="edit.css" />
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
		
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
	</head>
	<body>
		<ngsmap-mapping-edit>
			<map></map>
		</ngsmap-mapping-edit>
		<script>
			const boundNorth = 0; 
			const boundEast = 12288/6;
			const boundWest = 0;
			const boundSouth = -12288/6;
			const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
			const center = [boundSouth/2, boundEast/2];
			var map = L.map(document.getElementsByTagName("map")[0], {
				zoom: 0,
				minZoom: 0,
				maxZoom: 3,
				crs: L.CRS.Simple,
				maxBounds: bounds,
				center: center,
				zoomControl: true,
				attributionControl: false,
				keyboard: true,
				maxBoundsViscosity: 0.5,
            	doubleClickZoom: false,
				layers: [
					L.tileLayer("../assets/images/tiles/{z}/{y}-{x}.png", {
						bounds: bounds,
						tileSize: 1024,
						noWrap: true
					})
				]
			});


			const popup_content_form = document.createElement("form")
				popup_content_form.setAttribute("method","post");
			
			const popup_content_select = document.createElement("select")
				popup_content_select.addEventListener("change", ()=>{});
				popup_content_form.appendChild(popup_content_select)

			const popup_content_options = [
				{"value":"1", "inner":"1"},
				{"value":"2", "inner":"2"},
				{"value":"3", "inner":"3"},
				{"value":"4", "inner":"4"},
				{"value":"5", "inner":"5"}
			]
			for (let i = 0; i < popup_content_options.length; i++){
				var element = document.createElement("option")
					element.setAttribute("value",popup_content_options[i]["value"])
					element.innerHTML=popup_content_options[i]["inner"]
					popup_content_select.appendChild(element)
			}

			var latlng_cont = document.createElement("div")
				popup_content_form.appendChild(latlng_cont)
			var popup = L.popup();
			function onMapClick(e) {
				latlng_variable = "Lat:"+e.latlng.lat+"<br>"+"Lng:"+e.latlng.lng
				latlng_cont.innerHTML=latlng_variable
				//latlng_cont.innerHTML=e.latlng.toString()
				popup
					.setLatLng(e.latlng)
					.setContent(popup_content_form)
					//.setContent(popup_content_form + e.latlng.toString())
					.openOn(map);
			}
			map.on('click', onMapClick);
		</script>
	</body>
</html>