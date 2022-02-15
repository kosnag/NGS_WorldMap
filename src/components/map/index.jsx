import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./style.scss";

import Landmarks from './markers/landmarks';


function Init(){
    return (<>
        <Landmarks/>
    </>)
}
export default function Map(){
    const bounds = {
        North: 0,
        East: 2048,
        West: 0,
        South: -2048
        //      North
        //
        //West          East
        //
        //      South
    }
    return (
        <MapContainer
            zoom={0}
            minZoom={0}
            maxZoom={3}
            crs={L.CRS.Simple}
            maxBounds={[[bounds.South-100,bounds.West-100],[bounds.South/2+250,bounds.East+100]]}
            center={[bounds.South/4*3,bounds.East/2]}
            zoomControl={false}
            attributionControl={false}
            keyboard={false}
            maxBoundsViscosity={0.5}
            doubleClickZoom={false}
        >
            <TileLayer
                url="./assets/images/tiles/{z}/{y}-{x}.png"
                bounds={[[bounds.South,bounds.West],[bounds.North,bounds.East]]}
                tileSize={1024}
                noWrap={true}
            />
            <Init/>
        </MapContainer>
    );
};