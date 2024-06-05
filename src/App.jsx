import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import Functions from './functions';
import NavBar from "./components/navbar";
import MenuSettings from "./components/menu/settings";
import MenuLegend from "./components/menu/legend";
import { Map } from "./components/map";

window.localStorage_Settings = JSON.parse(localStorage.getItem("settings"));
window.localStorage_Checked = JSON.parse(localStorage.getItem("checked"));

const App = () => {
  const {t} = useTranslation();
  useEffect(() => {
    document.title = t("ui:page_title")
  });
  return (<>
    <Map/>
    <NavBar/>
    <container>
      <MenuLegend/>
      <MenuSettings/>
    </container>
  </>)
}

export default function Init(){
  if (localStorage.getItem("settings") !== null && localStorage.getItem("checked") !== null){
    Functions.checkDisabledItemsFromServerSettings();
    return <App/>
  } else if (localStorage.getItem("settings") === null && localStorage.getItem("checked") !== null){
    fetch("./assets/jsons/usersettings.json").then(response=>response.json()).then(data=>localStorage.setItem("settings",JSON.stringify(data)));
    setTimeout(()=>{
      window.location.reload();
      return <></>;
    },500)
  } else if (localStorage.getItem("settings") !== null && localStorage.getItem("checked") === null){
    fetch("./assets/jsons/checked.json").then(response=>response.json()).then(data=>localStorage.setItem("checked",JSON.stringify(data)));
    setTimeout(()=>{
      window.location.reload();
      return <></>;
    },500)
  } else {
    fetch("./assets/jsons/usersettings.json").then(response=>response.json()).then(data=>localStorage.setItem("settings",JSON.stringify(data)));
    fetch("./assets/jsons/checked.json").then(response=>response.json()).then(data=>localStorage.setItem("checked",JSON.stringify(data)));
    setTimeout(()=>{
      window.location.reload();
      return <></>;
    },500)
  }
};
