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
//MAP
let map_url = "images/map.jpg" 
let map = L.map("map",{
	crs: L.CRS.Simple,
	minZoom: -4
	})
let map_bounds = [[0,0],[12288,12288]];
let fit_map_bounds = [[0,0],[12288-4936,7352]];
let map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(fit_map_bounds);


// ICONS
let Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}});
let iconCentTower = new Main_Icons({iconUrl: 'images/marks/centTower.png'}),
	iconCocoon = new Main_Icons({iconUrl: 'images/marks/cocoon.png'}),
	iconMag = new Main_Icons({iconUrl: 'images/marks/mag.png'}),
	iconRyuker = new Main_Icons({iconUrl: 'images/marks/ryuker.png'}),
	iconTower = new Main_Icons({iconUrl: 'images/marks/tower.png'}),
	iconUrgent = new Main_Icons({iconUrl: 'images/marks/urgent.png'}),
	iconCity = new Main_Icons({iconUrl: 'images/marks/city.png'}),
	iconHut = new Main_Icons({iconUrl: 'images/marks/hut.png'}),
	iconDungeon = new Main_Icons({iconUrl: 'images/marks/dungeon.png'}),
	iconFort = new Main_Icons({iconUrl: 'images/marks/fort.png'}),
	iconTEST = new Main_Icons({iconUrl: 'https://cdn.discordapp.com/emojis/763104888732647434.png'});

