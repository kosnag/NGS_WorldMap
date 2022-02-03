const popup_content_form = document.createElement("form")
popup_content_form.setAttribute("method","post");
			
const popup_content_select = document.createElement("select")
popup_content_select.addEventListener("change", ()=>{});
popup_content_form.appendChild(popup_content_select)

for (let i = 0; i < optionslist.length; i++){
    var element = document.createElement("option")
    element.setAttribute("value",optionslist[i]["value"])
    element.innerHTML=optionslist[i]["inner"]
    popup_content_select.appendChild(element)
}

var latlng_cont = document.createElement("div")
popup_content_form.appendChild(latlng_cont)

var popup = L.popup();
function onMapClick(e) {
    latlng_variable = "Lat:"+e.latlng.lat+"<br>"+"Lng:"+e.latlng.lng
    latlng_cont.innerHTML=latlng_variable
    popup
        .setLatLng(e.latlng)
        .setContent(popup_content_form)
        .openOn(map);
}
map.on('click', onMapClick);