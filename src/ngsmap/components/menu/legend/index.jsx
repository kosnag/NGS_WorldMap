import React, { Component } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';

class MenuLegend extends Component {
  
  render() {
    return (
        <Draggable
          bounds='.menu-freespace-container'
          handle='.menu-header-mapLegend'
        >
          <div className='menu-window menu-mapLegend'>
            <div className='menu-header menu-header-mapLegend'>
              <span className='menu-header-text'><span className="ignore-outline">◆︎</span> Map Legend</span>
              <span className='menu-closebutton' onClick={() => {Functions.showhidemenu("menu-mapLegend")}}>x</span>
            </div>
            <div className='menu-columns'>
              <div className='menu-col-cat'>
                <button className='menu-button'>i18.menu.landmarks</button>
                <button className='menu-button'>i18.menu.minerals</button>
                <button className='menu-button'>i18.menu.food</button>
                <button className='menu-button'>idk i'll make it up later</button>
                <button className='menu-button'>i18.menu.other</button>
              </div>
              <div className='menu-col-item'>
                <button className='menu-button'>Item 1</button>
                <button className='menu-button'>Item 2</button>
                <button className='menu-button'>Item 3</button>
                <button className='menu-button'>Item 4</button>
                <button className='menu-button'>Item 5</button>
                <button className='menu-button'>Item 6</button>
                <button className='menu-button'>Item 7</button>
                <button className='menu-button'>Item 8</button>
              </div>
              <div className='menu-col-info'>
                <button className='menu-button'>Preview icon</button>
                <button className='menu-button'>Name </button>
                <button className='menu-button'>Short information</button>
              </div>
            </div>
          </div>
        </Draggable>
    );
  };
};

export default MenuLegend;