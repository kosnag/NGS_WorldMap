import React, { Component } from 'react';
import { showhidemenu } from '../../assets/js/functions';
import "./stylesheet.scss";

import imageMapLegend from './../../assets/ui/icons/mapLegend.png';
import imageSettings from './../../assets/ui/icons/settings.png';
const imageAlphaReactor = process.env.PUBLIC_URL + '/assets/images/icons/png/other/alphaReactor.png';
const imageKofi = "https://storage.ko-fi.com/cdn/cup-border.png";

class NavBar extends Component {
  render() {
    return (
      <div className="bar-container">
        <button 
          className="navbar-button"
          onClick={() => {
            window.open("https://ko-fi.com/kosnag");
          }}
        >
          <img alt="" 
            src={imageKofi}
            style={{height: "50px"}}
          />
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
          onClick={showhidemenu}
        >
          <img alt=""
            src={imageMapLegend}
            style={{height: "50px"}}
          />
          <div>Map Legend</div>
        </button>
        <button 
          className="navbar-button"
          onClick={showhidemenu}
        >
          <img alt=""
            src={imageSettings}
            style={{height: "50px"}}
          />
          <div>Settings</div>
        </button>
      </div>
    );
  };
};

export default NavBar;