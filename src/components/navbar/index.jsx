import React from 'react';
import "./style.scss";
import Functions from '../../functions';
import { useTranslation } from "react-i18next";

import imageMapLegend from '../../assets/icons/mapLegend.png';
import imageSettings from '../../assets/icons/settings.png';
import imageDonate from '../../assets/icons/donation.png';

export default function NavBar(){
  const {t} = useTranslation();
  const imageAlphaReactor = "./assets/images/icons/other/alphareactor.png"
  return (
    <navbar>
      <buttons>
        <button onClick={() => Functions.menuShowHide("menu-support")}>
          <img alt="" src={imageDonate}/>
          <div>{t("ui:NavBar.support")}</div>
        </button>
        <button 
          onClick={() => 
            window.open("https://twitter.com/search?q=%22%23AlphaReactors%20%23%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%AA%E3%82%A2%E3%82%AF%E3%82%BF%E3%83%BC%20%23PSO2NGS%22%20(from%3AAphyAmarantha)&f=live", "_blank")
          }
        >
          <img alt="" src={imageAlphaReactor}/>
          <div>{t("ui:NavBar.alphaReactor")}</div>
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