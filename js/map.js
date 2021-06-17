//MAP
let map_url = "images/map_new.jpg" 
let map = L.map("map",{
	crs: L.CRS.Simple,
	minZoom: -3,
	noWrap: true
	});
let map_bounds = [[0,0],[12288,12288]];
let fit_map_bounds = [[0,0],[12288-4715,12288-4715]];
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
	
let Mat_Icons = L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}});
	iconAlphaReactor = new Mat_Icons({iconUrl: 'images/marks/materials/alphaReactor.png'}),
	iconMonotite = new Mat_Icons({iconUrl: 'images/marks/materials/monotite.png'}),
	iconDualomite = new Mat_Icons({iconUrl: 'images/marks/materials/dualomite.png'}),
	iconTrinite = new Mat_Icons({iconUrl: 'images/marks/materials/trinite.png'}),
	iconPhotonChunk = new Mat_Icons({iconUrl: 'images/marks/materials/photonChunk.png'}),
	iconPhotonQuartz = new Mat_Icons({iconUrl: 'images/marks/materials/photonQuartz.png'}),
	iconSauteApple = new Mat_Icons({iconUrl: 'images/marks/materials/sauteApple.png'}),
	iconSautePeach = new Mat_Icons({iconUrl: 'images/marks/materials/sautePeach.png'}),
	iconSautePear = new Mat_Icons({iconUrl: 'images/marks/materials/sautePear.png'}),
	iconSohHerb = new Mat_Icons({iconUrl: 'images/marks/materials/sohHerb.png'}),
	iconSohMushroom = new Mat_Icons({iconUrl: 'images/marks/materials/sohMushroom.png'}),
	iconSohTurnip = new Mat_Icons({iconUrl: 'images/marks/materials/sohTurnip.png'}),
	iconSodheClam = new Mat_Icons({iconUrl: 'images/marks/materials/sodheClam.png'}),
	iconSodheLobster = new Mat_Icons({iconUrl: 'images/marks/materials/sodheLobster.png'}),
	iconSodheCrab = new Mat_Icons({iconUrl: 'images/marks/materials/sodheCrab.png'});
	
let Box_Icons = L.Icon.extend({options:{iconSize:[18,18],iconAnchor:[9,9],popupAnchor:[0,-9]}});
	iconWhiteBox = new Box_Icons({iconUrl: 'images/marks/containers/whiteBox.png'}),
	iconRedBox = new Box_Icons({iconUrl: 'images/marks/containers/redBox.png'}),
	iconGoldBox = new Box_Icons({iconUrl: 'images/marks/containers/goldBox.png'});