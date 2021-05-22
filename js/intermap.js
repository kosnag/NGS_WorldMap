// MAP
var map_url = "./images/map.jpg";
var map = L.map("intermap", {crs: L.CRS.Simple,minZoom: -4});
var map_bounds = [[0, 0],[12288, 12288]];
var map_img = L.imageOverlay(map_url, map_bounds).addTo(map);
map.fitBounds(map_bounds);

// JSON IMPORT
$.getJSON("data/markers.json",function(data){L.geoJson(data).addTo(map);});
						
// ICONS
var UI_Icon = L.Icon.extend({options: {iconSize: [40,40],iconAnchor: [20,40],popupAnchor: [40,0]}});
									
var CentTower = new UI_Icon({iconUrl: 'images/marks/cent_tower.png'}),
	Cocoon = new UI_Icon({iconUrl: 'images/marks/cocoon.png'}),
	Mag = new UI_Icon({iconUrl: 'images/marks/mag.png'}),
	Ryuker = new UI_Icon({iconUrl: 'images/marks/ryuker.png'}),
	Tower = new UI_Icon({iconUrl: 'images/marks/tower.png'}),
	UQ = new UI_Icon({iconUrl: 'images/marks/urgent.png'}),
	City = new UI_Icon({iconUrl: 'images/marks/city.png'}),
	Hut = new UI_Icon({iconUrl: 'images/marks/hut.png'}),
	Dungeon = new UI_Icon({iconUrl: 'images/marks/dungeon.png'}),
	Fort = new UI_Icon({iconUrl: 'images/marks/fort.png'});
											
// MARKERS UI
var marker = 
	L.marker([3585,4050], {icon: CentTower}).bindPopup("Central Tower (Aelio)").addTo(map);
	L.marker([12288-7670,1570], {icon: Mag}).bindPopup("Mag").addTo(map);