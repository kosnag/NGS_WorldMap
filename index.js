//VK WIDGETS
VK.Widgets.Group("vk_groups1",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},144825795);
VK.Widgets.Group("vk_groups2",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},200732667
);
VK.Widgets.Group("vk_groups3",{mode:3,width:"auto",color1:'FFFFFF',color2:'000000',color3: '0275d8'},28920792);

// MAP
var map_url = "images/map.jpg";
var map = L.map("map", {
	crs: L.CRS.Simple,
	minZoom: -4
});
var map_bounds = [[0,0],[12288,12288]];
var map_img = L.imageOverlay(map_url,map_bounds).addTo(map);map.fitBounds(map_bounds);

// JSON IMPORT
function onEachFeature(feature, layer) {layer.bindPopup(feature.properties.text);}
$.getJSON('json/MarkersMain.json', function(data) {
	L.geoJson(data, {
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {icon: TEST});
		},
		onEachFeature: onEachFeature
	}).addTo(map);
});

// ICONS
var Main_Icons = L.Icon.extend({options: {iconSize:[40,40],iconAnchor:[20,40],popupAnchor:[0,-25]}});
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
											
// MARKERS UI
var marker = 
	L.marker([3599,3860], {icon: CentTower}).bindPopup("Central Tower (Aelio)").addTo(map);
	L.marker([3333,2606], {icon: Cocoon}).bindPopup("Cocoon").addTo(map);
	L.marker([4436,4107], {icon: Cocoon}).bindPopup("Cocoon").addTo(map);
	L.marker([1003,4935], {icon: Cocoon}).bindPopup("Cocoon").addTo(map);

