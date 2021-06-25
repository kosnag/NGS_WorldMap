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
                                modal_modelDialog.appendChild(modal_modalContent);

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
                                            modal_content_body_button1.innerHTML = "English (Global)"
                                            modal_content_body_button1.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button1.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'en-US')");
                                            
                                        let modal_content_body_button2 = document.createElement("button")
                                            modal_content_body_button2.setAttribute("type","button")
                                            modal_content_body_button2.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button2.innerHTML = "English (Fan-patch)"
                                            modal_content_body_button2.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button2.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'en-AL')");
                                        
                                        let modal_content_body_button3 = document.createElement("button")
                                            modal_content_body_button3.setAttribute("type","button")
                                            modal_content_body_button3.className = "btn btn-custom-blue btn-lg disabled"
                                            modal_content_body_button3.innerHTML = "日本語"
                                            modal_content_body_button3.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button3.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ja-JP')");
                                        
                                        let modal_content_body_button4 = document.createElement("button")
                                            modal_content_body_button4.setAttribute("type","button")
                                            modal_content_body_button4.className = "btn btn-custom-blue btn-lg"
                                            modal_content_body_button4.innerHTML = "Русский"
                                            modal_content_body_button4.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button4.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ru-RU')");

                                        let modal_content_body_button5 = document.createElement("button")
                                            modal_content_body_button5.setAttribute("type","button")
                                            modal_content_body_button5.className = "btn btn-custom-blue btn-lg disabled"
                                            modal_content_body_button5.innerHTML = "한국어"
                                            modal_content_body_button5.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button5.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'ko-KR')");

                                        let modal_content_body_button6 = document.createElement("button")
                                            modal_content_body_button6.setAttribute("type","button")
                                            modal_content_body_button6.className = "btn btn-custom-blue btn-lg disabled"
                                            modal_content_body_button6.innerHTML = "Português"
                                            modal_content_body_button6.setAttribute("data-bs-dismiss","modal")
                                            modal_content_body_button6.setAttribute("onclick","nekoapp.locale.changeLanguage(map_app,'pt-BR')");

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
        leaflet : {
            tag : "leaflet-map",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let leaflet_div = document.createElement("div")
                            leaflet_div.className = "col-10"
                            leaflet_div.id = "leaflet-app",
                            leaflet_div.style = "background-color:rgba(31,57,90,1.00); height: 100vh;"

                        return[leaflet_div]
                    }
                ),
                init : function(){  
                    nekoapp.system.scripts.add({application:map_app, url: "js/map/map.js"});
                    setTimeout(function(){map.invalidateSize(true);}, 200);
                }
            }
        }/*,
        menu_map : {
            tag : "menu-map",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let AAAAAA = AAAAAA
                        return[]
                    }
                ),
                init : function(){
                    nekoapp.system.scripts.add({application:map_app, url: "js/map/data/AAAAAA.js"});
                }
            }
        }*/
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
                    /*alert_element : nekoapp.create.object(map_app,map_app.preferences.elements.alert_element,{
                        class : "alert alert-danger mt-1 alert-dismissible fade show", 
                        attr : {
                            role : "alert"
                        },
                        style: {display: "block", 
                                margin: "0 auto",
                                position: "absolute",
                                top: "75px",
                                left: "0",
                                right: "0",
                                width: "75%",
                                "z-index": "8492"
                            }
                    }),*/
                    language_menu : nekoapp.create.object(map_app,map_app.preferences.elements.language_menu,{
                        id : "languageModal",
                        class : "modal fade", 
                        attr : {
                            tabindex : "-1",
                            "aria-labelledby" : "languageModalLabel",
                            "aria-hidden" : "true"
                        }
                    }),
                    leaflet : nekoapp.create.object(map_app,map_app.preferences.elements.leaflet,{
                        class : "container-fluid row",
                        style : {
                            //display: "block",
                            margin: "0 auto"
                        }
                    }),
                    /*menu_map : nekoapp.create.object(map_app,map_app.preferences.elements.menu_map,{
                        class : "container-fluid row",
                        style : {}
                    })*/
                };
                return [elements, [/*elements.alert_element,*/elements.language_menu,elements.leaflet/*,elements.menu_map*/]];
            },
            onModuleChange : function(){
                //this.moduleContents.alert_element.init();
                //this.moduleContents.language_menu.init();
                this.moduleContents.leaflet.init();
                //this.moduleContents.menu_map.init();
            },
            onLocaleChange : function(){
                document.title = map_app.locale.strings.language_title;
                map_app.modules.map_header.children[0].children[0].setText();
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
        "en-US": {URL: "languages/en_gl.json"},
        "en-AL": {URL: "languages/en_al.json"},
        "ru-RU": {URL: "languages/ru_RU.json"},
        "ko-KR": {URL: "languages/ko_KR.json"},
        "ja-JP": {URL: "languages/ja_JP.json"},
        "pt-BR": {URL: "languages/pt_br.json"}

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
	}
});
nekoapp.system.scripts.add({application:map_app, url: "js/bootstrap.bundle.min.js"});
nekoapp.system.scripts.add({application:map_app, url: "js/leaflet.js"});
nekoapp.system.init(map_app);