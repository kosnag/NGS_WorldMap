import React, { Component } from 'react';
import "./stylesheet.scss";
import Functions from '../../assets/js/functions';

import imageMapLegend from './../../assets/ui/icons/mapLegend.png';
import imageSettings from './../../assets/ui/icons/settings.png';
import imageAlphaReactor from './../../assets/ui/icons/alphaReactor.png';
const imageKofi = "https://storage.ko-fi.com/cdn/cup-border.png";

class NavBar extends Component {
  render() {
    return (
      <div className="bar-container">
        <div className='bar-inner'>
        <button 
          className="navbar-button"
          onClick={() => {
            window.open("https://ko-fi.com/kosnag");
          }}
        >
          <img alt="" src={imageKofi}/>
          <div>Kofi</div>
        </button>
        <button 
          className="navbar-button"
          onClick={() => {
            window.open("https://twitter.com/search?q=%22%23AlphaReactors%20%23%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%AA%E3%82%A2%E3%82%AF%E3%82%BF%E3%83%BC%20%23PSO2NGS%22%20(from%3AAphyAmarantha)&f=live", "_blank")
          }}
        >
          <img alt="" src={imageAlphaReactor}/>
          <div>Alpha Reactors</div>
        </button>
        <button 
          className="navbar-button"
          onClick={() => {Functions.menuShowHide("menu-mapLegend")}}
        >
          <img alt="" src={imageMapLegend}/>
          <div>Map Legend</div>
        </button>
        <button 
          className="navbar-button"
          onClick={() => {Functions.menuShowHide("menu-settings")}}
        >
          <img alt="" src={imageSettings}/>
          <div>Options</div>
        </button>
        </div>
      </div>
    );
  };
};

export default NavBar;