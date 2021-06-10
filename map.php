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
		<link href="css/style.css" rel="stylesheet">
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
	<body class="map">
		<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgba(0,123,255,0.80);">		
			<div class="container">
				<a class="navbar-brand" href="#"><?=$localization['UI']['title']?></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link text-white" target="_blank" href="https://discord.gg/AvgmpuX"><i class="fab fa-discord"></i> <?=$localization['UI']['misc']['discord-contribute']?></a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" target="_blank" href="" data-bs-toggle="modal" data-bs-target="#contributors"><i class="fas fa-hands-helping"></i> <?=$localization['UI']['misc']['contributors']?></a>
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
								<li><a class="dropdown-item<?=$localization['misc']['lang']['en_gl']?>" href="/?lang=en_gl" onclick="change_lang('en_gl')"><img src="images/flags/usa.svg" style="<? echo $lang_flag_style;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['en_gl']?></a></li>
								<li><a class="dropdown-item disabled<?=$localization['misc']['lang']['en_al']?>" href="/?lang=en_al" onclick="change_lang('en_al')"><img src="images/flags/usa.svg" style="<? echo $lang_flag_style;?>"> <img src="images/flags/uk.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['en_al']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['jp']?>" href="/?lang=jp" onclick="change_lang('jp')"><img src="images/flags/jp.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['jp']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['ru']?>" href="/?lang=ru" onclick="change_lang('ru')"><img src="images/flags/ru.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['ru']?></a></li>
								<li><a class="dropdown-item<?=$localization['misc']['lang']['kr']?>" href="/?lang=kr" onclick="change_lang('kr')"><img src="images/flags/kr.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['kr']?></a></li>
								<li><a class="dropdown-item disabled<?=$localization['misc']['lang']['pt']?>" href="/?lang=pt" onclick="change_lang('pt')"><img src="images/flags/pt.svg" style="<? echo $lang_flag_style;?>"> <img src="images/flags/br.svg" style="<? echo $lang_flag_style;?>"> <?=$localization['UI']['languages']['pt']?></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="modal fade" id="contributors" tabindex="-1" aria-labelledby="contributorsLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						...
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container alert alert-danger mt-3" role="alert">
			<h4 class="alert-heading">WORK IN PROGRESS</h4>
			<p>This interactive map are currently in development. I'm waiting NGS release for check information about sections and quests.</p>
			<p>Information on map will updating everyday!</p>
			<hr>
			<p class="mb-0">If you want to help me, please contact with me in <a href="https://twitter.com/kosnag" target="_blank">Twitter</a>, <a href="https://vk.com/kosnag" target="_blank">VK</a> or <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>">Discord (kosnag#1730)</a>. I will be very happy, if you help me! <a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/762945798064570398/827230435662233671/2021-04-01_10-08-46-250_Talim_-_Air.png' height='100'>">Take a hug by Matoi!</a></p>
		</div>
		<div class="container mb-3">
			<div class="row">
				<div class="col-md-9 col-sm-12">
					<div class="card card-body">
						<center><div id="map"></div></center>
					</div>
				</div>
				<div class="col-md-3 col-sm-12">
					<div class="card adaptive-sorting">
						<p class="h4 mt-3 text-center"><?=$localization['UI']['sorting']['header']?></p>
						<div class="card-body bg-transparent justify-content-center">
							<div class="btn-group w-100" role="group">
								<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['sections-switch']?></div>
									<input type="radio" class="btn-check" name="sections" id="sections_On" autocomplete="off">
									<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sections_On"><i class="fas fa-check"></i></label>
									<input type="radio" class="btn-check" name="sections" id="sections_Off" autocomplete="off" checked="">
									<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sections_Off"><i class="fas fa-times"></i></label>
							</div>
						</div>
						<div class="accordion accordion-flush" id="accordion">
							<div class="accordion-item">
								<h2 class="accordion-header" id="accordion1-1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-2" aria-expanded="false" aria-controls="accordion1-2"><?=$localization['UI']['sorting']['mainobjects']['header']?></button>
								</h2>
								<div id="accordion1-2" class="collapse" aria-labelledby="accordion1-1" data-bs-parent="#accordion">
									<div class="accordion-body justify-content-center">
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['CentTower']?></div>
												<input type="radio" class="btn-check" name="centralTower" id="centralTower_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="centralTower_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="centralTower" id="centralTower_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="centralTower_Off"><i class="fas fa-times"></i></label>
										</div>-->
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['Cocoons']?></div>
												<input type="radio" class="btn-check" name="Cocoon" id="Cocoon_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="Cocoon_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="Cocoon" id="Cocoon_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="Cocoon_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['Mags']?></div>
												<input type="radio" class="btn-check" name="Mag" id="Mag_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="Mag_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="Mag" id="Mag_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="Mag_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['RyukerDevices']?></div>
												<input type="radio" class="btn-check" name="RyukerDevice" id="RyukerDevice_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="RyukerDevice_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="RyukerDevice" id="RyukerDevice_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="RyukerDevice_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['Towers']?></div>
												<input type="radio" class="btn-check" name="Tower" id="Tower_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="Tower_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="Tower" id="Tower_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="Tower_Off"><i class="fas fa-times"></i></label>
										</div>
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['mainobjects']['Cities']?></div>
												<input type="radio" class="btn-check" name="City" id="City_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="City_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="City" id="City_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center disabled" for="City_Off"><i class="fas fa-times"></i></label>
										</div>-->
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['mainobjects']['Huts']?></div>
												<input type="radio" class="btn-check" name="Hut" id="Hut_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="Hut_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="Hut" id="Hut_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center disabled" for="Hut_Off"><i class="fas fa-times"></i></label>
										</div>-->
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['mainobjects']['UrgentQuests']?></div>
												<input type="radio" class="btn-check" name="UrgentQuest" id="UrgentQuest_On" autocomplete="off" checked="">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="UrgentQuest_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="UrgentQuest" id="UrgentQuest_Off" autocomplete="off">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="UrgentQuest_Off"><i class="fas fa-times"></i></label>
										</div>
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['mainobjects']['Dungeons']?></div>
												<input type="radio" class="btn-check" name="Dungeon" id="Dungeon_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="Dungeon_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="Dungeon" id="Dungeon_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-cente disabled" for="Dungeon_Off"><i class="fas fa-times"></i></label>
										</div>-->
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="accordion2-1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion2-2" aria-expanded="false" aria-controls="accordion2-2"><?=$localization['UI']['sorting']['boxes']['header']?></button>
								</h2>
								<div id="accordion2-2" class="collapse" aria-labelledby="accordion2-1" data-bs-parent="#accordion">
									<div class="accordion-body justify-content-center">
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['boxes']['redBox']['name']?></div>
												<input type="radio" class="btn-check" name="redBox" id="redBox_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="redBox_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="redBox" id="redBox_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="redBox_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['boxes']['whiteBox']['name']?></div>
												<input type="radio" class="btn-check" name="whiteBox" id="whiteBox_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="whiteBox_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="whiteBox" id="whiteBox_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="whiteBox_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['boxes']['goldBox']['name']?></div>
												<input type="radio" class="btn-check" name="goldBox" id="goldBox_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="goldBox_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="goldBox" id="goldBox_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="goldBox_Off"><i class="fas fa-times"></i></label>
										</div>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="accordion3-1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion3-2" aria-expanded="false" aria-controls="accordion3-2"><?=$localization['UI']['sorting']['food']['header']?></button>
								</h2>
								</h2>
								<div id="accordion3-2" class="collapse" aria-labelledby="accordion3-1" data-bs-parent="#accordion">
									<div class="accordion-body justify-content-center">
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sautePeach']['name']?></div>
												<input type="radio" class="btn-check" name="sautePeach" id="sautePeach_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sautePeach_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sautePeach" id="sautePeach_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sautePeach_Off"><i class="fas fa-times"></i></label>
										</div>
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['food']['sauteBanana']['name']?></div>
												<input type="radio" class="btn-check" name="sauteBanana" id="sauteBanana_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="sauteBanana_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sauteBanana" id="sauteBanana_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center disabled" for="sauteBanana_Off"><i class="fas fa-times"></i></label>
										</div>-->
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sauteApple']['name']?></div>
												<input type="radio" class="btn-check" name="sauteApple" id="sauteApple_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sauteApple_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sauteApple" id="sauteApple_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sauteApple_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sautePear']['name']?></div>
												<input type="radio" class="btn-check" name="sautePear" id="sautePear_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sautePear_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sautePear" id="sautePear_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sautePear_Off"><i class="fas fa-times"></i></label>
										</div>
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['food']['sodheTurbanShell']['name']?></div>
												<input type="radio" class="btn-check" name="sodheTurbanShell" id="sodheTurbanShell_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="sodheTurbanShell_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sodheTurbanShell" id="sodheTurbanShell_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center disabled" for="sodheTurbanShell_Off"><i class="fas fa-times"></i></label>
										</div>-->
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sodheClam']['name']?></div>
												<input type="radio" class="btn-check" name="sodheClam" id="sodheClam_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sodheClam_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sodheClam" id="sodheClam_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sodheClam_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sohTurnip']['name']?></div>
												<input type="radio" class="btn-check" name="sohTurnip" id="sohTurnip_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sohTurnip_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sohTurnip" id="sohTurnip_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sohTurnip_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sohMushroom']['name']?></div>
												<input type="radio" class="btn-check" name="sohMushroom" id="sohMushroom_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sohMushroom_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sohMushroom" id="sohMushroom_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sohMushroom_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sodheCrab']['name']?></div>
												<input type="radio" class="btn-check" name="sodheCrab" id="sodheCrab_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sodheCrab_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sodheCrab" id="sodheCrab_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sodheCrab_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sodheLobster']['name']?></div>
												<input type="radio" class="btn-check" name="sodheLobster" id="sodheLobster_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sodheLobster_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sodheLobster" id="sodheLobster_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sodheLobster_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['food']['sohHerb']['name']?></div>
												<input type="radio" class="btn-check" name="sohHerb" id="sohHerb_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="sohHerb_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sohHerb" id="sohHerb_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="sohHerb_Off"><i class="fas fa-times"></i></label>
										</div>
										<!--<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100 disabled"><?=$localization['UI']['sorting']['food']['sohTomato']['name']?></div>
												<input type="radio" class="btn-check" name="sohTomato" id="sohTomato_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center disabled" for="sohTomato_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="sohTomato" id="sohTomato_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center disabled" for="sohTomato_Off"><i class="fas fa-times"></i></label>
										</div>-->
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="accordion4-1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion4-2" aria-expanded="false" aria-controls="accordion4-2"><?=$localization['UI']['sorting']['minerals']['header']?></button>
								</h2>
								<div id="accordion4-2" class="collapse" aria-labelledby="accordion4-1" data-bs-parent="#accordion">
									<div class="accordion-body justify-content-center">
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['minerals']['monotite']['name']?></div>
												<input type="radio" class="btn-check" name="monotite" id="monotite_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="monotite_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="monotite" id="monotite_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="monotite_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['minerals']['dualomite']['name']?></div>
												<input type="radio" class="btn-check" name="dualomite" id="dualomite_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="dualomite_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="dualomite" id="dualomite_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="dualomite_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['minerals']['trinite']['name']?></div>
												<input type="radio" class="btn-check" name="trinite" id="trinite_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="trinite_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="trinite" id="trinite_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="trinite_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['minerals']['PhotonChunk']['name']?></div>
												<input type="radio" class="btn-check" name="PhotonChunk" id="PhotonChunk_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="PhotonChunk_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="PhotonChunk" id="PhotonChunk_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="PhotonChunk_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['minerals']['PhotonQuartz']['name']?></div>
												<input type="radio" class="btn-check" name="PhotonQuartz" id="PhotonQuartz_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="PhotonQuartz_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="PhotonQuartz" id="PhotonQuartz_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="PhotonQuartz_Off"><i class="fas fa-times"></i></label>
										</div>
										<div class="btn-group w-100 mb-2" role="group">
											<div class="btn cus-btn-outline-primary w-100"><?=$localization['UI']['sorting']['other']['alphaReactor']['name']?></div>
												<input type="radio" class="btn-check" name="alphaReactor" id="alphaReactor_On" autocomplete="off">
												<label class="btn btn-outline-success ratio-1x1 d-flex align-items-center" for="alphaReactor_On"><i class="fas fa-check"></i></label>
												<input type="radio" class="btn-check" name="alphaReactor" id="alphaReactor_Off" autocomplete="off" checked="">
												<label class="btn btn-outline-danger ratio-1x1 d-flex align-items-center" for="alphaReactor_Off"><i class="fas fa-times"></i></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="js/markersData.php?lang=<?php echo $lang;?>"></script>
		<script src="js/map.php?lang=<?php echo $lang;?>"></script>
		<script>var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {return new bootstrap.Tooltip(tooltipTriggerEl)})</script>
		<!--<div class="container mb-4">
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
		</div>-->
	</body>
</html>
