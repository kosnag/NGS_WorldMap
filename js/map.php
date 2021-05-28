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

$roundMarkerTest = '"radius": 2, "weight": 4, "opacity": 1, "fillColor": "#FFA500", "color": "#FFA500"';

$roundMarker = array (
	'BaR' => array(
		'boxes' => array(
			'red' => '"radius": 3, "weight": 1.5, "fillOpacity": 0.75, "opacity": 1, "fillColor": "#FFD700", "color": "#FF0000"',
			'white' => '"radius": 3, "weight": 1.5, "fillOpacity": 0.75, "opacity": 1, "fillColor": "#FFD700", "color": "#FFFFFF"',
			'gold' => '"radius": 3, "weight": 1.5, "fillOpacity": 0.75, "opacity": 1, "fillColor": "#FFD700", "color": "#FFD700"',
		),
		'alphareactor' => '',
		'datapod' => '',
	),
);
?>

// MAP
var map_url = "images/map.jpg";
var map = L.map("map",{crs: L.CRS.Simple,minZoom: -4});
var map_bounds = [[0,0],[12288,12288]];
var map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(map_bounds);


// ICONS
var Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}});
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
var CentralTowers = [
	L.marker([3599,3860],{icon:CentTower}).bindPopup("<?=$localization['objects']['centtower']?>").addTo(map)
];
var Cocoons	= [
	L.marker([3333,2606],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['1']?>").addTo(map),
	L.marker([5521,2442],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['2']?>").addTo(map),
	L.marker([4436,4107],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['3']?>").addTo(map),
	L.marker([1003,4935],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['4']?>").addTo(map),
	L.marker([926,2327],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['5']?>").addTo(map),
	L.marker([5248,217],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['6']?>").addTo(map),
	L.marker([4965,5879],{icon:Cocoon}).bindPopup("<?=$localization['objects']['cocoon']['7']?>").addTo(map)
];
var Mags = [
	L.marker([4755,1641],{icon:Mag}).bindPopup("<?=$localization['objects']['mag']['1']?>").addTo(map)
];
var RyukerDevices = [
	L.marker([1547,4074],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['1']?>").addTo(map),
	L.marker([2562,4171],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['2']?>").addTo(map),
	L.marker([611,5299],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['3']?>").addTo(map),
	L.marker([3094,2699],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['4']?>").addTo(map),
	L.marker([3340,3515],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['5']?>").addTo(map),
	L.marker([4053,4510],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['6']?>").addTo(map),
	L.marker([4297,2252],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['7']?>").addTo(map),
	L.marker([5503,1496],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['8']?>").addTo(map),	
	L.marker([4827,806],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['9']?>").addTo(map),
	L.marker([2599,822],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['10']?>").addTo(map),
	L.marker([1764,1881],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['11']?>").addTo(map),
	L.marker([4163,6110],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['12']?>").addTo(map),
	L.marker([5468,5729],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['13']?>").addTo(map),
	L.marker([5295,3919],{icon:Ryuker}).bindPopup("<?=$localization['objects']['ryuker']['14']?>").addTo(map)
];			
var Towers = [
	L.marker([830,5506],{icon:Tower}).bindPopup("<?=$localization['objects']['tower']['1']?>").addTo(map),
	L.marker([5740,1043],{icon:Tower}).bindPopup("<?=$localization['objects']['tower']['2']?>").addTo(map)
];
var Cities = [
	L.marker([3483,3620],{icon:City}).bindPopup("<?=$localization['objects']['city']['1']?>").addTo(map),
	L.marker([1803,1529],{icon:City}).bindPopup("<?=$localization['objects']['city']['2']?>").addTo(map)
];
var Huts = [
	L.marker([3815,2925],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['1']?>").addTo(map),
	L.marker([3056,1742],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['2']?>").addTo(map),
	L.marker([1070,2054],{icon:Hut}).bindPopup("<?=$localization['objects']['hut']['3']?>").addTo(map)
];
var UrgentQuests = [
	L.marker([5984,1772],{icon:Urgent}).bindPopup("<?=$localization['objects']['urgent']['1']?>").addTo(map)
];
var Dungeons = [
	L.marker([5069,2507],{icon:Dungeon}).bindPopup("<?=$localization['objects']['dungeon']['1']?>").addTo(map)
];

// BOXES AND ETC
var redBox = [
	L.circleMarker([6197,1856],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5793,1262],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5902,2606],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5563,2753],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5492,2560],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5222,1702],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5420,2924],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5077,2063],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([5352,3194],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4824,3361],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4550,2181],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4485,2855],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4122,2345],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4316,4226],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3855,2891],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3747,1350],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([4631,5200],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3811,5305],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3581,4825],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3533,4745],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([3087,2363],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2929,2138],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2798,2186],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2752,2315],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2600,2565],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2607,3021],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2101,3604],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2077,3454],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1646,3091],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2279,5651],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2094,5538],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1896,5497],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([2075,4178],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1877,4058],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1637,3754],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1174,3503],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1016,2962],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([836,3048],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map),
	L.circleMarker([1411,5857],{<?echo $roundMarker['BaR']['boxes']['red'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['red']?>").addTo(map)
];

var whiteBox = [
	L.circleMarker([8492,8492],{<?echo $roundMarkerTest;?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([6454,1945],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([6350,1514],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5894,2746],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5743,2385],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5735,2202],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5549,1986],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5512,1548],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5399,1875],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5416,2841],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5375,2762],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5150,2050],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5136,2258],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5095,2329],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5022,1835],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4983,2162],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4978,2081],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4920,2290],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4889,2194],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4671,2648],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4583,2705],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4655,2226],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4566,2050],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4392,1439],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4191,1760],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4256,2151],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4326,2225],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4184,2338],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4088,1937],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3918,1529],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3863,1826],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3615,1497],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3541,1744],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4031,2786],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3863,2801],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3790,2946],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3645,2672],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4622,3993],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3935,4417],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4695,4879],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4703,5081],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4717,5441],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4519,5833],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4350,6017],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4664,6312],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4645,6528],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4671,6640],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4704,6687],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([4564,6704],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([5575,2426],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3047,2361],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3270,2663],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3337,3050],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3215,3065],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3206,4017],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3143,4201],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3015,3752],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2958,3687],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2966,3332],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2726,3530],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2733,3153],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2693,2819],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2496,3050],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2692,2254],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2401,3945],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3503,5032],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3447,5241],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3446,5320],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3350,4664],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3372,5546],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3151,5714],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3197,5249],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3046,5296],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2886,5207],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2791,5832],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([3005,5073],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2932,4985],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2886,4682],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2812,4713],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2943,5863],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2735,5967],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2510,6136],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2382,5944],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2495,5495],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2309,5569],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2653,4330],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2534,5055],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2364,5203],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2300,5107],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2270,5440],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2110,5599],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2117,5920],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2142,6135],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1838,5126],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1878,6385],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1717,6505],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1669,6399],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1358,5950],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([2136,3335],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1973,3498],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1923,4032],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1818,3208],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1864,3791],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1783,4218],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1689,3710],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1544,3760],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1696,3392],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1728,3314],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1758,3128],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1798,2941],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1199,3144],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([1031,2888],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([607,5664],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([191,5143],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([432,4407],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map),
	L.circleMarker([722,3984],{<?echo $roundMarker['BaR']['boxes']['white'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['white']?>").addTo(map)
];

var goldBox = [
	L.circleMarker([4181,2593],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map),
	L.circleMarker([2808,3737],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map),
	L.circleMarker([1526,6179],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map)
];