const markers = {
    minerals: [],
    food: {
        aelio: [],
        retem: []
    },
    containers: {
        green: [],
        red: []
    },
    other: {
        veterans: [],
        alphareactors: [],
        datapods: [],
        bgm: [],
        stellarGraces: [],
        mischief: []
    }
}

//MINERALS
fetch("../../api/read.php?table=mineral__dualomite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "purple", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Dualomite | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__monotite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "magenta", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Monotite | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__photonChunk").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Photon Chunk | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__photonQuartz").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "lightblue", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Photon Quartz | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__photonScale").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "pink", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Photon Scate | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__tetracite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "orange", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Tetracite | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=mineral__trinite").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "gray", "fillColor": "black", "fillOpacity": 1}).bindTooltip('Trinite | ID:'+data[i].id);
}}})


// CONTAINERS
fetch("../../api/read.php?table=container__green").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.containers.green[markers.containers.green.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "green", "fillColor": "gray","fillOpacity": 1}).bindTooltip('Green Container | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=container__red").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.containers.red[markers.containers.red.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "red", "fillColor": "gray", "fillOpacity": 1}).bindTooltip('Red Container | ID:'+data[i].id);
}}})


//FOOD
    //FRUIT
fetch("../../api/read.php?table=food__aelio_apple").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Aelio Apple | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_peach").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Aelio Peach | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_pear").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Aelio Pear | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_banana").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Aelio Banana | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_cherries").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Retem Cherry | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_mango").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Retem Mango | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_carambola").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Retem Carambola | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_strawberry").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "darkgreen", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Retem Strawberry | ID:'+data[i].id);
}}})
    //SEAFOOD
fetch("../../api/read.php?table=food__aelio_clam").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Aelio Clam | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_turbanShell").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Aelio Turban Shell | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_crab").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Aelio Crab | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_lobster").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Aelio Lobster | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_scallop").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Retem Scallop | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_seaSlug").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Retem Sea Slug | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_urchin").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Retem Sea Urchin | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_hermitCrab").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Retem Hermit Crab | ID:'+data[i].id);
}}})
    //VEGETABLE
fetch("../../api/read.php?table=food__aelio_herb").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Aelio Herb | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_mushroom").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Aelio Mushroom | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_tomato").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Aelio Tomato | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__aelio_turnip").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.aelio[markers.food.aelio.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Aelio Turnip | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_cauliflower").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Robust Retem Cauliflower | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_cranberries").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Light Retem Cranberries | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_eggplant").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Rich Retem Round Eggplant | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=food__retem_mushroom").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.food.retem[markers.food.retem.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "brown", "fillColor": "green", "fillOpacity": 1}).bindTooltip('Crisp Retem Mushroom | ID:'+data[i].id);
}}})

//OTHER
fetch("../../api/read.php?table=other__alphaReactor").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "purple", "fillColor": "red", "fillOpacity": 1}).bindTooltip('Alpha Reactor | ID:'+data[i].id);
}}})
fetch("../../api/read.php?table=other__datapod").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "magenta", "fillColor": "red", "fillOpacity": 1}).bindTooltip('Datapod | ID:'+data[i].string);
}}})
fetch("../../api/read.php?table=other__veteran").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "blue", "fillColor": "red", "fillOpacity": 1}).bindTooltip('Veteran | ID:'+data[i].string);
}}})
fetch("../../api/read.php?table=other__stellarGrace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "lightblue", "fillColor": "red", "fillOpacity": 1}).bindTooltip('Stellar Grace | ID:'+data[i].id+'|'+data[i].string);
}}})
fetch("../../api/read.php?table=other__musicPlace").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "pink", "fillColor": "red", "fillOpacity": 1}).bindTooltip('BGM Easter Egg | ID:'+data[i].string);
}}})
fetch("../../api/read.php?table=other__mischief").then((response)=>response.json()).then(data=>{if(data !== null){for (let i = 0; i < data.length; i++){
    markers.minerals[markers.minerals.length] = L.circle([data[i].lat,data[i].lng], 4,{"color": "orange", "fillColor": "red", "fillOpacity": 1}).bindTooltip('Mischief Symbols | ID:'+data[i].id);
}}})