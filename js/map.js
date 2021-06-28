// MAP MAIN JS OBJECT  -- SVGvsevolod
var map = {
	// MAP DATA  -- SVGvsevolod
	constants: {
		map_bounds: [[0,0],[7321,7321]]
	},
	map_icons: {
		main: {
			cocoon: {iconUrl: "assets/markers/cocoon.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
			mag: {iconUrl: "assets/markers/landmarks/mag.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
			ryuker: {iconUrl: "assets/markers/landmarks/ryuker.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
			tower: {iconUrl: "assets/markers/landmarks/tower.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
			urgent: {iconUrl: "assets/markers/landmarks/urgent.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
			test: {iconUrl: "https://cdn.discordapp.com/emojis/763104888732647434.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]}
		},
		minerals: {
			monotite: {iconUrl: "assets/markers/minerals/monotite.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			dualomite: {iconUrl: "assets/markers/minerals/dualomite.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			trinite: {iconUrl: "assets/markers/minerals/trinite.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			phChunk: {iconUrl: "assets/markers/minerals/photonChunk.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			phQuartz: {iconUrl: "assets/markers/minerals/photonQuartz.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]}
		},
		food: {
			apple: {iconUrl: "assets/markers/food/aelioApple.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			banana: {iconUrl: "assets/markers/food/aelioBanana.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			clam: {iconUrl: "assets/markers/food/aelioClam.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			crab: {iconUrl: "assets/markers/food/aelioCrab.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			herb: {iconUrl: "assets/markers/food/aelioHerb.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			lobster: {iconUrl: "assets/markers/food/aelioLobster.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			mushroom: {iconUrl: "assets/markers/food/aelioMushroom.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			peach: {iconUrl: "assets/markers/food/aelioPeach.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			pear: {iconUrl: "assets/markers/food/aelioPear.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			tomato: {iconUrl: "assets/markers/food/aelioTomato.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			shell: {iconUrl: "assets/markers/food/aelioTurbanShell.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
			turnip: {iconUrl: "assets/markers/food/aelio.png", iconSize: [26,26], iconAnchor:[13,13], popupAnchor: [0,-13]},
		},
		boxes: {
			green: {iconUrl: "assets/markers/containers/whiteBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]},
			red: {iconUrl: "assets/markers/containers/redBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]},
			gold: {iconUrl: "assets/markers/containers/goldBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]}
		}
	},
	map_markers: {
		minerals: {
			monotite: [
				{coordinates:[5438,3109]},
				{coordinates:[5317,3213]},
				{coordinates:[5050,3333]},
				{coordinates:[5024,3278]},
				{coordinates:[4996,3301]},
				{coordinates:[4964,3361]},
				{coordinates:[4862,3301]},
				{coordinates:[4884,3465]},
				{coordinates:[4871,3474]},
				{coordinates:[4858,3510]},
				{coordinates:[4796,3535]},
				{coordinates:[4824,3987]},
				{coordinates:[4544,7423]},
				{coordinates:[4462,4390]},
				{coordinates:[4031,5236]},
				{coordinates:[4010,5269]},
				{coordinates:[3951,5255]},
				{coordinates:[3424,2382]},
				{coordinates:[2955,2202]},
				{coordinates:[2927,2228]},
				{coordinates:[2830,2257]},
				{coordinates:[2791,2220]},
				{coordinates:[2726,2334]},
				{coordinates:[2881,2486]},
				{coordinates:[2784,2458]},
				{coordinates:[2400,2627]}
			]
		}
	},
	map_locale_strings: {
		minerals: {
			monotite: "mapMonotiteTitle"
		}
	},
	user_settings: {
		version: "na",
		sections: false,
		minerals: {
			monotite: false,
			dualomite: false,
			trinite: false,
			phChunk: false,
			phQuartz: false
		}
	},
	map_object: undefined,
	
	// MAP FUNCTIONS  -- SVGvsevolod
	toogle_marker: function(marker){
		if(map.map_object.hasLayer(marker))
			map.map_object.removeLayer(marker);
		else
			marker.addTo(map.map_object);
	},
	toogle_markers: function(category){
		if(category instanceof Array && category.length)
			for(var i in category)
				map.toogle_marker(category[i]);
	},
	update_locale: function(){
		for(var i in Object.keys(map.map_markers))
			for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
				for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
					map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].setTooltipContent(map_app.locale.strings[map.map_locale_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]]);
				}
	},
	load_settings: function(){
		if(localStorage.getItem("user_settings") && typeof JSON.parse(localStorage.getItem("user_settings")) === "object"){
			var data = JSON.parse(localStorage.getItem("user_settings"));
			for(var i in Object.keys(data))
				map.user_settings[Object.keys(data)[i]] = data[Object.keys(data)[i]];
		}
	},
	save_settings: function(){
		localStorage.setItem("user_settings",JSON.stringify(map.user_settings));
	},
	init: function(){
		// INITIALIZE ICONS  -- SVGvsevolod
		for(var i in Object.keys(map.map_icons))
			for(var j in Object.keys(map.map_icons[Object.keys(map.map_icons)[i]]))
				map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]] = L.icon(map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]]);
		
		// INITIALIZE MARKERS  -- SVGvsevolod
		for(var i in Object.keys(map.map_markers))
			for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
				for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
					map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k] = L.marker(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]["coordinates"],{icon:map.map_icons[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]});
					map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].bindTooltip();
				}
		
		// INITIALIZE MAP  -- SVGvsevolod
		map.map_object = L.map("leaflet-map",{
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
		L.imageOverlay("assets/map_v2.png",map.constants.map_bounds).addTo(map.map_object);
		map.map_object.fitBounds(map.constants.map_bounds);
		map.map_object.setMaxBounds(map.constants.map_bounds);
		setTimeout(function(){map.map_object.invalidateSize(true)},200);
		
		// LOAD USER SETTINGS  -- SVGvsevolod
		map.load_settings();
		
		if(map.user_settings.minerals.monotite){
			map.toogle_markers(map.map_markers.minerals.monotite);
		}
	}
};