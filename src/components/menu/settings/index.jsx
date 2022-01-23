import React, { useEffect, useState, Fragment } from 'react';
import "./stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';

import i18n from './../../../assets/js/i18n';
import { useTranslation } from "react-i18next";

const MenuSettings = () => {
  const {t} = useTranslation("ui");

  const [toggleLang, setToggleLang] = useState("");
  const clickToggleLang = (lang) => {
    i18n.changeLanguage(lang);
    setToggleLang(lang);
  };

  const [toggleTab, setToggleTab] = useState('languages');
  const clickToggleTab = (tab) => {
    setToggleTab(tab)
  };

  useEffect(() => {
    //document.getElementById('menu-settings').classList.add('hidden-window');
    setToggleLang(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header'
    >
      <div className='menu-window' id='menu-settings'>
        <div className='menu-header'>
          <span className='menu-header-text'>
            <span className="menu-icon"/> {t("ui:NavBar.options")}
          </span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-settings")}}/>
        </div>
        <div className='menu-columns' id='settings'>
          <div className='menu-col-cat'>
            <button 
              className={toggleTab === 'languages' ? "active" : ""}
              onClick={() => clickToggleTab('languages')}
            >{t("ui:OptionsMenu.Categories.languages")}</button>
            <button 
              className={toggleTab === 'mapping' ? "active" : ""}
              onClick={() => clickToggleTab('mapping')}
            >{t("ui:OptionsMenu.Categories.mapping")}</button>
            <button 
              className={toggleTab === 'debug' ? "active" : ""}
              onClick={() => clickToggleTab('debug')}
            >{t("ui:OptionsMenu.Categories.debug")}</button>
            <button 
              className={toggleTab === 'about' ? "active" : ""}
              onClick={() => clickToggleTab('about')}
            >{t("ui:OptionsMenu.Categories.about")}</button>
          </div>
          <Fragment>
            <div id="languages" className={toggleTab === 'languages' ? "menu-col-item active" : "menu-col-item"}>
              <button onClick={() => {clickToggleLang("en_US");}}>
                <span className={toggleLang === 'en_US' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.english")} / English</span>
              </button>
              <button onClick={() => {clickToggleLang("ja_JP");}}>
                <span className={toggleLang === 'ja_JP' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.japanese")} / 日本</span>
              </button>
              <button onClick={() => {clickToggleLang("en_JP");}}>
                <span className={toggleLang === 'en_JP' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.english_jp")} / English (Fan-Patch)</span>
              </button>
              <button onClick={() => {clickToggleLang("ru_RU");}}>
                <span className={toggleLang === 'ru_RU' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.russian")} / Русский</span>
              </button>
              <button onClick={() => {clickToggleLang("ko_KR");}}>
                <span className={toggleLang === 'ko_KR' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.korean")} / 한국어</span>
              </button>
              <button onClick={() => {clickToggleLang("pr_BR");}}>
                <span className={toggleLang === 'pr_BR' ? "radio active" : "radio"}/>
                <span className="text">{t("ui:OptionsMenu.Items.languages.portuguse")} / Português</span>
              </button>
            </div>
            <div id="mapping" className={toggleTab === 'mapping' ? "menu-col-item active" : "menu-col-item"}>
              <button onClick={()=>window.open("https://discord.gg/czK9HbxpDA")}>{t("ui:OptionsMenu.Items.mapping.discord")}</button>
              <button onClick={()=>window.open("/mapping")}>{t("ui:OptionsMenu.Items.mapping.start")}</button>
            </div>
            <div id="debug" className={toggleTab === 'debug' ? "menu-col-item active" : "menu-col-item"}>
              <button>{t("ui:OptionsMenu.Items.debug.langReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.visibilityReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.checkedReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.clearCache")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.resetAll")}</button>
            </div>
            <div id="about" className={toggleTab === 'about' ? "menu-col-item active" : "menu-col-item"}>
              <p>Item 4</p>
            </div>
          </Fragment>
        </div>
      </div>
    </Draggable>
  );
};

export default MenuSettings;