$(document).ready(function(){
    console.log();
	{ // Cocoon
		if (CocoonToggle.length == 0) {
			for (let i = 0; i < Cocoon.length; i++) {
				CocoonToggle.push(L.marker(Cocoon[i]["coordinates"],{icon:iconCocoon}).bindPopup(Cocoon[i]["popup"]).addTo(map));
			}
		}
		$("#Cocoon_On").click(function(){
			if (CocoonToggle.length == 0) {
				for (let i = 0; i < Cocoon.length; i++) {
					CocoonToggle.push(L.marker(Cocoon[i]["coordinates"],{icon:iconCocoon}).bindPopup(Cocoon[i]["popup"]));
				}
			}
			for (let i = 0; i < CocoonToggle.length; i++) {
				CocoonToggle[i].addTo(map);
			}
		});
		$("#Cocoon_Off").click(function(){
			for (let i = 0; i < CocoonToggle.length; i++) {
				map.removeLayer(CocoonToggle[i]);
			}
		});
	}
	{ // Mag
		if (MagToggle.length == 0) {
			for (let i = 0; i < Mag.length; i++) {
				MagToggle.push(L.marker(Mag[i]["coordinates"],{icon:iconMag}).bindPopup(Mag[i]["popup"]).addTo(map));
			}
		}
		$("#Mag_On").click(function(){
			if (MagToggle.length == 0) {
				for (let i = 0; i < Mag.length; i++) {
					MagToggle.push(L.marker(Mag[i]["coordinates"],{icon:iconMag}).bindPopup(Mag[i]["popup"]));
				}
			}
			for (let i = 0; i < MagToggle.length; i++) {
				MagToggle[i].addTo(map);
			}
		});
		$("#Mag_Off").click(function(){
			for (let i = 0; i < MagToggle.length; i++) {
				map.removeLayer(MagToggle[i]);
			}
		});
	}
	{ // Ryuker
		if (RyukerDeviceToggle.length == 0) {
			for (let i = 0; i < RyukerDevice.length; i++) {
				RyukerDeviceToggle.push(L.marker(RyukerDevice[i]["coordinates"],{icon:iconRyuker}).bindPopup(RyukerDevice[i]["popup"]).addTo(map));
			}
		}
		$("#RyukerDevice_On").click(function(){
			if (RyukerDeviceToggle.length == 0) {
				for (let i = 0; i < RyukerDevice.length; i++) {
					RyukerDeviceToggle.push(L.marker(RyukerDevice[i]["coordinates"],{icon:iconRyuker}).bindPopup(RyukerDevice[i]["popup"]));
				}
			}
			for (let i = 0; i < RyukerDeviceToggle.length; i++) {
				RyukerDeviceToggle[i].addTo(map);
			}
		});
		$("#RyukerDevice_Off").click(function(){
			for (let i = 0; i < RyukerDeviceToggle.length; i++) {
				map.removeLayer(RyukerDeviceToggle[i]);
			}
		});
	}
	{ // Tower
		if (TowerToggle.length == 0) {
			for (let i = 0; i < Tower.length; i++) {
				TowerToggle.push(L.marker(Tower[i]["coordinates"],{icon:iconTower}).bindPopup(Tower[i]["popup"]).addTo(map));
			}
		}
		$("#Tower_On").click(function(){
			if (TowerToggle.length == 0) {
				for (let i = 0; i < Tower.length; i++) {
					TowerToggle.push(L.marker(Tower[i]["coordinates"],{icon:iconTower}).bindPopup(Tower[i]["popup"]));
				}
			}
			for (let i = 0; i < TowerToggle.length; i++) {
				TowerToggle[i].addTo(map);
			}
		});
		$("#Tower_Off").click(function(){
			for (let i = 0; i < TowerToggle.length; i++) {
				map.removeLayer(TowerToggle[i]);
			}
		});
	}
	{ // City
		if (CityToggle.length == 0) {
			for (let i = 0; i < City.length; i++) {
				CityToggle.push(L.marker(City[i]["coordinates"],{icon:iconCity}).bindPopup(City[i]["popup"]).addTo(map));
			}
		}
		$("#City_On").click(function(){
			if (CityToggle.length == 0) {
				for (let i = 0; i < City.length; i++) {
					CityToggle.push(L.marker(City[i]["coordinates"],{icon:iconCity}).bindPopup(City[i]["popup"]));
				}
			}
			for (let i = 0; i < CityToggle.length; i++) {
				CityToggle[i].addTo(map);
			}
		});
		$("#City_Off").click(function(){
			for (let i = 0; i < CityToggle.length; i++) {
				map.removeLayer(CityToggle[i]);
			}
		});
	}
	{ // Hut
		if (HutToggle.length == 0) {
			for (let i = 0; i < Hut.length; i++) {
				HutToggle.push(L.marker(Hut[i]["coordinates"],{icon:iconHut}).bindPopup(Hut[i]["popup"]).addTo(map));
			}
		}
		$("#Hut_On").click(function(){
			if (HutToggle.length == 0) {
				for (let i = 0; i < Hut.length; i++) {
					HutToggle.push(L.marker(Hut[i]["coordinates"],{icon:iconHut}).bindPopup(Hut[i]["popup"]));
				}
			}
			for (let i = 0; i < HutToggle.length; i++) {
				HutToggle[i].addTo(map);
			}
		});
		$("#Hut_Off").click(function(){
			for (let i = 0; i < HutToggle.length; i++) {
				map.removeLayer(HutToggle[i]);
			}
		});
	}
	{ // UQ
		if (UrgentQuestToggle.length == 0) {
			for (let i = 0; i < UrgentQuest.length; i++) {
				UrgentQuestToggle.push(L.marker(UrgentQuest[i]["coordinates"],{icon:iconUrgent}).bindPopup(UrgentQuest[i]["popup"]).addTo(map));
			}
		}
		$("#UrgentQuest_On").click(function(){
			if (UrgentQuestToggle.length == 0) {
				for (let i = 0; i < UrgentQuest.length; i++) {
					UrgentQuestToggle.push(L.marker(UrgentQuest[i]["coordinates"],{icon:iconUrgent}).bindPopup(UrgentQuest[i]["popup"]));
				}
			}
			for (let i = 0; i < UrgentQuestToggle.length; i++) {
				UrgentQuestToggle[i].addTo(map);
			}
		});
		$("#UrgentQuest_Off").click(function(){
			for (let i = 0; i < UrgentQuestToggle.length; i++) {
				map.removeLayer(UrgentQuestToggle[i]);
			}
		});
	}
	{ // Dungeon
		if (DungeonToggle.length == 0) {
			for (let i = 0; i < Dungeon.length; i++) {
				DungeonToggle.push(L.marker(Dungeon[i]["coordinates"],{icon:iconDungeon}).bindPopup(Dungeon[i]["popup"]).addTo(map));
			}
		}
		$("#Dungeon_On").click(function(){
			if (DungeonToggle.length == 0) {
				for (let i = 0; i < Dungeon.length; i++) {
					DungeonToggle.push(L.marker(Dungeon[i]["coordinates"],{icon:iconDungeon}).bindPopup(Dungeon[i]["popup"]));
				}
			}
			for (let i = 0; i < DungeonToggle.length; i++) {
				DungeonToggle[i].addTo(map);
			}
		});
		$("#Dungeon_Off").click(function(){
			for (let i = 0; i < DungeonToggle.length; i++) {
				map.removeLayer(DungeonToggle[i]);
			}
		});
	}
});


