var map_app = new nekoapp({
    application: document.querySelector("map-app"),
    applicationInfo: {
        nekoappID: "18",
        applicationTitle: "PSO2NGS Interactive Map",
        applicationVersion: "v2.0",
        applicationURL: "//ngs-map.kosnag.ru/"
    },
    applicationStylesheets: {
        default: "css/map.main.css",
        colors: "css/map.colors.css",
        ui: "css/map.ui.css",
        bs: "css/bootstrap.css",
        leaflet: "css/leaflet.css"
    },
    applicationClasses: {
        UIButtonBackground: "map_ui_button_background",									//  Class for button background
        UIButtonContent: "map_ui_button_content",											//  Class for button content
        UIDefaultButton: "map_ui_default_button",											//  Class for default button type
        UIColorButton: "map_ui_color_button",												//  Class for color button type
        UIGlassButton: "map_ui_glass_button",												//  Class for glass button type
        UIPaneButton: "map_ui_pane_button",												//  Class for pane button type
        UICircleButton: "map_ui_circle_button",											//  Class for circle button type
		UICheckBoxIcon: "map_ui_checkbox_icon",											//  Class for checkbox icon
		UICheckBoxContent: "map_ui_checkbox_content",										//  Class for checkbox content
		UIRadioButtonIcon: "map_ui_radiobutton_icon",										//  Class for radio button icon
		UIRadioButtonContent: "map_ui_radiobutton_content",								//  Class for radio button content
        UITextBoxInput: "map_ui_textbox_input",											//  Class for textbox input
        UITextBoxStroke: "map_ui_textbox_stroke",											//  Class for textbox stroke
        UIStrokedTextBox: "map_ui_stroked_textbox",										//  Class for stroke textbox type
        UISimpleTextBox: "map_ui_simple_textbox",											//  Class for simple textbox type
        UIHighlightedTextBox: "map_ui_highlighted_textbox",								//  Class for highlighted textbox type
		UIComboBoxValue: "map_ui_combobox_value",											//  Class for combobox value
		UIComboBoxIcon: "map_ui_combobox_icon",											//  Class for combobox icon
		UIComboBoxOptions: "map_ui_combobox_options",										//  Class for combobox options
        headerContainer: "container-fluid",
		headerNavigationItem: "map_head_navigation_item_content",							//  Class for header navigation item content
		localeChangeList: "map_localechange_language_list",								//  Class for language list in locale change window
        progressBarInner: "map_progress_bar_inner",										//  Class for progress bar inner part
		rowSubtext: "map_row_subtext",													//  Class for row subtext
		localeBoxIcon: "map_localebox_icon",												//  Class for localebox icon
		localeBoxText: "map_localebox_text"												//  Class for localebox text
    },
    applicationElements: {                                                                     //  Defined custom elements for your application
        localizedStringElement: {																//  Element for localized string
            tag: "map-string",															//  Tag of your custom element
            prototype: {}																		//  Prototype of your custom element
        },
        graphicElement: {																		//  Element for vector graphics
            tag: "map-ui-graphic",
            prototype: {}
        },
        graphicsLibraryElement: {																//  Element for graphics library
            tag: "map-ui-graphics",
            prototype: {}
        },
        graphicsSetElement: {																	//  Element for graphics set
            tag: "map-graphicset",
            prototype: {}
        },
        animationElement: {																	//  Element for animation
            tag: "map-ui-animation",
            prototype: {}
        },
        animationSpriteElement: {																//  Element for animation sprite
            tag: "map-ui-animation-sprite",
            prototype: {}
        },
        UIElement: {																			//  Element for User Interface element
            tag: "map-ui-element",
            prototype: {}
        },
        buttonElement: {																		//  Element for button
            tag: "map-ui-button",
            prototype: {}
        },
        checkBoxElement: {																		//  Element for checkbox
            tag: "map-ui-checkbox",
            prototype: {}
        },
        radioButtonElement: {																	//  Element for radio button
            tag: "map-ui-radiobutton",
            prototype: {}
        },
        textBoxElement: {																		//  Element for textbox
            tag: "map-ui-textbox",
            prototype: {}
        },
		comboboxElement: {																		//  Element for combobox
			tag: "map-ui-combobox",
			prototype: {}
		},
        tooltipElement: {																		//  Element for tooltip
            tag: "map-ui-tooltip",
            prototype: {}
        },
        moduleElement: {																		//  Element for module
            tag: "map-module",
            prototype: {}
        },
        headerElement: {																		//  Element for header
            tag: "map-head",
            prototype: {}
        },
        footerElement: {																		//  Element for footer
            tag: "map-footer",
            prototype: {}
        },
        windowElement: {																		//  Element for window
            tag: "map-window",
            prototype: {}
        },
		windowTitle: {																			//  Element for window title
			tag: "map-window-title",
			prototype: {}
		},
        overlayElement: {																		//  Element for overlay
            tag: "map-overlay",
            prototype: {}
        },
        headerLogoElement: {																	//  Element for header logo
            tag: "map-logo",
            prototype: {
                setText: function(){
                    if (this.className !== "navbar-brand")
                    this.className = "navbar-brand"
                    this.innerHTML = map_app.locale.strings.language_title;
                }
            }
        },
		headerNavigationElement: {																//  Element for header navigation
			tag: "map-navigation",
			prototype: {}
		},
		headerNavigationItem: {																//  Element for header navigation item
			tag: "map-navigation-item",
			prototype: {}
		},
        spinnerElement: {																		//  Element for spinner
            tag: "map-ui-spinner",
            prototype: {}
        },
        loadScreenElement: {																	//  Element for loading screen
            tag: "map-loading",
            prototype: {}
        },
        progressBarElement: {																	//  Element for progress bar
            tag: "map-progress",
            prototype: {}
        },
        alert_element: {
            tag: "alert-window",
            prototype: {
                template: nekoapp.create.template(
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
                init: function(){
                    new bootstrap.Tooltip(alert_a3),
                    new bootstrap.Tooltip(alert_a4);
                }
            }
        },
        language_menu: {
            tag: "language-menu",
            prototype: {
                template: nekoapp.create.template(
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
        ngs_map: {
            tag: "ngs-map",
            prototype: {
                template: nekoapp.create.template(
                    function(){
                        let leaflet_div = document.createElement("div")
                            leaflet_div.className = "col-9"
                            leaflet_div.id = "leaflet-map"
                            leaflet_div.style = "background-color:rgba(31,57,90,1.00); height: calc(100vh - 60px); border-right: 1px solid var(--bs-light);"

                        return[leaflet_div]
                    }
                ),
                init: function(){

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
		map_menu_element: {
			tag: "map-menu",
			prototype: {}
		},
		map_popup_element: {
			tag: "map-popup",
			prototype: {
				template: nekoapp.create.template(function(){
					var popup_image = document.createElement("img"), // this.children[0]
						popup_category = document.createElement("h4"), // this.children[1]
						popup_name = document.createElement("h5"), // this.children[2]
						popup_type = document.createElement("p"), // this.children[3]
						popup_tiers = document.createElement("p"), // this.children[4]
						popup_req1 = document.createElement("div"), // this.children[5]
						popup_req2 = document.createElement("div"), // this.children[6]
						popup_req3 = document.createElement("div"), // this.children[7]
						popup_type_label = document.createElement("span"), // this.children[3].children[0]
						popup_type_space = document.createElement("span"),
						popup_type_value = document.createElement("span"), // this.children[3].children[2]
						popup_tiers_left = document.createElement("span"), // this.children[4].children[0]
						popup_tiers_label = document.createElement("span"), // this.children[4].children[1]
						popup_tiers_right = document.createElement("span"), // this.children[4].children[2]
						popup_req1_label = document.createElement("span"), // this.children[5].children[0]
						popup_req1_space = document.createElement("span"),
						popup_req1_value = document.createElement("span"), // this.children[5].children[2]
						popup_req2_label = document.createElement("span"), // this.children[6].children[0]
						popup_req2_space = document.createElement("span"),
						popup_req2_value = document.createElement("span"), // this.children[6].children[2]
						popup_req3_label = document.createElement("span"), // this.children[7].children[0]
						popup_req3_space = document.createElement("span"),
						popup_req3_value = document.createElement("span"), // this.children[7].children[2]
						popup_desc_label = document.createElement("p"), // this.children[8]
						popup_desc_value = document.createElement("div"), // this.children[9]
						popup_main_label = document.createElement("p"), // this.children[10]
						popup_main_value = document.createElement("div"), // this.children[11]
						popup_side_label = document.createElement("p"), // this.children[12]
						popup_side_value = document.createElement("ul"), // this.children[13]
						popup_clear_reward_label = document.createElement("p"), // this.children[14]
						popup_clear_reward_value = document.createElement("ul"), // this.children[15]
						popup_rewards_label = document.createElement("p"), // this.children[16]
						popup_rewards_value = document.createElement("ul"); // this.children[17]
					popup_image.className = "text-center mb-1";
                    popup_image.style = "min-width:300px";
					popup_category.className = "text-center mb-1";
					popup_category.style = "font-weight:bold";
					popup_name.className = "text-center";
					popup_name.style = "font-weight:bold";
					popup_type.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
					popup_tiers.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
					popup_req1.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
					popup_req2.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
					popup_req3.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
					popup_type_space.style = "flex:1";
					popup_tiers_label.className = "text-center";
					popup_tiers_label.style = "flex:1";
					popup_req1_space.style = "flex:1";
					popup_req2_space.style = "flex:1";
					popup_req3_space.style = "flex:1";
					popup_tiers_left.className = "carousel-control-prev-icon";
					popup_tiers_right.className = "carousel-control-next-icon";
					popup_tiers_left.style = "width:20px;height:20px;cursor:pointer;";
					popup_tiers_right.style = "width:20px;height:20px;cursor:pointer;";
					popup_type.appendChild(popup_type_label);
					popup_type.appendChild(popup_type_space);
					popup_type.appendChild(popup_type_value);
					popup_tiers.appendChild(popup_tiers_left);
					popup_tiers.appendChild(popup_tiers_label);
					popup_tiers.appendChild(popup_tiers_right);
					popup_req1.appendChild(popup_req1_label);
					popup_req1.appendChild(popup_req1_space);
					popup_req1.appendChild(popup_req1_value);
					popup_req2.appendChild(popup_req2_label);
					popup_req2.appendChild(popup_req2_space);
					popup_req2.appendChild(popup_req2_value);
					popup_req3.appendChild(popup_req3_label);
					popup_req3.appendChild(popup_req3_space);
					popup_req3.appendChild(popup_req3_value);
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
					popup_rewards_label.className = "mb-0";
					popup_rewards_label.style = "font-weight:bold";
					popup_rewards_value.style = "padding:0";
					return[popup_image,popup_category,popup_name,popup_type,popup_tiers,popup_req1,popup_req2,popup_req3,popup_desc_label,popup_desc_value,popup_main_label,popup_main_value,popup_side_label,popup_side_value,popup_clear_reward_label,popup_clear_reward_value,popup_rewards_label,popup_rewards_value];
				}),
				setInfo: function(info){
					if(typeof info.category === "string"){
						this.children[1].innerHTML = map_app.locale.strings[info.category];
						nekoapp.system.hiddenStatus.set(this.children[1],false);
					}else nekoapp.system.hiddenStatus.set(this.children[1],true);
					if(typeof info.name === "string"){
						this.children[2].innerHTML = map_app.locale.strings[info.name];
						nekoapp.system.hiddenStatus.set(this.children[2],false);
					}else nekoapp.system.hiddenStatus.set(this.children[2],true);
					if(typeof info.popup_data === "object"){
						if(typeof info.popup_data.image === "string"){
							this.children[0].src = info.popup_data.image;
							nekoapp.system.hiddenStatus.set(this.children[0],false);
						}else nekoapp.system.hiddenStatus.set(this.children[0],true);
						if(typeof info.popup_data.type === "string"){
							this.children[3].children[0].innerHTML = map_app.locale.strings.mapPopupSectionTypes + ":";
							switch(info.popup_data.type){
                                    case "lobby":
                                        this.children[3].children[2].innerHTML = map_app.locale.strings.mapPopupSectionsTypeLobby;
                                        break;
                                    case "gathering":
                                        this.children[3].children[2].innerHTML = map_app.locale.strings.mapPopupSectionsTypeGathering;
                                        break;
                                    case "combat":
                                        this.children[3].children[2].innerHTML = map_app.locale.strings.mapPopupSectionsTypeCombat;
                                        break;
							}
							nekoapp.system.hiddenStatus.set(this.children[3],false);
						}else nekoapp.system.hiddenStatus.set(this.children[3],true);
						if(info.popup_data.tiers instanceof Array && info.popup_data.tiers.length > 1 && typeof this.popup_tier === "number"){
							this.children[4].children[1].innerHTML = map_app.locale.strings.mapPopupSectionTier + " " + (this.popup_tier + 1);
							nekoapp.system.hiddenStatus.set(this.children[4],false);
						}else nekoapp.system.hiddenStatus.set(this.children[4],true);
						if(typeof info.popup_data.type === "string" || typeof info.popup_data.max_players === "number"){
							this.children[5].children[0].innerHTML = map_app.locale.strings.mapPopupMaxPlayers + ":";
							if(typeof info.popup_data.type === "string")switch(info.popup_data.type){
								case "lobby":
                                    this.children[5].children[2].innerHTML = "100";
                                    break;
                                case "gathering":
                                    this.children[5].children[2].innerHTML = "32";
                                    break;
                                case "combat":
                                    this.children[5].children[2].innerHTML = "8";
                                    break;
							}else this.children[5].children[2].innerHTML = info.popup_data.max_players;
							nekoapp.system.hiddenStatus.set(this.children[5],false);
						}else nekoapp.system.hiddenStatus.set(this.children[5],true);
						if(typeof info.popup_data.required_bp === "number" || typeof info.popup_data.recomended_bp === "number" || (info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && (typeof info.popup_data.tiers[this.popup_tier].recomended_bp === "number" || typeof info.popup_data.tiers[this.popup_tier].required_bp === "number")) || (info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_bp === "number")){
							this.children[6].children[0].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].required_bp === "number"?map_app.locale.strings.mapPopupRequiredBP:info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_bp === "number"?map_app.locale.strings.mapPopupRecomendedBP:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_bp === "number"?map_app.locale.strings.mapPopupRecomendedBP:typeof info.popup_data.required_bp === "number"?map_app.locale.strings.mapPopupRequiredBP:map_app.locale.strings.mapPopupRecomendedBP + ":";
							this.children[6].children[2].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].required_bp === "number"?info.popup_data.tiers[this.popup_tier].required_bp:info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_bp === "number"?info.popup_data.tiers[this.popup_tier].recomended_bp:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_bp === "number"?info.popup_data.tiers[0].recomended_bp:typeof info.popup_data.required_bp === "number"?info.popup_data.required_bp:info.popup_data.recomended_bp;
							nekoapp.system.hiddenStatus.set(this.children[6],false);
						}else nekoapp.system.hiddenStatus.set(this.children[6],true);
						if(typeof info.popup_data.recomended_lv === "number" || (info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_lv === "number") || (info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_lv === "number")){
							this.children[7].children[0].innerHTML = map_app.locale.strings.mapPopupSectionAvgEnemyLvl + ":";
							this.children[7].children[2].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_lv === "number"?info.popup_data.tiers[this.popup_tier].recomended_lv:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_lv === "number"?info.popup_data.tiers[0].recomended_lv:info.popup_data.recomended_lv;
							nekoapp.system.hiddenStatus.set(this.children[7],false);
						}else nekoapp.system.hiddenStatus.set(this.children[7],true);
						if(typeof info.popup_data.description === "string"){
							this.children[8].innerHTML = map_app.locale.strings.mapPopupDescription + ":";
						    this.children[9].innerHTML = map_app.locale.strings[info.popup_data.description];
							nekoapp.system.hiddenStatus.set(this.children[8],false);
							nekoapp.system.hiddenStatus.set(this.children[9],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[8],true);
							nekoapp.system.hiddenStatus.set(this.children[9],true);
						}
                        if(typeof info.popup_data.main_mission === "string"){
							this.children[10].innerHTML = map_app.locale.strings.mapPopupMainMission + ":";
						    this.children[11].innerHTML = map_app.locale.strings[info.popup_data.main_mission];
							nekoapp.system.hiddenStatus.set(this.children[10],false);
							nekoapp.system.hiddenStatus.set(this.children[11],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[10],true);
							nekoapp.system.hiddenStatus.set(this.children[11],true);
						}
						if(info.popup_data.side_missions instanceof Array){
							this.children[12].innerHTML = map_app.locale.strings.mapPopupSideMissions + ":";
							nekoapp.system.clear(this.children[13]);
							for(var i in info.popup_data.side_missions){
								var item = document.createElement("li");
								this.children[13].appendChild(item).innerHTML = map_app.locale.strings[info.popup_data.side_missions[i]];
							}
							nekoapp.system.hiddenStatus.set(this.children[12],false);
							nekoapp.system.hiddenStatus.set(this.children[13],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[12],true);
							nekoapp.system.hiddenStatus.set(this.children[13],true);
						}
						if(info.popup_data.clear_reward instanceof Array){
							this.children[14].innerHTML = map_app.locale.strings.mapPopupClearReward + ":";
							nekoapp.system.clear(this.children[15]);
							for(var i in info.popup_data.clear_reward){
								var item = document.createElement("li");
								switch(info.popup_data.clear_reward[i].reward_type){
									case "sp":
										item.innerHTML = "+" + info.popup_data.clear_reward[i].reward_count + " " + map_app.locale.strings.mapPopupRewardSP;
										break;
                                	case "meseta":
										item.innerHTML = info.popup_data.clear_reward[i].reward_count + " " + map_app.locale.strings.mapPopupRewardMeseta;
                                    	break;
								}
								this.children[15].appendChild(item);
							}
							nekoapp.system.hiddenStatus.set(this.children[14],false);
							nekoapp.system.hiddenStatus.set(this.children[15],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[14],true);
							nekoapp.system.hiddenStatus.set(this.children[15],true);
						}
                        if(info.popup_data.rewards instanceof Array){
							this.children[16].innerHTML = map_app.locale.strings.mapPopupRewards + ":";
							nekoapp.system.clear(this.children[17]);
							for(var i in info.popup_data.rewards){
								var item = document.createElement("li");
								switch(info.popup_data.rewards[i].reward_type){
                                	case "meseta":
                                    	item.innerHTML = info.popup_data.rewards[i].reward_count + " " + map_app.locale.strings.mapPopupRewardMeseta;
                                    	break;
                                	case "seasonPoints":
                                    	item.innerHTML = info.popup_data.rewards[i].reward_count + " " + map_app.locale.strings.mapPopupRewardSeasonPoints;
                                    	break;
								}
								this.children[17].appendChild(item);
							}
							nekoapp.system.hiddenStatus.set(this.children[16],false);
							nekoapp.system.hiddenStatus.set(this.children[17],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[16],true);
							nekoapp.system.hiddenStatus.set(this.children[17],true);
						}
					}
				},
				initTiers: function(info){
					var popup = this;
					popup.children[4].children[0].addEventListener("click",function(){
						if(popup.popup_tier > 0){
							popup.popup_tier--;
							popup.setInfo(info)
						}
					});
					popup.children[4].children[2].addEventListener("click",function(){
						if(popup.popup_tier < info.popup_data.tiers.length - 1){
							popup.popup_tier++;
							popup.setInfo(info);
						}
					});
				}
			}
		}
    },
    applicationGraphics: {                                                                     //  SVG Graphics used for your application
        resourceName: "SVGs",
        URL: "assets/svg.html"
    },
    applicationAnimations: {																	//  Animations used by your application
		UIWaveAnimation: {																		//  Wave animation
			name: "map_ui_wave_animation",
			duration: 300
		},
		CSSVariables: {																		//  CSS Variables used by animations and UI stylesheet
			startposX: "--map-ui-animation-startpos-x",
			startposY: "--map-ui-animation-startpos-y",
			width: "--map-ui-animation-width",
			height: "--map-ui-animation-height"
		}
	},
    applicationModules: {
        map_module: {
            primaryModule: true,
            moduleType: "pageModule",
            moduleURL: "/",
            moduleContents: function(){
                var elements = {
                    alert_element: nekoapp.create.object(map_app,map_app.preferences.elements.alert_element,{
                        class: "alert alert-danger mt-1 alert-dismissible fade show", 
                        attr: {
                            role: "alert"
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
                    ngs_map: nekoapp.create.object(map_app,map_app.preferences.elements.ngs_map,{
                        class: "container-fluid row",
                        style: {
                            "padding-top": "60px"
                        }
                    }),
                        map_menu: nekoapp.create.object(map_app,map_app.preferences.elements.map_menu_element,{
                            class: "col-3 bg-menu"
                        }),
                            menu_header: nekoapp.create.element(map_app,"div",{
                                class: "h3 text-center text-light mt-3", 
                                attr: {"hidden": ""},
                                text: nekoapp.create.localizedString(map_app, "mapHeader")
                            }),
                            map_menu_body: nekoapp.create.element(map_app,"div",{
                                class: "px-3",
                                id: "side_map_menu"
                            }),
                                menu_landmarks_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_landmarks_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapLandmarksTitle")
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
                                                "for": "cocoonCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "towerCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                        menu_landmarksButton_ryuker_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "ryukerCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/ryuker.png'>"
                                        }),
                                        menu_landmarksButton_mag_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "magCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_mag_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "magCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/mag.png'>"
                                        }),
                                        menu_landmarksButton_urgent_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "urgentCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_urgent_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "urgentCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/landmarks/urgent.png'>"
                                        }),
                                
                                menu_boxes_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_boxes_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapBoxesTitle")
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
                                                "for": "whiteBoxCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "redBoxCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                        menu_boxesButton_goldBox_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 disabled",
                                            attr: {
                                                "for": "goldBoxCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/containers/goldBox.png'>"
                                        }),
                                
                                menu_minerals_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_minerals_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapMineralsTitle")
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
                                                "for": "monotiteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "dualomiteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                        menu_mineralsButton_trinite_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "triniteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/trinite.png'>"
                                        }),
                                        menu_mineralsButton_phChunk_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "phChunkCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_phChunk_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "phChunkCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/photonChunk.png'>"
                                        }),
                                        menu_mineralsButton_phQuartz_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "phQuartzCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_mineralsButton_phQuartz_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "phQuartzCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/minerals/photonQuartz.png'>"
                                        }),
                                menu_food_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_food_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapFoodTitle")
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
                                                "for": "appleCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
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
                                                "for": "bananaCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
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
                                                "for": "clamCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "crabCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "herbCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "lobsterCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "mushroomCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "peachCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "pearCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "tomatoCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "shellCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
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
                                                "for": "turnipCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            },
                                            text: "<img width='48px' src='assets/markers/food/aelioTurnip.png'>"
                                        }),
                            menu_other_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_other_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapOtherTitle")
                                    }),
                                    menu_otherButton_group: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_otherButton_datapod_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "datapodCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_otherButton_datapod_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "datapodCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            },
                                            text: "<img width='48px' src='assets/markers/other/dataPod.png'>"
                                        }),
                                        menu_otherButton_reactor_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "reactorCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_otherButton_reactor_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 disabled",
                                            attr: {
                                                "for": "reactorCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            },
                                            text: "<img width='48px' src='assets/markers/other/alphaReactor.png'>"
                                        }),
                            menu_enemy_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_enemy_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapEmenyTitle")
                                    }),
                                    menu_enemyButton_group: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
                                    }),
                                        menu_enemyButton_veteran_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "veteranCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_enemyButton_veteran_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "veteranCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            },
                                            text: "<img width='48px' src='assets/markers/enemies/vet.png'>"
                                        }),
                                        menu_enemyButton_gigant_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "gigantCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_enemyButton_gigant_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1",
                                            attr: {
                                                "for": "gigantCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            },
                                            text: "<img width='48px' src='assets/markers/enemies/giga.png'>"
                                        }),

                };
                        elements.ngs_map.appendChild(elements.map_menu)
                            elements.map_menu.appendChild(elements.menu_header)
                            elements.map_menu.appendChild(elements.map_menu_body)

                                elements.map_menu_body.appendChild(elements.menu_landmarks_body)
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarks_desc)
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

                                elements.map_menu_body.appendChild(elements.menu_other_body)
                                    elements.menu_other_body.appendChild(elements.menu_other_desc)
                                    elements.menu_other_body.appendChild(elements.menu_otherButton_group)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_datapod_1)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_datapod_2)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_reactor_1)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_reactor_2)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_enemy_body)
                                    elements.menu_enemy_body.appendChild(elements.menu_enemy_desc)
                                    elements.menu_enemy_body.appendChild(elements.menu_enemyButton_group)
                                        elements.menu_enemyButton_group.appendChild(elements.menu_enemyButton_veteran_1)
                                        elements.menu_enemyButton_group.appendChild(elements.menu_enemyButton_veteran_2)
                                        elements.menu_enemyButton_group.appendChild(elements.menu_enemyButton_gigant_1)
                                        elements.menu_enemyButton_group.appendChild(elements.menu_enemyButton_gigant_2)

				// BIND MAP MENU BUTTONS EVENTS  -- SVGvsevolod
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
                elements.menu_enemyButton_veteran_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.enemies.veteran);
                    if(map.user_settings.enemies.veteran)
                        map.user_settings.enemies.veteran = false;
                    else
                        map.user_settings.enemies.veteran = true;
                    map.save_settings();
                });
                elements.menu_enemyButton_gigant_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.enemies.gigantix);
                    if(map.user_settings.enemies.gigantix)
                        map.user_settings.enemies.gigantix = false;
                    else
                        map.user_settings.enemies.gigantix = true;
                    map.save_settings();
                });
                elements.menu_otherButton_datapod_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.other.datapod);
                    if(map.user_settings.other.datapod)
                        map.user_settings.other.datapod = false;
                    else
                        map.user_settings.other.datapod = true;
                    map.save_settings();
                });
                elements.menu_otherButton_reactor_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.other.alphaReactor);
                    if(map.user_settings.other.alphaReactor)
                        map.user_settings.other.alphaReactor = false;
                    else
                        map.user_settings.other.alphaReactor = true;
                    map.save_settings();
                });
				
                return [elements, [/*elements.alert_element,*/elements.ngs_map]];
            },
            onModuleChange: function(){
                
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_cocoon_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_mag_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_ryuker_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_tower_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_urgent_2)
                
                new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_whiteBox_2)
                new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_redBox_2)
                new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_goldBox_2)
                
                new bootstrap.Tooltip(this.moduleContents.menu_mineralsButton_monotite_2)
                new bootstrap.Tooltip(this.moduleContents.menu_mineralsButton_dualomite_2)
                new bootstrap.Tooltip(this.moduleContents.menu_mineralsButton_trinite_2)
                new bootstrap.Tooltip(this.moduleContents.menu_mineralsButton_phChunk_2)
                new bootstrap.Tooltip(this.moduleContents.menu_mineralsButton_phQuartz_2)
                
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_apple_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_banana_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_clam_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_crab_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_herb_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_lobster_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_mushroom_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_peach_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_pear_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_tomato_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_shell_2)
                new bootstrap.Tooltip(this.moduleContents.menu_foodButton_turnip_2)

                new bootstrap.Tooltip(this.moduleContents.menu_otherButton_datapod_2)
                new bootstrap.Tooltip(this.moduleContents.menu_otherButton_reactor_2)
                
                new bootstrap.Tooltip(this.moduleContents.menu_enemyButton_veteran_2)
                new bootstrap.Tooltip(this.moduleContents.menu_enemyButton_gigant_2)
                //this.moduleContents.alert_element.init();
				// INITIALIZE MAP AND MAP MENU  -- SVGvsevolod
				map.init(function(){
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
                        
                        if(map.user_settings.enemies.gigantix)map_app.modules.map_module.moduleContents.menu_enemyButton_gigant_1.setAttribute("checked","");
                        if(map.user_settings.enemies.veteran)map_app.modules.map_module.moduleContents.menu_enemyButton_veteran_1.setAttribute("checked","");

                        //if(map.user_settings.other.alphaReactor)map_app.modules.map_module.moduleContents.menu_otherButton_reactor_1.setAttribute("checked","");
                        if(map.user_settings.other.datapod)map_app.modules.map_module.moduleContents.menu_otherButton_datapod_1.setAttribute("checked","");
                    });
            },
            onLocaleChange: function(){
                document.title = map_app.locale.strings.language_title;
                map_app.modules.map_header.children[0].children[0].setText();
                
                this.moduleContents.menu_landmarksButton_cocoon_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapCocoonTitle)
                this.moduleContents.menu_landmarksButton_tower_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapTowerTitle)
                this.moduleContents.menu_landmarksButton_urgent_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapUrgentTitle)
                this.moduleContents.menu_landmarksButton_ryuker_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapRyukerTitle)
                this.moduleContents.menu_landmarksButton_mag_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapMagTitle)
                
                this.moduleContents.menu_boxesButton_whiteBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapWhiteBoxTitle)
                this.moduleContents.menu_boxesButton_redBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapRedBoxTitle)
                this.moduleContents.menu_boxesButton_goldBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapGoldBoxTitle)
                
                this.moduleContents.menu_mineralsButton_monotite_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapMonotiteTitle)
                this.moduleContents.menu_mineralsButton_dualomite_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapDualomiteTitle)
                this.moduleContents.menu_mineralsButton_trinite_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapTriniteTitle)
                this.moduleContents.menu_mineralsButton_phChunk_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapPhChunkTitle)
                this.moduleContents.menu_mineralsButton_phQuartz_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapPhQuartzTitle)

                this.moduleContents.menu_foodButton_apple_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapAppleTitle)
                this.moduleContents.menu_foodButton_banana_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapBananaTitle)
                this.moduleContents.menu_foodButton_clam_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapClamTitle)
                this.moduleContents.menu_foodButton_crab_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapCrabTitle)
                this.moduleContents.menu_foodButton_herb_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapHerbTitle)
                this.moduleContents.menu_foodButton_lobster_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapLobsterTitle)
                this.moduleContents.menu_foodButton_mushroom_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapMushroomTitle)
                this.moduleContents.menu_foodButton_peach_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapPeachTitle)
                this.moduleContents.menu_foodButton_pear_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapPearTitle)
                this.moduleContents.menu_foodButton_tomato_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapTomatoTitle)
                this.moduleContents.menu_foodButton_shell_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapShellTitle)
                this.moduleContents.menu_foodButton_turnip_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapTurnipTitle)
                
                this.moduleContents.menu_otherButton_datapod_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapOtherDatapods)
                this.moduleContents.menu_otherButton_reactor_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapOtherAlphaReactors)
                
                this.moduleContents.menu_enemyButton_veteran_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapEmenyTypeVet)
                this.moduleContents.menu_enemyButton_gigant_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapEnemyTypeGig)
                
				// UPDATE MAP STRINGS  -- SVGvsevolod
				map.update_locale();
            }
        },
        map_header: {
            moduleType: "headerModule",
            headerLayout: {
                headerLogo: {},
                headerNavigation: {
                    items: [{
                            label: "localeString@contribute_button",
                            hyperlink: {
                                URL: "//discord.gg/AvgmpuX",
                                useDefaultNavigation: true,
                                target: "_blank"
                                }
                            },
                        {
                            label: "localeString@github_button",
                            hyperlink: {
                                URL: "//github.com/kosnag/NGS_WorldMap",
                                useDefaultNavigation: true,
                                target: "_blank"
                                }
                            },
                        {
                            label: "localeString@donate_button",
                            hyperlink: {
                                URL: "//ko-fi.com/kosnag",
                                useDefaultNavigation: true,
                                target: "_blank"
                                }
                            },
                        {
                            label: "localeString@laguages_button",
                            hyperlink: {
                                URL: "#",
                                event: function(openLangMenu){
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
    applicationLocalization: {
        "en-US": {URL: "languages/en_US.json"},
        //"en-AL": {URL: "languages/en_al.json"},
        "ru-RU": {URL: "languages/ru_RU.json"},
        "ko-KR": {URL: "languages/ko_KR.json"},
        "ja-JP": {URL: "languages/ja_JP.json"},
        "pt-BR": {URL: "languages/pt_BR.json"}

    }
});
map_app.loadScreen.spinner = nekoapp.create.element(map_app, "spinner", {
    text: nekoapp.create.element(map_app, "div", {
        class: "spinner-border text-primary",
        attr: {role: "status"},
        style: "width: 6rem; height: 6rem;"
    }),
    class: "d-flex justify-content-center"})
map_app.preferences.events.onAppInit = new nekoapp.event({
	target: map_app,
	oninit: function() {
        document.title = map_app.locale.strings.language_title;
        map_app.modules.map_header.className = "navbar navbar-expand-lg navbar-dark";
        map_app.modules.map_header.children[0].children[0].setText();
        document.body.className = "bg-secondary";
		
		// LANGUAGE CHANGE WINDOW INSIDE APP OBJECT INSTEAD OF APP MODULE OBJECT  -- SVGvsevolod
		map_app.languageMenu = nekoapp.create.object(map_app,map_app.preferences.elements.language_menu,{
			id: "languageModal",
			class: "modal fade",
			attr: {
				tabindex: "-1",
				"aria-labelledby": "languageModalLabel",
				"aria-hidden": "true"
			}
		});
		map_app.app.appendChild(map_app.languageMenu);
	}
});
nekoapp.system.scripts.add({application:map_app, url: "js/bootstrap.bundle.min.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/leaflet.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/map.js"});
nekoapp.system.init(map_app);
