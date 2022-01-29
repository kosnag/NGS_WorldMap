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
    setTimeout(() => {
      setToggleLang(localStorage.getItem("i18nextLng"));
    }, 100)
  }, []);

  return (
    <Draggable bounds='container' handle='header'>
      <window id='menu-settings'>
        <header>
          <span><menuicon/> {t("ui:NavBar.options")}</span>
          <closebutton onClick={() => Functions.menuShowHide("menu-settings")}/>
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
              <button onClick={() => clickToggleLang("en-US")}>
                <span className={toggleLang === 'en-US' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.english")} / English</div>
              </button>
              <button onClick={() => clickToggleLang("ja-JP")}>
                <span className={toggleLang === 'ja-JP' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.japanese")} / 日本</div>
              </button>
              <button onClick={() => clickToggleLang("en-JP")}>
                <span className={toggleLang === 'en-JP' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.english_jp")} / English (Fan-Patch)</div>
              </button>
              <button onClick={() => clickToggleLang("ru-RU")}>
                <span className={toggleLang === 'ru-RU' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.russian")} / Русский</div>
              </button>
              <button onClick={() => clickToggleLang("ko-KR")}>
                <span className={toggleLang === 'ko-KR' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.korean")} / 한국어</div>
              </button>
              <button onClick={() => clickToggleLang("pr-BR")}>
                <span className={toggleLang === 'pr-BR' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.portuguse")} / Português</div>
              </button>
            </items>
            <items id="mapping" className={toggleTab === 'mapping' ? "active" : ""}>
              <button onClick={() => window.open("https://discord.gg/czK9HbxpDA")}>{t("ui:OptionsMenu.Items.mapping.discord")}</button>
              <button onClick={() => window.open("/mapping.php")}>{t("ui:OptionsMenu.Items.mapping.start")}</button>
            </items>
            <items id="debug" className={toggleTab === 'debug' ? "active" : ""}>
              <button onClick={() => {window.localStorage.removeItem("i18nextLng"); window.location.reload()}}>{t("ui:OptionsMenu.Items.debug.langReset")}</button>
              <button onClick={() => {window.localStorage.removeItem("settings"); window.location.reload()}}>{t("ui:OptionsMenu.Items.debug.visibilityReset")}</button>
              <button onClick={() => {window.localStorage.removeItem("checked"); window.location.reload()}}>{t("ui:OptionsMenu.Items.debug.checkedReset")}</button>
              <button style={{display: "none"}} onClick={() => {window.cache.delete(); window.location.reload()}}>{t("ui:OptionsMenu.Items.debug.clearCache")}</button>
              <button onClick={() => {window.localStorage.clear(); window.location.reload()}}>{t("ui:OptionsMenu.Items.debug.resetAll")}</button>
            </items>
            <items id="about" className={toggleTab === 'about' ? "active" : ""}>
              <p>
                {t("ui:page_title")}
                <br/><br/>
                {t("ui:OptionsMenu.Items.about.author")}: kosnag
                <br/><br/>
                {t("ui:OptionsMenu.Items.about.contributers")}:<br/>
                • Sinitsa - {t("ui:OptionsMenu.Items.about.contributersList.sinitsa")}<br/>
                • focuslite - {t("ui:OptionsMenu.Items.about.contributersList.focuslite")}<br/>
                • MoonCat - {t("ui:OptionsMenu.Items.about.contributersList.mooncat")}<br/>
                • SVGVsevolod - {t("ui:OptionsMenu.Items.about.contributersList.svgvsevolod")}
                <br/><br/><br/>
                {t("ui:OptionsMenu.Items.about.segaCopyright")}
              </p>
            </items>
          </Fragment>
        </columns>
      </window>
    </Draggable>
  );
};

export default MenuSettings;