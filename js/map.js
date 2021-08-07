// MAP MAIN JS OBJECT  -- SVGvsevolod
var map = {
	// MAP DATA LOADED FROM JSON  -- SVGvsevolod
	
	// MAP MAIN OBJECT  -- SVGvsevolod
	map_object: undefined,
	
	// MAP FUNCTIONS  -- SVGvsevolod
	toogle_marker: function(marker){
		if(map.map_object.hasLayer(marker))
			map.map_object.removeLayer(marker);
		else
			marker.addTo(map.map_object);
	},
	toogle_markers: function(category){
		if(category instanceof Array && category.length)
			for(var i in category)
				map.toogle_marker(category[i]);
	},
	switch_marker: function(marker){
		if(marker.id.includes("box")){
			if(marker.getIcon()===map.map_icons.boxes.redBox){
				marker.setIcon(map.map_icons.boxes.redBoxChecked);
				map.user_settings.checked.redBox[map.user_settings.checked.redBox.length]=marker.id;
				map.save_settings();
			}else{
				marker.setIcon(map.map_icons.boxes.redBox);
				var mark = map.user_settings.checked.redBox.indexOf(marker.id);
				map.user_settings.checked.redBox.splice(mark,1);
				map.save_settings();
			}
		}
		if(marker.id.includes("datapod")){
			if(marker.getIcon()===map.map_icons.other.datapod){
				marker.setIcon(map.map_icons.other.datapodChecked);
				map.user_settings.checked.datapod[map.user_settings.checked.datapod.length]=marker.id;
				map.save_settings();
			}else{
				marker.setIcon(map.map_icons.other.datapod);
				var mark = map.user_settings.checked.datapod.indexOf(marker.id);
				map.user_settings.checked.datapod.splice(mark,1);
				map.save_settings();
			}
		}
	},
	update_locale: function(){
		for(var i in Object.keys(map.map_markers))
			for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
				for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
					if(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]._tooltip){
						var tooltip = "";
						if(map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]] && typeof map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]] === "string")
							tooltip+=map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]];
						if(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id && typeof map.map_names_strings[Object.keys(map.map_markers)[i]] === "object" && typeof map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id === "string" && map_app.locale.strings[map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]] && typeof map_app.locale.strings[map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]] === "string")
							tooltip+=" | "+map_app.locale.strings[map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]];
						map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].setTooltipContent(tooltip);
					}
					if(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]._popup)
						map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]._popup.getContent().setInfo({
							category: map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]],
							name: map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id],
							popup_data: map.map_popup_data[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]
						});
				}
		for(var i in Object.keys(map.map_sections))
			for(var j in Object.keys(map.map_sections[Object.keys(map.map_sections)[i]]))
				if(map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]]._popup)
					map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]]._popup.getContent().setInfo({
						name: map.map_names_strings.sections[Object.keys(map.map_sections)[i]][map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].id],
						popup_data: map.map_popup_data.sections[Object.keys(map.map_sections)[i]][map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].id]
					});
	},
	load_settings: function(){
		if(localStorage.getItem("user_settings") && typeof JSON.parse(localStorage.getItem("user_settings")) === "object"){
			var data = JSON.parse(localStorage.getItem("user_settings"));
			for(var i in Object.keys(data))
				map.user_settings[Object.keys(data)[i]] = data[Object.keys(data)[i]];
		}
		for(var i in map.user_settings.checked.redBox){
			for(var j in map.map_markers.boxes.redBox){
				if(map.map_markers.boxes.redBox[j].id===map.user_settings.checked.redBox[i]){
					map.map_markers.boxes.redBox[j].setIcon(map.map_icons.boxes.redBoxChecked);
				}
			}
		}
		for(var i in map.user_settings.checked.datapod){
			for(var j in map.map_markers.other.datapod){
				if(map.map_markers.other.datapod[j].id===map.user_settings.checked.datapod[i]){
					map.map_markers.other.datapod[j].setIcon(map.map_icons.other.datapodChecked);
				}
			}
		}
	},
	save_settings: function(){
		localStorage.setItem("user_settings",JSON.stringify(map.user_settings));
	},
	init: function(additional_init){
		// UNIVERSAL PARSE DATA FUNCTION  -- SVGvsevolod
		var set_data = function(data,target){
			for(var i in Object.keys(data)){
				if(!target[Object.keys(data)[i]])
					target[Object.keys(data)[i]] = {};
				if(typeof data[Object.keys(data)[i]]==="object"&&!(data[Object.keys(data)[i]] instanceof Array))
					set_data(data[Object.keys(data)[i]],target[Object.keys(data)[i]]);
				else
					target[Object.keys(data)[i]]=data[Object.keys(data)[i]];
			}
		};
		// LOAD POPUP DATA  -- SVGvsevolod
		nekoapp.system.xhr().load("assets/data.json",{
			onload: function(){
				set_data(JSON.parse(this.responseText),map);
				
				// INITIALIZE ICONS  -- SVGvsevolod
				for(var i in Object.keys(map.map_icons))
					for(var j in Object.keys(map.map_icons[Object.keys(map.map_icons)[i]]))
						map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]] = L.icon(map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]]);
					
				// INITIALIZE MARKERS  -- SVGvsevolod
				for(var i in Object.keys(map.map_markers))
					for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
						for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
							var marker = map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k];
							map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k] = L.marker(marker.coordinates,{icon:map.map_icons[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]});
							if(marker.id && typeof marker.id === "string")map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id = marker.id;
							if(marker.tooltip)map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].bindTooltip(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k],{"direction":"top"});
							if(marker.popup)map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].bindPopup(nekoapp.create.object(map_app,map_app.preferences.elements.map_popup_element));
							if(marker.markable)map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].on("contextmenu",function(){map.switch_marker(this);})
							map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].on("dblclick",function(){console.log(this)})
						}
				// INITIALIZE SECTIONS
				for(var i in Object.keys(map.map_sections))
					for(var j in Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])){
						var section = map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]];
						switch(section.type){
							case "lobby":
								var sectionColorByType = "blue"
								break;
							case "gathering":
								var sectionColorByType = "green"
								break;
							case "combat":
								var sectionColorByType = "red"
								break;
							case "cave":
								var sectionColorByType = "orange"
								break;
						}
						map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]] = L.polygon(section.coordinates,{fillColor:sectionColorByType,color:"lightblue",weight:"1"});
						if(section.id && typeof section.id)map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].id = section.id;
						if(section.popup){
							var popup = nekoapp.create.object(map_app,map_app.preferences.elements.map_popup_element);
							map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].bindPopup(popup);
							popup.popup_id = section.id;
							popup.popup_tier = 0;
							popup.setAttribute("popup-id",section.id);
							popup.initTiers({
								name: map.map_names_strings.sections[Object.keys(map.map_sections)[i]][map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].id],
								popup_data: map.map_popup_data.sections[Object.keys(map.map_sections)[i]][map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].id]
							});
						}
						map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].setStyle({fillOpacity:0,opacity:.25});
						map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].on("mouseover",function(){this.setStyle({fillOpacity:.2,opacity:.75})});
						map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].on("mouseout",function(){this.setStyle({fillOpacity:0,opacity:.25})});
					}
				// INITIALIZE MAP  -- SVGvsevolod
				map.map_object = L.map("leaflet-map",{
					crs: L.CRS.Simple,
					minZoom: "-3",
					maxZoom: "0",
					zoomControl: false,
					attributionControl: false,
					keyboard: false,
					maxBoundsViscosity: "0.5", 
					boxZoom: false,
					zoomDelta: "0.5"
				});
				L.imageOverlay("assets/map_v3.png",map.constants.map_bounds).addTo(map.map_object);
				map.map_object.fitBounds(map.constants.map_bounds);
				map.map_object.setMaxBounds(map.constants.map_max_bounds);
			
				// LOAD USER SETTINGS  -- SVGvsevolod
				map.load_settings();
			
				// DISPLAY ALL MARKERS ENABLED IN USER SETTINGS  -- SVGvsevolod
				for(var i in Object.keys(map.map_markers))
					for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
						if(map.user_settings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]])
							map.toogle_markers(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]);
			
				for(var i in Object.keys(map.map_sections))
					for(var j in Object.keys(map.map_sections[Object.keys(map.map_sections)[i]]))
						map.map_sections[Object.keys(map.map_sections)[i]][Object.keys(map.map_sections[Object.keys(map.map_sections)[i]])[j]].addTo(map.map_object)

				setTimeout(function(){
					// SET MAP VIEW AND ZOOM FROM USER SETTINGS  -- SVGvsevolod
					map.map_object.setView(map.user_settings.map_view.center);
					map.map_object.setZoom(map.user_settings.map_view.zoom);
					map.map_object.invalidateSize(true);
				
					// EVENT TO GET MAP VIEW CENTER AND ZOOM  -- SVGvsevolod
					map.map_object.on("moveend",function(event){
						map.user_settings.map_view.center = [event.target.getCenter().lat,event.target.getCenter().lng];
						map.user_settings.map_view.zoom = event.target.getZoom();
						map.save_settings();
					});
					
					// ADDITIONAL INIT FROM CALLBACK FUNCTION  -- SVGvsevolod
					additional_init();
				},250);
				
				// INITIALIZE AND LOADING LOCALES
				map.update_locale();
				/*
				if (new Date().getUTCHours()>7) // если время большк семи часов
					var day = new Date().getUTCDay(); // то сегодняшний день
				else
					var day = !new Date().getUTCDay()?6:new Date().getUTCDay()-1 // иначе вчерашний
				// DAY DATA CHOOSING OPTIMIZATION  -- SVGvsevolod 
				var days = ["7_sunday","1_monday","2_tuesday","3_wednesday","4_thursday","5_friday","6_saturday"];
				nekoapp.system.xhr().load("assets/data/"+days[day]+".json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
				*/
			}
		});
	}
};