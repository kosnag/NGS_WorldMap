import React, { useEffect, useState } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../functions';
import i18n from '../../../i18n';
import { useTranslation } from "react-i18next";
import { Fragment } from 'react/cjs/react.production.min';

export default function MenuSettings(){
  const {t} = useTranslation();

  const [toggleLang, setToggleLang] = useState("");
  const clickToggleLang = (lang) => {
    i18n.changeLanguage(lang);
    setToggleLang(lang);
  };

  const [toggleTab, setToggleTab] = useState('languages');

  const [contributers, setContributers] = useState([]);
  const [checkSettings, setSettings] = useState({});

  useEffect(() => {
    document.getElementById('menu-settings').classList.add('hidden');
    setTimeout(() => {
      setToggleLang(localStorage.getItem("i18nextLng"));
    }, 100);
    fetch("./assets/storages/contributers.json")
      .then(response=>response.json())
      .then(d=>setContributers(d));
    fetch("./assets/storages/settings.json")
      .then(response=>response.json())
      .then(d=>setSettings(d));
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
              onClick={() => setToggleTab('languages')}
            >{t("ui:OptionsMenu.Categories.languages")}</button>
            <button 
              className={toggleTab === 'reset' ? "active" : ""}
              onClick={() => setToggleTab('reset')}
            >{t("ui:OptionsMenu.Categories.reset")}</button>
            <button 
              className={toggleTab === 'about' ? "active" : ""}
              onClick={() => setToggleTab('about')}
            >{t("ui:OptionsMenu.Categories.about")}</button>
          </category>
          <>
            <items id="languages" className={toggleTab === 'languages' ? "active" : ""}>
              {checkSettings.settings && checkSettings.settings.languages.map((x=>
                x.active === true ?
                  <button onClick={() => clickToggleLang(x.id)}>
                    <span className={toggleLang === x.id ? "active" : ""}/>
                    <div>{t("ui:OptionsMenu.Items.languages."+x.id)} | {x.name}</div>
                  </button>
                : <Fragment/>
              ))}
            </items>
            <items id="reset" className={toggleTab === 'reset' ? "active" : ""}>
              <button onClick={() => {
                window.localStorage.removeItem("i18nextLng");
                window.location.reload()
              }}>{t("ui:OptionsMenu.Items.reset.lang")}</button>
              <button onClick={() => {
                window.localStorage.removeItem("settings");
                window.location.reload()
              }}>{t("ui:OptionsMenu.Items.reset.visibility")}</button>
              <button onClick={() => {
                window.localStorage.removeItem("checked");
                window.location.reload()
              }}>{t("ui:OptionsMenu.Items.reset.checked")}</button>
              <button onClick={() => {
                window.localStorage.clear();
                window.location.reload()
              }}>{t("ui:OptionsMenu.Items.reset.everything")}</button>
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