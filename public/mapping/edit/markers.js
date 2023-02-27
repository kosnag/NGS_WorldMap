var groups = {
    minerals: L.layerGroup(),
    food: {
        fruits: L.layerGroup(),
        seafood: L.layerGroup(),
        vegetables: L.layerGroup()
    },
    containers: {
        red: L.layerGroup()
    },
    other: {
        bgm: L.layerGroup(),
        datapods: L.layerGroup(),
        mischief: L.layerGroup(),
        stellarGraces: L.layerGroup(),
        veterans: L.layerGroup()
    }
}

var itemList = {
    minerals: [
        {"id":"dualomite", "string":"Dualomite", "color":"purple"},
        {"id":"monotite", "string":"Monotite", "color":"magenta"},
        {"id":"photonchunk", "string":"Photon Chunk", "color":"blue"},
        {"id":"photonquartz", "string":"Photon Quartz", "color":"lightblue"},
        {"id":"tetracite", "string":"Tetracite", "color":"orange"},
        {"id":"trinite", "string":"Trinite", "color":"gray"},
        {"id":"pentalite", "string":"Pentalite", "color":"white"},
        {"id":"blizzardium", "string":"Blizzardium", "color":"green"},
        {"id":"photonscale", "string":"Photon Scale", "color":"pink"},
        {"id":"randomite", "string":"Randomite", "color":"gold"},
        {"id":"inferium", "string":"Inefernium", "color":"green"},
        {"id":"hexakite", "string":"Hexakite", "color":"pink"},
    ],
    food: {
        fruits: [
            {"id":"aelio_apple", "string":"Rich Aelio Apple", "color":"green"},
            {"id":"aelio_peach", "string":"Light Aelio Peach", "color":"black"},
            {"id":"aelio_pear", "string":"Crisp Aelio Pear", "color":"yellow"},
            {"id":"aelio_banana", "string":"Robust Aelio Banana", "color":"red"},
            {"id":"retem_cherries", "string":"Rich Retem Cherry", "color":"green"},
            {"id":"retem_mango", "string":"Light Retem Mango", "color":"black"},
            {"id":"retem_carambola", "string":"Crisp Retem Carambola", "color":"yellow"},
            {"id":"retem_strawberry", "string":"Robust Retem Strawberry", "color":"red"},
            {"id":"kvaris_persimmon", "string":"Rich Kvaris Persimmon", "color":"green"},
            {"id":"kvaris_plum", "string":"Light Kvaris Plum", "color":"black"},
            {"id":"kvaris_guava", "string":"Crisp Kvaris Guava", "color":"yellow"},
            {"id":"kvaris_akebia", "string":"Robust Kvaris Akebia", "color":"red"},
            {"id":"kvaris_persimmonnotable", "string":"Notable Kvaris Persimmon", "color":"gold"},
            {"id":"stia_banana", "string":"Rich Stia Banana", "color":"green"},
            {"id":"stia_apple", "string":"Light Stia Apple", "color":"black"},
            {"id":"stia_mango", "string":"Crisp Stia Mango", "color":"yellow"},
            {"id":"stia_plum", "string":"Robust Stia Plum", "color":"red"},
            {"id":"stia_carambola", "string":"Famous Stia Carambola", "color":"gold"},
        ],
        seafood: [
            {"id":"aelio_clam", "string":"Rich Aelio Clam ", "color":"green"},
            {"id":"aelio_turbanshell", "string":"Light Aelio Turban Shell", "color":"black"},
            {"id":"aelio_crab", "string":"Crisp Aelio Crab", "color":"yellow"},
            {"id":"aelio_lobster", "string":"Robust Aelio Lobster", "color":"red"},
            {"id":"retem_scallop", "string":"Rich Retem Scallop", "color":"green"},
            {"id":"retem_seaslug", "string":"Light Retem Sea Slug", "color":"black"},
            {"id":"retem_urchin", "string":"Crisp Retem Sea Urchin", "color":"yellow"},
            {"id":"retem_hermitcrab", "string":"Robust Retem Hermit Crab", "color":"red"},
            {"id":"kvaris_snail", "string":"Rich Kvaris Snail", "color":"green"},
            {"id":"kvaris_octopus", "string":"Light Kvaris Octopus", "color":"black"},
            {"id":"kvaris_squid", "string":"Crisp Kvaris Squid", "color":"yellow"},
            {"id":"kvaris_crayfish", "string":"Robust Kvaris Crayfish", "color":"red"},
            {"id":"kvaris_squidnotable", "string":"Notable Kvaris Squid", "color":"gold"},
            {"id":"stia_hermitcrab", "string":"Rich Stia Hermit Crab", "color":"green"},
            {"id":"stia_seaslug", "string":"Light Stia Sea Slug", "color":"black"},
            {"id":"stia_octopus", "string":"Crisp Stia Octopus", "color":"yellow"},
            {"id":"stia_turbanshell", "string":"Robust Stia Turban Shell", "color":"red"},
            {"id":"stia_crab", "string":"Famous Stia Crab", "color":"gold"},
        ],
        vegetables: [
            {"id":"aelio_herb", "string":"Rich Aelio Herb", "color":"green"},
            {"id":"aelio_mushroom", "string":"Light Aelio Mushroom", "color":"black"},
            {"id":"aelio_tomato", "string":"Crisp Aelio Tomato", "color":"yellow"},
            {"id":"aelio_turnip", "string":"Robust Aelio Turnip", "color":"red"},
            {"id":"retem_eggplant", "string":"Rich Retem Round Eggplant", "color":"green"},
            {"id":"retem_cranberries", "string":"Light Retem Cranberries", "color":"black"},
            {"id":"retem_mushroom", "string":"Crisp Retem Mushroom", "color":"yellow"},
            {"id":"retem_cauliflower", "string":"Robust Retem Cauliflower", "color":"red"},
            {"id":"kvaris_carrot", "string":"Rich Kvaris Carrot", "color":"green"},
            {"id":"kvaris_cabbage", "string":"Light Kvaris Cabbage", "color":"black"},
            {"id":"kvaris_mushroom", "string":"Crisp Kvaris Mushroom", "color":"yellow"},
            {"id":"kvaris_onion", "string":"Robust Kvaris Onion", "color":"red"},
            {"id":"stia_herb", "string":"Rich Stia Herb", "color":"green"},
            {"id":"stia_tomato", "string":"Light Stia Tomato", "color":"black"},
            {"id":"stia_cauliflower", "string":"Crisp Stia Cauliflower", "color":"yellow"},
            {"id":"stia_cabbage", "string":"Robust Stia Cabbage", "color":"red"},
            {"id":"stia_mushroom", "string":"Famous Stia Mushrooms", "color":"gold"},
        ]
    }
}
var itemListFetch = {
    minerals: ()=>{var list = "";
        for(var i=0; i<itemList.minerals.length; i++){
            list+="mineral__"+itemList.minerals[i].id+"|"
        }
        return list
    },
    fruits: ()=>{var list = "";
        for(var i=0; i<itemList.food.fruits.length; i++){
            list+="food__"+itemList.food.fruits[i].id+"|"
        }
        return list
    },
    seafood: ()=>{var list = "";
        for(var i=0; i<itemList.food.seafood.length; i++){
            list+="food__"+itemList.food.seafood[i].id+"|"
        }
        return list
    },
    vegetables: ()=>{var list = "";
        for(var i=0; i<itemList.food.vegetables.length; i++){
            list+="food__"+itemList.food.vegetables[i].id+"|"
        }
        return list
    },
};
//Minerals (Ores)
fetch("../../api/read.php?multi="+itemListFetch.minerals()).then((response)=>response.json()).then(data=>{if(data !== null){
    for(var x=0; x<itemList.minerals.length; x++){
        for (let y=0; y<data[x].length; y++){
            new L.circle([data[x][y].lat,data[x][y].lng],4,{"color":itemList.minerals[x].color,"fillColor":"black","fillOpacity":1,"weight":4}).bindTooltip(itemList.minerals[x].string+' | ID: '+data[x][y].id,{"direction":"top"}).addTo(groups.minerals)
        };
    };
}});
//Food (Fruits)
fetch("../../api/read.php?multi="+itemListFetch.fruits()).then((response)=>response.json()).then(data=>{if(data !== null){
    for(var x=0; x<itemList.food.fruits.length; x++){
        for (let y=0; y<data[x].length; y++){
            new L.circle([data[x][y].lat,data[x][y].lng],4,{"color":"darkgreen","fillColor":itemList.food.fruits[x].color,"fillOpacity":1,"weight":4}).bindTooltip(itemList.food.fruits[x].string+' | ID: '+data[x][y].id,{"direction":"top"}).addTo(groups.food.fruits)
        };
    };
}});
//Food (Sea)
fetch("../../api/read.php?multi="+itemListFetch.seafood()).then((response)=>response.json()).then(data=>{if(data !== null){
    for(var x=0; x<itemList.food.seafood.length; x++){
        for (let y=0; y<data[x].length; y++){
            new L.circle([data[x][y].lat,data[x][y].lng],4,{"color":"blue","fillColor":itemList.food.seafood[x].color,"fillOpacity":1,"weight":4}).bindTooltip(itemList.food.seafood[x].string+' | ID: '+data[x][y].id,{"direction":"top"}).addTo(groups.food.seafood)
        }
    }
}});
//Food (Vegetables)
fetch("../../api/read.php?multi="+itemListFetch.vegetables()).then((response)=>response.json()).then(data=>{if(data !== null){
    for(var x=0; y<itemList.food.vegetables.length; x++){
        for (let y=0; i<data[x].length; y++){
            new L.circle([data[x][y].lat,data[x][y].lng],4,{"color":"brown","fillColor":itemList.food.vegetables[x].color,"fillOpacity":1,"weight":4}).bindTooltip(itemList.food.vegetables[x].string+' | ID: '+data[x][y].id,{"direction":"top"}).addTo(groups.food.vegetables)
        }
    }
}});

