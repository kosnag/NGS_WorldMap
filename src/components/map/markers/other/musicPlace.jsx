import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function MusicPlace(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.musicplace));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__musicplace").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker
            icon={iconLib.musicplace}
            position={[x.lat,x.lng]}
            eventHandlers={{click:()=>{navigator.clipboard.writeText(x.string)}}}
        >
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.musicplace.title")}</span>
                </header>
                <content>
                    {x.string}
                    <br/>
                    {t("ui:map.placedBy")}: {x.contributer}
                    <br/><br/>
                    {t("items:other.musicplace.hint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}