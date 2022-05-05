const boundNorth = 0; 
const boundEast = 2048;
const boundWest = 0;
const boundSouth = -2048;

const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
const center = [boundSouth/2, boundEast/2];

window.tileLayer = L.tileLayer("../../assets/images/tiles/{z}/{y}-{x}.png", {
    bounds: bounds,
    attribution: '<a href="#" onclick="document.cookie=\'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\'; window.location.reload()">Logout</a>',
    tileSize: 1024,
    noWrap: true
})

var map = L.map(document.getElementsByTagName("map")[0], {
	zoom: 0,
	minZoom: 0,
	maxZoom: 3,
    crs: L.CRS.Simple,
    maxBounds: bounds,
    center: center,
    maxBoundsViscosity: 0.5,
    doubleClickZoom: false,
    layers: [window.tileLayer]
});