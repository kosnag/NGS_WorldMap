var groups = {
    minerals: L.layerGroup(),
    food: {
        fruits: L.layerGroup(),
        seafood: L.layerGroup(),
        vegetables: L.layerGroup()
    },
    containers: {
        green: L.layerGroup(),
        red: L.layerGroup()
    },
    other: {
        alphareactors: L.layerGroup(),
        bgm: L.layerGroup(),
        datapods: L.layerGroup(),
        mischief: L.layerGroup(),
        stellarGraces: L.layerGroup(),
        veterans: L.layerGroup()
    }
}

//MINERALS
fetch("../../api/read.php?table=mineral__dualomite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"purple","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Dualomite | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__monotite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"magenta","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Monotite | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__photonchunk").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Photon Chunk | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__photonquartz").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"lightblue","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Photon Quartz | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__photonscale").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"pink","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Photon Scate | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__tetracite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"orange","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Tetracite | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})
fetch("../../api/read.php?table=mineral__trinite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"gray","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Trinite | ID:'+data[i].id,{"direction":"top"}).addTo(groups.minerals)
}}})


//FOOD
//FRUIT
fetch("../../api/read.php?table=food__aelio_apple").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Rich Aelio Apple | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__aelio_banana").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Robust Aelio Banana | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__aelio_peach").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Light Aelio Peach | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__aelio_pear").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Crisp Aelio Pear | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__retem_carambola").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Crisp Retem Carambola | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__retem_cherries").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Rich Retem Cherry | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__retem_mango").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Light Retem Mango | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
fetch("../../api/read.php?table=food__retem_strawberry").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"darkgreen","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Robust Retem Strawberry | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.fruits)
}}})
//SEAFOOD
fetch("../../api/read.php?table=food__aelio_clam").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Rich Aelio Clam | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__aelio_crab").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Crisp Aelio Crab | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__aelio_lobster").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Robust Aelio Lobster | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__aelio_turbanshell").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Light Aelio Turban Shell | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__retem_hermitcrab").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Robust Retem Hermit Crab | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__retem_scallop").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Rich Retem Scallop | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__retem_seaslug").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Light Retem Sea Slug | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
fetch("../../api/read.php?table=food__retem_urchin").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Crisp Retem Sea Urchin | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.seafood)
}}})
//VEGETABLE
fetch("../../api/read.php?table=food__aelio_herb").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Rich Aelio Herb | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__aelio_mushroom").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Light Aelio Mushroom | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__aelio_tomato").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Crisp Aelio Tomato | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__aelio_turnip").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Robust Aelio Turnip | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__retem_cauliflower").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"green","fillOpacity":1,"weight":4}).bindTooltip('Robust Retem Cauliflower | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__retem_cranberries").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Light Retem Cranberries | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__retem_eggplant").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip('Rich Retem Round Eggplant | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})
fetch("../../api/read.php?table=food__retem_mushroom").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"brown","fillColor":"yellow","fillOpacity":1,"weight":4}).bindTooltip('Crisp Retem Mushroom | ID:'+data[i].id,{"direction":"top"}).addTo(groups.food.vegetables)
}}})


// CONTAINERS
fetch("../../api/read.php?table=container__green").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"green","fillColor":"gray","fillOpacity":1,"weight":4}).bindTooltip('Green Container | ID:'+data[i].id,{"direction":"top"}).addTo(groups.containers.green)
}}})
fetch("../../api/read.php?table=container__red").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"red","fillColor":"gray","fillOpacity":1,"weight":4}).bindTooltip('Red Container | ID:'+data[i].id,{"direction":"top"}).addTo(groups.containers.red)
}}})


//OTHER
fetch("../../api/read.php?table=other__alphareactor").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"purple","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Alpha Reactor | ID:'+data[i].id,{"direction":"top"}).addTo(groups.other.alphareactors)
}}})
fetch("../../api/read.php?table=other__musicplace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"pink","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('BGM Easter Egg | ID:'+data[i].string,{"direction":"top"}).addTo(groups.other.bgm)
}}})
fetch("../../api/read.php?table=other__datapod").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"magenta","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Datapod | ID:'+data[i].string,{"direction":"top"}).addTo(groups.other.datapods)
}}})
fetch("../../api/read.php?table=other__mischief").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"orange","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Mischief Symbol | ID:'+data[i].id,{"direction":"top"}).addTo(groups.other.mischief)
}}})
fetch("../../api/read.php?table=other__stellargrace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"lightblue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Stellar Grace | ID:'+data[i].id+'|'+data[i].string,{"direction":"top"}).addTo(groups.other.stellarGraces)
}}})
fetch("../../api/read.php?table=other__veteran").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Veteran | ID:'+data[i].string,{"direction":"top"}).addTo(groups.other.veterans)
}}})



var baseLayer = {
    "": window.tileLayer
}
var overlayLayers = {
    "Minerals": groups.minerals,
    "Fruits (Food)": groups.food.fruits,
    "Seafood (Food)": groups.food.seafood,
    "Vegetables (Food)": groups.food.vegetables,
    "Green Containers": groups.containers.green,
    "Red Containers": groups.containers.red,
    "Veterans": groups.other.veterans,
    "Alpha Reactors": groups.other.alphareactors,
    "Datapods": groups.other.datapods,
    "BGM Easter Eggs": groups.other.bgm,
    "Stellar Graces": groups.other.stellarGraces,
    "Mischief Symbols": groups.other.mischief
};
L.control.layers(baseLayer, overlayLayers, {hideSingleBase: true}).addTo(map)