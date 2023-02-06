import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function Datapod(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.datapod));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__datapod").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker 
            icon={window.localStorage_Checked.datapods && window.localStorage_Checked.datapods.indexOf(x.string)>-1 ? iconLib.datapodChecked :iconLib.datapod}
            position={[x.lat,x.lng]} 
            eventHandlers={{
                click:(e)=>{
                    if(e.target.getIcon() === iconLib.datapod){
                        e.target.setIcon(iconLib.datapodChecked);
                        if(!window.localStorage_Checked.datapods){
                            window.localStorage_Checked.datapods = []
                        }
                        window.localStorage_Checked.datapods[window.localStorage_Checked.datapods.length]=x.string;
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }else{
                        e.target.setIcon(iconLib.datapod);
                        var mark = window.localStorage_Checked.datapods.indexOf(x.string);
                        window.localStorage_Checked.datapods.splice(mark,1);
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }
                }
            }}
        >
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                     <span><menuicon/> {t("items:other.datapod.title")}</span>
                </header>
                <content>
                    {t("datapods:"+x.string)}
                    <br/>
                    {t("ui:map.placedBy")}: {x.contributer}
                    <id>ID: {x.string}</id>
                    <br/><br/>
                    {t("ui:map.checkHint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}