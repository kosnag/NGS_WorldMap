import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

const Load = {
Red:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.container.red));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=container__red").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker 
            icon={window.localStorage_Checked.redContainers && window.localStorage_Checked.redContainers.indexOf(x.id)>-1 ? iconLib.redBoxChecked : iconLib.redBox}
            position={[x.lat,x.lng]} 
            eventHandlers={{
                contextmenu:(e)=>{
                    if(e.target.getIcon() === iconLib.redBox){
                        e.target.setIcon(iconLib.redBoxChecked);
                        if(!window.localStorage_Checked.redContainers){
                            window.localStorage_Checked.redContainers = []
                        }
                        window.localStorage_Checked.redContainers[window.localStorage_Checked.redContainers.length]=x.id;
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }else{
                        e.target.setIcon(iconLib.redBox);
                        var mark = window.localStorage_Checked.redContainers.indexOf(x.id);
                        window.localStorage_Checked.redContainers.splice(mark,1);
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }
                }
            }}
        >
            <Tooltip direction='top'><tooltipwindow>
                <header>
                     <span><menuicon/> {t("items:container.red.title")}</span>
                </header>
                <content>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Green:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.container.green));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=container__green").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker icon={iconLib.greenBox} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("items:container.green.title")}</span>
                </header>
                <content>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}
}

export default function Containers(){return (<>
<Load.Red/>
<Load.Green/>
</>)};