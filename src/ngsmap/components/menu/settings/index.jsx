import React, { Component } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from './../../../assets/js/functions';

class MenuSettings extends Component {
  render() {
    return (
        <Draggable
          bounds='.menu-freespace-container'
          handle='.menu-header-settings'
          defaultPosition={{x: 1000, y: 0}}
        >
          <div className='menu-window menu-settings'>
            <div className='menu-header menu-header-settings'><span className='menu-header-text'><span className="ignore-outline">◆︎</span> Options</span><span className='menu-closebutton' onClick={Functions.showhidemenu('menu-settings')}>x</span></div>
              <div className='menu-columns'>
                <div className='menu-col-cat'>
                  <button className='menu-button'>i18.options.language</button>
                  <button className='menu-button'>i18.options.reset</button>
                  <button className='menu-button'>i18.options.debug</button>
                </div>
                <div className='menu-col-item'>
                  <button className='menu-button'>Item 1</button>
                  <button className='menu-button'>Item 2</button>
                  <button className='menu-button'>Item 3</button>
                </div>
              </div>
          </div>
        </Draggable>
    );
  };
};

export default MenuSettings;