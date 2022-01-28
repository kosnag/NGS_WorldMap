import React from 'react';
import "./stylesheet.scss";
import Functions from '../../assets/js/functions';
import './../../assets/js/i18n';

import imageMapLegend from './../../assets/ui/icons/mapLegend.png';
import imageSettings from './../../assets/ui/icons/settings.png';
import imageAlphaReactor from './../../assets/ui/icons/alphaReactor.png';

import { useTranslation } from "react-i18next";

const NavBar = () => {
  const {t} = useTranslation("ui");
  return (
    <navbar>
      <buttons>
        <button onClick={() => Functions.menuShowHide("menu-support")}>
          <img alt="" src={"https://storage.ko-fi.com/cdn/cup-border.png"}/>
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

export default NavBar;