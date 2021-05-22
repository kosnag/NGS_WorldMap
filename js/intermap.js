// MAP
var map_url = "./images/map.jpg";
var map = L.map("intermap", {crs: L.CRS.Simple,minZoom: -4});
var map_bounds = [[0, 0],[12288, 12288]];
var map_img = L.imageOverlay(map_url, map_bounds).addTo(map);
map.fitBounds(map_bounds);

// JSON IMPORT
$.getJSON("json/markers.json",function(data){L.geoJson(data).addTo(map);});
						
// ICONS
var Main_Icon = L.Icon.extend({options: {iconSize: [40,40],iconAnchor: [20,40],popupAnchor: [40,0]}});
									
var CentTower = new Main_Icon({iconUrl: 'images/marks/cent_tower.png'}),
	Cocoon = new Main_Icon({iconUrl: 'images/marks/cocoon.png'}),
	Mag = new Main_Icon({iconUrl: 'images/marks/mag.png'}),
	Ryuker = new Main_Icon({iconUrl: 'images/marks/ryuker.png'}),
	Tower = new Main_Icon({iconUrl: 'images/marks/tower.png'}),
	UQ = new Main_Icon({iconUrl: 'images/marks/urgent.png'}),
	City = new Main_Icon({iconUrl: 'images/marks/city.png'}),
	Hut = new Main_Icon({iconUrl: 'images/marks/hut.png'}),
	Dungeon = new Main_Icon({iconUrl: 'images/marks/dungeon.png'}),
	Fort = new Main_Icon({iconUrl: 'images/marks/fort.png'});
											
// MARKERS UI
var marker = 
	L.marker([3585,4050], {icon: CentTower}).bindPopup("Central Tower (Aelio)").addTo(map);
	L.marker([12288-7670,1570], {icon: Mag}).bindPopup("Mag").addTo(map);