var map_app = new nekoapp({
    application: document.querySelector("map-app"),
    applicationInfo: {
        nekoappID: "18",
        applicationTitle: "PSO2NGS Interactive Map",
        applicationVersion: "v2.0",
        applicationURL: "//map.pso2.ru/"
    },
    applicationStylesheets: {
        default: "css/map.main.css",
        colors: "css/map.colors.css",
        ui: "css/map.ui.css",
        bs: "css/bootstrap.css",
        leaflet: "css/leaflet.css"
    },
    applicationClasses: {
        UIButtonBackground: "map_ui_button_background",	
        UIButtonContent: "map_ui_button_content",
        UIDefaultButton: "map_ui_default_button",
        UIColorButton: "map_ui_color_button",
        UIGlassButton: "map_ui_glass_button",
        UIPaneButton: "map_ui_pane_button",
        UICircleButton: "map_ui_circle_button",
		UICheckBoxIcon: "map_ui_checkbox_icon",
		UICheckBoxContent: "map_ui_checkbox_content",
		UIRadioButtonIcon: "map_ui_radiobutton_icon",
		UIRadioButtonContent: "map_ui_radiobutton_content",
        UITextBoxInput: "map_ui_textbox_input",
        UITextBoxStroke: "map_ui_textbox_stroke",
        UIStrokedTextBox: "map_ui_stroked_textbox",
        UISimpleTextBox: "map_ui_simple_textbox",
        UIHighlightedTextBox: "map_ui_highlighted_textbox",
		UIComboBoxValue: "map_ui_combobox_value",
		UIComboBoxIcon: "map_ui_combobox_icon",
		UIComboBoxOptions: "map_ui_combobox_options",
        headerContainer: "container-fluid",
		headerNavigationItem: "map_head_navigation_item_content",
		localeChangeList: "map_localechange_language_list",
        progressBarInner: "map_progress_bar_inner",
		rowSubtext: "map_row_subtext",
		localeBoxIcon: "map_localebox_icon",
		localeBoxText: "map_localebox_text"
    },
    applicationElements: {
        localizedStringElement: {
            tag: "map-string",
            prototype: {}
        },
        graphicElement: {
            tag: "map-ui-graphic",
            prototype: {}
        },
        graphicsLibraryElement: {
            tag: "map-ui-graphics",
            prototype: {}
        },
        graphicsSetElement: {
            tag: "map-graphicset",
            prototype: {}
        },
        animationElement: {
            tag: "map-ui-animation",
            prototype: {}
        },
        animationSpriteElement: {
            tag: "map-ui-animation-sprite",
            prototype: {}
        },
        UIElement: {
            tag: "map-ui-element",
            prototype: {}
        },
        buttonElement: {
            tag: "map-ui-button",
            prototype: {}
        },
        checkBoxElement: {
            tag: "map-ui-checkbox",
            prototype: {}
        },
        radioButtonElement: {
            tag: "map-ui-radiobutton",
            prototype: {}
        },
        textBoxElement: {
            tag: "map-ui-textbox",
            prototype: {}
        },
		comboboxElement: {
			tag: "map-ui-combobox",
			prototype: {}
		},
        tooltipElement: {
            tag: "map-ui-tooltip",
            prototype: {}
        },
        moduleElement: {
            tag: "map-module",
            prototype: {}
        },
        headerElement: {
            tag: "map-head",
            prototype: {}
        },
        footerElement: {
            tag: "map-footer",
            prototype: {}
        },
        windowElement: {
            tag: "map-window",
            prototype: {}
        },
		windowTitle: {
			tag: "map-window-title",
			prototype: {}
		},
        overlayElement: {
            tag: "map-overlay",
            prototype: {}
        },
        headerLogoElement: {
            tag: "map-logo",
            prototype: {
                setText: function(){
                    if (this.className !== "navbar-brand")
                    this.className = "navbar-brand"
                    this.innerHTML = map_app.locale.strings.language_title;
                }
            }
        },
		headerNavigationElement: {
			tag: "map-navigation",
			prototype: {}
		},
		headerNavigationItem: {
			tag: "map-navigation-item",
			prototype: {}
		},
        spinnerElement: {
            tag: "map-ui-spinner",
            prototype: {}
        },
        loadScreenElement: {
            tag: "map-loading",
            prototype: {}
        },
        progressBarElement: {
            tag: "map-progress",
            prototype: {}
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
                                            modal_content_body_button2.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button2.style = "position: relative;"
                                            modal_content_body_button2.innerHTML = "<span style='position: absolute; left: 16px; top: 6px;'><img src='assets/flags/en-US.svg' height='32px'> <img src='assets/flags/en-UK.svg' height='32px'></span> English (Fan-patch)"
                                            modal_content_body_button2.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button2.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'en-fan')");
                                        
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
                            leaflet_div.id = "leaflet-map"

                        return[leaflet_div]
                    }
                )
            }
        },
		// MAP MENU ELEMENT
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
						popup_type_label = document.createElement("span"), // this.children[3].children[0]
						popup_type_space = document.createElement("span"),
						popup_type_value = document.createElement("span"), // this.children[3].children[2]

						popup_tiers = document.createElement("p"), // this.children[4]
						popup_tiers_left = document.createElement("span"), // this.children[4].children[0]
						popup_tiers_label = document.createElement("span"), // this.children[4].children[1]
						popup_tiers_right = document.createElement("span"), // this.children[4].children[2]

						popup_req1 = document.createElement("div"), // this.children[5]
						popup_req1_label = document.createElement("span"), // this.children[5].children[0]
						popup_req1_space = document.createElement("span"),
						popup_req1_value = document.createElement("span"), // this.children[5].children[2]

						popup_req2 = document.createElement("div"), // this.children[6]
						popup_req2_label = document.createElement("span"), // this.children[6].children[0]
						popup_req2_space = document.createElement("span"),
						popup_req2_value = document.createElement("span"), // this.children[6].children[2]

						popup_req3 = document.createElement("div"), // this.children[7]
						popup_req3_label = document.createElement("span"), // this.children[7].children[0]
						popup_req3_space = document.createElement("span"),
						popup_req3_value = document.createElement("span"), // this.children[7].children[2]

						popup_enemylv = document.createElement("div"), // this.children[8]
						popup_enemylv_label = document.createElement("span"), // this.children[8].children[0]
						popup_enemylv_space = document.createElement("span"),
						popup_enemylv_value = document.createElement("span"); // this.children[8].children[2]

						popup_reqitem_label = document.createElement("p"), // this.children[9]
						popup_reqitem_value = document.createElement("div"), // this.children[10]

						popup_desc_label = document.createElement("p"), // this.children[11]
						popup_desc_value = document.createElement("div"), // this.children[12]

						popup_main_label = document.createElement("p"), // this.children[13]
						popup_main_value = document.createElement("div"), // this.children[14]

						popup_side_label = document.createElement("p"), // this.children[15]
						popup_side_value = document.createElement("ul"), // this.children[16]

						popup_clear_reward_label = document.createElement("p"), // this.children[17]
						popup_clear_reward_value = document.createElement("ul"), // this.children[18]

						popup_rewards_label = document.createElement("p"), // this.children[19]
						popup_rewards_value = document.createElement("ul"), // this.children[20]

						popup_gigantix = document.createElement("div"), // this.children[21]
						popup_gigantix_label = document.createElement("span"), // this.children[21].children[0]
						popup_gigantix_space = document.createElement("span"),
						popup_gigantix_value = document.createElement("span"); // this.children[21].children[2]


					popup_image.className = "text-center mb-1";
                        popup_image.style = "min-width:300px";

					popup_category.className = "text-center mb-1";
					    popup_category.style = "font-weight:bold";

					popup_name.className = "text-center";
					    popup_name.style = "font-weight:bold";

					popup_type.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_type_space.style = "flex:1";
                        popup_type.appendChild(popup_type_label);
                        popup_type.appendChild(popup_type_space);
                        popup_type.appendChild(popup_type_value);

					popup_tiers.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_tiers_left.className = "carousel-control-prev-icon";
                        popup_tiers_left.style = "width:20px;height:20px;cursor:pointer;";
                        popup_tiers_label.className = "text-center";
                        popup_tiers_label.style = "flex:1";
                        popup_tiers_right.className = "carousel-control-next-icon";
                        popup_tiers_right.style = "width:20px;height:20px;cursor:pointer;";
                        popup_tiers.appendChild(popup_tiers_left);
                        popup_tiers.appendChild(popup_tiers_label);
                        popup_tiers.appendChild(popup_tiers_right);

					popup_req1.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_req1_space.style = "flex:1";
                        popup_req1.appendChild(popup_req1_label);
                        popup_req1.appendChild(popup_req1_space);
                        popup_req1.appendChild(popup_req1_value);

					popup_req2.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_req2.appendChild(popup_req2_label);
                        popup_req2.appendChild(popup_req2_space);
                        popup_req2.appendChild(popup_req2_value);
                        popup_req2_space.style = "flex:1";

					popup_req3.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_req3_space.style = "flex:1";
                        popup_req3.appendChild(popup_req3_label);
                        popup_req3.appendChild(popup_req3_space);
                        popup_req3.appendChild(popup_req3_value);

                    popup_enemylv.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_enemylv_space.style = "flex:1";
                        popup_enemylv.appendChild(popup_enemylv_label);
                        popup_enemylv.appendChild(popup_enemylv_space);
                        popup_enemylv.appendChild(popup_enemylv_value);

                    popup_reqitem_label.className = "mb-0";
                        popup_reqitem_label.style = "font-weight:bold";

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

					popup_gigantix.style = "display:flex;flex-direction:row;padding:0 0px;font-size:14px;font-weight:bold";
                        popup_gigantix_space.style = "flex:1";
                        popup_gigantix.appendChild(popup_gigantix_label);
                        popup_gigantix.appendChild(popup_gigantix_space);
                        popup_gigantix.appendChild(popup_gigantix_value);
                    
					return[popup_image,popup_category,popup_name,popup_type,popup_tiers,popup_req1,popup_req2,popup_req3,popup_enemylv,popup_reqitem_label,popup_reqitem_value,popup_desc_label,popup_desc_value,popup_main_label,popup_main_value,popup_side_label,popup_side_value,popup_clear_reward_label,popup_clear_reward_value,popup_rewards_label,popup_rewards_value,popup_gigantix];
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
							this.children[6].children[0].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].required_bp === "number"?map_app.locale.strings.mapPopupRequiredBP:info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_bp === "number"?map_app.locale.strings.mapPopupRecomendedBP:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_bp === "number"?map_app.locale.strings.mapPopupRecomendedBP:typeof info.popup_data.required_bp === "number"?map_app.locale.strings.mapPopupRequiredBP + ":":map_app.locale.strings.mapPopupRecomendedBP + ":";
							this.children[6].children[2].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].required_bp === "number"?info.popup_data.tiers[this.popup_tier].required_bp:info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_bp === "number"?info.popup_data.tiers[this.popup_tier].recomended_bp:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_bp === "number"?info.popup_data.tiers[0].recomended_bp:typeof info.popup_data.required_bp === "number"?info.popup_data.required_bp:info.popup_data.recomended_bp;
							nekoapp.system.hiddenStatus.set(this.children[6],false);
						}else nekoapp.system.hiddenStatus.set(this.children[6],true);

						if(typeof info.popup_data.recomended_lv === "number" || (info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_lv === "number") || (info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_lv === "number")){
							this.children[7].children[0].innerHTML = map_app.locale.strings.mapPopupSectionAvgEnemyLvl + ":";
							this.children[7].children[2].innerHTML = info.popup_data.tiers instanceof Array && typeof this.popup_tier === "number" && typeof info.popup_data.tiers[this.popup_tier].recomended_lv === "number"?info.popup_data.tiers[this.popup_tier].recomended_lv:info.popup_data.tiers instanceof Array && typeof info.popup_data.tiers[0].recomended_lv === "number"?info.popup_data.tiers[0].recomended_lv:info.popup_data.recomended_lv;
							nekoapp.system.hiddenStatus.set(this.children[7],false);
						}else nekoapp.system.hiddenStatus.set(this.children[7],true);

						if(typeof info.popup_data.enemy_lv === "number"){
							this.children[8].children[0].innerHTML = map_app.locale.strings.mapTriggerEvemyLevel + ":";
							this.children[8].children[2].innerHTML = info.popup_data.enemy_lv
							nekoapp.system.hiddenStatus.set(this.children[8],false);
						}else nekoapp.system.hiddenStatus.set(this.children[8],true);

						if(typeof info.popup_data.req_item === "string"){
							this.children[9].innerHTML = map_app.locale.strings.mapTriggerReqItem + ":";
							switch(info.popup_data.req_item){
                                case "purpleTrigger":
                                    this.children[10].innerHTML = map_app.locale.strings.mapTriggerReqItemPurple;
                                    break;
                                case "yellowTrigger":
                                    this.children[10].innerHTML = map_app.locale.strings.mapTriggerReqItemYellow;
                                    break;
							}
							nekoapp.system.hiddenStatus.set(this.children[9],false);
							nekoapp.system.hiddenStatus.set(this.children[10],false);
						}else {
                            nekoapp.system.hiddenStatus.set(this.children[9],true);
                            nekoapp.system.hiddenStatus.set(this.children[10],true);
						}

						if(typeof info.popup_data.description === "string"){
							this.children[11].innerHTML = map_app.locale.strings.mapPopupDescription + ":";
						    this.children[12].innerHTML = map_app.locale.strings[info.popup_data.description];
							nekoapp.system.hiddenStatus.set(this.children[11],false);
							nekoapp.system.hiddenStatus.set(this.children[12],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[11],true);
							nekoapp.system.hiddenStatus.set(this.children[12],true);
						}

                        if(typeof info.popup_data.main_mission === "string"){
							this.children[13].innerHTML = map_app.locale.strings.mapPopupMainMission + ":";
						    this.children[14].innerHTML = map_app.locale.strings[info.popup_data.main_mission];
							nekoapp.system.hiddenStatus.set(this.children[13],false);
							nekoapp.system.hiddenStatus.set(this.children[14],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[13],true);
							nekoapp.system.hiddenStatus.set(this.children[14],true);
						}

						if(info.popup_data.side_missions instanceof Array){
							this.children[15].innerHTML = map_app.locale.strings.mapPopupSideMissions + ":";
							nekoapp.system.clear(this.children[16]);
							for(var i in info.popup_data.side_missions){
								var item = document.createElement("li");
								this.children[16].appendChild(item).innerHTML = map_app.locale.strings[info.popup_data.side_missions[i]];
							}
							nekoapp.system.hiddenStatus.set(this.children[15],false);
							nekoapp.system.hiddenStatus.set(this.children[16],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[15],true);
							nekoapp.system.hiddenStatus.set(this.children[16],true);
						}

						if(info.popup_data.clear_reward instanceof Array){
							this.children[17].innerHTML = map_app.locale.strings.mapPopupClearReward + ":";
							nekoapp.system.clear(this.children[18]);
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
								this.children[18].appendChild(item);
							}
							nekoapp.system.hiddenStatus.set(this.children[17],false);
							nekoapp.system.hiddenStatus.set(this.children[18],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[17],true);
							nekoapp.system.hiddenStatus.set(this.children[18],true);
						}

                        if(info.popup_data.rewards instanceof Array){
							this.children[19].innerHTML = map_app.locale.strings.mapPopupRewards + ":";
							nekoapp.system.clear(this.children[20]);
							for(var i in info.popup_data.rewards){
								var item = document.createElement("li");
								switch(info.popup_data.rewards[i].reward_type){
                                	case "meseta":
                                    	item.innerHTML = info.popup_data.rewards[i].reward_count + " " + map_app.locale.strings.mapPopupRewardMeseta;
                                    	break;
                                	case "seasonPoints":
                                    	item.innerHTML = info.popup_data.rewards[i].reward_count + " " + map_app.locale.strings.mapPopupRewardSeasonPoints;
                                    	break;

                                    case "itemGoldSword":
                                        item.innerHTML = map_app.locale.strings.mapItemGoldSword;
                                        break;
                                    case "itemSilverSword":
                                        item.innerHTML = map_app.locale.strings.mapItemSilverSword;
                                        break;
                                	case "itemGoldArmor":
                                    	item.innerHTML = map_app.locale.strings.mapItemGoldArmor;
                                    	break;
                                	case "itemSilverArmor":
                                    	item.innerHTML = map_app.locale.strings.mapItemSilverArmor;
                                    	break;
								}
								this.children[20].appendChild(item);
							}
							nekoapp.system.hiddenStatus.set(this.children[19],false);
							nekoapp.system.hiddenStatus.set(this.children[20],false);
						}else{
							nekoapp.system.hiddenStatus.set(this.children[19],true);
							nekoapp.system.hiddenStatus.set(this.children[20],true);
						}

						if(typeof info.popup_data.gigantix === "string"){
							this.children[21].children[0].innerHTML = map_app.locale.strings.mapEnemyTypeGig + ":";
							switch(info.popup_data.gigantix){
                                    case "ardBanser":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyArdBanser;
                                        break;
                                    case "ardBanshee":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyArdBanshee;
                                        break;
                                    case "biggFrogga":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyBiggFrogga;
                                        break;
                                    case "bujin":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyBujin;
                                        break;
                                    case "chiacurio":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyChiacurio;
                                        break;
                                    case "cragBear":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyCragBear;
                                        break;
                                    case "daitylAxe":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyDaitylAxe;
                                        break;
                                    case "daitylSword":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyDaitylSword;
                                        break;
                                    case "eldiSkythe":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyEldiSkythe;
                                        break;
                                    case "nexAelio": 
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyNexAelio;
                                        break;
                                    case "nogleth":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyNogleth;
                                        break;
                                    case "oruq":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyOruq;
                                        break;
                                    case "thunderBanser":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyThunderBanser;
                                        break;
                                    case "thunderBanshee":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyThunderBanshee;
                                        break;
                                    case "varas":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyVaras;
                                        break;
                                    case "waulon":
                                        this.children[21].children[2].innerHTML = map_app.locale.strings.mapEnemyWaulon;
                                        break;
							}
							nekoapp.system.hiddenStatus.set(this.children[21],false);
						}else nekoapp.system.hiddenStatus.set(this.children[21],true);
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
    applicationGraphics: {
        resourceName: "SVGs",
        URL: "assets/svg.html"
    },
    applicationAnimations: {
		UIWaveAnimation: {
			name: "map_ui_wave_animation",
			duration: 300
		},
		CSSVariables: {
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
                    ngs_map: nekoapp.create.object(map_app,map_app.preferences.elements.ngs_map,{
                        class: "container-fluid row",
                        style: {
                            "padding-top": "60px"
                        }
                    }),
                        map_menu: nekoapp.create.object(map_app,map_app.preferences.elements.map_menu_element,{
                            class: "bg-menu",
                            id: "side_map_menu"
                        }),
                            menu_header: nekoapp.create.element(map_app,"div",{
                                class: "h3 text-center text-light mt-3", 
                                attr: {"hidden": ""},
                                text: nekoapp.create.localizedString(map_app, "mapHeader")
                            }),
                            menu_tip: nekoapp.create.element(map_app,"div",{
                                class: "border rounded-3 border-primary text-light text-center mt-3 mx-3",
                                text: nekoapp.create.localizedString(map_app, "mapRightButtonTip")
                            }),
                            menu_alphareactor_researcher: nekoapp.create.element(map_app,"div",{
                                class: "d-grid gap-2 mx-3",
                            }),
                                menu_alphareactor_researcher_button: nekoapp.create.element(map_app,"button",{
                                    class: "btn btn-custom-blue btn-lg mt-4 mb-2 adaptive-size-img-ar",
                                    style: {
                                        "position": "relative"
                                    }
                                }),
                                    menu_alphareactor_researcher_button_image1: nekoapp.create.element(map_app,"img",{
                                        class: "adaptive-size-img-ar",
                                        attr: {
                                            "src": "assets/markers/other/alphaReactor.png"
                                        },
                                        style: {
                                            "position": "absolute",
                                            "top": "8px",
                                            "left": "20px"
                                        }
                                    }),
                                    menu_alphareactor_researcher_button_text1: nekoapp.create.element(map_app,"span",{
                                        text: nekoapp.create.localizedString(map_app, "mapOtherAlphaReactors"),
                                    }),
                                    menu_alphareactor_researcher_button_text2: nekoapp.create.element(map_app,"span",{
                                        class: "adaptive-size-img-ar",
                                        text: " (Twitter)",
                                    }),
                                    menu_alphareactor_researcher_button_image2: nekoapp.create.element(map_app,"img",{
                                        class: "adaptive-size-img-ar",
                                        attr: {
                                            "src": "https://pbs.twimg.com/profile_images/1439840107977011203/ujeizkz9_400x400.jpg"
                                        },
                                        style: {
                                            "position": "absolute",
                                            "top": "8px",
                                            "right": "20px",
                                            "border-radius": "50%",
                                            "filter": "drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white)",
                                            "data-bs-toogle": "tooltip",
                                            "data-bs-placement": "bottom"
                                        }
                                    }),

                            map_menu_body: nekoapp.create.element(map_app,"div",{
                                class: "px-3"
                            }),
                                menu_landmarks_body: nekoapp.create.element(map_app,"div",{
                                    class: "my-3"
                                }),
                                    menu_landmarks_desc: nekoapp.create.element(map_app,"div",{
                                        class: "h5 text-light text-center mb-3",
                                        text: nekoapp.create.localizedString(map_app, "mapLandmarksTitle")
                                    }),
                                    menu_landmarksButton_group1: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center mb-2",
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "cocoonCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_cocoon_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/cocoon.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "towerCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_tower_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/tower.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "ryukerCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_ryuker_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/ryuker.png"
                                                }
                                            }),
                                    menu_landmarksButton_group2: nekoapp.create.element(map_app,"button-group",{
                                        class: "d-flex justify-content-center",
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "magCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_mag_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/mag.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "urgentCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_urgent_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/urgent.png"
                                                }
                                            }),
                                        menu_landmarksButton_trigger_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "triggerCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_landmarksButton_trigger_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "triggerCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_landmarksButton_trigger_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/landmarks/trigger.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "whiteBoxCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_boxesButton_whiteBox_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/containers/whiteBox.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "redBoxCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_boxesButton_redBox_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/containers/redBox.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "monotiteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_mineralsButton_monotite_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/minerals/monotite.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "dualomiteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_mineralsButton_dualomite_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/minerals/dualomite.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "triniteCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_mineralsButton_trinite_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/minerals/trinite.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "phChunkCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_mineralsButton_phChunk_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/minerals/photonChunk.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "phQuartzCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_mineralsButton_phQuartz_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/minerals/photonQuartz.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "appleCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            }
                                        }),
                                            menu_foodButton_apple_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioApple.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "bananaCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            }
                                        }),
                                            menu_foodButton_banana_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioBanana.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "clamCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_clam_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioClam.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "crabCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_crab_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioCrab.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "herbCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_herb_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioHerb.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "lobsterCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_lobster_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioLobster.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "mushroomCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_mushroom_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioMushroom.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "peachCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_peach_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioPeach.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "pearCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_pear_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioPear.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "tomatoCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_tomato_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioTomato.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "shellCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_shell_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioTurbanShell.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "turnipCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom"
                                            }
                                        }),
                                            menu_foodButton_turnip_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/food/aelioTurnip.png"
                                                }
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
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "datapodCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                "data-bs-html": "true"
                                            }
                                        }),
                                            menu_otherButton_datapod_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/other/dataPod.png"
                                                }
                                            }),
                                        menu_otherButton_veteran_1: nekoapp.create.element(map_app,"input",{
                                            class: "btn-check",
                                            id: "veteranCheckbox",
                                            attr: {
                                                "type": "checkbox",
                                                "autocomplete": "off"
                                            }
                                        }),
                                        menu_otherButton_veteran_2: nekoapp.create.element(map_app,"label",{
                                            class: "btn btn-outline-custom-blue mx-1 adaptive-size-img",
                                            attr: {
                                                "for": "veteranCheckbox",
                                                "data-bs-toogle": "tooltip",
                                                "data-bs-placement": "bottom",
                                                 "data-bs-html": "true"
                                            }
                                        }),
                                            menu_otherButton_veteran_img: nekoapp.create.element(map_app,"img",{
                                                attr: {
                                                    "src": "assets/markers/other/vet.png"
                                                }
                                            }),

                };
                        elements.ngs_map.appendChild(elements.map_menu)
                            elements.map_menu.appendChild(elements.menu_header)
                            elements.map_menu.appendChild(elements.menu_tip)
                            elements.map_menu.appendChild(elements.menu_alphareactor_researcher)
                                elements.menu_alphareactor_researcher.appendChild(elements.menu_alphareactor_researcher_button)
                                    elements.menu_alphareactor_researcher_button.appendChild(elements.menu_alphareactor_researcher_button_image1)
                                    elements.menu_alphareactor_researcher_button.appendChild(elements.menu_alphareactor_researcher_button_text1)
                                    elements.menu_alphareactor_researcher_button.appendChild(elements.menu_alphareactor_researcher_button_text2)
                                    elements.menu_alphareactor_researcher_button.appendChild(elements.menu_alphareactor_researcher_button_image2)
                            elements.map_menu.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))
                            elements.map_menu.appendChild(elements.map_menu_body)

                                elements.map_menu_body.appendChild(elements.menu_landmarks_body)
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarks_desc)
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarksButton_group1)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_cocoon_1)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_cocoon_2)
                                            elements.menu_landmarksButton_cocoon_2.appendChild(elements.menu_landmarksButton_cocoon_img)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_tower_1)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_tower_2)
                                            elements.menu_landmarksButton_tower_2.appendChild(elements.menu_landmarksButton_tower_img)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_urgent_1)
                                        elements.menu_landmarksButton_group1.appendChild(elements.menu_landmarksButton_urgent_2)
                                            elements.menu_landmarksButton_urgent_2.appendChild(elements.menu_landmarksButton_urgent_img)
                                    elements.menu_landmarks_body.appendChild(elements.menu_landmarksButton_group2)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_ryuker_1)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_ryuker_2)
                                            elements.menu_landmarksButton_ryuker_2.appendChild(elements.menu_landmarksButton_ryuker_img)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_mag_1)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_mag_2)
                                            elements.menu_landmarksButton_mag_2.appendChild(elements.menu_landmarksButton_mag_img)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_trigger_1)
                                        elements.menu_landmarksButton_group2.appendChild(elements.menu_landmarksButton_trigger_2)
                                            elements.menu_landmarksButton_trigger_2.appendChild(elements.menu_landmarksButton_trigger_img)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_boxes_body)
                                    elements.menu_boxes_body.appendChild(elements.menu_boxes_desc)
                                    elements.menu_boxes_body.appendChild(elements.menu_boxesButton_group)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_whiteBox_1)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_whiteBox_2)
                                            elements.menu_boxesButton_whiteBox_2.appendChild(elements.menu_boxesButton_whiteBox_img)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_redBox_1)
                                        elements.menu_boxesButton_group.appendChild(elements.menu_boxesButton_redBox_2)
                                            elements.menu_boxesButton_redBox_2.appendChild(elements.menu_boxesButton_redBox_img)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_minerals_body)
                                    elements.menu_minerals_body.appendChild(elements.menu_minerals_desc)
                                    elements.menu_minerals_body.appendChild(elements.menu_mineralsButton_group)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_monotite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_monotite_2)
                                            elements.menu_mineralsButton_monotite_2.appendChild(elements.menu_mineralsButton_monotite_img)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_dualomite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_dualomite_2)
                                            elements.menu_mineralsButton_dualomite_2.appendChild(elements.menu_mineralsButton_dualomite_img)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_trinite_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_trinite_2)
                                            elements.menu_mineralsButton_trinite_2.appendChild(elements.menu_mineralsButton_trinite_img)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phChunk_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phChunk_2)
                                            elements.menu_mineralsButton_phChunk_2.appendChild(elements.menu_mineralsButton_phChunk_img)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phQuartz_1)
                                        elements.menu_mineralsButton_group.appendChild(elements.menu_mineralsButton_phQuartz_2)
                                            elements.menu_mineralsButton_phQuartz_2.appendChild(elements.menu_mineralsButton_phQuartz_img)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_food_body)
                                    elements.menu_food_body.appendChild(elements.menu_food_desc)
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_apple_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_apple_2)
                                            elements.menu_foodButton_apple_2.appendChild(elements.menu_foodButton_apple_img)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_banana_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_banana_2)
                                            elements.menu_foodButton_banana_2.appendChild(elements.menu_foodButton_banana_img)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_clam_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_clam_2)
                                            elements.menu_foodButton_clam_2.appendChild(elements.menu_foodButton_clam_img)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_crab_1)
                                        elements.menu_foodButton_group1.appendChild(elements.menu_foodButton_crab_2)
                                            elements.menu_foodButton_crab_2.appendChild(elements.menu_foodButton_crab_img)
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group2)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_herb_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_herb_2)
                                            elements.menu_foodButton_herb_2.appendChild(elements.menu_foodButton_herb_img)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_lobster_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_lobster_2)
                                            elements.menu_foodButton_lobster_2.appendChild(elements.menu_foodButton_lobster_img)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_mushroom_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_mushroom_2)
                                            elements.menu_foodButton_mushroom_2.appendChild(elements.menu_foodButton_mushroom_img)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_peach_1)
                                        elements.menu_foodButton_group2.appendChild(elements.menu_foodButton_peach_2)
                                            elements.menu_foodButton_peach_2.appendChild(elements.menu_foodButton_peach_img)
                                    elements.menu_food_body.appendChild(elements.menu_foodButton_group3)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_pear_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_pear_2)
                                            elements.menu_foodButton_pear_2.appendChild(elements.menu_foodButton_pear_img)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_tomato_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_tomato_2)
                                            elements.menu_foodButton_tomato_2.appendChild(elements.menu_foodButton_tomato_img)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_shell_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_shell_2)
                                            elements.menu_foodButton_shell_2.appendChild(elements.menu_foodButton_shell_img)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_turnip_1)
                                        elements.menu_foodButton_group3.appendChild(elements.menu_foodButton_turnip_2)
                                            elements.menu_foodButton_turnip_2.appendChild(elements.menu_foodButton_turnip_img)
                                elements.map_menu_body.appendChild(nekoapp.create.element(map_app,"hr",{class:"bg-light mx-2"}))

                                elements.map_menu_body.appendChild(elements.menu_other_body)
                                    elements.menu_other_body.appendChild(elements.menu_other_desc)
                                    elements.menu_other_body.appendChild(elements.menu_otherButton_group)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_datapod_1)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_datapod_2)
                                            elements.menu_otherButton_datapod_2.appendChild(elements.menu_otherButton_datapod_img)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_veteran_1)
                                        elements.menu_otherButton_group.appendChild(elements.menu_otherButton_veteran_2)
                                            elements.menu_otherButton_veteran_2.appendChild(elements.menu_otherButton_veteran_img)

				// BIND MAP MENU BUTTONS EVENTS
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
                elements.menu_landmarksButton_trigger_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.landmarks.trigger);
                    if(map.user_settings.landmarks.trigger)
                        map.user_settings.landmarks.trigger = false;
                    else
                        map.user_settings.landmarks.trigger = true;
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
                elements.menu_boxesButton_whiteBox_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.boxes.whiteBox);
                    if(map.user_settings.boxes.whiteBox)
                        map.user_settings.boxes.whiteBox = false;
                    else
                        map.user_settings.boxes.whiteBox = true;
                    map.save_settings();
                });
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
                elements.menu_otherButton_veteran_1.addEventListener("change",function(){
                    map.toogle_markers(map.map_markers.other.veteran);
                    if(map.user_settings.other.veteran)
                        map.user_settings.other.veteran = false;
                    else
                        map.user_settings.other.veteran = true;
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
				
                return [elements, [elements.ngs_map]];
            },
            onModuleChange: function(){

                this.moduleContents.menu_alphareactor_researcher_button.addEventListener("click",function(){window.open('https://twitter.com/search?q=%22%23AlphaReactors%20%23%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%AA%E3%82%A2%E3%82%AF%E3%82%BF%E3%83%BC%20%23PSO2NGS%22%20(from%3AAphyAmarantha)&f=live')})
                new bootstrap.Tooltip(this.moduleContents.menu_alphareactor_researcher_button_image2)
                this.moduleContents.menu_alphareactor_researcher_button_image2.setAttribute("data-bs-original-title","AphraelAmarantha (@AphyAmarantha)")

                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_cocoon_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_mag_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_ryuker_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_tower_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_urgent_2)
                new bootstrap.Tooltip(this.moduleContents.menu_landmarksButton_trigger_2)
                
                new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_whiteBox_2)
                new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_redBox_2)
               //new bootstrap.Tooltip(this.moduleContents.menu_boxesButton_goldBox_2)
                
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
                new bootstrap.Tooltip(this.moduleContents.menu_otherButton_veteran_2)

				// INITIALIZE MAP AND MAP MENU
				map.init(function(){
                        if(map.user_settings.landmarks.cocoon)map_app.modules.map_module.moduleContents.menu_landmarksButton_cocoon_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.mag)map_app.modules.map_module.moduleContents.menu_landmarksButton_mag_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.ryuker)map_app.modules.map_module.moduleContents.menu_landmarksButton_ryuker_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.tower)map_app.modules.map_module.moduleContents.menu_landmarksButton_tower_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.urgent)map_app.modules.map_module.moduleContents.menu_landmarksButton_urgent_1.setAttribute("checked","");
                        if(map.user_settings.landmarks.trigger)map_app.modules.map_module.moduleContents.menu_landmarksButton_trigger_1.setAttribute("checked","");
                        
                        if(map.user_settings.boxes.whiteBox)map_app.modules.map_module.moduleContents.menu_boxesButton_whiteBox_1.setAttribute("checked","");
                        if(map.user_settings.boxes.redBox)map_app.modules.map_module.moduleContents.menu_boxesButton_redBox_1.setAttribute("checked","");
                        
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
                        
                        if(map.user_settings.other.veteran)map_app.modules.map_module.moduleContents.menu_otherButton_veteran_1.setAttribute("checked","");
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
                this.moduleContents.menu_landmarksButton_trigger_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapTriggerTitle)
                
                this.moduleContents.menu_boxesButton_whiteBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapWhiteBoxTitle)
                this.moduleContents.menu_boxesButton_redBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapRedBoxTitle)
                //this.moduleContents.menu_boxesButton_goldBox_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapGoldBoxTitle)
                
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
                this.moduleContents.menu_otherButton_veteran_2.setAttribute("data-bs-original-title",map_app.locale.strings.mapOtherVeteran)
                
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
        "en-fan": {URL: "languages/en_fan.json"},
        "ru-RU": {URL: "languages/ru_RU.json"},
        "ko-KR": {URL: "languages/ko_KR.json"},
        "ja-JP": {URL: "languages/ja_JP.json"},
        "pt-BR": {URL: "languages/pt_BR.json"}
    },
    loadingScreen: {
        customLoadScreen: function(){
            let localeLoadStrings = {
                "customLoadScreenStringTitleEn": "PSO2NGS Interactive Map",
                "customLoadScreenString1En": "Map is not designed for mobile devices",
                "customLoadScreenString2En": "If you see that screen more than 3 seconds - please reload a page",
                
                "customLoadScreenStringTitleRu": "Интерактивная Карта PSO2NGS",
                "customLoadScreenString1Ru": "На мобильных устройства карта будет отображаться некорректно",
                "customLoadScreenString2Ru": "Если вы видите данный экран более 3 секунд - перезагрузите страницу",

                "customLoadScreenStringTitleKr": "PSO2NGS 인터렉티브 맵",
                "customLoadScreenString1Kr": "지도는 모바일 장치 용으로 설계되지 않았습니다",
                "customLoadScreenString2Kr": "해당 화면이 3 초 이상 표시되는 경우-페이지를 다시로드하십시오",

                "customLoadScreenStringTitleJp": "PSO2NGS インタラクティブ マップ",
                "customLoadScreenString1Jp": "このマップはモバイルデバイスでは実際のものではありません",
                "customLoadScreenString2Jp": "この画面が3秒以上表示される場合は、ページをリロードしてください ",

                "customLoadScreenStringTitlePt": "Mapa Interactivo PSO2NGS",
                "customLoadScreenString1Pt": "Os mapas não são projetados para dispositivos móveis",
                "customLoadScreenString2Pt": "Se você vir essa tela mais de 3 segundos - por favor, recarregue uma página"
            }
            if(localStorage.getItem("nekoapp.locale") && JSON.parse(localStorage.getItem("nekoapp.locale")).language){
                switch(JSON.parse(localStorage.getItem("nekoapp.locale")).language){
                    case "en-US":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleEn
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1En
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2En
                        break;
                    case "en-fan":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleEn
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1En
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2En
                        break;
                    case "ru-RU":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleRu
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Ru
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Ru
                        break;
                    case "ko-KR":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleKr
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Kr
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Kr
                        break;
                    case "ja-JP":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleJp
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Jp
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Jp
                        break;
                    case "pt-BR":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitlePt
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Pt
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Pt
                        break;
                }
            }else{
                switch(navigator.language){
                    case "ru-RU":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleRu
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Ru
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Ru
                        break;
                    case "ko-KR":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleKr
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Kr
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Kr
                        break;
                    case "ja-JP":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleJp
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Jp
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Jp
                        break;
                    case "pt-BR":
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitlePt
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1Pt
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2Pt
                        break;
                    default:
                        var customLoadScreenStringTitle = localeLoadStrings.customLoadScreenStringTitleEn
                        var customLoadScreenString1 = localeLoadStrings.customLoadScreenString1En
                        var customLoadScreenString2 = localeLoadStrings.customLoadScreenString2En
                        break;
                    }
            }
            switch(Math.floor(Math.random() * 3)){
                case 0:
                    var loadingScreenGifSrc = "assets/loadscreen/rappy1.gif",
                        loadingScreenGifSize = "320"
                    break;
                case 1:
                    var loadingScreenGifSrc = "assets/loadscreen/rappy2.gif",
                        loadingScreenGifSize = "240"
                    break;
                case 2:
                    var loadingScreenGifSrc = "assets/loadscreen/rappy3.gif",
                        loadingScreenGifSize = "240"
                    break;
            }
            let loadingScreenElement = document.createElement("div")

                loadingScreenGifCenter = document.createElement("center")

                        loadingScreenGif = document.createElement("img")
                            loadingScreenGif.setAttribute("src", loadingScreenGifSrc)
                            loadingScreenGif.width = loadingScreenGifSize
                
                    loadingScreenStringTitle = document.createElement("div")
                        loadingScreenStringTitle.innerHTML = customLoadScreenStringTitle
                        loadingScreenStringTitle.className = "navbar-brand text-light text-center"
                        loadingScreenStringTitle.style = "padding-bottom: 32px;"
                
                    loadingScreenString1 = document.createElement("div")
                        loadingScreenString1.innerHTML = customLoadScreenString1
                        loadingScreenString1.className = "text-light text-center"
                
                    loadingScreenString2 = document.createElement("div")
                        loadingScreenString2.innerHTML = customLoadScreenString2
                        loadingScreenString2.className = "text-light text-center"

                    loadingScreenCopyright11 = document.createElement("div")
                        loadingScreenCopyright11.style = "position: absolute; bottom: 25px; left: 50%;"

                        loadingScreenCopyright12 = document.createElement("div")
                            loadingScreenCopyright12.innerHTML = "Powered by <a href='https://github.com/nekowebsoftware/nekoapp' target='_blank' class='text-info'>NekoApp</a> JS framework"
                            loadingScreenCopyright12.className = "text-light"
                            loadingScreenCopyright12.style = "position: relative; left: -50%;"

                    loadingScreenCopyright21 = document.createElement("div")
                        loadingScreenCopyright21.style = "position: absolute; bottom: 5px; left: 50%;"

                        loadingScreenCopyright22 = document.createElement("div")
                            loadingScreenCopyright22.innerHTML = "Developed by <a href='https://github.com/kosnag' target='_blank' class='text-info'>kosnag</a>"
                            loadingScreenCopyright22.className = "text-light"
                            loadingScreenCopyright22.style = "position: relative; left: -50%;"
                
            loadingScreenElement.appendChild(loadingScreenGifCenter)
                loadingScreenGifCenter.appendChild(loadingScreenGif)
            loadingScreenElement.appendChild(loadingScreenStringTitle)
            loadingScreenElement.appendChild(loadingScreenString1)
            loadingScreenElement.appendChild(loadingScreenString2)
            loadingScreenElement.appendChild(loadingScreenCopyright11)
                loadingScreenCopyright11.appendChild(loadingScreenCopyright12)
            loadingScreenElement.appendChild(loadingScreenCopyright21)
                loadingScreenCopyright21.appendChild(loadingScreenCopyright22)

            return loadingScreenElement
        }
    }
});
map_app.preferences.events.onAppInit = new nekoapp.event({
	target: map_app,
	oninit: function() {
        document.title = map_app.locale.strings.language_title;
        map_app.modules.map_header.className = "navbar navbar-expand-lg navbar-dark";
        map_app.modules.map_header.children[0].children[0].setText();
        document.body.className = "bg-secondary";
		
		map_app.languageMenu = nekoapp.create.object(map_app,map_app.preferences.elements.language_menu,{
			id: "languageModal",
			class: "modal fade",
			attr: {
				"tabindex": "-1",
				"aria-labelledby": "languageModalLabel",
				"aria-hidden": "true"
			}
		});
		map_app.app.appendChild(map_app.languageMenu);
        map_app.app.addEventListener("contextmenu",function(e){e.preventDefault();});
	}
});
nekoapp.system.scripts.add({application:map_app, url: "js/bootstrap.bundle.min.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/leaflet.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/map.js"});
nekoapp.system.init(map_app);