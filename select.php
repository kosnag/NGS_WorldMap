<?
if($_SERVER["REQUEST_URI"]=="/select.php")
header("Location: /");

$lang_flag_sel = 'height:32'
?>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>PSO2NGS Interactive Map</title>
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/fontawesome.min.js"></script>
		<link href="css/bootstrap.min.css"rel="stylesheet"/>
		<link href="fontawesome.min.css"rel="stylesheet"/>
		<link rel="icon" href="images/favicon.png" type="image/x-icon"/>
		<script>
		$(document).ready(function(){
			$("#en1").hover(function(){
				$( "title" ).text("PSO2NGS Interactive Map");
				$( "#title" ).text("PSO2NGS Interactive Map");
				$( "#lang" ).text("Choose a language");
			}, function(){});
			$("#en2").hover(function(){
				$( "title" ).text("PSO2NGS Interactive Map");
				$( "#title" ).text("PSO2NGS Interactive Map");
				$( "#lang" ).text("Choose a language");
			}, function(){});
			$("#jp").hover(function(){
				$( "title" ).text("PSO2NGS相互マップ");
				$( "#title" ).text("PSO2NGS相互マップ");
				$( "#lang" ).text("言語を選択する");
			}, function(){});
			$("#ru").hover(function(){
				$( "title" ).text("Интерактивная карта PSO2NGS");
				$( "#title" ).text("Интерактивная карта PSO2NGS");
				$( "#lang" ).text("Выберите язык");
			}, function(){});
			$("#kr").hover(function(){
				$( "title" ).text("PSO2NGS 인터랙티브지도");
				$( "#title" ).text("PSO2NGS 인터랙티브지도");
				$( "#lang" ).text("언어 선택");
			}, function(){});
		});
		</script>
	</head>
	<style>
		.custom-card-body {flex: 1 1 auto;padding: 1rem 1rem;background-color: rgba(0,0,0,0.0);}
		.custom-btn-outline-primary {color: #0d6efd;background-color: rgb(13,110,253,0.20);border-color: #0d6efd}
		.custom-btn-outline-primary:hover {color: #fff;background-color: rgb(13,110,253,0.40);border-color: #0d6efd}
	</style>
	<body style="background:linear-gradient(rgba(0,0,0,0.20),rgba(0,0,0,0.20)),url('images/background_blur.jpg');background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:top;">
		<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">		
			<div class="container">
				<a id="title" class="navbar-brand" href="https://ngs-map.kosnag.ru/">PSO2NGS Interactive Map</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link text-white" target="_blank" href="https://discord.gg/AvgmpuX"><i class="fab fa-discord"></i> Discord</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" target="_blank" href="https://docs.google.com/spreadsheets/d/12lKTrbbyHszz9TTfmvwRlRZe7MLI9nFL8XVAcIkynlU/edit?usp=sharing"><i class="fab fa-google-drive"></i> Google Sheets</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" target="_blank" href="https://github.com/kosnag/NGS_InterMap"><i class="fab fa-github"></i> Github</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container mt-3 position-absolute top-50 start-50 translate-middle">
			<div class="card-header border border-primary rounded">
			<h1 class="card-title text-center text-light"><span id="lang" class="badge bg-primary">Choose a language</span></h1>
			<br>
				<div class="row">
					<div class="col-6 mb-3">
						<a class="card custom-card-body btn custom-btn-outline-primary text-light" id="en1" href="/?lang=en_gl">
							<span>
								<img src="images/flags/usa.svg" style="<? echo $lang_flag_sel;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_sel;?>"><br>English<br>Global
							</span>
						</a>
					</div>
					<div class="col-6 mb-3">
						<a class="card custom-card-body btn custom-btn-outline-primary text-light" id="en2" href="/?lang=en_al">
							<span>
								<img src="images/flags/usa.svg" style="<? echo $lang_flag_sel;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_sel;?>"><br>English<br>Arks-Layer
							</span>
						</a>
					</div>
					<div class="col-12 mb-3">
						<a class="card custom-card-body btn custom-btn-outline-primary text-light" id="jp" href="/?lang=jp">
							<span>
								<img src="images/flags/jp.svg" style="<? echo $lang_flag_sel;?>"><br>日本語
							</span>
						</a>
					</div>
					<div class="col-12 mb-3">
						<a class="card custom-card-body btn custom-btn-outline-primary text-light" id="ru" href="/?lang=ru">
							<span>
								<img src="images/flags/ru.svg" style="<? echo $lang_flag_sel;?>"><br>Русский
							</span>
						</a>
					</div>
					<div class="col-12 mb-3">
						<a class="card custom-card-body btn custom-btn-outline-primary text-light" id="kr" href="/?lang=kr">
							<span>
								<img src="images/flags/kr.svg" style="<? echo $lang_flag_sel;?>"><br>한국어
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>


