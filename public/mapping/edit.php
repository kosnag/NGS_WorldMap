<!DOCTYPE html>
<html>
  	<head>
		<title>PSO2NGS Interactive Map | MAPPING MODE</title>

		<meta charset="utf-8"/>

		<link rel="stylesheet" href="style.css" />
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
		
		<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
	</head>
	<body>
		<ngsmap-mapping-edit>
			<container>
				<window>
					<header>
						<span><menuicon></menuicon> Login</span>
					</header>
					<content>
						<form method="post">
							<div>ID:</div>
							<border></border>
							<input type="text" required></input>
							<br>
							<div>Password:</div>
							<border></border>
							<input type="password" required></input>
							<br>
							<buttons>
								<a href="https://map.pso2.ru/">Back</a>
								<a href="https://map.pso2.ru/">Get access</a>
								<button type="submit">Auth</button>
							</buttons>
						</form>
					</content>
				</window>
			</container>
			<map></map>
		</ngsmap-mapping-auth>
		
		<script>
			const formObject = document.getElementsByTagName("form")[0];

			formObject.addEventListener("submit",function(event){
				event.preventDefault();
				console.log(event)
				
				const loginData = {
					"user": event.target[0].value,
					"pass": event.target[1].value
				}

				var request = new XMLHttpRequest;
				request.open("POST","login.php");
				request.send(JSON.stringify(loginData));
			});
		</script>

		<script>
			L.map(document.getElementsByTagName("ngsmap-mapping-edit")[0].getElementsByTagName("map")[0], {
				zoom: 0,
				minZoom: 0,
				maxZoom: 0,
				crs: L.CRS.Simple,
				maxBounds: [[-12288/6-100, 0], [-12288/6/2+250, 12288/6]],
				center: [-12288/6/4*3, 12288/6/2],
				zoomControl: false,
				attributionControl: false,
				keyboard: false,
				maxBoundsViscosity: 0.5,
				layers: [
					L.tileLayer("../assets/images/tiles/{z}/{y}-{x}.png", {
						bounds: [[-12288/6, 0], [0, 12288/6]],
						tileSize: 1024,
						noWrap: true
					})
				]
			});
		</script>
	</body>
</html>