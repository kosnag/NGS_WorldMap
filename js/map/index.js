let map_id = "leaflet-app"
let map_url = "assets/map_v2.png";
let map_yx = [[0,0],[7321,7321]];
let map_yx_border = [[0,0],[12288,12288]];

let map = L.map(map_id,{
	crs: L.CRS.Simple,
	minZoom: "-3",
    maxZoom: "0",
    zoomControl: false,
    attributionControl: false,
    keyboard: false,
    maxBoundsViscosity: "0.5",
    boxZoom: false,
    zoomDelta: "0.5"
	});

let map_render = L.imageOverlay(map_url,map_yx).addTo(map);

map.fitBounds(map_yx);
map.setView([3660.5,3660.5]).setZoom("-2");
map.setMaxBounds(map_yx);

// ICONS
let Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}});
	iconCocoon = new Main_Icons({iconUrl: 'assets/markers/cocoon.png'}),
	iconMag = new Main_Icons({iconUrl: 'assets/markers/landmarks/mag.png'}),
	iconRyuker = new Main_Icons({iconUrl: 'assets/markers/landmarks/ryuker.png'}),
	iconTower = new Main_Icons({iconUrl: 'assets/markers/landmarks/tower.png'}),
	iconUrgent = new Main_Icons({iconUrl: 'assets/markers/landmarks/urgent.png'}),
	iconTEST = new Main_Icons({iconUrl: 'https://cdn.discordapp.com/emojis/763104888732647434.png'});
	
let Mat_Icons = L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}});
    // MINERALS
	iconMonotite = new Mat_Icons({iconUrl: 'assets/markers/materials/monotite.png'}),
	iconDualomite = new Mat_Icons({iconUrl: 'assets/markers/materials/dualomite.png'}),
	iconTrinite = new Mat_Icons({iconUrl: 'assets/markers/materials/trinite.png'}),
	iconPhotonChunk = new Mat_Icons({iconUrl: 'assets/markers/materials/photonChunk.png'}),
	iconPhotonQuartz = new Mat_Icons({iconUrl: 'assets/markers/materials/photonQuartz.png'}),

    // FOOD
	iconAelioApple = new Mat_Icons({iconUrl: 'assets/markers/food/aelioApple.png'}),
	iconAelioBanana = new Mat_Icons({iconUrl: 'assets/markers/food/aelioBanana.png'}),
	iconAelioClam = new Mat_Icons({iconUrl: 'assets/markers/food/aelioClam.png'}),
	iconAelioCrab = new Mat_Icons({iconUrl: 'assets/markers/food/aelioCrab.png'}),
	iconAelioHerb = new Mat_Icons({iconUrl: 'assets/markers/food/aelioHerb.png'}),
	iconAelioLobster = new Mat_Icons({iconUrl: 'assets/markers/food/aelioLobster.png'}),
	iconAelioMushroom = new Mat_Icons({iconUrl: 'assets/markers/food/aelioMushroom.png'}),
	iconAelioPeach = new Mat_Icons({iconUrl: 'assets/markers/food/aelioPeach.png'}),
	iconAelioPear = new Mat_Icons({iconUrl: 'assets/markers/food/aelioPear.png'}),
	iconAelioTomato = new Mat_Icons({iconUrl: 'assets/markers/food/aelioTomato.png'}),
	iconAelioTurbanShell = new Mat_Icons({iconUrl: 'assets/markers/food/aelioTurbanShell.png'}),
	iconAelioTurnip = new Mat_Icons({iconUrl: 'assets/markers/food/aelio.png'});
	
let Box_Icons = L.Icon.extend({options:{iconSize:[18,18],iconAnchor:[9,9],popupAnchor:[0,-9]}});
	iconGreenBox = new Box_Icons({iconUrl: 'assets/markers/containers/whiteBox.png'}),
	iconRedBox = new Box_Icons({iconUrl: 'assets/markers/containers/redBox.png'}),
	iconGoldBox = new Box_Icons({iconUrl: 'assets/markers/containers/goldBox.png'});