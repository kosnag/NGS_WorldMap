import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function Ryuker(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.ryuker));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./assets/data/ryukers.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.ryuker} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("ryukers:"+x.id)}</span>
                </header>
                <content>
                    {t("items:landmark.ryuker.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}