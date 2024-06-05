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
    useEffect(()=>{marker === 1 ? fetch("./assets/data/veterans.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker icon={iconLib.veteran} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.veteran.title")}</span>
                </header>
                <content>
                    {t("enemies:"+x.string)}
                    <br/>
                    {x.levels.use_special === true ?
                        <>
                            <span>{t("ui:map.enemyLv")}: {x.levels.special}</span>
                            <br/>
                            <span>{t("ui:map.LevelChangeEventOngoing")}</span>
                        </>
                        :
                        <span>{t("ui:map.enemyLv")}: {x.levels.normal}</span>
                    }
                    <br/>
                    {(()=>{
                        for(var i=0; i<x.length; i++){
                            return(<id>ID: veteran{i}:{x.string}</id>)
                        }
                    })()}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}