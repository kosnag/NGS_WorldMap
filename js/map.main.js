var map_app = new nekoapp({
    application : document.querySelector("map-app"),
    applicationInfo: {
        nekoappID : "18",
        applicationTitle : "PSO2NGS Interactive Map",
        applicationVersion : "v0.8492",
        applicationURL : "//ngs-map.kosnag.ru/"
    },
    applicationStylesheets : {
        default : "css/map.main.css",
        colors : "css/map.colors.css",
        ui : "css/map.ui.css",
        bs : "css/bootstrap.min.css",
        leaflet : "css/leaflet.css"
    },
    applicationClasses : {
        UIButtonBackground : "map_ui_button_background" ,									//  Class for button background
        UIButtonContent : "map_ui_button_content" ,											//  Class for button content
        UIDefaultButton : "map_ui_default_button" ,											//  Class for default button type
        UIColorButton : "map_ui_color_button" ,												//  Class for color button type
        UIGlassButton : "map_ui_glass_button" ,												//  Class for glass button type
        UIPaneButton : "map_ui_pane_button" ,												//  Class for pane button type
        UICircleButton : "map_ui_circle_button" ,											//  Class for circle button type
		UICheckBoxIcon : "map_ui_checkbox_icon" ,											//  Class for checkbox icon
		UICheckBoxContent : "map_ui_checkbox_content" ,										//  Class for checkbox content
		UIRadioButtonIcon : "map_ui_radiobutton_icon" ,										//  Class for radio button icon
		UIRadioButtonContent : "map_ui_radiobutton_content" ,								//  Class for radio button content
        UITextBoxInput : "map_ui_textbox_input" ,											//  Class for textbox input
        UITextBoxStroke : "map_ui_textbox_stroke" ,											//  Class for textbox stroke
        UIStrokedTextBox : "map_ui_stroked_textbox" ,										//  Class for stroke textbox type
        UISimpleTextBox : "map_ui_simple_textbox" ,											//  Class for simple textbox type
        UIHighlightedTextBox : "map_ui_highlighted_textbox" ,								//  Class for highlighted textbox type
		UIComboBoxValue : "map_ui_combobox_value" ,											//  Class for combobox value
		UIComboBoxIcon : "map_ui_combobox_icon" ,											//  Class for combobox icon
		UIComboBoxOptions : "map_ui_combobox_options" ,										//  Class for combobox options
        headerContainer : "container-fluid",
		headerNavigationItem : "map_head_navigation_item_content" ,							//  Class for header navigation item content
		localeChangeList : "map_localechange_language_list" ,								//  Class for language list in locale change window
        progressBarInner : "map_progress_bar_inner" ,										//  Class for progress bar inner part
		rowSubtext : "map_row_subtext" ,													//  Class for row subtext
		localeBoxIcon : "map_localebox_icon" ,												//  Class for localebox icon
		localeBoxText : "map_localebox_text"												//  Class for localebox text
    },
    applicationElements : {                                                                     //  Defined custom elements for your application
        localizedStringElement : {																//  Element for localized string
            tag : "map-string" ,															//  Tag of your custom element
            prototype : {}																		//  Prototype of your custom element
        } ,
        graphicElement : {																		//  Element for vector graphics
            tag : "map-ui-graphic" ,
            prototype : {}
        } ,
        graphicsLibraryElement : {																//  Element for graphics library
            tag : "map-ui-graphics" ,
            prototype : {}
        } ,
        graphicsSetElement : {																	//  Element for graphics set
            tag : "map-graphicset" ,
            prototype : {}
        } ,
        animationElement : {																	//  Element for animation
            tag : "map-ui-animation" ,
            prototype : {}
        } ,
        animationSpriteElement : {																//  Element for animation sprite
            tag : "map-ui-animation-sprite" ,
            prototype : {}
        } ,
        UIElement : {																			//  Element for User Interface element
            tag : "map-ui-element" ,
            prototype : {}
        } ,
        buttonElement : {																		//  Element for button
            tag : "map-ui-button" ,
            prototype : {}
        } ,
        checkBoxElement : {																		//  Element for checkbox
            tag : "map-ui-checkbox" ,
            prototype : {}
        } ,
        radioButtonElement : {																	//  Element for radio button
            tag : "map-ui-radiobutton" ,
            prototype : {}
        } ,
        textBoxElement : {																		//  Element for textbox
            tag : "map-ui-textbox" ,
            prototype : {}
        } ,
		comboboxElement : {																		//  Element for combobox
			tag : "map-ui-combobox" ,
			prototype : {}
		} ,
        tooltipElement : {																		//  Element for tooltip
            tag : "map-ui-tooltip" ,
            prototype : {}
        } ,
        moduleElement : {																		//  Element for module
            tag : "map-module" ,
            prototype : {}
        } ,
        headerElement : {																		//  Element for header
            tag : "map-head" ,
            prototype : {}
        } ,
        footerElement : {																		//  Element for footer
            tag : "map-footer" ,
            prototype : {}
        } ,
        windowElement : {																		//  Element for window
            tag : "map-window" ,
            prototype : {}
        } ,
		windowTitle : {																			//  Element for window title
			tag : "map-window-title" ,
			prototype : {}
		} ,
        overlayElement : {																		//  Element for overlay
            tag : "map-overlay" ,
            prototype : {}
        } ,
        headerLogoElement : {																	//  Element for header logo
            tag : "map-logo" ,
            prototype : {
                setText : function(){
                    if (this.className !== "navbar-brand")
                    this.className = "navbar-brand"
                    this.innerHTML = map_app.locale.strings.language_title;
                }
            }
        } ,
		headerNavigationElement : {																//  Element for header navigation
			tag : "map-navigation" ,
			prototype : {}
		} ,
		headerNavigationItem : {																//  Element for header navigation item
			tag : "map-navigation-item" ,
			prototype : {}
		} ,
        spinnerElement : {																		//  Element for spinner
            tag : "map-ui-spinner" ,
            prototype : {}
        } ,
        loadScreenElement : {																	//  Element for loading screen
            tag : "map-loading" ,
            prototype : {}
        } ,
        progressBarElement : {																	//  Element for progress bar
            tag : "map-progress" ,
            prototype : {}
        } ,
        alert_element : {
            tag : "alert-window",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let alert_h = document.createElement("h4")
                            alert_h.className = "alert-heading"
                            alert_h.innerHTML = "WORK IN PROGRESS";

                        let alert_p1 = document.createElement("p")
                            alert_p1.innerHTML = "This interactive map are currently in development.";

                        let alert_p2 = document.createElement("hr");

                        let alert_a_style = "color: #1266f1;text-decoration: underline;"

                        let alert_p3 = document.createElement("p");
                            alert_p3.className = "mb-0";
                            let alert_span1 = document.createElement("span")
                                alert_span1.innerHTML = "If you want to help me, please contact with me in "
                            let alert_a1 = document.createElement("a")
                                alert_a1.style = alert_a_style
                                alert_a1.href = "https://twitter.com/kosnag"
                                alert_a1.target = "_blank"
                                alert_a1.innerHTML = "Twitter";
                            let alert_span2 = document.createElement("span")
                                alert_span2.innerHTML = ", ";
                            let alert_a2 = document.createElement("a")
                                alert_a2.style = alert_a_style
                                alert_a2.href = "https://vk.com/kosnag"
                                alert_a2.target = "_blank"
                                alert_a2.innerHTML = "VK";
                            let alert_span3 = document.createElement("span")
                                alert_span3.innerHTML = " or ";
                            let alert_a3 = document.createElement("a")
                                alert_a3.style = alert_a_style
                                alert_a3.id = "alert-tooltip1"
                                alert_a3.innerHTML = "Discord (kosnag#1730)"
                                alert_a3.href = "#"
                                alert_a3.setAttribute("data-bs-toogle","tooltip")
                                alert_a3.setAttribute("data-bs-placement","bottom")
                                alert_a3.setAttribute("data-bs-html","true")
                                alert_a3.setAttribute("data-bs-original-title","<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>");
                            let alert_span4 = document.createElement("span")
                                alert_span4.innerHTML = ". I will be very happy, if you help me! "
                            let alert_a4 = document.createElement("a")
                                alert_a4.style = alert_a_style
                                alert_a4.id = "alert-tooltip2"
                                alert_a4.innerHTML = "Take a hug by Matoi!"
                                alert_a4.href = "#"
                                alert_a4.setAttribute("data-bs-toogle","tooltip")
                                alert_a4.setAttribute("data-bs-placement","bottom")
                                alert_a4.setAttribute("data-bs-html","true")
                                alert_a4.setAttribute("data-bs-original-title","<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/762945798064570398/827230435662233671/2021-04-01_10-08-46-250_Talim_-_Air.png' height='100'>");
                        
                        alert_p3.appendChild(alert_span1)
                        alert_p3.appendChild(alert_a1)
                        alert_p3.appendChild(alert_span2)
                        alert_p3.appendChild(alert_a2)
                        alert_p3.appendChild(alert_span3)
                        alert_p3.appendChild(alert_a3)
                        alert_p3.appendChild(alert_span4)
                        alert_p3.appendChild(alert_a4)

                        let alert_button_close = document.createElement("button")
                            alert_button_close.className = "btn-close"
                            alert_button_close.setAttribute("type", "button")
                            alert_button_close.setAttribute("data-bs-dismiss", "alert")
                            alert_button_close.setAttribute("aria-label", "close");

                        return[alert_h,alert_p1,alert_p2,alert_p3,alert_button_close]
                    }
                ),
                init : function(){
                    const   alertTooltip1 = document.getElementById('alert-tooltip1'),
                            alertTooltip2 = document.getElementById('alert-tooltip2');
                    const   constAlertTooltip1 = new bootstrap.Tooltip(alertTooltip1),
                            constAlertTooltip2 = new bootstrap.Tooltip(alertTooltip2);
                }
            }
        },
        language_menu : {
            tag : "language-menu",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let modal_modelDialog = document.createElement("div")
                            modal_modelDialog.className = "modal-dialog modal-dialog-centered";

                            let modal_modalContent = document.createElement("div")
                                modal_modalContent.className = "modal-content"

                                let modal_content_title = document.createElement("div")
                                    modal_content_title.className = "modal-header"
                                    modal_content_title.innerHTML = "<h5 class='modal-title text-center' id='languageModalLabel'>Choose a language</h5>";
                                
                                let modal_content_body = document.createElement("div")
                                    modal_content_title.className = "modal-body";
                                    
                                    let modal_content_body_buttons = document.createElement("div")
                                        modal_content_body_buttons.className = "d-grid gap-2 mb-3 mx-5"

                                        let modal_content_body_button1 = document.createElement("button")
                                            modal_content_body_button1.setAttribute("type","button")
                                            modal_content_body_button1.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button1.style = "position: relative;"
                                            modal_content_body_button1.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/en-US.svg' height='32px'> <img src='assets/flags/en-UK.svg' height='32px'></span> English (Global)"
                                            modal_content_body_button1.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button1.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'en-US')");
                                            
                                        let modal_content_body_button2 = document.createElement("button")
                                            modal_content_body_button2.setAttribute("type","button")
                                            modal_content_body_button2.className = "btn btn-custom-blue btn-lg disabled"
                                            modal_content_body_button2.style = "position: relative;"
                                            modal_content_body_button2.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/en-US.svg' height='32px'> <img src='assets/flags/en-UK.svg' height='32px'></span> English (Fan-patch)"
                                            modal_content_body_button2.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button2.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'en-AL')");
                                        
                                        let modal_content_body_button3 = document.createElement("button")
                                            modal_content_body_button3.setAttribute("type","button")
                                            modal_content_body_button3.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button3.style = "position: relative;"
                                            modal_content_body_button3.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/ja-JP.svg' height='32px'></span> 日本語"
                                            modal_content_body_button3.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button3.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ja-JP')");
                                        
                                        let modal_content_body_button4 = document.createElement("button")
                                            modal_content_body_button4.setAttribute("type","button")
                                            modal_content_body_button4.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button4.style = "position: relative;"
                                            modal_content_body_button4.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/ru-RU.svg' height='32px'></span> Русский"
                                            modal_content_body_button4.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button4.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ru-RU')");

                                        let modal_content_body_button5 = document.createElement("button")
                                            modal_content_body_button5.setAttribute("type","button")
                                            modal_content_body_button5.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button5.style = "position: relative;"
                                            modal_content_body_button5.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/ko-KR.svg' height='32px'></span> 한국어"
                                            modal_content_body_button5.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button5.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ko-KR')");

                                        let modal_content_body_button6 = document.createElement("button")
                                            modal_content_body_button6.setAttribute("type","button")
                                            modal_content_body_button6.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button6.style = "position: relative;"
                                            modal_content_body_button6.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/pt-PT.svg' height='32px'> <img src='assets/flags/pt-BR.svg' height='32px'></span> Português"
                                            modal_content_body_button6.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button6.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'pt-BR')");

                            
                            modal_modelDialog.appendChild(modal_modalContent)
                                modal_modalContent.appendChild(modal_content_title)
                                modal_modalContent.appendChild(modal_content_body)
                                    modal_content_body.appendChild(modal_content_body_buttons)
                                        modal_content_body_buttons.appendChild(modal_content_body_button1)
                                        modal_content_body_buttons.appendChild(modal_content_body_button2)
                                        modal_content_body_buttons.appendChild(modal_content_body_button3)
                                        modal_content_body_buttons.appendChild(modal_content_body_button4)
                                        modal_content_body_buttons.appendChild(modal_content_body_button5)
                                        modal_content_body_buttons.appendChild(modal_content_body_button6)

                            return[modal_modelDialog]
                    }
                ),

            }
        },
        ngs_map : {
            tag : "ngs-map",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let leaflet_div = document.createElement("div")
                            leaflet_div.className = "col-9"
                            leaflet_div.id = "leaflet-map"
                            leaflet_div.style = "background-color:rgba(31,57,90,1.00); height: calc(100vh - 60px); border-right: 1px solid var(--bs-light);"

                        return[leaflet_div]
                    }
                ),
                init : function(){
                    setTimeout(function(){map.invalidateSize(true);}, 300)
                    // LANDMARKS
                    // IF FOR CHECKBOXES
                    if (localStorage.getItem('landmarks')){
                        map_app.landmarks = JSON.parse(localStorage.getItem('landmarks'))
                    } else {
                        localStorage.setItem("landmarks", JSON.stringify(map_app.landmarks))
                    }
                    if(JSON.parse(localStorage.getItem("landmarks")).cocoon == "1"){map_app.modules.map_module.moduleContents.menu_landmarksButton_cocoon_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("landmarks")).cocoon == "0"){}
                    if(JSON.parse(localStorage.getItem("landmarks")).mag == "1"){map_app.modules.map_module.moduleContents.menu_landmarksButton_mag_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("landmarks")).mag == "0"){}
                    if(JSON.parse(localStorage.getItem("landmarks")).ryuker == "1"){map_app.modules.map_module.moduleContents.menu_landmarksButton_ryuker_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("landmarks")).ryuker == "0"){}
                    if(JSON.parse(localStorage.getItem("landmarks")).tower == "1"){map_app.modules.map_module.moduleContents.menu_landmarksButton_tower_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("landmarks")).tower == "0"){}
                    if(JSON.parse(localStorage.getItem("landmarks")).urgent == "1"){map_app.modules.map_module.moduleContents.menu_landmarksButton_urgent_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("landmarks")).urgent == "0"){}

                    // CONTAINERS
                    // IF FOR CHECKBOXES
                    if (localStorage.getItem('boxes')){
                        map_app.boxes = JSON.parse(localStorage.getItem('boxes'))
                    } else {
                        localStorage.setItem("boxes", JSON.stringify(map_app.boxes))
                    }
                    //if(JSON.parse(localStorage.getItem("boxes")).whiteBox == "1"){map_app.modules.map_module.moduleContents.menu_boxesButton_whiteBox_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("boxes")).whiteBox == "0"){}
                    if(JSON.parse(localStorage.getItem("boxes")).redBox == "1"){map_app.modules.map_module.moduleContents.menu_boxesButton_redBox_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("boxes")).redBox == "0"){}
                    //if(JSON.parse(localStorage.getItem("boxes")).goldBox == "1"){map_app.modules.map_module.moduleContents.menu_boxesButton_goldBox_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("boxes")).goldBox == "0"){}
                    
                    // MINERALS
                    // IF FOR CHECKBOXES
                    if (localStorage.getItem('minerals')){
                        map_app.minerals = JSON.parse(localStorage.getItem('minerals'))
                    } else {
                        localStorage.setItem("minerals", JSON.stringify(map_app.minerals))
                    }
                    if(JSON.parse(localStorage.getItem("minerals")).monotite == "1"){map_app.modules.map_module.moduleContents.menu_mineralsButton_monotite_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("minerals")).monotite == "0"){}
                    if(JSON.parse(localStorage.getItem("minerals")).dualomite == "1"){map_app.modules.map_module.moduleContents.menu_mineralsButton_dualomite_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("minerals")).dualomite == "0"){}
                    if(JSON.parse(localStorage.getItem("minerals")).trinite == "1"){map_app.modules.map_module.moduleContents.menu_mineralsButton_trinite_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("minerals")).trinite == "0"){}
                    if(JSON.parse(localStorage.getItem("minerals")).photonChunk == "1"){map_app.modules.map_module.moduleContents.menu_mineralsButton_photonChunk_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("minerals")).photonChunk == "0"){}
                    if(JSON.parse(localStorage.getItem("minerals")).photonQuartz == "1"){map_app.modules.map_module.moduleContents.menu_mineralsButton_photonQuartz_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("minerals")).photonQuartz == "0"){}

                    // FOOD
                    // IF FOR CHECKBOXES
                    if (localStorage.getItem('food')){
                        map_app.food = JSON.parse(localStorage.getItem('food'))
                    } else {
                        localStorage.setItem("food", JSON.stringify(map_app.food))
                    }
                    if(JSON.parse(localStorage.getItem("food")).apple == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_apple_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).apple == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).banana == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_banana_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).banana == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).clam == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_clam_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).clam == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).crab == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_crab_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).crab == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).herb == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_herb_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).herb == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).lobster == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_lobster_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).lobster == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).mushroom == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_mushroom_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).mushroom == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).peach == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_peach_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).peach == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).pear == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_pear_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).pear == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).tomato == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_tomato_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).tomato == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).shell == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_shell_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).shell == "0"){}
                    if(JSON.parse(localStorage.getItem("food")).turnip == "1"){map_app.modules.map_module.moduleContents.menu_foodButton_turnip_1.setAttribute("checked","")}else if(JSON.parse(localStorage.getItem("food")).turnip == "0"){}
                }
            }
        },
		// MAP MENU ELEMENT  -- SVGvsevolod
		map_menu_element : {
			tag : "map-menu",
			prototype : {}
		},
		map_popup_element : {
			tag : "map-popup",
			prototype : {
				template : nekoapp.create.template(function(){
					var popup_category = document.createElement("h4"),
						popup_name = document.createElement("h5"),
						popup_req1 = document.createElement("div"),
						popup_req2 = document.createElement("div"),
						popup_req_label1 = document.createElement("span"),
						popup_req_space1 = document.createElement("span"),
						popup_req_value1 = document.createElement("span"),
						popup_req_label2 = document.createElement("span"),
						popup_req_space2 = document.createElement("span"),
						popup_req_value2 = document.createElement("span"),
						popup_desc_label = document.createElement("p"),
						popup_desc_value = document.createElement("div"),
						popup_main_label = document.createElement("p"),
						popup_main_value = document.createElement("div"),
						popup_side_label = document.createElement("p"),
						popup_side_value = document.createElement("ul"),
						popup_clear_reward_label = document.createElement("p"),
						popup_clear_reward_value = document.createElement("ul");
					popup_category.className = "text-center mb-1";
					popup_category.style = "font-weight:bold";
					popup_name.className = "text-center";
					popup_name.style = "font-weight:bold";
					popup_req1.style = "display:flex;flex-direction:row;padding:0 15px;font-size:14px;font-weight:bold";
					popup_req2.style = "display:flex;flex-direction:row;padding:0 15px;font-size:14px;font-weight:bold";
					popup_req_space1.style = "flex:1";
					popup_req_space2.style = "flex:1";
					popup_req1.appendChild(popup_req_label1);
					popup_req1.appendChild(popup_req_space1);
					popup_req1.appendChild(popup_req_value1);
					popup_req2.appendChild(popup_req_label2);
					popup_req2.appendChild(popup_req_space2);
					popup_req2.appendChild(popup_req_value2);
					popup_desc_label.className = "mb-0";
					popup_desc_label.style = "font-weight:bold";
					popup_main_label.className = "mb-0";
					popup_main_label.style = "font-weight:bold";
					popup_side_label.className = "mb-0";
					popup_side_label.style = "font-weight:bold";
					popup_side_value.style = "padding:0";
					popup_clear_reward_label.className = "mb-0";
					popup_clear_reward_label.style = "font-weight:bold";
					popup_clear_reward_value.style = "padding:0";
					return[popup_category,popup_name,popup_req1,popup_req2,popup_desc_label,popup_desc_value,popup_main_label,popup_main_value,popup_side_label,popup_side_value,popup_clear_reward_label,popup_clear_reward_value];
				}),
				setInfo: function(info){
					if(info.category && typeof info.category === "string")this.children[0].innerHTML = map_app.locale.strings[info.category];
					if(info.name && typeof info.name === "string")this.children[1].innerHTML = map_app.locale.strings[info.name];
					if(info.popup_data && typeof info.popup_data === "object"){
						this.children[2].children[0].innerHTML = map_app.locale.strings.mapPopupMaxPlayers + ":";
						this.children[2].children[2].innerHTML = info.popup_data.max_players;
						this.children[3].children[0].innerHTML = map_app.locale.strings.mapPopupRecomendedBP + ":";
						this.children[3].children[2].innerHTML = info.popup_data.recomended_bp;
						this.children[4].innerHTML = map_app.locale.strings.mapPopupDescription + ":";
						this.children[5].innerHTML = map_app.locale.strings[info.popup_data.description];
						this.children[6].innerHTML = map_app.locale.strings.mapPopupMainMission + ":";
						this.children[7].innerHTML = map_app.locale.strings[info.popup_data.main_mission];
						this.children[8].innerHTML = map_app.locale.strings.mapPopupSideMissions + ":";
						nekoapp.system.clear(this.children[9]);
						for(var i in info.popup_data.side_missions){
							var item = document.createElement("li");
							this.children[9].appendChild(item).innerHTML = map_app.locale.strings[info.popup_data.side_missions[i]];
						}
						this.children[10].innerHTML = map_app.locale.strings.mapPopupClearReward + ":";
						nekoapp.system.clear(this.children[11]);
						for(var i in info.popup_data.clear_reward){
							var item = document.createElement("li");
							switch(info.popup_data.clear_reward[i].reward_type){
								case"sp":
									item.innerHTML = "+" + info.popup_data.clear_reward[i].reward_count + " " + map_app.locale.strings.mapPopupRewardSP;
									break;
                                case"meseta":
                                    item.innerHTML = info.popup_data.clear_reward[i].reward_count + " " + map_app.locale.strings.mapPopupRewardMeseta;
                                    break;
							}
							this.children[11].appendChild(item);
						}
					}
				}
			}
		}
    },
    applicationGraphics : {                                                                     //  SVG Graphics used for your application
        resourceName : "MAP GRAPHICS" ,
        URL : "html/html.html"
    },
    applicationAnimations : {																	//  Animations used by your application
		UIWaveAnimation : {																		//  Wave animation
			name : "map_ui_wave_animation" ,
			duration : 300
		} ,
		CSSVariables : {																		//  CSS Variables used by animations and UI stylesheet
			startposX : "--map-ui-animation-startpos-x" ,
			startposY : "--map-ui-animation-startpos-y" ,
			width : "--map-ui-animation-width" ,
			height : "--map-ui-animation-height"
		}
	},
    applicationModules : {
        map_module : {
            primaryModule : true,
            moduleType : "pageModule",
            moduleURL : "/",
            moduleContents : function(){
                var elements = {
                    alert_element : nekoapp.create.object(map_app,map_app.preferences.elements.alert_element,{
                        class : "alert alert-danger mt-1 alert-dismissible fade show", 
                        attr : {
                            role : "alert"
                        },
                        style: {
                            display: "block", 
                            margin: "0 auto",
                            position: "absolute",
                            top: "75px",
                            left: "0",
                            right: "0",
                            width: "75%",
                            "z-index": "8492"
                            }
                    }),
                    ngs_map : nekoapp.create.object(map_app,map_app.preferences.elements.ngs_map,{
                        class : "container-fluid row",
                        style : {
                            "padding-top": "60px"
                        }
                    }),
                        map_menu : nekoapp.create.object(map_app,map_app.preferences.elements.map_menu_element,{
                            class: "col-3 bg-menu"
                        }),
                            map_menu_body: nekoapp.create.element(map_app,"div",{
                                class: "px-3 py-2"
                            }),
                                menu_header : nekoapp.create.element(map_app,"div",{
                                    class: "h3 text-center text-light", 
                                    text: nekoapp.create.localizedString(map_app, "mapHeader")
                                }),
                                menu_sections_body: nekoapp.create.element(map_app,"div",{
                                    class: "d-flex my-3 justify-content-center"
                                }),
                                    menu_sections_desc : nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light align-self-center",
                                        text: "<i class='fas fa-map'></i> "
                                    }),
                                    menu_sectionsButtons : nekoapp.create.element(map_app,"div",{
                                        class: "btn-group ms-auto",
                                        attr: {
                                            "role": "group"
                                        }
                                    }),
                                        menu_sectionsButton_On1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "sectionsOn",
                                            attr: {
                                                "type": "radio",
                                                "name": "sections",
                                                "autocomplete": "off",
                                                "checked": ""
                                            }
                                        }),
                                        menu_sectionsButton_On2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue",
                                            attr: {
                                                "for": "sectionsOn"
                                            },
                                            text: nekoapp.create.localizedString(map_app, "mapSectionsOn")
                                        }),
                                        menu_sectionsButton_Off1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "sectionsOff",
                                            attr: {
                                                "type": "radio",
                                                "name": "sections",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_sectionsButton_Off2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue",
                                            attr: {
                                                "for": "sectionsOff"
                                            },
                                            text: nekoapp.create.localizedString(map_app, "mapSectionsOff")
                                        }),
                                
                                menu_landmarks_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_landmarks_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: "<i class='fas fa-map-marker-alt'></i> "
                                    }),
                                    menu_landmarksButton_group: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex",
                                    }),
                                        menu_landmarksButton_cocoon_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "cocoonCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_cocoon_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "cocoonCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/cocoon.png'>"
                                        }),
                                        menu_landmarksButton_tower_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "towerCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_tower_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "towerCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/tower.png'>"
                                        }),
                                        menu_landmarksButton_ryuker_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "ryukerCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_ryuker_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "ryukerCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/ryuker.png'>"
                                        }),
                                        menu_landmarksButton_mag_1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "magCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_mag_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "magCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/mag.png'>"
                                        }),
                                        menu_landmarksButton_urgent_1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "urgentCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_urgent_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "urgentCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/urgent.png'>"
                                        }),
                                
                                menu_boxes_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_boxes_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: "<i class='fas fa-box'></i> "
                                    }),
                                    menu_boxesButton_group: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_boxesButton_whiteBox_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "whiteBoxCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_boxesButton_whiteBox_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 disabled",
                                            attr: {
                                                "for": "whiteBoxCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/containers/whiteBox.png'>"
                                        }),
                                        menu_boxesButton_redBox_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "redBoxCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_boxesButton_redBox_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "redBoxCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/containers/redBox.png'>"
                                        }),
                                        menu_boxesButton_goldBox_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "goldBoxCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_boxesButton_goldBox_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 disabled",
                                            attr: {
                                                "for": "goldBoxCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/containers/goldBox.png'>"
                                        }),
                                
                                menu_minerals_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_minerals_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: "<i class='fas fa-gem'></i> "
                                    }),
                                    menu_mineralsButton_group: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_mineralsButton_monotite_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "monotiteCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_monotite_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "monotiteCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/monotite.png'>"
                                        }),
                                        menu_mineralsButton_dualomite_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "dualomiteCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_dualomite_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "dualomiteCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/dualomite.png'>"
                                        }),
                                        menu_mineralsButton_trinite_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "triniteCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_trinite_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "triniteCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/trinite.png'>"
                                        }),
                                        menu_mineralsButton_phChunk_1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "phChunkCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_phChunk_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "phChunkCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/photonChunk.png'>"
                                        }),
                                        menu_mineralsButton_phQuartz_1 : nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "phQuartzCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_phQuartz_2 : nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "phQuartzCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/photonQuartz.png'>"
                                        }),
                                menu_food_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_food_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: "<i class='fas fa-apple-alt'></i> "
                                    }),
                                    menu_foodButton_group1: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_foodButton_apple_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "appleCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_apple_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "appleCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioApple.png'>"
                                        }),
                                        menu_foodButton_banana_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "bananaCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_banana_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "bananaCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioBanana.png'>"
                                        }),
                                        menu_foodButton_clam_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "clamCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_clam_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "clamCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioClam.png'>"
                                        }),
                                        menu_foodButton_crab_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "crabCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_crab_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "crabCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioCrab.png'>"
                                        }),
                                    menu_foodButton_group2: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center my-2",
                                    }),
                                        menu_foodButton_herb_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "herbCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_herb_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "herbCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioHerb.png'>"
                                        }),
                                        menu_foodButton_lobster_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "lobsterCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_lobster_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "lobsterCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioLobster.png'>"
                                        }),
                                        menu_foodButton_mushroom_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "mushroomCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_mushroom_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "mushroomCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioMushroom.png'>"
                                        }),
                                        menu_foodButton_peach_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "peachCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_peach_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "peachCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioPeach.png'>"
                                        }),
                                    menu_foodButton_group3: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_foodButton_pear_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "pearCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_pear_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "pearCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioPear.png'>"
                                        }),
                                        menu_foodButton_tomato_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "tomatoCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_tomato_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "tomatoCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioTomato.png'>"
                                        }),
                                        menu_foodButton_shell_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "shellCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_shell_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "shellCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioTurbanShell.png'>"
                                        }),
                                        menu_foodButton_turnip_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "turnipCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_foodButton_turnip_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "turnipCheckbox"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioTurnip.png'>"
                                        })

                };
                        elements.ngs_map.appendChild(elements.map_menu)
                            elements.map_menu.appendChild(elements.map_menu_body)
                            elements.map_menu_body.appendChild(elements.menu_header)
                                elements.map_menu_body.appendChild(elements.menu_header)

                                elements.map_menu_body.appendChild(elements.menu_sections_body)
                                    elements.menu_sections_body.appendChild(elements.menu_sections_desc)
                                        elements.menu_sections_desc.appendChild(nekoapp.create.localizedString(map_app, "mapSections"))
                                    elements.menu_sections_body.appendChild(elements.menu_sectionsButtons)
                                        elements.menu_sectionsButtons.appendChild(elements.menu_sectionsButton_On1)
                                        elements.menu_sectionsButtons.appendChild(elements.menu_sectionsButton_On2)
                                        elements.menu_sectionsButtons.appendChild(elements.menu_sectionsButton_Off1)
                                        elements.menu_sectionsButtons.appendChild(elements.menu_sectionsButton_Off2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_landmarks_body)
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarks_desc)
                                        elements.menu_landmarks_desc.appendChild(nekoapp.create.localizedString(map_app, "mapLandmarksTitle"))
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarksButton_group)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_cocoon_1)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_cocoon_2)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_tower_1)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_tower_2)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_urgent_1)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_urgent_2)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_ryuker_1)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_ryuker_2)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_mag_1)
                                        elements.menu_landmarksButton_group.appendChild(elements.menu_landmarksButton_mag_2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_boxes_body)
                                    elements.menu_boxes_body.appendChild(elements.menu_boxes_desc)
                                        elements.menu_boxes_desc.appendChild(nekoapp.create.localizedString(map_app, "mapBoxesTitle"))
                                    elements.menu_boxes_body.appendChild(elements.menu_boxesButton_group)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_whiteBox_1)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_whiteBox_2)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_redBox_1)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_redBox_2)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_goldBox_1)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_goldBox_2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_minerals_body)
                                    elements.menu_minerals_body.appendChild(elements.menu_minerals_desc)
                                        elements.menu_minerals_desc.appendChild(nekoapp.create.localizedString(map_app, "mapMineralsTitle"))
                                    elements.menu_minerals_body.appendChild(elements.menu_mineralsButton_group)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_monotite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_monotite_2)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_dualomite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_dualomite_2)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_trinite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_trinite_2)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phChunk_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phChunk_2)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phQuartz_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phQuartz_2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_food_body)
                                    elements.menu_food_body.appendChild(elements.menu_food_desc)
                                        elements.menu_food_desc.appendChild(nekoapp.create.localizedString(map_app, "mapFoodTitle"))
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_apple_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_apple_2)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_banana_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_banana_2)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_clam_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_clam_2)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_crab_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_crab_2)
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group2)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_herb_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_herb_2)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_lobster_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_lobster_2)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_mushroom_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_mushroom_2)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_peach_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_peach_2)
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group3)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_pear_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_pear_2)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_tomato_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_tomato_2)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_shell_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_shell_2)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_turnip_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_turnip_2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))
				
				// BIND MAP MENU BUTTONS EVENTS  -- SVGvsevolod
				elements.menu_sectionsButton_On1.addEventListener("change",function(){
					if(!map.user_settings.sections)
						map.user_settings.sections = true;
					map.save_settings();
				});
				elements.menu_sectionsButton_Off1.addEventListener("change",function(){
					if(map.user_settings.sections)
						map.user_settings.sections = false;
					map.save_settings();
				});

                elements.menu_landmarksButton_cocoon_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.cocoon);
                    if(map.user_settings.landmarks.cocoon)
                        map.user_settings.landmarks.cocoon = false;
                    else
                        map.user_settings.landmarks.cocoon = true;
                    map.save_settings();
                });
                elements.menu_landmarksButton_mag_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.mag);
                    if(map.user_settings.landmarks.mag)
                        map.user_settings.landmarks.mag = false;
                    else
                        map.user_settings.landmarks.mag = true;
                    map.save_settings();
                });
                elements.menu_landmarksButton_ryuker_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.ryuker);
                    if(map.user_settings.landmarks.ryuker)
                        map.user_settings.landmarks.ryuker = false;
                    else
                        map.user_settings.landmarks.ryuker = true;
                    map.save_settings();
                });
                elements.menu_landmarksButton_tower_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.tower);
                    if(map.user_settings.landmarks.tower)
                        map.user_settings.landmarks.tower = false;
                    else
                        map.user_settings.landmarks.tower = true;
                    map.save_settings();
                });
                elements.menu_landmarksButton_urgent_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.urgent);
                    if(map.user_settings.landmarks.urgent)
                        map.user_settings.landmarks.urgent = false;
                    else
                        map.user_settings.landmarks.urgent = true;
                    map.save_settings();
                });                
				elements.menu_mineralsButton_monotite_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.minerals.monotite);
					if(map.user_settings.minerals.monotite)
						map.user_settings.minerals.monotite = false;
					else
						map.user_settings.minerals.monotite = true;
					map.save_settings();
				});
				elements.menu_mineralsButton_dualomite_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.minerals.dualomite);
					if(map.user_settings.minerals.dualomite)
						map.user_settings.minerals.dualomite = false;
					else
						map.user_settings.minerals.dualomite = true;
					map.save_settings();
				});
				elements.menu_mineralsButton_trinite_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.minerals.trinite);
					if(map.user_settings.minerals.trinite)
						map.user_settings.minerals.trinite = false;
					else
						map.user_settings.minerals.trinite = true;
					map.save_settings();
				});
				elements.menu_mineralsButton_phChunk_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.minerals.phChunk);
					if(map.user_settings.minerals.phChunk)
						map.user_settings.minerals.phChunk = false;
					else
						map.user_settings.minerals.phChunk = true;
					map.save_settings();
				});
				elements.menu_mineralsButton_phQuartz_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.minerals.phQuartz);
					if(map.user_settings.minerals.phQuartz)
						map.user_settings.minerals.phQuartz = false;
					else
						map.user_settings.minerals.phQuartz = true;
					map.save_settings();
				});
                elements.menu_foodButton_apple_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.apple);
                    if(map.user_settings.food.apple)
                        map.user_settings.food.apple = false;
                    else
                        map.user_settings.food.apple = true;
                    map.save_settings();
                });
                elements.menu_foodButton_banana_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.banana);
                    if(map.user_settings.food.banana)
                        map.user_settings.food.banana = false;
                    else
                        map.user_settings.food.banana = true;
                    map.save_settings();
                });
                elements.menu_foodButton_clam_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.clam);
                    if(map.user_settings.food.clam)
                        map.user_settings.food.clam = false;
                    else
                        map.user_settings.food.clam = true;
                    map.save_settings();
                });
                elements.menu_foodButton_crab_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.crab);
                    if(map.user_settings.food.crab)
                        map.user_settings.food.crab = false;
                    else
                        map.user_settings.food.crab = true;
                    map.save_settings();
                });
                elements.menu_foodButton_herb_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.herb);
                    if(map.user_settings.food.herb)
                        map.user_settings.food.herb = false;
                    else
                        map.user_settings.food.herb = true;
                    map.save_settings();
                });                
                elements.menu_foodButton_lobster_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.lobster);
                    if(map.user_settings.food.lobster)
                        map.user_settings.food.lobster = false;
                    else
                        map.user_settings.food.lobster = true;
                    map.save_settings();
                });
                elements.menu_foodButton_mushroom_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.mushroom);
                    if(map.user_settings.food.mushroom)
                        map.user_settings.food.mushroom = false;
                    else
                        map.user_settings.food.mushroom = true;
                    map.save_settings();
                });
                elements.menu_foodButton_peach_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.peach);
                    if(map.user_settings.food.peach)
                        map.user_settings.food.peach = false;
                    else
                        map.user_settings.food.peach = true;
                    map.save_settings();
                });
                elements.menu_foodButton_pear_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.pear);
                    if(map.user_settings.food.pear)
                        map.user_settings.food.pear = false;
                    else
                        map.user_settings.food.pear = true;
                    map.save_settings();
                });
                elements.menu_foodButton_tomato_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.tomato);
                    if(map.user_settings.food.tomato)
                        map.user_settings.food.tomato = false;
                    else
                        map.user_settings.food.tomato = true;
                    map.save_settings();
                });
                elements.menu_foodButton_shell_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.shell);
                    if(map.user_settings.food.shell)
                        map.user_settings.food.shell = false;
                    else
                        map.user_settings.food.shell = true;
                    map.save_settings();
                });
                elements.menu_foodButton_turnip_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.food.turnip);
                    if(map.user_settings.food.turnip)
                        map.user_settings.food.turnip = false;
                    else
                        map.user_settings.food.turnip = true;
                    map.save_settings();
                });
                /*elements.menu_boxesButton_whiteBox_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.boxes.whiteBox);
                    if(map.user_settings.boxes.whiteBox)
                        map.user_settings.boxes.whiteBox = false;
                    else
                        map.user_settings.boxes.whiteBox = true;
                    map.save_settings();
                });*/
                elements.menu_boxesButton_redBox_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.boxes.redBox);
                    if(map.user_settings.boxes.redBox)
                        map.user_settings.boxes.redBox = false;
                    else
                        map.user_settings.boxes.redBox = true;
                    map.save_settings();
                });
                /*elements.menu_boxesButton_goldBox_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.boxes.goldBox);
                    if(map.user_settings.boxes.goldBox)
                        map.user_settings.boxes.goldBox = false;
                    else
                        map.user_settings.boxes.goldBox = true;
                    map.save_settings();
                });*/
				
                return [elements, [/*elements.alert_element,*/elements.ngs_map]];
            },
            onModuleChange : function(){
                //this.moduleContents.alert_element.init();
				// INITIALIZE MAP AND MAP MENU  -- SVGvsevolod
				map.init(function(){

					if(map.user_settings.sections)
						map_app.modules.map_module.moduleContents.menu_sectionsButton_On1.setAttribute("checked","");
					else
						map_app.modules.map_module.moduleContents.menu_sectionsButton_Off1.setAttribute("checked","");

                        if(map.user_settings.landmarks.cocoon)map_app.modules.map_module.moduleContents.menu_landmarksButton_cocoon_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.mag)map_app.modules.map_module.moduleContents.menu_landmarksButton_mag_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.ryuker)map_app.modules.map_module.moduleContents.menu_landmarksButton_ryuker_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.tower)map_app.modules.map_module.moduleContents.menu_landmarksButton_tower_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.urgent)map_app.modules.map_module.moduleContents.menu_landmarksButton_urgent_1.setAttribute("checked","");
                        
                        //if(map.user_settings.boxes.whiteBox)map_app.modules.map_module.moduleContents.menu_boxesButton_whiteBox_1.setAttribute("checked","");
                        if(map.user_settings.boxes.redBox)map_app.modules.map_module.moduleContents.menu_boxesButton_redBox_1.setAttribute("checked","");
                        //if(map.user_settings.boxes.goldBox)map_app.modules.map_module.moduleContents.menu_boxesButton_goldBox_1.setAttribute("checked","");
                        
                        if(map.user_settings.minerals.monotite)map_app.modules.map_module.moduleContents.menu_mineralsButton_monotite_1.setAttribute("checked","");
                        if(map.user_settings.minerals.dualomite)map_app.modules.map_module.moduleContents.menu_mineralsButton_dualomite_1.setAttribute("checked","");
                        if(map.user_settings.minerals.trinite)map_app.modules.map_module.moduleContents.menu_mineralsButton_trinite_1.setAttribute("checked","");
                        if(map.user_settings.minerals.phChunk)map_app.modules.map_module.moduleContents.menu_mineralsButton_phChunk_1.setAttribute("checked","");
                        if(map.user_settings.minerals.phQuartz)map_app.modules.map_module.moduleContents.menu_mineralsButton_phQuartz_1.setAttribute("checked","");
                        
                        if(map.user_settings.food.apple)map_app.modules.map_module.moduleContents.menu_foodButton_apple_1.setAttribute("checked","");
                        if(map.user_settings.food.banana)map_app.modules.map_module.moduleContents.menu_foodButton_banana_1.setAttribute("checked","");
                        if(map.user_settings.food.clam)map_app.modules.map_module.moduleContents.menu_foodButton_clam_1.setAttribute("checked","");
                        if(map.user_settings.food.crab)map_app.modules.map_module.moduleContents.menu_foodButton_crab_1.setAttribute("checked","");
                        if(map.user_settings.food.herb)map_app.modules.map_module.moduleContents.menu_foodButton_herb_1.setAttribute("checked","");
                        if(map.user_settings.food.lobster)map_app.modules.map_module.moduleContents.menu_foodButton_lobster_1.setAttribute("checked","");
                        if(map.user_settings.food.mushroom)map_app.modules.map_module.moduleContents.menu_foodButton_mushroom_1.setAttribute("checked","");
                        if(map.user_settings.food.peach)map_app.modules.map_module.moduleContents.menu_foodButton_peach_1.setAttribute("checked","");
                        if(map.user_settings.food.pear)map_app.modules.map_module.moduleContents.menu_foodButton_pear_1.setAttribute("checked","");
                        if(map.user_settings.food.tomato)map_app.modules.map_module.moduleContents.menu_foodButton_tomato_1.setAttribute("checked","");
                        if(map.user_settings.food.shell)map_app.modules.map_module.moduleContents.menu_foodButton_shell_1.setAttribute("checked","");
                        if(map.user_settings.food.turnip)map_app.modules.map_module.moduleContents.menu_foodButton_turnip_1.setAttribute("checked","");
                    });
            },
            onLocaleChange : function(){
                document.title = map_app.locale.strings.language_title;
                map_app.modules.map_header.children[0].children[0].setText();
				// UPDATE MAP STRINGS  -- SVGvsevolod
				map.update_locale();
            }
        },
        map_header : {
            moduleType: "headerModule",
            headerLayout: {
                headerLogo : {},
                headerNavigation : {
                    items : [{
                        label : "localeString@contribute_button",
                        hyperlink : {
                            URL : "//discord.gg/AvgmpuX",
                            useDefaultNavigation : true,
                            target : "_blank"
                        }},
                        {
                        label : "localeString@github_button",
                        hyperlink : {
                            URL : "//github.com/kosnag/NGS_InterMap",
                            useDefaultNavigation : true,
                            target : "_blank"
                        }},
                        {
                        label : "localeString@changelog_button",
                        hyperlink : {
                            URL : "//github.com/kosnag/NGS_InterMap/commits/main",
                            useDefaultNavigation : true,
                            target : "_blank"
                        }},
                        {
                        label : "localeString@laguages_button",
                        hyperlink : {
                            URL : "#",
                            event : function(openLangMenu){
                                if (!(openLangMenu.hasAttribute("data-bs-toggle") && openLangMenu.hasAttribute("data-bs-target"))){
                                    openLangMenu.setAttribute("data-bs-toggle","modal"),
                                    openLangMenu.setAttribute("data-bs-target","#languageModal")
                                    openLangMenu.click()
                                }
                            }
                        }}
                    ]
                }
            }
        }
    },
    applicationLocalization : {
        "en-US": {URL: "languages/en_US.json"},
        "en-AL": {URL: "languages/en_al.json"},
        "ru-RU": {URL: "languages/ru_RU.json"},
        "ko-KR": {URL: "languages/ko_KR.json"},
        "ja-JP": {URL: "languages/ja_JP.json"},
        "pt-BR": {URL: "languages/pt_BR.json"}

    }
});
map_app.loadScreen.spinner = nekoapp.create.element(map_app, "spinner", {
    text : nekoapp.create.element(map_app, "div", {
        class : "spinner-border text-primary",
        attr : {role: "status"},
        style : "width: 6rem; height: 6rem;"
    }),
    class : "d-flex justify-content-center"})
map_app.preferences.events.onAppInit = new nekoapp.event({
	target : map_app ,
	oninit : function() {
        document.title = map_app.locale.strings.language_title;
        map_app.modules.map_header.className = "navbar navbar-expand-lg navbar-dark";
        map_app.modules.map_header.children[0].children[0].setText();
        document.body.className = "bg-secondary";
		
		// LANGUAGE CHANGE WINDOW INSIDE APP OBJECT INSTEAD OF APP MODULE OBJECT  -- SVGvsevolod
		map_app.languageMenu = nekoapp.create.object(map_app,map_app.preferences.elements.language_menu,{
			id : "languageModal",
			class : "modal fade",
			attr : {
				tabindex : "-1",
				"aria-labelledby" : "languageModalLabel",
				"aria-hidden" : "true"
			}
		});
		map_app.app.appendChild(map_app.languageMenu);
	}
});
nekoapp.system.scripts.add({application:map_app, url: "js/bootstrap.bundle.min.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/leaflet.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/map.js"});
nekoapp.system.init(map_app);