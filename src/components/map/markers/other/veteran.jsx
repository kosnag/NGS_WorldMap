import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function Veteran(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.veteran));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__veteran").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker icon={iconLib.veteran} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.veteran.title")}</span>
                </header>
                <content>
                    {t("enemies:"+x.string)}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: veteran{x.id}:{x.string}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}