import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

export default function Mischief(){
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.mischief));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__mischief").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker 
            icon={window.localStorage_Checked.mischief && window.localStorage_Checked.mischief.indexOf(x.id)>-1 ? iconLib.mischiefChecked : iconLib.mischief}
            position={[x.lat,x.lng]}
            eventHandlers={{
                click:(e)=>{
                    if(e.target.getIcon() === iconLib.mischief){
                        e.target.setIcon(iconLib.mischiefChecked);
                        if(!window.localStorage_Checked.mischief){
                            window.localStorage_Checked.mischief = []
                        }
                        window.localStorage_Checked.mischief[window.localStorage_Checked.mischief.length]=x.id;
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }else{
                        e.target.setIcon(iconLib.mischief);
                        var mark = window.localStorage_Checked.mischief.indexOf(x.id);
                        window.localStorage_Checked.mischief.splice(mark,1);
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    }
                }
            }}
        >
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.mischief.title")}</span>
                </header>
                <content>
                    <id>ID: mischief{x.id}</id>
                    <br/><br/>
                    {t("ui:Map.checkHint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}