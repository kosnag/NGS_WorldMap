import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Circle } from "react-leaflet";

export default function AlphaReactor(){
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.alphareactor));
        return ()=>clearInterval(i);
    });
    const data = [
        {"lat":-1139, "lng":504},
        {"lat":-1583, "lng":432},
        {"lat":-1596.5, "lng":606}
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
            <Marker icon={iconLib.alphareactor} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                    <header>
                        <span><menuicon/> {t("items:other.alphareactor.title")}</span>
                    </header>
                    <content>
                        {t("items:other.alphareactor.description")}
                    </content>
                </tooltipwindow></Tooltip>
            </Marker>
        </Circle>
    ))):<Fragment/>)
}