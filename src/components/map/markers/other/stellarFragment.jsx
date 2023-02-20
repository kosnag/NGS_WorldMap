import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Circle, Marker, Tooltip } from "react-leaflet";

export default function StellarFragment(){
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.stellarseed));
        return ()=>clearInterval(i);
    });
    return(marker ? <Circle 
        center={[-1068, 1423.5]}
        radius={35}
        pathOptions={{
            color: 'gold',
            fillColor: 'yellow',
            fillOpacity: '0.25'
        }}
    >
        <Marker icon={iconLib.stellarseed} position={[-1068, 1423.5]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.stellarseed.title")}</span>
                </header>
                <content>
                    {t("items:other.stellarseed.description")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    </Circle>:<Fragment/>)
}