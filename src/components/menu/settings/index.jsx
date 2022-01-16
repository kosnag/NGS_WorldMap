import React, { useEffect } from 'react';
import "./stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';

import i18n from './../../../assets/js/i18n';
import { useTranslation } from "react-i18next";

function MenuSettings(){
  const { t } = useTranslation("ui");

  function changeLanguage(language){
    i18n.changeLanguage(language);
  };

  const [toggleLegendTab, setToggleLegendTab] = useState('languages');
  function clickToggleLegendTab(index){setToggleLegendTab(index);};

  useEffect(() => {
    //document.getElementById('menu-settings').classList.add('hidden-window');
  }, []);

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header'
    >
      <div
        className='menu-window'
        id='menu-settings'
      >
        <div className='menu-header'>
          <span className='menu-header-text'><span className="menu-icon"/> Options</span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-settings")}}/>
        </div>
        <div className='menu-columns'>
          <div className='menu-col-cat'>
            <button className='menu-button-cat'>{t("ui:OptionsMenu.Categories.languages",{framework:"React"})}</button>
            <button className='menu-button-cat'>{t("ui:OptionsMenu.Categories.mapping",{framework:"React"})}</button>
            <button className='menu-button-cat'>{t("ui:OptionsMenu.Categories.debug",{framework:"React"})}</button>
            <button className='menu-button-cat'>{t("ui:OptionsMenu.Categories.about",{framework:"React"})}</button>
            <button onClick={() => changeLanguage("en_JP")}>EN</button>
            <button onClick={() => changeLanguage("ru_RU")}>RU</button>
          </div>
          <div className='menu-col-item'>
            <button className='menu-button-item'>Item 1</button>
            <button className='menu-button-item'>Item 2</button>
            <button className='menu-button-item'>Item 3</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MenuSettings;