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