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
    document.getElementById('menu-settings').classList.add('hidden');
    setToggleLang(localStorage.getItem("i18nextLng"));
  }, []);

  return (
    <Draggable
      bounds='container'
      handle='header'
    >
      <window id='menu-settings'>
        <header>
          <span><menu-icon/> {t("ui:NavBar.options")}</span>
          <closebutton onClick={() => {Functions.menuShowHide("menu-settings")}}/>
        </header>
        <columns>
          <category>
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
          </category>
          <Fragment>
            <items id="languages" className={toggleTab === 'languages' ? "active" : ""}>
              <button onClick={() => {clickToggleLang("en_US");}}>
                <span className={toggleLang === 'en_US' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.english")} / English</div>
              </button>
              <button onClick={() => {clickToggleLang("ja_JP");}}>
                <span className={toggleLang === 'ja_JP' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.japanese")} / 日本</div>
              </button>
              <button onClick={() => {clickToggleLang("en_JP");}}>
                <span className={toggleLang === 'en_JP' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.english_jp")} / English (Fan-Patch)</div>
              </button>
              <button onClick={() => {clickToggleLang("ru_RU");}}>
                <span className={toggleLang === 'ru_RU' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.russian")} / Русский</div>
              </button>
              <button onClick={() => {clickToggleLang("ko_KR");}}>
                <span className={toggleLang === 'ko_KR' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.korean")} / 한국어</div>
              </button>
              <button onClick={() => {clickToggleLang("pr_BR");}}>
                <span className={toggleLang === 'pr_BR' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.portuguse")} / Português</div>
              </button>
            </items>
            <items id="mapping" className={toggleTab === 'mapping' ? "active" : ""}>
              <button onClick={()=>window.open("https://discord.gg/czK9HbxpDA")}>{t("ui:OptionsMenu.Items.mapping.discord")}</button>
              <button onClick={()=>window.open("/mapping")}>{t("ui:OptionsMenu.Items.mapping.start")}</button>
            </items>
            <items id="debug" className={toggleTab === 'debug' ? "active" : ""}>
              <button>{t("ui:OptionsMenu.Items.debug.langReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.visibilityReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.checkedReset")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.clearCache")}</button>
              <button>{t("ui:OptionsMenu.Items.debug.resetAll")}</button>
            </items>
            <items id="about" className={toggleTab === 'about' ? "active" : ""}>
              <p>Item 4</p>
            </items>
          </Fragment>
        </columns>
      </window>
    </Draggable>
  );
};

export default MenuSettings;