import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Circle } from "react-leaflet";

const Template = (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.mineral[props.id]));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=mineral__"+props.id).then(response=>response.json()).then(d=>setData(d)) : setData([])},[props.id, marker]);
    if(data !== null){return(marker ? (
        props.id === "photonscale" ? (
            data.map((x=>
                <Circle 
                    center={[x.lat,x.lng]}
                    radius={30}
                    pathOptions={{
                        color: 'pink',
                        fillColor: 'lightblue',
                        fillOpacity: '0.25'
                    }}
                >
                    <Marker icon={iconLib[props.id]} position={[x.lat,x.lng]}>
                        <Tooltip direction='top'><tooltipwindow>
                            <header>
                                <span><menuicon/> {t("items:mineral."+props.id+".title")}</span>
                            </header>
                            <content>
                                {t("ui:LegendMenu.Categories.minerals")}
                                <br/>
                                {t("ui:Map.placedBy")}: {x.contributer}
                                <id>ID: {props.id}{x.id}</id>
                            </content>
                        </tooltipwindow></Tooltip>
                    </Marker>
                </Circle>
            ))
        ) : (
            data.map((x=>
                <Marker icon={iconLib[props.id]} position={[x.lat,x.lng]}>
                    <Tooltip direction='top'><tooltipwindow>
                        <header>
                            <span><menuicon/> {t("items:mineral."+props.id+".title")}</span>
                        </header>
                        <content>
                            {t("ui:LegendMenu.Categories.minerals")}
                            <br/>
                            {t("ui:Map.placedBy")}: {x.contributer}
                            <id>ID: {props.id}{x.id}</id>
                        </content>
                    </tooltipwindow></Tooltip>
                </Marker>
            ))
        )
    ):<Fragment/>)}else{return <Fragment/>}
}

export default function Minerals(){
    const [dataJSON,setDataJSON] = useState([]);
    useEffect(()=>{
        fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/settings.json").then(response=>response.json()).then(d=>setDataJSON(d))
    },[]);
    return <>{dataJSON.items && dataJSON?.items.mineral.map((x=>
        <Template id={x.item}/>
    ))}</>
};