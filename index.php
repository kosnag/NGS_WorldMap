<?
session_start();
if (!isset($_SESSION['lang']))
$_SESSION['lang'] = "select";
else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
	if ($_GET['lang'] == "en_gl")
	$_SESSION['lang'] = "en_gl";
	else if ($_GET['lang'] == "en_al")
	$_SESSION['lang'] = "en_al";
	else if ($_GET['lang'] == "jp")
	$_SESSION['lang'] = "jp";
	else if ($_GET['lang'] == "ru")
	$_SESSION['lang'] = "ru";
	else if ($_GET['lang'] == "kr")
	$_SESSION['lang'] = "kr";
}
require_once "lang_packs/" . $_SESSION['lang'] . ".php";

/*
switch ($_GET['QUERY_STRING']) {
	case !empty($_GET['en_gl']):
		include 'lang_packs/en_gl.php';
		break;
	case !empty($_GET['en_al']):
		include 'lang_packs/en_al.php';
		break;
	case !empty($_GET['jp']):
		include 'lang_packs/jp.php';
		break;
	case !empty($_GET['ru']):
		include 'lang_packs/ru.php';
		break;
	case !empty($_GET['kr']):
		include 'lang_packs/kr.php';
		break;
	default:
		include 'lang_packs/en_gl.php';
		break;
	}
*/
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?=$localisation['UI']['title']?></title>
		<link href="css/bootstrap-4.4.1.css" rel="stylesheet">
		<link href="css/styles.css" rel="stylesheet">
		<link href="css/leaflet.css" rel="stylesheet">
		<script src="js/jquery-3.4.1.min.js"></script>
		<script src="js/popper.min.js"></script>
		<script src="js/bootstrap-4.4.1.js"></script>
		<script src="js/leaflet.js"></script>
		<script src="https://vk.com/js/api/openapi.js?169"></script>
		<link rel="icon" href="images/favicon.png" type="image/x-icon">
	</head>
	<body class="bg-body">
		<nav class="navbar navbar-expand-sm navbar-dark nav-custom">		
			<div class="container">
				<a class="navbar-brand text-white" href="#"><h4><?=$localisation['UI']['title']?></h4></a>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link text-white disabled" target="_blank" href="#">Credits</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" target="_blank" href="https://docs.google.com/spreadsheets/d/12lKTrbbyHszz9TTfmvwRlRZe7MLI9nFL8XVAcIkynlU/edit?usp=sharing">Google Sheets</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" target="_blank" href="https://github.com/kosnag/NGS_InterMap">Github</a>
					</li>
					<li class="nav-item">
						<div class="dropdown">
							<a class="nav-link text-white dropdown-toggle" data-toggle="dropdown" href="#"><?=$localisation['UI']['languages']['switcher']?></a>
							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="/?lang=en_gl"><img src="images/flags/usa.svg" class="lang-flags"> <img src="images/flags/uk.svg" class="lang-flags"> <?=$localisation['UI']['languages']['en_gl']?></a>
								<a class="dropdown-item" href="/?lang=en_al"><img src="images/flags/usa.svg" class="lang-flags"> <img src="images/flags/uk.svg" class="lang-flags"> <?=$localisation['UI']['languages']['en_al']?></a>
								<a class="dropdown-item" href="/?lang=jp"><img src="images/flags/jp.svg" class="lang-flags"> <?=$localisation['UI']['languages']['jp']?></a>
								<a class="dropdown-item" href="/?lang=ru"><img src="images/flags/ru.svg" class="lang-flags"> <?=$localisation['UI']['languages']['ru']?></a>
								<a class="dropdown-item" href="/?lang=kr"><img src="images/flags/kr.svg" class="lang-flags"> <?=$localisation['UI']['languages']['kr']?></a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container alert alert-danger mt-3" role="alert">
			<h4 class="alert-heading">WORK IN PROGRESS <span class="badge badge-danger">SPOILER ALERT</span></h4>
			<p>This interactive map are corrently in development. Also something maybe will be a spoiler for <b>Phantasy Star Online 2: New Genesis</b> because used data from datamining.</p>
			<p>When map will be ready, all spoiler content will be hidden from map, dont worry.</p>
			<hr>
			<p class="mb-0">If you want to help me, please contact with me in <a href="https://twitter.com/kosnag" target="_blank" style="">Twitter</a> or <a href="#" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>">Discord (kosnag#1730)</a>. I will be very happy, if you help me! <a href="#" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/762945798064570398/827230435662233671/2021-04-01_10-08-46-250_Talim_-_Air.png' height='100'>">Take a hug by Matoi!</a></p>
			<script>$(function(){$('[data-toggle="tooltip"]').tooltip()})</script>
		</div>
		<div class="container mb-3">
			<div class="row">
				<div class="col-md-9 col-sm-12">
					<div class="card card-body">
						<center><div id="map"></div></center>
						<script src="js/map.js"></script>
						<script>
