import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./style.scss";
import Init from './init';

const boundNorth = 0; 
const boundEast = 12288/6;
const boundWest = 0;
const boundSouth = -12288/6;
//          boundNorth
//
//boundWest             boundEast
//
//          boundSouth

const bounds = [[boundSouth, boundWest], [boundNorth, boundEast]];
const maxbounds = [[boundSouth-100, boundWest], [boundSouth/2+250, boundEast]];
const center = [boundSouth/4*3, boundEast/2];

export default function Map(){
    return (
        <MapContainer
            zoom={0}
            minZoom={0}
            maxZoom={3}
            crs={L.CRS.Simple}
            maxBounds={maxbounds}
            center={center}
            zoomControl={false}
            attributionControl={false}
            keyboard={false}
            maxBoundsViscosity={0.5}
            doubleClickZoom={false}
        >
            <TileLayer
                url="./assets/images/tiles/{z}/{y}-{x}.png"
                bounds={bounds}
                tileSize={1024}
                noWrap={true}
            />
            <Init/>
        </MapContainer>
    );
};