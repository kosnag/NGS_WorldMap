let monotite = [
    {coordinates:[5438,3109]},{coordinates:[5317,3213]},{coordinates:[5050,3333]},{coordinates:[5024,3278]},{coordinates:[4996,3301]},{coordinates:[4964,3361]},{coordinates:[4862,3301]},{coordinates:[4884,3465]},{coordinates:[4871,3474]},{coordinates:[4858,3510]},{coordinates:[4796,3535]},{coordinates:[4824,3987]},{coordinates:[4544,7423]},{coordinates:[4462,4390]},{coordinates:[4031,5236]},{coordinates:[4010,5269]},{coordinates:[3951,5255]},{coordinates:[3424,2382]},{coordinates:[2955,2202]},{coordinates:[2927,2228]},{coordinates:[2830,2257]},{coordinates:[2791,2220]},{coordinates:[2726,2334]},{coordinates:[2881,2486]},{coordinates:[2784,2458]},{coordinates:[2400,2627]}
];
let monotiteToggle = [];
if (JSON.parse(localStorage.getItem("minerals")).monotite == "1"){
    for (let i = 0; i < monotite.length; i++) {
        monotiteToggle.push(L.marker(monotite[i]["coordinates"],{icon:iconMonotite}).bindTooltip(map_app.locale.strings.mapMineralsTitle).bindPopup("YX: " + monotite[i]["coordinates"]));
        }
    for (let i = 0; i < monotiteToggle.length; i++) {
        monotiteToggle[i].addTo(map);
    }
} else if (JSON.parse(localStorage.getItem("minerals")).monotite == "0"){
    for (let i = 0; i < monotiteToggle.length; i++) {
        map.removeLayer(monotiteToggle[i]);
    }
}