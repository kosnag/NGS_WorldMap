import React, { Fragment, useEffect } from 'react';
import MenuLegend from './components/menu/legend';
import MenuSettings from './components/menu/settings';
import MapHalpha from './components/map';
import NavBar from './components/navbar';

import './assets/js/i18n';
import { useTranslation } from "react-i18next";

function App(){
  const { t, i18n } = useTranslation(["ui"]);

  useEffect(() => {
    document.title = t("ui:page_title", {framework: "React"})
  });

  return (
    <Fragment>
      <MapHalpha/>
      <NavBar/>
      <div className='menu-freespace-container'>
        <MenuLegend/>
        <MenuSettings/>
      </div>
    </Fragment>
  );
}

export default App;