import React, { Fragment, Suspense, useEffect } from 'react';
import "./assets/js/i18n";
import { useTranslation } from "react-i18next";

//import LoadingScreen from "./components/loadscreen";

import Init from "./components/init.jsx";
import NavBar from "./components/navbar";
import MenuSettings from "./components/menu/settings";
import MenuSupport from "./components/menu/support";

const App = () => {
  const {t} = useTranslation("ui");

  useEffect(() => {
    document.title = t("ui:page_title")
  });

  return (
    <Fragment
      //fallback={<LoadingScreen/>}
    >
      <Init.Map/>
      <NavBar/>
      <container>
        <Init.MenuLegend/>
        <MenuSettings/>
        <MenuSupport/>
      </container>
    </Fragment>
  );
}

export default App;