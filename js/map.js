// MAP
var map_url = "images/map.jpg";
var map = L.map("map",{crs: L.CRS.Simple,minZoom: -4});
var map_bounds = [[0,0],[12288,12288]];
var map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(map_bounds);

// JSON IMPORT
function onEachFeature(feature,layer){layer.bindPopup(feature.properties.text);}

$.getJSON('json/MarkersMain.json', function(data) {L.geoJson(data, {onEachFeature: onEachFeature}).addTo(map);});

function onEachFeature(feature,latlng){latlng.bindPopup(feature.properties.text);}


// ICONS
var Main_Icons = L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-25]}});
var CentTower = new Main_Icons({iconUrl: 'images/marks/cent_tower.png'}),
	Cocoon = new Main_Icons({iconUrl: 'images/marks/cocoon.png'}),
	Mag = new Main_Icons({iconUrl: 'images/marks/mag.png'}),
	Ryuker = new Main_Icons({iconUrl: 'images/marks/ryuker.png'}),
	Tower = new Main_Icons({iconUrl: 'images/marks/tower.png'}),
	UQ = new Main_Icons({iconUrl: 'images/marks/urgent.png'}),
	City = new Main_Icons({iconUrl: 'images/marks/city.png'}),
	Hut = new Main_Icons({iconUrl: 'images/marks/hut.png'}),
	Dungeon = new Main_Icons({iconUrl: 'images/marks/dungeon.png'}),
	Fort = new Main_Icons({iconUrl: 'images/marks/fort.png'}),
	TEST = new Main_Icons({iconUrl: 'https://cdn.discordapp.com/emojis/763104888732647434.png'});