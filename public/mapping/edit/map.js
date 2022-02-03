const boundNorth = 0; 
const boundEast = 12288/6;
const boundWest = 0;
const boundSouth = -12288/6;
const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
const center = [boundSouth/2, boundEast/2];
var map = L.map(document.getElementsByTagName("map")[0], {
	zoom: 0,
	minZoom: 0,
	maxZoom: 3,
    crs: L.CRS.Simple,
    maxBounds: bounds,
    center: center,
    zoomControl: true,
    attributionControl: false,
    keyboard: true,
    maxBoundsViscosity: 0.5,
    doubleClickZoom: false,
    layers: [
        L.tileLayer("../assets/images/tiles/{z}/{y}-{x}.png", {
            bounds: bounds,
            tileSize: 1024,
            noWrap: true
        })
    ]
});