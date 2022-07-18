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
        <button onClick={() => Functions.menuShowHide("menu-donate")}>
          <img alt="" src={imageDonate}/>
          <div>{t("ui:NavBar.donate")}</div>
        </button>
        <button onClick={() => Functions.menuShowHide("menu-legend")}>
          <img alt="" src={imageMapLegend}/>
          <div>{t("ui:NavBar.mapLegend")}</div>
        </button>
        <button onClick={() => Functions.menuShowHide("menu-settings")}>
          <img alt="" src={imageSettings}/>
          <div>{t("ui:NavBar.options")}</div>
        </button>
      </buttons>
    </navbar>
  );
};