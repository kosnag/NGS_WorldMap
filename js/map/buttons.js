// MINERALS BUTTONS
    map_app.modules.map_module.moduleContents.menu_mineralsButton_monotite_2.addEventListener("click", function(){
        if (JSON.parse(localStorage.getItem("minerals")).monotite == "0"){
            map_app.minerals.monotite=1
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }else if(JSON.parse(localStorage.getItem("minerals")).monotite == "1"){
            map_app.minerals.monotite=0
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }})
    map_app.modules.map_module.moduleContents.menu_mineralsButton_dualomite_2.addEventListener("click", function(){
        if (JSON.parse(localStorage.getItem("minerals")).dualomite == "0"){
            map_app.minerals.dualomite=1
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }else if(JSON.parse(localStorage.getItem("minerals")).dualomite == "1"){
            map_app.minerals.dualomite=0
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }})
    map_app.modules.map_module.moduleContents.menu_mineralsButton_trinite_2.addEventListener("click", function(){
        if (JSON.parse(localStorage.getItem("minerals")).trinite == "0"){
            map_app.minerals.trinite=1
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }else if(JSON.parse(localStorage.getItem("minerals")).trinite == "1"){
            map_app.minerals.trinite=0
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }})
    map_app.modules.map_module.moduleContents.menu_mineralsButton_photonChunk_2.addEventListener("click", function(){
        if (JSON.parse(localStorage.getItem("minerals")).photonChunk == "0"){
            map_app.minerals.photonChunk=1
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }else if(JSON.parse(localStorage.getItem("minerals")).photonChunk == "1"){
            map_app.minerals.photonChunk=0
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }})
    map_app.modules.map_module.moduleContents.menu_mineralsButton_photonQuartz_2.addEventListener("click", function(){
        if (JSON.parse(localStorage.getItem("minerals")).photonQuartz == "0"){
            map_app.minerals.photonQuartz=1
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }else if(JSON.parse(localStorage.getItem("minerals")).photonQuartz == "1"){
            map_app.minerals.photonQuartz=0
            localStorage.setItem("minerals",JSON.stringify(map_app.minerals))
        }})