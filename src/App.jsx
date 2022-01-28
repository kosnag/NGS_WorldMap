import React, { Fragment, Suspense, useEffect } from 'react';
import "./assets/js/i18n";
import { useTranslation } from "react-i18next";

import Map from "./components/map";
import NavBar from "./components/navbar";
import MenuSettings from "./components/menu/settings";
import MenuLegend from "./components/menu/legend";

const App = () => {
  const {t} = useTranslation("ui");

  const MenuLegendInit = () => {
    if (localStorage.getItem("settings")) {
      return <MenuLegend/>
    } else {
      fetch("./assets/data/settings.json").then(response => response.json().then((data) => {localStorage.setItem("settings", JSON.stringify(data))}));
      return <Fragment/>;
    }
  }

  useEffect(() => {
    document.title = t("ui:page_title")
  });

  return (
    <Fragment>
      <Map/>
      <NavBar/>
      <container>
        <MenuLegendInit/>
        <MenuSettings/>
      </container>
    </Fragment>
  );
}

export default App;