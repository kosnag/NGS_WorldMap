import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { showhidemenu } from '../../../assets/js/functions';
import "./../stylesheet.scss";

class Menu extends Component {
  render() {
    return (
      <div className='menu-freespace-container'>
        <Draggable
          bounds='.menu-freespace-container'
          handle='.menu-header'
        >
          <div className='menu-window' 
          //style={{display: 'none'}}
          >
            <div className='menu-header'><span className='menu-header-text'><span className="ignore-outline">◆︎</span> Map Legend</span><span className='menu-closebutton' onClick={showhidemenu}>x</span></div>
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
      </div>
    );
  };
};

export default Menu;