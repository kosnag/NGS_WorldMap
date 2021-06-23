let map_url = "assets/map_v1.jpg" 
let map = L.map("leaflet-app",{
	crs: L.CRS.Simple,
	minZoom: -3,
	noWrap: true
	});
	
//let map_bounds = [[0,0],[12288,12288]];
//let fit_map_bounds = [[0,0],[12288-4715,12288-4715]];
let map_bounds = [[0,0],[4715,4715]];
let fit_map_bounds = map_bounds;

let map_img = L.imageOverlay(map_url,map_bounds).addTo(map);
    map.fitBounds(fit_map_bounds);