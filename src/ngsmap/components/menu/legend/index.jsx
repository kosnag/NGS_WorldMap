import React, { Fragment, useEffect, useState } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";

function MenuLegend(){

  const [toggleLegendTab, setToggleLegendTab] = useState('landmarks');
  function clickToggleLegendTab(index){setToggleLegendTab(index);};
  
  var previewIcon = require('./../../../assets/ui/icons/preview/alphaReactor.png');
  useEffect(() => {
    //document.getElementById('menu-mapLegend').classList.add('hidden-window');
  });

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header-mapLegend'
    >
      <div 
        className='menu-window'
        id='menu-mapLegend'
      >
        <div className='menu-header menu-header-mapLegend'>
          <span className='menu-header-text'><span className="menu-icon"/> Map Legend</span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-mapLegend")}}/>
        </div>
        <div className='menu-columns'>
          <div className='menu-col-cat'>
            <button 
              className={toggleLegendTab === 'landmarks' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('landmarks')}
             >Landmarks</button>
             <button 
              className={toggleLegendTab === 'minerals' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('minerals')}
            >Minerals</button>
            <button 
              className={toggleLegendTab === 'food' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('food')}
            >Food</button>
            <button 
              className={toggleLegendTab === 'containers' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('containers')}
            >Containers</button>
            <button 
              className={toggleLegendTab === 'other' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('other')}
            >Other</button>
          </div>
          <Fragment>
            <div 
              className={toggleLegendTab === 'landmarks' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Ryuker Devices"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Cocoons"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Towers"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Battledias"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Region Mags"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Urgent Quests"
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'minerals' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Monotite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Dualomite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Trinite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Tricite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Quartz"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Chunk"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Scale"
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'food' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 1"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 2"
              /></button>
             <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 3"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 4"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 5"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 6"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 7"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 8"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 9"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 10"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 11"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Aelio Food 12"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 1"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 2"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 3"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 4"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 5"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 6"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 7"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Retem Food 8"
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'containers' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Red]"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Green]"
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'other' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Veterans"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Music places"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Alpha Reactors"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Seeds"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Graces"
              /></button>
            </div>
          </Fragment>
          <div className='menu-col-info'>
            <div className='menu-col-info-icon red'/>
            <img alt=""
              className='menu-col-info-icon'
              src={previewIcon}
            />
            <div className='menu-col-info-title'>Title</div>
            <div className='menu-col-info-thesis'>something something</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MenuLegend;