// OBJECTS
// Central Tower coords
	let CentralTower = [
			{coordinates:[3599,3860],popup:"<?=$localization['objects']['centtower']?>"}
		];
	let CentralTowerToggle = [];

// Cocoon coords
	let Cocoon = [
			{coordinates:[3333,2606],popup:"<?=$localization['objects']['cocoon']['1']?>"},
			{coordinates:[5521,2442],popup:"<?=$localization['objects']['cocoon']['2']?>"},
			{coordinates:[4436,4107],popup:"<?=$localization['objects']['cocoon']['3']?>"},
			{coordinates:[1003,4935],popup:"<?=$localization['objects']['cocoon']['4']?>"},
			{coordinates:[926,2327],popup:"<?=$localization['objects']['cocoon']['5']?>"},
			{coordinates:[5248,217],popup:"<?=$localization['objects']['cocoon']['6']?>"},
			{coordinates:[4965,5879],popup:"<?=$localization['objects']['cocoon']['7']?>"}
		];
	let CocoonToggle = [];

// Mag coords
	let Mag = [
			{coordinates:[4755,1641],popup:"<?=$localization['objects']['mag']['1']?>"}
		];
	let MagToggle = [];

// Ryuker coords
	let RyukerDevice = [
			{coordinates:[1547,4074],popup:"<?=$localization['objects']['ryuker']['1']?>"},
			{coordinates:[2562,4171],popup:"<?=$localization['objects']['ryuker']['2']?>"},
			{coordinates:[611,5299],popup:"<?=$localization['objects']['ryuker']['3']?>"},
			{coordinates:[3094,2699],popup:"<?=$localization['objects']['ryuker']['4']?>"},
			{coordinates:[3340,3515],popup:"<?=$localization['objects']['ryuker']['5']?>"},
			{coordinates:[4053,4510],popup:"<?=$localization['objects']['ryuker']['6']?>"},
			{coordinates:[4297,2252],popup:"<?=$localization['objects']['ryuker']['7']?>"},
			{coordinates:[5503,1496],popup:"<?=$localization['objects']['ryuker']['8']?>"},	
			{coordinates:[4827,806],popup:"<?=$localization['objects']['ryuker']['9']?>"},
			{coordinates:[2599,822],popup:"<?=$localization['objects']['ryuker']['10']?>"},
			{coordinates:[1764,1881],popup:"<?=$localization['objects']['ryuker']['11']?>"},
			{coordinates:[4163,6110],popup:"<?=$localization['objects']['ryuker']['12']?>"},
			{coordinates:[5468,5729],popup:"<?=$localization['objects']['ryuker']['13']?>"},
			{coordinates:[5295,3919],popup:"<?=$localization['objects']['ryuker']['14']?>"}
		];		
	let RyukerDeviceToggle = [];

// Tower coords
	let Tower = [
			{coordinates:[830,5506],popup:"<?=$localization['objects']['tower']['1']?>"},
			{coordinates:[5740,1043],popup:"<?=$localization['objects']['tower']['2']?>"}
		];
	let TowerToggle = [];

// City coords
	let City = [
			{coordinates:[3483,3620],popup:"<?=$localization['objects']['city']['1']?>"},
			{coordinates:[1803,1529],popup:"<?=$localization['objects']['city']['2']?>"}
		];
	let CityToggle = [];

// Hut coords
	let Hut = [
			{coordinates:[3815,2925],popup:"<?=$localization['objects']['hut']['1']?>"},
			{coordinates:[3056,1742],popup:"<?=$localization['objects']['hut']['2']?>"},
			{coordinates:[1070,2054],popup:"<?=$localization['objects']['hut']['3']?>"}
		];
	let HutToggle = [];

// Urgent coords
	let UrgentQuest = [
			{coordinates:[5984,1772],popup:"<?=$localization['objects']['urgent']['1']?>"}
		];
	let UrgentQuestToggle = [];

// Dungeon coords
	let Dungeon = [
			{coordinates:[5069,2507],popup:"<?=$localization['objects']['dungeon']['1']?>"}
		];
	let DungeonToggle = [];
	

// BOXES AND ETC
let redBox = [
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

let whiteBox = [
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

let goldBox = [
	L.circleMarker([4181,2593],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map),
	L.circleMarker([2808,3737],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map),
	L.circleMarker([1526,6179],{<?echo $roundMarker['BaR']['boxes']['gold'];?>}).bindTooltip("<?=$localization['BaR']['boxes']['gold']?>").addTo(map)
];

