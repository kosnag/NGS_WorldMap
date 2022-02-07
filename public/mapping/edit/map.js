const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
const center = [boundSouth/2, boundEast/2];

var map = L.map(document.getElementsByTagName("map")[0], {
	zoom: 0,
	minZoom: 0,
	maxZoom: 3,
    crs: L.CRS.Simple,
    center: center,
    zoomControl: true,
    attributionControl: false,
    keyboard: true,
    doubleClickZoom: false,
    layers: [
        L.tileLayer("../../assets/images/tiles/{z}/{y}-{x}.png", {
            bounds: bounds,
            tileSize: 1024,
            noWrap: true
        })
    ]
});