import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./style.scss";
import "./tooltip.scss";
import "./popup.scss";

import Landmarks from './markers/landmarks';
import Food from './markers/food';
import Minerals from './markers/minerals';
import Other from './markers/other';
import Containers from './markers/containers';
import Sections from './markers/sections';

const iconLib = {}

const Init = () => {
    const [checkInitMarkers,load] = useState(false)
    useEffect(()=>{
        fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/icons.json").then(resp=>resp.json()).then(x=>{
            for(var i=0; i<x.length; i++){
                iconLib[x[i].item] = L.icon({
                    iconSize: [x[i].size,x[i].size],
                    iconAnchor: [x[i].size/2,x[i].size/2],
                    popupAnchor: [0,-x[i].size],
                    iconUrl: './assets/images/icons/'+x[i].category+'/'+(x[i].file != null ? x[i].file : x[i].item) +'.png'
                })
            };
            load(true);
        });
    });
    return (<>
        {checkInitMarkers === true ? <>
            <Landmarks/>
            <Food/>
            <Minerals/>
            <Other/>
            <Containers/>
            <Sections/>
        </> : <></>}
    </>)
}

const Map = () => {
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
            maxBounds={[[bounds.South-100,bounds.West-250],[bounds.North+400,bounds.East+250]]}
            center={[bounds.South/2,bounds.East/2]}
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


export {iconLib, Map}