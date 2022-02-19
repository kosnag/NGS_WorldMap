import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import NavBar from "./components/navbar";
import MenuSettings from "./components/menu/settings";
import MenuSupport from "./components/menu/support";
import MenuLegend from "./components/menu/legend";
import Map from "./components/map";

window.localStorage_Settings = JSON.parse(localStorage.getItem("settings"));
window.localStorage_Checked = JSON.parse(localStorage.getItem("checked"));

const App = () => {
  const {t} = useTranslation();
  useEffect(()=>{document.title = t("ui:page_title")});
  return (<>
    <Map/>
    <NavBar/>
    <container>
      <MenuLegend/>
      <MenuSettings/>
      <MenuSupport/>
    </container>
  </>)
}


export default function Init(){
  if (localStorage.getItem("settings") && localStorage.getItem("checked")){
    return <App/>
  }else{
    fetch("./assets/storages/settings.json")
      .then(response => response.json()
      .then(data => localStorage.setItem("settings", JSON.stringify(data))));
  
    fetch("./assets/storages/checked.json")
      .then(response => response.json()
      .then(data => localStorage.setItem("checked", JSON.stringify(data))));

    window.location.reload()
  }
};
