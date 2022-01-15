import React, { useEffect } from 'react';
import "../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import './../../../assets/js/i18n';

function MenuSettings(){
  useEffect(() => {
    document.getElementById('menu-settings').classList.add('hidden-window');
  }, []);

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header'
    >
      <div
        className='menu-window'
        id='menu-settings'
      >
        <div className='menu-header'>
          <span className='menu-header-text'><span className="menu-icon"/> Options</span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-settings")}}/>
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

export default MenuSettings;