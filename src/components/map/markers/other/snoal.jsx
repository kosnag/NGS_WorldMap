import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Circle, Marker, Tooltip } from "react-leaflet";

export default function Snoal(){
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.snoal));
        return ()=>clearInterval(i);
    });
    const data = [
        {"lat": "-201","lng": "522"},
        {"lat": "-172","lng": "562"},
        {"lat": "-255","lng": "568"},
        {"lat": "-298","lng": "582"},
        {"lat": "-348","lng": "579"}
    ];
    return (marker ? (data.map((x=>
        <Circle 
            center={[x.lat,x.lng]}
            radius={20}
            pathOptions={{
                color: 'gold',
                fillColor: 'yellow',
                fillOpacity: '0.25'
            }}
        >
            <Marker icon={iconLib.snoal} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                    <header>
                        <span><menuicon/> {t("items:other.snoal.title")}</span>
                    </header>
                    <content>
                        {t("items:other.snoal.description")}
                    </content>
                </tooltipwindow></Tooltip>
            </Marker>
        </Circle>
    ))):<Fragment/>)
}