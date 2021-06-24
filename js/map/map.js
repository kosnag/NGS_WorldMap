let map_url = "assets/map_v2.png" 
let map = L.map("leaflet-app",{
	crs: L.CRS.Simple,
	minZoom: "-2.5",
    maxZoom: "2.5",
    zoomControl: false,
    attributionControl: false,
    keyboard: false,
    center: [2357,2357],
	noWrap: true,
    maxBoundsViscosity: "1.0"
	});

let map_bounds = [[0,0],[4715,4715]];
let fit_map_bounds = [[0,0],[12288-4715,12288-4715]];

let map_img = L.imageOverlay(map_url,map_bounds).addTo(map);
    map.fitBounds(map_bounds);