import React, { Component } from 'react';
import "./assets/navbar.scss";
import { showhidemenu } from './assets/functions';


import imageAlphaReactor from './assets/ngs_ui/icons/alphaReactor.png';
import imageSettings from './assets/ngs_ui/icons/settings.png';
const imageKofi = "https://storage.ko-fi.com/cdn/cup-border.png";

class NavBar extends Component {
  render() {
    return (
      <div 
      className="bar-container"
      >
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
          <div>Альфа Реакторы</div>
        </button>
        <button 
        className="navbar-button"
        onClick={showhidemenu}
        >
          <img alt=""
          src={imageSettings}
          style={{height: "50px"}}
          />
          <div>Опции</div>
        </button>
      </div>
    );
  };
};

export default NavBar;