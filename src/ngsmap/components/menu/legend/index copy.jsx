import React, { Component } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";
import Tabs, { TabPane } from 'rc-tabs';

class MenuLegend extends Component {
  
  render() {
    return (
        <Draggable
          bounds='.menu-freespace-container'
          handle='.menu-header-mapLegend'
        >
          <div 
            className='menu-window'
            id='menu-mapLegend'
            //style={{display: "none"}}
          >
            <div className='menu-header menu-header-mapLegend'>
              <span className='menu-header-text'><span className="menu-icon"/> Map Legend</span>
              <span className='menu-closebutton' onClick={() => {Functions.showhidemenu("menu-mapLegend")}}/>
            </div>
            <div className='menu-columns'>
              <div className='menu-col-cat'>
                <button className='menu-button-cat'>i18.menu.cat.landmarks</button>
                <button className='menu-button-cat'>i18.menu.cat.minerals</button>
                <button className='menu-button-cat'>i18.menu.cat.food</button>
                <button className='menu-button-cat'>i18.menu.cat.container</button>
                <button className='menu-button-cat'>i18.menu.cat.other</button>
              </div>
              <div className='menu-col-item'>
                <button className='menu-button-item'><Checkbox
                    checked={false}
                    icon={<span></span>}
                    label="Item 1"
                  /></button>
                <button className='menu-button-item'><Checkbox
                    checked={true}
                    icon={<span></span>}
                    label="Item 2"
                  /></button>
                <button className='menu-button-item'><Checkbox
                    checked={true}
                    icon={<span></span>}
                    label="Item 3"
                  /></button>
                <button className='menu-button-item'><Checkbox
                    checked={false}
                    icon={<span></span>}
                    label="Item 4"
                  /></button>
                <button className='menu-button-item'><Checkbox
                    checked={true}
                    icon={<span></span>}
                    label="Item 5"
                  /></button>
              </div>
              <div className='menu-col-info'>
                <div className='menu-button'>Preview icon</div>
                <div className='menu-button'>Name </div>
                <div className='menu-button'>Short information</div>
              </div>
            </div>
          </div>
        </Draggable>
    );
  };
};

export default MenuLegend;