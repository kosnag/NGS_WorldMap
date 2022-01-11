import React, {Fragment,Suspense} from 'react';
import ReactDOM from 'react-dom';
import MapHalpha from './ngsmap/components/map';
import NavBar from './ngsmap/components/navbar';
import Menu from './ngsmap/components/menu';

ReactDOM.render(
    <Fragment>
      <MapHalpha/>
      <NavBar/>
      <Menu/>
    </Fragment>,
  document.getElementById('root')
);