import React, { Fragment, useEffect } from 'react';
import { useTranslation } from "react-i18next";import Init from "./components/init.jsx";
import NavBar from "./components/navbar";
import MenuSettings from "./components/menu/settings";
import MenuSupport from "./components/menu/support";

export default function App(){
  const {t} = useTranslation();
  useEffect(() => {document.title = t("ui:page_title")});
  return (
    <Fragment>
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