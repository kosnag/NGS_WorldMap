// MAP MAIN JS OBJECT  -- SVGvsevolod
var map = {
	// MAP DATA  -- SVGvsevolod
	constants: {
		map_bounds: [[0,0],[7321,7321]]
	},
	map_icons: {
		main: {
			cocoon: {iconUrl: "assets/markers/landmarks/cocoon.png", iconSize: [40,40], iconAnchor:[20,20], popupAnchor: [0,-20]},
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
			greenBox: {iconUrl: "assets/markers/containers/whiteBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]},
			redBox: {iconUrl: "assets/markers/containers/redBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]},
			goldBox: {iconUrl: "assets/markers/containers/goldBox.png", iconSize: [18,18], iconAnchor: [9,9], popupAnchor: [0,-9]}
		}
	},
	map_markers: {
		main: {
			cocoon: [
				{coordinates:[3333,2606],popup:"ID-1"},
				{coordinates:[5521,2442],popup:"ID-2"},
				{coordinates:[4436,4107],popup:"ID-3"},
				{coordinates:[1003,4935],popup:"ID-4"},
				{coordinates:[926,2327],popup:"ID-5"},
				{coordinates:[5248,257],popup:"ID-6"},
				{coordinates:[4965,5879],popup:"ID-7"},
				{coordinates:[1961,5248],popup:"ID-8"}
			]
		},
		minerals: {
			monotite: [{coordinates:[5438,3109]},{coordinates:[5317,3213]},{coordinates:[5050,3333]},{coordinates:[5024,3278]},{coordinates:[4996,3301]},{coordinates:[4964,3361]},{coordinates:[4862,3301]},{coordinates:[4884,3465]},{coordinates:[4871,3474]},{coordinates:[4858,3510]},{coordinates:[4796,3535]},{coordinates:[4824,3987]},{coordinates:[4544,7423]},{coordinates:[4462,4390]},{coordinates:[4031,5236]},{coordinates:[4010,5269]},{coordinates:[3951,5255]},{coordinates:[3424,2382]},{coordinates:[2955,2202]},{coordinates:[2927,2228]},{coordinates:[2830,2257]},{coordinates:[2791,2220]},{coordinates:[2726,2334]},{coordinates:[2881,2486]},{coordinates:[2784,2458]},{coordinates:[2400,2627]}],
			dualomite: [{coordinates:[5525,353]},{coordinates:[5457,356]},{coordinates:[5406,1038]},{coordinates:[5248,1143]},{coordinates:[5030,1212]},{coordinates:[4665,681]},{coordinates:[4585,640]},{coordinates:[4638,873]},{coordinates:[4537,948]},{coordinates:[4312,679]},{coordinates:[4361,618]},{coordinates:[3745,1181]},{coordinates:[3622,1333]},{coordinates:[2816,2070]},{coordinates:[2605,2089]},{coordinates:[2546,2100]},{coordinates:[2185,1812]},{coordinates:[1998,1790]},{coordinates:[1804,1612]},{coordinates:[2108,1476]},{coordinates:[1938,1161]},{coordinates:[1514,1477]},{coordinates:[1485,1554]},{coordinates:[1027,1420]},{coordinates:[1014,1352]},{coordinates:[1107,1737]},{coordinates:[1333,1878]},{coordinates:[1003,1968]},{coordinates:[854,1930]},{coordinates:[598,2188]},{coordinates:[612,2278]},{coordinates:[700,2272]},{coordinates:[1397,2162]},{coordinates:[1437,2432]},{coordinates:[1170,2648]},{coordinates:[911,2701]},{coordinates:[992,2973]},{coordinates:[1058,3142]},{coordinates:[1252,2973]},{coordinates:[1437,2999]},{coordinates:[1523,3087]},{coordinates:[1600,3184]},{coordinates:[900,4085]},{coordinates:[917,4388]},{coordinates:[975,4393]},{coordinates:[966,4496]},{coordinates:[1256,4621]},{coordinates:[1545,4518]},{coordinates:[1947,4619]},{coordinates:[2035,4984]},{coordinates:[1923,5094]},{coordinates:[1809,5204]},{coordinates:[2002,5242]},{coordinates:[2018,5385]},{coordinates:[1925,5385]},{coordinates:[2211,3889]},{coordinates:[2390,3617]},{coordinates:[2587,3628]},{coordinates:[2185,3314]},{coordinates:[2340,3138]},{coordinates:[2243,3014]},{coordinates:[2161,2950]},{coordinates:[511,333]},{coordinates:[462,637]},{coordinates:[819,592]}],
			trinite: [{coordinates:[6547,1737]},{coordinates:[6399,1644]},{coordinates:[6263,1462]},{coordinates:[6232,1330]},{coordinates:[5954,1247]},{coordinates:[5698,2379]},{coordinates:[5657,2390]},{coordinates:[5520,2240]},{coordinates:[5482,1923]},{coordinates:[5331,1740]},{coordinates:[5267,1649]},{coordinates:[5429,2465]},{coordinates:[5547,2768]},{coordinates:[5144,3004]},{coordinates:[4353,2792]},{coordinates:[4552,1565]},{coordinates:[4658,817]},{coordinates:[3794,1198]},{coordinates:[3444,1280]},{coordinates:[3175,2120]},{coordinates:[2850,2228]},{coordinates:[2825,1947]},{coordinates:[2571,2175]},{coordinates:[1844,2467]},{coordinates:[2129,1423]},{coordinates:[1846,913]},{coordinates:[1866,716]},{coordinates:[1238,1514]},{coordinates:[1052,2391]},{coordinates:[1799,1662]}],
			phChunk: [{coordinates:[5611,1739]},{coordinates:[4935,3306]},{coordinates:[2773,2344]},{coordinates:[2576,2642]},{coordinates:[2142,2896]},{coordinates:[2154,2929]},{coordinates:[2162,3350]},{coordinates:[2293,3493]},{coordinates:[2007,5213]},{coordinates:[1855,5023]},{coordinates:[1812,4506]},{coordinates:[1704,4461]},{coordinates:[1476,4471]},{coordinates:[1378,4288]},{coordinates:[1741,3223]},{coordinates:[1675,3086]},{coordinates:[1657,2978]},{coordinates:[1061,3092]},{coordinates:[1029,3046]},{coordinates:[1029,4133]}],
			phQuartz: [{coordinates:[6494,2084]},{coordinates:[6544,1738]},{coordinates:[6514,1653]},{coordinates:[6467,1633]},{coordinates:[6426,1635]},{coordinates:[6327,1398]},{coordinates:[6289,1379]},{coordinates:[6298,2245]},{coordinates:[6125,2348]},{coordinates:[6085,2433]},{coordinates:[5746,2175]},{coordinates:[5922,1290]},{coordinates:[5612,2516]},{coordinates:[5589,2263]},{coordinates:[5469,2081]},{coordinates:[5533,1962]},{coordinates:[5482,1926]},{coordinates:[5341,1770]},{coordinates:[5266,1763]},{coordinates:[5243,1712]},{coordinates:[5244,1681]},{coordinates:[5307,1636]},{coordinates:[5552,1394]},{coordinates:[5349,3198]},{coordinates:[5203,2996]},{coordinates:[5094,3078]},{coordinates:[5152,3326]},{coordinates:[4813,3643]},{coordinates:[4795,4012]},{coordinates:[4552,2946]},{coordinates:[4569,4872]},{coordinates:[3258,2245]},{coordinates:[3005,2519]},{coordinates:[2748,2474]},{coordinates:[2643,2307]}]
		}
	},
	map_locale_strings: {
		main: {
			cocoon: "mapCocoonTitle"
		},
		minerals: {
			monotite: "mapMonotiteTitle",
			dualomite: "mapMonotiteTitle",
			trinite: "mapMonotiteTitle",
			phChunk: "mapMonotiteTitle",
			phQuartz: "mapMonotiteTitle"
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
		map.map_object.setView([3660.5,3660.5]).setZoom("-2");
		setTimeout(function(){map.map_object.invalidateSize(true)},200);
		
		// LOAD USER SETTINGS  -- SVGvsevolod
		map.load_settings();
		
		if(map.user_settings.minerals.monotite){map.toogle_markers(map.map_markers.minerals.monotite);}
		if(map.user_settings.minerals.dualomite){map.toogle_markers(map.map_markers.minerals.dualomite);}
		if(map.user_settings.minerals.trinite){map.toogle_markers(map.map_markers.minerals.trinite);}
		if(map.user_settings.minerals.phChunk){map.toogle_markers(map.map_markers.minerals.phChunk);}
		if(map.user_settings.minerals.phQuartz){map.toogle_markers(map.map_markers.minerals.phQuartz);}
	}
};