fetch("../../api/read.php?table=container__red").then((response)=>response.json()).then(data=>{if(data !== null){
    for (let i = 0; i < data.length; i++){
        new L.circle([data[i].lat,data[i].lng],4,{"color":"red","fillColor":"gray","fillOpacity":1,"weight":4}).bindTooltip('Red Container | ID: '+data[i].id,{"direction":"top"}).addTo(groups.containers.red)
    }
}});

//OTHER
fetch("../../api/read.php?table=other__musicplace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"pink","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('BGM Easter Egg | ID: '+data[i].string,{"direction":"top"}).addTo(groups.other.bgm)
}}})
fetch("../../api/read.php?table=other__datapod").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"magenta","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Datapod | ID: '+data[i].string,{"direction":"top"}).addTo(groups.other.datapods)
}}})
fetch("../../api/read.php?table=other__mischief").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"orange","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Mischief Symbol | ID: '+data[i].id,{"direction":"top"}).addTo(groups.other.mischief)
}}})
fetch("../../api/read.php?table=other__stellargrace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"lightblue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Stellar Grace | ID: '+data[i].id+':'+data[i].string,{"direction":"top"}).addTo(groups.other.stellarGraces)
}}})
fetch("../../api/read.php?table=other__veteran").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    new L.circle([data[i].lat,data[i].lng],4,{"color":"blue","fillColor":"red","fillOpacity":1,"weight":4}).bindTooltip('Veteran | ID: '+data[i].id+':'+data[i].string,{"direction":"top"}).addTo(groups.other.veterans)
}}})


var baseLayer = {
    "": window.tileLayer
}
var overlayLayers = {
    "Minerals": groups.minerals,
    "Fruits (Food)": groups.food.fruits,
    "Seafood (Food)": groups.food.seafood,
    "Vegetables (Food)": groups.food.vegetables,
    "Red Containers": groups.containers.red,
    "Veterans": groups.other.veterans,
    "Datapods": groups.other.datapods,
    "BGM Easter Eggs": groups.other.bgm,
    "Stellar Graces": groups.other.stellarGraces,
    "Mischief Symbols": groups.other.mischief
};
L.control.layers(baseLayer, overlayLayers, {hideSingleBase: true}).addTo(map)