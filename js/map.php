<?
session_start();
if (!isset($_SESSION['lang']))
$_SESSION['lang'] = "";
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
require_once "../lang_packs/" . $_SESSION['lang'] . ".php";
//require once "https://raw.githubusercontent.com/kosnag/NGS_InterMap/main/lang_packs/" . $_SESSION['lang'] . ".php";

$circleMarker = '"radius": 2, "weight": 4, "opacity": 1'
?>
// MAP
var map_url = "images/map.jpg";
var map = L.map("map",{crs: L.CRS.Simple,minZoom: -4});
var map_bounds = [[0,0],[12288,12288]];
var map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(map_bounds);





// ICONS
var Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-25]}});
var CentTower = new Main_Icons({iconUrl: 'images/marks/cent_tower.png'}),
	Cocoon = new Main_Icons({iconUrl: 'images/marks/cocoon.png'}),
	Mag = new Main_Icons({iconUrl: 'images/marks/mag.png'}),
	Ryuker = new Main_Icons({iconUrl: 'images/marks/ryuker.png'}),
	Tower = new Main_Icons({iconUrl: 'images/marks/tower.png'}),
	Urgent = new Main_Icons({iconUrl: 'images/marks/urgent.png'}),
	City = new Main_Icons({iconUrl: 'images/marks/city.png'}),
	Hut = new Main_Icons({iconUrl: 'images/marks/hut.png'}),
	Dungeon = new Main_Icons({iconUrl: 'images/marks/dungeon.png'}),
	Fort = new Main_Icons({iconUrl: 'images/marks/fort.png'}),
	TEST = new Main_Icons({iconUrl: 'https://cdn.discordapp.com/emojis/763104888732647434.png'});
	
	
	
// OBJECTS
var Objects = 
	L.marker([3599,3860],{icon:CentTower}).bindPopup("<?=$localization['objects']['centtower']?>").addTo(map);
								
	L.marker([3333,2606],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['1']?>").addTo(map);
	L.marker([5521,2442],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['2']?>").addTo(map);
	L.marker([4436,4107],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['3']?>").addTo(map);
	L.marker([1003,4935],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['4']?>").addTo(map);
	L.marker([926,2327],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['5']?>").addTo(map);
	L.marker([5248,217],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['6']?>").addTo(map);
	L.marker([4965,5879],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['7']?>").addTo(map);
							
	L.marker([4755,1641],{icon:Mag}).bindPopup("<?=$localization['objects']['mag']['1']?>").addTo(map);
							
	L.marker([1547,4074],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['1']?>").addTo(map);
	L.marker([2562,4171],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['2']?>").addTo(map);
	L.marker([611,5299],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['3']?>").addTo(map);
	L.marker([3094,2699],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['4']?>").addTo(map);
	L.marker([3340,3515],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['5']?>").addTo(map);
	L.marker([4053,4510],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['6']?>").addTo(map);
	L.marker([4297,2252],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['7']?>").addTo(map);
	L.marker([5503,1496],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['8']?>").addTo(map);	
	L.marker([4827,806],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['9']?>").addTo(map);
	L.marker([2599,822],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['10']?>").addTo(map);
	L.marker([1764,1881],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['11']?>").addTo(map);
	L.marker([4163,6110],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['12']?>").addTo(map);
	L.marker([5468,5729],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['13']?>").addTo(map);
	L.marker([5295,3919],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['14']?>").addTo(map);
							
	L.marker([830,5506],{icon:Tower}).bindPopup("<?=$localization['objects']['tower']['1']?>").addTo(map);
	L.marker([5740,1043],{icon:Tower}).bindPopup("<?=$localization['objects']['tower']['2']?>").addTo(map);
							
	L.marker([3483,3620],{icon:City}).bindPopup("<?=$localization['objects']['city']['1']?>").addTo(map);
	L.marker([1803,1529],{icon:City}).bindPopup("<?=$localization['objects']['city']['2']?>").addTo(map);
							
	L.marker([3815,2925],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['1']?>").addTo(map);
	L.marker([3056,1742],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['2']?>").addTo(map);
	L.marker([1070,2054],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['3']?>").addTo(map);
							
	L.marker([5984,1772],{icon:Urgent}).bindPopup("<?=$localization['objects']['urgent']['1']?>").addTo(map);
							
	L.marker([5069,2507],{icon:Dungeon}).bindPopup("<?=$localization['objects']['dungeon']['1']?>").addTo(map);

// BOXES AND ETC
var BoxesAndEtc = 
	L.circleMarker([8492,8492],{<?echo $circleMarker;?>,"fillColor":"#FFA500","color":"#FFA500"}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map);