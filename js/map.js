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
	update_locale: function(){
		for(var i in Object.keys(map.map_markers))
			for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
				for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
					if(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]._tooltip){
						var tooltip = "";
						if(map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]] && typeof map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]] === "string")
							tooltip+=map_app.locale.strings[map.map_category_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]];
						if(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id && typeof map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id === "string" && map_app.locale.strings[map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]] && typeof map_app.locale.strings[map.map_names_strings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id]] === "string")
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
	},
	load_settings: function(){
		if(localStorage.getItem("user_settings") && typeof JSON.parse(localStorage.getItem("user_settings")) === "object"){
			var data = JSON.parse(localStorage.getItem("user_settings"));
			for(var i in Object.keys(data))
				map.user_settings[Object.keys(data)[i]] = data[Object.keys(data)[i]];
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
		nekoapp.system.xhr().load("assets/data/map.json",{
			onload: function(){
				set_data(JSON.parse(this.responseText),map);
				
				var init2 = function(data,additional_init){	
					set_data(data,map);

					// INITIALIZE ICONS  -- SVGvsevolod
					for(var i in Object.keys(map.map_icons))
						for(var j in Object.keys(map.map_icons[Object.keys(map.map_icons)[i]]))
							map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]] = L.icon(map.map_icons[Object.keys(map.map_icons)[i]][Object.keys(map.map_icons[Object.keys(map.map_icons)[i]])[j]]);
					
					// INITIALIZE MARKERS  -- SVGvsevolod
					for(var i in Object.keys(map.map_markers))
						for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
							for(var k in map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]){
								var marker = map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k];
								map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k] = L.marker(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k]["coordinates"],{icon:map.map_icons[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]});
								if(marker.id && typeof marker.id === "string")map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].id = marker.id;
								if(marker.tooltip)map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].bindTooltip();
								if(marker.popup)map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]][k].bindPopup(nekoapp.create.object(map_app,map_app.preferences.elements.map_popup_element));
							}
					// INITIALIZE SECTIONS
					for(var i in Object.keys(map.sections))
						for(var j in Object.keys(map.sections[Object.keys(map.sections)[i]])){

							let sectionColor = map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]]["type"]
							switch(sectionColor){
								case "lobby":
									var sectionColorByType = "blue"
									break;
								case "explore":
									var sectionColorByType = "green"
									break;
								case "battle":
									var sectionColorByType = "red"
									break;
							}

							map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]] = L.polygon(map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]]["coordinates"],{fillColor:sectionColorByType,color:"lightblue",weight:"1"})

							map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]].setStyle({fillOpacity:0,opacity:.25})

							map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]].on("mouseover",function(){this.setStyle({fillOpacity:.2,opacity:.75})})
							map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]].on("mouseout",function(){this.setStyle({fillOpacity:0,opacity:.25})})

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
					L.imageOverlay("assets/map_v2.png",map.constants.map_bounds).addTo(map.map_object);
					map.map_object.fitBounds(map.constants.map_bounds);
					map.map_object.setMaxBounds(map.constants.map_max_bounds);
			
					// LOAD USER SETTINGS  -- SVGvsevolod
					map.load_settings();
			
					// DISPLAY ALL MARKERS ENABLED IN USER SETTINGS  -- SVGvsevolod
					for(var i in Object.keys(map.map_markers))
						for(var j in Object.keys(map.map_markers[Object.keys(map.map_markers)[i]]))
							if(map.user_settings[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]])
								map.toogle_markers(map.map_markers[Object.keys(map.map_markers)[i]][Object.keys(map.map_markers[Object.keys(map.map_markers)[i]])[j]]);
			
					for(var i in Object.keys(map.sections))
						for(var j in Object.keys(map.sections[Object.keys(map.sections)[i]]))
							map.sections[Object.keys(map.sections)[i]][Object.keys(map.sections[Object.keys(map.sections)[i]])[j]].addTo(map.map_object)

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
				}
				if (new Date().getUTCHours()>7) // если время большк семи часов
					var day = new Date().getUTCDay(); // то сегодняшний день
				else
					var day = !new Date().getUTCDay()?6:new Date().getUTCDay()-1 // иначе вчерашний
					switch(day){
					case 1:
						nekoapp.system.xhr().load("assets/data/1_monday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 2:
						nekoapp.system.xhr().load("assets/data/2_tuesday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 3:
						nekoapp.system.xhr().load("assets/data/3_wednesday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 4:
						nekoapp.system.xhr().load("assets/data/4_thursday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 5:
						nekoapp.system.xhr().load("assets/data/5_friday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 6:
						nekoapp.system.xhr().load("assets/data/6_saturday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
					case 0:
						nekoapp.system.xhr().load("assets/data/7_sunday.json",{onload: function(){init2(JSON.parse(this.responseText),additional_init)}});
						break;
				}
			}
		});
	}
};