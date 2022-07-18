import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../index.jsx";
import { useTranslation } from "react-i18next";
import { Circle, Marker, Tooltip } from "react-leaflet";

const Load = {
Veteran:()=>{
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
},
AlphaReactor:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.alphareactor));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=other__alphareactor").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return (marker ? (data.map((x=>
        <Marker icon={iconLib.alphareactor} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.alphareactor.title")}</span>
                </header>
                <content>
                    {t("items:other.alphareactor.description")}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: alphareactor{x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Snoal:()=>{
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.snoal));
        return ()=>clearInterval(i);
    });
    const data = [
        {"lat": "-201","lng": "522"},
        {"lat": "-172","lng": "562"},
        {"lat": "-255","lng": "568"},
        {"lat": "-298","lng": "582"},
        {"lat": "-348","lng": "579"}
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
            <Marker icon={iconLib.snoal} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                    <header>
                        <span><menuicon/> {t("items:other.snoal.title")}</span>
                    </header>
                    <content>
                        {t("items:other.snoal.description")}
                    </content>
                </tooltipwindow></Tooltip>
            </Marker>
        </Circle>
    ))):<Fragment/>)
},
StellarFragment:()=>{
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.stellarseed));
        return ()=>clearInterval(i);
    });
    return(marker ? <Circle 
        center={[-1068, 1423.5]}
        radius={35}
        pathOptions={{
            color: 'gold',
            fillColor: 'yellow',
            fillOpacity: '0.25'
        }}
    >
        <Marker icon={iconLib.stellarseed} position={[-1068, 1423.5]}>
            <Tooltip direction='top'><tooltipwindow style={{width: "320px"}}>
                <header>
                    <span><menuicon/> {t("items:other.stellarseed.title")}</span>
                </header>
                <content>
                    {t("items:other.stellarseed.description")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    </Circle>:<Fragment/>)
},
StellarGrace:()=>{
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
                    {t("ui:Map.type")}: {t("ui:Map.stellarGraceType."+x.string)}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: stellargrace{x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Datapod:()=>{
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
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {x.string}</id>
                    <br/>
                    {t("ui:Map.checkHint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
BGM:()=>{
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
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <br/>
                    {t("items:other.musicplace.hint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Mischief:()=>{
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
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: mischief{x.id}</id>
                    <br/>
                    {t("ui:Map.checkHint")}
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}
}
export default function Other(){return (<>
<Load.Veteran/>
<Load.AlphaReactor/>
<Load.StellarFragment/>
<Load.StellarGrace/>
<Load.Datapod/>
<Load.BGM/>
<Load.Mischief/>
<Load.Snoal/>
</>)};