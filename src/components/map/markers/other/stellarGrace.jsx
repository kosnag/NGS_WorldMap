import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function StellarGrace(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.stellargrace));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__stellargrace").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker icon={(()=>{
            if(x.string === "gold"){return iconLib.stellarGrace_Gold}
            if(x.string === "silver"){return iconLib.stellarGrace_Silver}
            if(x.string === "default"){return iconLib.stellarGrace_Default}
        })()} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.stellargrace.title")}</span>
                </header>
                <content>
                    {t("ui:map.type")}: {t("ui:map.stellarGraceType."+x.string)}
                    <br/>
                    <id>ID: stellargrace{x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}