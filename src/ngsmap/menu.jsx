import React, { Component } from 'react';
import Draggable from 'react-draggable';
import "./assets/menu.scss";
import { showhidemenu } from './assets/functions';

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
                <div className='menu-col1'>
                  <button className='menu-button'>Button 1</button>
                  <button className='menu-button'>Button 2</button>
                </div>
                <div className='menu-col2'>
                  <button className='menu-button'>Button 3</button>
                  <button className='menu-button'>Button 4</button>
                </div>
                <div className='menu-col3'>
                  <button className='menu-button'>literally</button>
                  <button className='menu-button'>not</button>
                  <button className='menu-button'>button</button>
                </div>
              </div>
          </div>
        </Draggable>
      </div>
    );
  };
};

export default Menu;