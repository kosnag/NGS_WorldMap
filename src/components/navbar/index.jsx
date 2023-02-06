import React from 'react';
import "./style.scss";
import Functions from '../../functions';
import { useTranslation } from "react-i18next";

import imageMapLegend from '../../assets/icons/mapLegend.png';
import imageSettings from '../../assets/icons/settings.png';
import imageDonate from '../../assets/icons/donation.png';

export default function NavBar(){
  const {t} = useTranslation();
  return (
    <navbar>
      <buttons>
        <button onClick={() => 
          //Functions.menuShowHide("menu-donate")
          window.open("https://boosty.to/kosnag", '_blank').focus()
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