var marker = 
// MARKERS
	L.marker([3599,3860],{icon:CentTower}).bindPopup("<?=$localisation['markers']['centtower']['1']?>").addTo(map);
								
// COCOONS
	L.marker([3333,2606],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['1']?>").addTo(map);
	L.marker([5521,2442],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['2']?>").addTo(map);
	L.marker([4436,4107],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['3']?>").addTo(map);
	L.marker([1003,4935],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['4']?>").addTo(map);
	//L.marker([926,2327],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['5']?>").addTo(map);
	//L.marker([5248,217],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['6']?>").addTo(map);
	//L.marker([4965,5879],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['7']?>").addTo(map);
	//L.marker([5813,8934],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['8']?>").addTo(map);
	//L.marker([4979,10081],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['9']?>").addTo(map);
	//L.marker([4577,8717],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['10']?>").addTo(map);
	//L.marker([4486,10805],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['11']?>").addTo(map);
	//L.marker([4511,8352],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['12']?>").addTo(map);
	//L.marker([2605,8441],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['13']?>").addTo(map);
	//L.marker([1500,8394],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['14']?>").addTo(map);
	//L.marker([1726,10745],{icon:Cocoon}).bindPopup("<?=$localisation['markers']['cocoon']['15']?>").addTo(map);
							
								
	L.marker([4755,1641],{icon:Mag}).bindPopup("<?=$localisation['markers']['mag']['1']?>").addTo(map);
							
	L.marker([1547,4074],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['1']?>").addTo(map);
	L.marker([2562,4171],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['2']?>").addTo(map);
	L.marker([611,5299],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['3']?>").addTo(map);
	L.marker([3094,2699],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['4']?>").addTo(map);
	L.marker([3340,3515],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['5']?>").addTo(map);
	L.marker([4053,4510],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['6']?>").addTo(map);
	L.marker([4297,2252],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['7']?>").addTo(map);
	L.marker([5470,1511],{icon:Ryuker}).bindPopup("<?=$localisation['markers']['ryuker']['8']?>").addTo(map);
							
	L.marker([830,5506],{icon:Tower}).bindPopup("<?=$localisation['markers']['tower']['1']?>").addTo(map);
							
	L.marker([3483,3620],{icon:City}).bindPopup("<?=$localisation['markers']['city']['1']?>").addTo(map);
	//L.marker([1803,1529],{icon:City}).bindPopup("<?=$localisation['markers']['city']['1']?>").addTo(map);
							
	//L.marker([3815,2925],{icon:Hut}).bindPopup("<?=$localisation['markers']['hut']['1']?>").addTo(map);
	//L.marker([3056,1742],{icon:Hut}).bindPopup("<?=$localisation['markers']['hut']['2']?>").addTo(map);
	//L.marker([1070,2054],{icon:Hut}).bindPopup("<?=$localisation['markers']['hut']['3']?>").addTo(map);
	//L.marker([7822,3428],{icon:Hut}).bindPopup("<?=$localisation['markers']['hut']['4']?>").addTo(map);
							
	L.marker([8492,8492],{icon:TEST}).bindPopup("<?=$localisation['markers']['urgent']['1']?>").addTo(map);
							
	L.marker([1337,1337],{icon:TEST}).bindPopup("<?=$localisation['markers']['dungeon']['1']?>").addTo(map);
						</script>
					</div>
				</div>
				<div class="col-md-3 col-sm-12">
                    <div class="card">
						<center>
							<h4 id="sorting-title" style="margin-top:10px;margin-bottom:10px"><?=$localisation['UI']['sorting']['title']?></h4>
						</center>
						<a id="sorting-1" class="btn btn-primary mb-2 mr-3 ml-3 disabled"><?=$localisation['UI']['sorting']['1']?></a>
						<a id="sorting-2" class="btn btn-primary mb-2 mr-3 ml-3 disabled"><?=$localisation['UI']['sorting']['2']?></a>
						<a id="sorting-3" class="btn btn-primary mb-2 mr-3 ml-3 disabled"><?=$localisation['UI']['sorting']['3']?></a>
						<a id="sorting-4" class="btn btn-primary mb-2 mr-3 ml-3 disabled"><?=$localisation['UI']['sorting']['4']?></a>
						<a id="sorting-5" class="btn btn-primary mb-2 mr-3 ml-3 disabled"><?=$localisation['UI']['sorting']['5']?></a>
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
	</body>
</html>