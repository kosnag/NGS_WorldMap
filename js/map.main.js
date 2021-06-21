nekoapp.system.scripts.add({application:map_app, url: "js/mdb.min.js"});
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
        mdb : "css/mdb.min.css",
        mdb_d : "css/mdb.dark.min.css",
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
        headerContainer : "map_head_container" ,											//  Class for header container
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
            prototype : {}
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
		localeBoxElement : {																	//  Element for locale box (change language box)
			tag : "map-localebox" ,
			prototype : {
				init : function() {																//  Init element
					var icon = nekoapp.create.element(map, "span", {						//  Locale box globe icon
							class : map.preferences.classes.localeBoxIcon ,
							text : nekoapp.create.graphic(map, "main;globe_icon", "0 0 20 20")
						}) ,
						text = nekoapp.create.element(map, "span", {						//  Locale box language text
							class : map.preferences.classes.localeBoxText
						}) ,
						event = new nekoapp.event({												//  Event to call change language window
							target : this ,
							onclick : function(object, event) {
								nekoapp.locale.openChangeWindow(map);						//  Calling change language window
							}
						});
					this.appendChild(icon);
					this.appendChild(text);
					event.register();															//  Registering event
					this.update();
				} ,
				update : function() {															//  Update language text (if language was changed)
					if (this.children.length) {													//  Check if locale box in initialized
						this.children[1].innerHTML = map.localeLanguageStrings[map.locale.activeLanguage];
					}
				}
			}
		},
        wip_element : {
            tag : "map-wip-element",
            prototype : {
                template : nekoapp.create.template(
                    function(){
                        let ЕБАНЫЙ_БЛЯТЬ_СКРИПТ = document.createElement("script");
                        ЕБАНЫЙ_БЛЯТЬ_СКРИПТ.src = "js/mdb.min.js"
                        let h_alert = document.createElement("h4");
                        h_alert.className = "alert-heading"
                        h_alert.innerHTML = "WORK IN PROGRESS";
                        let p1_alert = document.createElement("p");
                        p1_alert.innerHTML = "This interactive map are currently in development.";
                        let p2_alert = document.createElement("hr");
                        let p3_alert = document.createElement("p");
                        p3_alert.className = "mb-0"
                        p3_alert.innerHTML = "If you want to help me, please contact with me in <a href='https://twitter.com/kosnag' target='_blank'>Twitter</a>, <a href='https://vk.com/kosnag' target='_blank'>VK</a> or <a href='#' data-mdb-toggle='tooltip' data-mdb-placement='bottom' data-mdb-html='true' title='<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>'>Discord (kosnag#1730)</a>. I will be very happy, if you help me! <a href='#' data-mdb-toggle='tooltip' data-mdb-placement='bottom' data-mdb-html='true' title='<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/762945798064570398/827230435662233671/2021-04-01_10-08-46-250_Talim_-_Air.png' height='100'>'>Take a hug by Matoi!</a>";
                        let a_tooltip1 = document.createElement("a");
                        a_tooltip1.innerHTML = "Discord (kosnag#1730)";
                        a_tooltip1.href = "a";
                        a_tooltip1.setAttribute("data-mdb-toogle","tooltip");
                        a_tooltip1.setAttribute("data-mdb-placement","bottom");
                        a_tooltip1.setAttribute("data-mdb-html","true");
                        a_tooltip1.setAttribute("data-mdb-original-title","<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>");
                        a_tooltip1.title = "<img class='d-block m-1 mx-auto' src='https://cdn.discordapp.com/attachments/418391120914022401/846113050695827456/unknown.png' height='100'>";
                        p3_alert.appendChild(a_tooltip1);
                        let блетб = document.createElement("script");
                        блетб.innerHTML = "const exampleEl = document.getElementById('example'); const tooltip = new mdb.Tooltip(exampleEl);"
                        return[ЕБАНЫЙ_БЛЯТЬ_СКРИПТ,h_alert,p1_alert,p2_alert,p3_alert,блетб];
                    }
                )
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
                    wip_element :   nekoapp.create.object(map_app,map_app.preferences.elements.wip_element,{class:"alert alert-danger mt-3"})
                };
                return [elements, elements.wip_element];
            },
            onModuleChange : function(){},
            onLocaleChange : function(){}
        },
        map_header : {
            moduleType: "headerModule",
            headerLayout: {}
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
map_app.preferences.events.onAppInit = new nekoapp.event({
	target : map_app ,
	oninit : function() {
		//testapp.modules.testapp_footer.moduleContents.localebox.init();
        document.title = map_app.locale.strings.langTitle;
	}
});
nekoapp.system.init(map_app);