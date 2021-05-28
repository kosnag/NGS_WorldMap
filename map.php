<?
if($_SERVER["REQUEST_URI"]=="/map.php")
header("Location: /");

if( $_COOKIE["lang"] !== null )
$lang = $_COOKIE["lang"];
if( $lang !== null )
include_once "lang_packs/" . $lang . ".php";

$lang_flag_style = 'height:24px'
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$localization['UI']['title']?></title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/leaflet.css" rel="stylesheet">
		<link href="css/fontawesome.min.css" rel="stylesheet">
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/leaflet.js"></script>
		<script src="js/fontawesome.min.js"></script>
		<script src="https://vk.com/js/api/openapi.js?169"></script>
		<link rel="icon" href="images/favicon.png" type="image/x-icon">
		<script>
			function change_lang(lang){
				var d = new Date();
				d.setTime(d.getTime() + (24*60*60*365*10));
				var expires = d.toUTCString();
				document.cookie = "lang="+lang+"; expires = "+expires+"; path=/";
				location.href="/";
			}
		</script>
	</head>
	<body style="background:linear-gradient(rgba(0,0,0,0.20),rgba(0,0,0,0.20)),url('images/background.jpg');background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:top;">
		<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgba(0,123,255,0.80);">		
			<div class="container">
				<a class="navbar-brand" href="#"><?=$localization['UI']['title']?></a>
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
						<li class="nav-item dropdown">
							<a class="nav-link text-white dropdown-toggle" href="#" id="langList" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-language"></i> <?=$localization['UI']['languages']['switcher']?></a>
							<ul class="dropdown-menu" aria-labelledby="langList">
								<li><a class="dropdown-item<?=$localization['misc']['lang']['en_gl']?>" href="#" onclick="change_lang('en_gl')"><img src="images/flags/usa.svg" style="<? echo $lang_flag_style;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['en_gl']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['en_al']?>" href="#" onclick="change_lang('en_al')"><img src="images/flags/usa.svg" style="<? echo $lang_flag_style;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['en_al']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['jp']?>" href="#" onclick="change_lang('jp')"><img src="images/flags/jp.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['jp']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['ru']?>" href="#" onclick="change_lang('ru')"><img src="images/flags/ru.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['ru']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['kr']?>" href="#" onclick="change_lang('kr')"><img src="images/flags/kr.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['kr']?></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container alert alert-danger mt-3" role="alert">
			<h4 class="alert-heading">WORK IN PROGRESS <span class="badge bg-danger">SPOILER ALERT</span></h4>
			<p>This interactive map are currently in development. Also something maybe will be a spoiler for <b>Phantasy Star Online 2: New Genesis</b> because used data from datamining.</p>
			<p>When map will be ready, all spoiler content will be hidden from map, don't worry.</p>
			<hr>
			<p class="mb-0">If you want to help me, please contact with me in <a href="https://twitter.com/kosnag" target="_blank" style="">Twitter</a> or <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>">Discord (kosnag#1730)</a>. I will be very happy, if you help me! <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/762945798064570398/827230435662233671/2021-04-01_10-08-46-250_Talim_-_Air.png' height='100'>">Take a hug by Matoi!</a></p>
			<script>var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {return new bootstrap.Tooltip(tooltipTriggerEl)})</script>
		</div>
		<div class="container mb-3">
			<div class="row">
				<div class="col-md-9 col-sm-12">
					<div class="card card-body">
						<center><div style="height:650px;width:auto;background-color:rgba(30,59,90,1.00)" id="map"></div></center>
						<script src="js/map.php?lang=<?php echo $lang;?>"></script>
					</div>
				</div>
				<div class="col-md-3 col-sm-12">
					<div class="card h-100">
						<p class="h4 my-3 text-center"><?=$localization['UI']['sorting']['title']?></p>
						<input type="checkbox" class="btn-check" id="sorting1" autocomplete="off">
							<label class="btn btn-outline-primary d-grid mx-3 gap-2" for="sorting1"><?=$localization['UI']['sorting']['1']?></label><br>
						<input type="checkbox" class="btn-check" id="sorting2" autocomplete="off">
							<label class="btn btn-outline-primary d-grid mx-3 gap-2" for="sorting2"><?=$localization['UI']['sorting']['1']?></label><br>
						<a class="btn btn-primary mb-2 mx-3 disabled"><?=$localization['UI']['sorting']['2']?></a>
						<a class="btn btn-primary mb-2 mx-3 disabled"><?=$localization['UI']['sorting']['3']?></a>
						<a class="btn btn-primary mb-2 mx-3 disabled"><?=$localization['UI']['sorting']['4']?></a>
						<a class="btn btn-primary mb-2 mx-3 disabled"><?=$localization['UI']['sorting']['5']?></a>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-4">
			<div class="card card-body">
				<div class="row">
					<div class="col-md-4 col-sm-12"><div id="vk_groups1"></div></div>
					<div class="col-md-4 col-sm-12"><div id="vk_groups2"></div></div>
					<div class="col-md-4 col-sm-12"><div id="vk_groups3"></div></div>
					<script>
						VK.Widgets.Group("vk_groups1",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},144825795);
						VK.Widgets.Group("vk_groups2",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},200732667);
						VK.Widgets.Group("vk_groups3",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},28920792);
					</script>
				</div>
			</div>
		</div>
		<!--
		redBox
		whiteBox
		goldBox
		alphaReactor:
		datapod
		sautePeach
		sauteBanana
		sauteApple
		sautePear
		sodheTurbanShell
		sodheClam
		sohTurnip
		sohMushroom
		sodheCrab
		sodheLobster
		sohHerb
		sohTomato
		trinite
		dualomite
		photonChunk
		monotite
		photonQuartz
	-->
	</body>
</html>
