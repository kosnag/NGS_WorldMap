<?
if( $_COOKIE["lang"] !== null )
$lang = $_COOKIE["lang"];
if( $lang !== null )
include_once "../lang_packs/" . $lang . ".php";

$roundMarker = array (
	'boxes' => array(
		'red' => '"radius": 3, "weight": 3, "fillOpacity": 1, "opacity": 1, "fillColor": "#FF0000", "color": "#FF0000"',
		'white' => '"radius": 3, "weight": 3, "fillOpacity": 1, "opacity": 1, "fillColor": "#FFFFFF", "color": "#FFFFFF"',
		'gold' => '"radius": 3, "weight": 3, "fillOpacity": 1, "opacity": 1, "fillColor": "#FFD700", "color": "#FFD700"',
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
let fit_map_bounds = [[0,0],[7352,7352]];
let map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(fit_map_bounds);


// ICONS
let Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}});
	iconCentTower = new Main_Icons({iconUrl: 'images/marks/centTower.png'}),
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
	
let Mat_Icons = L.Icon.extend({options:{iconSize:[24,24],iconAnchor:[12,12],popupAnchor:[0,-12]}});
	iconAlphaReactor = new Mat_Icons({iconUrl: 'images/marks/materials2/alphaReactor.png'}),
	iconMonotite = new Mat_Icons({iconUrl: 'images/marks/materials2/monotite.png'}),
	iconDualomite = new Mat_Icons({iconUrl: 'images/marks/materials2/dualomite.png'}),
	iconTrinite = new Mat_Icons({iconUrl: 'images/marks/materials2/trinite.png'},
	iconPhotonChunk = new Mat_Icons({iconUrl: 'images/marks/materials2/photonChunk.png'}),
	iconPhotonQuartz = new Mat_Icons({iconUrl: 'images/marks/materials2/photonQuartz.png'}),
	iconSauteApple = new Mat_Icons({iconUrl: 'images/marks/materials2/sauteApple.png'}),
	iconSautePeach = new Mat_Icons({iconUrl: 'images/marks/materials2/sautePeach.png'}),
	iconSautePear = new Mat_Icons({iconUrl: 'images/marks/materials2/sautePear.png'}),
	iconSohHerb = new Mat_Icons({iconUrl: 'images/marks/materials2/sohHerb.png'}),
	iconSohMushroom = new Mat_Icons({iconUrl: 'images/marks/materials2/sohMushroom.png'}),
	iconSohTurnip = new Mat_Icons({iconUrl: 'images/marks/materials2/sohTurnip.png'}));

$(document).ready(function(){
    console.log();
	
	{ // Main Objects
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
	}
	{ // Boxes
		{ // Red Box
			$("#redBox_On").click(function(){
				if (redBoxToggle.length == 0) {
					for (let i = 0; i < redBox.length; i++) {
						redBoxToggle.push(L.circleMarker(redBox[i]["coordinates"],{<?echo $roundMarker['boxes']['red'];?>}).bindTooltip("<?=$localization['boxes']['red']?>"));
					}
				}
				for (let i = 0; i < redBoxToggle.length; i++) {
					redBoxToggle[i].addTo(map);
				}
			});
			$("#redBox_Off").click(function(){
				for (let i = 0; i < redBoxToggle.length; i++) {
					map.removeLayer(redBoxToggle[i]);
				}
			});
		}
		{ // White Box
			$("#whiteBox_On").click(function(){
				if (whiteBoxToggle.length == 0) {
					for (let i = 0; i < whiteBox.length; i++) {
						whiteBoxToggle.push(L.circleMarker(whiteBox[i]["coordinates"],{<?echo $roundMarker['boxes']['white'];?>}).bindTooltip("<?=$localization['boxes']['white']?>"));
					}
				}
				for (let i = 0; i < whiteBoxToggle.length; i++) {
					whiteBoxToggle[i].addTo(map);
				}
			});
			$("#whiteBox_Off").click(function(){
				for (let i = 0; i < whiteBoxToggle.length; i++) {
					map.removeLayer(whiteBoxToggle[i]);
				}
			});
		}
		{ // Gold Box
			$("#goldBox_On").click(function(){
				if (goldBoxToggle.length == 0) {
					for (let i = 0; i < goldBox.length; i++) {
						goldBoxToggle.push(L.circleMarker(goldBox[i]["coordinates"],{<?echo $roundMarker['boxes']['gold'];?>}).bindTooltip("<?=$localization['boxes']['gold']?>"));
					}
				}
				for (let i = 0; i < goldBoxToggle.length; i++) {
					goldBoxToggle[i].addTo(map);
				}
			});
			$("#goldBox_Off").click(function(){
				for (let i = 0; i < goldBoxToggle.length; i++) {
					map.removeLayer(goldBoxToggle[i]);
				}
			});
		}
	}
	{ // Food
		{ // Saute Peach
			$("#sautePeach_On").click(function(){
				if (sautePeachToggle.length == 0) {
					for (let i = 0; i < sautePeach.length; i++) {
						sautePeachToggle.push(L.marker(sautePeach[i]["coordinates"],{icon:iconSautePeach}).bindTooltip("<?=$localization['food']['sautePeach']?>"));;
					}
				}
				for (let i = 0; i < sautePeachToggle.length; i++) {
					sautePeachToggle[i].addTo(map);
				}
			});
			$("#sautePeach_Off").click(function(){
				for (let i = 0; i < sautePeachToggle.length; i++) {
					map.removeLayer(sautePeachToggle[i]);
				}
			});
		}
	}
});



