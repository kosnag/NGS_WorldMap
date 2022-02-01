import React, { Fragment } from 'react';

//import LoadingScreen from "./components/loadscreen";

import Map from "./map";
import MenuLegend from "./menu/legend";

const Init = {
    MenuLegend:()=>{
        if (localStorage.getItem("settings")) {
          return <MenuLegend/>;
        } else {
          fetch("./assets/storages/settings.json").then(response => response.json().then((data) => localStorage.setItem("settings", JSON.stringify(data))));
          return <Fragment/>;
        }
    },
    Map:()=>{
        if (localStorage.getItem("checked")) {
          return <Map/>;
        } else {
          fetch("./assets/storages/checked.json").then(response => response.json().then((data) => localStorage.setItem("checked", JSON.stringify(data))));
          return <Fragment/>;
        }
      }
}

export default Init;