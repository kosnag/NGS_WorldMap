import React, {useState, useEffect} from 'react';
import "./style.scss";
import Functions from '../../functions';
import { useTranslation } from "react-i18next";

import imageMapLegend from '../../assets/icons/mapLegend.png';
import imageSettings from '../../assets/icons/settings.png';
import imageDonate from '../../assets/icons/donation.png';

export default function NavBar(){
  const {t} = useTranslation();
  const [settingsJSON,setSettings] = useState({});
  useEffect(()=>{
      fetch("./assets/jsons/settings.json").then(response=>response.json()).then(d=>setSettings(d))
  },[]);
  return (
    <navbar>
      <buttons>
        <button onClick={() => 
          window.open(settingsJSON.settings.donate_page, '_blank').focus()
        }>
          <img alt="" src={imageDonate}/>
          <div>{t("ui:navbar.donate")}</div>
        </button>
        <button onClick={() => Functions.menuShowHide("menu-legend")}>
          <img alt="" src={imageMapLegend}/>
          <div>{t("ui:navbar.mapLegend")}</div>
        </button>
        <button onClick={() => Functions.menuShowHide("menu-settings")}>
          <img alt="" src={imageSettings}/>
          <div>{t("ui:navbar.options")}</div>
        </button>
      </buttons>
    </navbar>
  );
};