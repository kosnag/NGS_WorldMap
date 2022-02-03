const popup_content_form = document.createElement("form")
popup_content_form.setAttribute("method","post");
			
const popup_content_select = document.createElement("select")
popup_content_select.addEventListener("change", ()=>{});
popup_content_form.appendChild(popup_content_select)

const popup_content_options = [
    {"value":"1", "inner":"1"},
    {"value":"2", "inner":"2"},
    {"value":"3", "inner":"3"},
    {"value":"4", "inner":"4"},
    {"value":"5", "inner":"5"}
]
for (let i = 0; i < popup_content_options.length; i++){
    var element = document.createElement("option")
    element.setAttribute("value",popup_content_options[i]["value"])
    element.innerHTML=popup_content_options[i]["inner"]
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