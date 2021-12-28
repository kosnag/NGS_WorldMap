import React, { Component } from 'react';
import "./stylesheet.scss";
import MenuLegend from './legend';
import MenuSettings from './settings';

class Menu extends Component {
    render() {
      return (
        <div className='menu-freespace-container'>
            <MenuLegend />
            <MenuSettings />
        </div>
        );
      };
    };
    
    export default Menu;


