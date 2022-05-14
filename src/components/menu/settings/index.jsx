import React, { useEffect, useState } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../functions';
import i18n from '../../../i18n';
import { useTranslation } from "react-i18next";

export default function MenuSettings(){
  const {t} = useTranslation();

  const [toggleLang, setToggleLang] = useState("");
  const clickToggleLang = (lang) => {
    i18n.changeLanguage(lang);
    setToggleLang(lang);
  };

  const [toggleTab, setToggleTab] = useState('languages');
  const clickToggleTab = (tab) => {
    setToggleTab(tab)
  };

  const [contributers,setContributers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setToggleLang(localStorage.getItem("i18nextLng"));
    }, 100)
    fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/contributers.json")
      .then(response=>response.json())
      .then(d=>setContributers(d))
  }, []);

  return (
    <Draggable bounds='container' handle='header'>
      <window id='menu-settings' className={"hidden"}>
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
              className={toggleTab === 'reset' ? "active" : ""}
              onClick={() => clickToggleTab('reset')}
            >{t("ui:OptionsMenu.Categories.reset")}</button>
            <button 
              className={toggleTab === 'about' ? "active" : ""}
              onClick={() => clickToggleTab('about')}
            >{t("ui:OptionsMenu.Categories.about")}</button>
          </category>
          <>
            <items id="languages" className={toggleTab === 'languages' ? "active" : ""}>
              <button onClick={() => clickToggleLang("en-US")}>
                <span className={toggleLang === 'en-US' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.english")} / English</div>
              </button>
              <button onClick={() => clickToggleLang("ja-JP")}>
                <span className={toggleLang === 'ja-JP' ? "active" : ""}/>
                <div>{t("ui:OptionsMenu.Items.languages.japanese")} / 日本語</div>
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
            </items>
            <items id="mapping" className={toggleTab === 'mapping' ? "active" : ""}>
              <button onClick={() => window.open("https://discord.gg/AMZ4smTAM2")}>{t("ui:OptionsMenu.Items.mapping.discord")}</button>
              <button onClick={() => window.open("https://github.com/kosnag/NGS_WorldMap")}>{t("ui:OptionsMenu.Items.mapping.translate")}</button>
              <button onClick={() => window.open("/mapping")}>{t("ui:OptionsMenu.Items.mapping.start")}</button>
            </items>
            <items id="reset" className={toggleTab === 'reset' ? "active" : ""}>
              <button onClick={() => {window.localStorage.removeItem("i18nextLng"); window.location.reload()}}>{t("ui:OptionsMenu.Items.reset.lang")}</button>
              <button onClick={() => {window.localStorage.removeItem("settings"); window.location.reload()}}>{t("ui:OptionsMenu.Items.reset.visibility")}</button>
              <button onClick={() => {window.localStorage.removeItem("checked"); window.location.reload()}}>{t("ui:OptionsMenu.Items.reset.checked")}</button>
              <button onClick={() => {window.localStorage.clear(); window.location.reload()}}>{t("ui:OptionsMenu.Items.reset.everything")}</button>
            </items>
            <items id="about" className={toggleTab === 'about' ? "active" : ""}>
              <p>
                {t("ui:page_title")}
                <br/><br/>
                {t("ui:OptionsMenu.Items.about.author")}: <name onClick={()=>{window.open("//twitter.com/kosnag")}}>kosnag</name>
                <br/><br/>
                {t("ui:OptionsMenu.Items.about.contributers")}:<br/>
                {contributers.map((x=>
                  <>• <name onClick={()=>{window.open(x.link)}}>{x.name}</name> - {x.info}<br/></>
                ))}
                <br/><br/>
                {t("ui:OptionsMenu.Items.about.segaCopyright")}
              </p>
            </items>
          </>
        </columns>
      </window>
    </Draggable>
  );
};