import React, { Component } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';

class MenuSettings extends Component {
  render() {
    return (
        <Draggable
          bounds='.menu-freespace-container'
          handle='.menu-header-settings'
          defaultPosition={{x: 1000, y: 0}}
        >
          <div
            className='menu-window'
            id='menu-settings'
            //style={{display: "none"}}
          >
            <div className='menu-header menu-header-settings'>
                <span className='menu-header-text'><span className="menu-icon"/> Options</span>
                <span className='menu-closebutton' onClick={() => {Functions.showhidemenu("menu-settings")}}/>
            </div>
            <div className='menu-columns'>
              <div className='menu-col-cat'>
                <button className='menu-button-cat'>i18.options.language</button>
                <button className='menu-button-cat'>i18.options.reset</button>
                <button className='menu-button-cat'>i18.options.debug</button>
                <button className='menu-button-cat'>i18.options.mapping</button>
              </div>
              <div className='menu-col-item'>
                <button className='menu-button-item'>Item 1</button>
                <button className='menu-button-item'>Item 2</button>
                <button className='menu-button-item'>Item 3</button>
              </div>
            </div>
          </div>
        </Draggable>
    );
  };
};

export default MenuSettings;