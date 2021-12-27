import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import MapHalpha from './ngsmap/map';
import NavBar from './ngsmap/navbar';
import Menu from './ngsmap/menu';

ReactDOM.render(
    <Fragment>
      <MapHalpha/>
      <NavBar/>
      <Menu/>
    </Fragment>,
  document.getElementById('root')
);