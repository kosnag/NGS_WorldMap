import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Circle, Marker, Tooltip } from "react-leaflet";
import "../tooltip.scss";

const Load = {
Veteran:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__veteran").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.veteran));
        return ()=>clearInterval(i);
    });
    if (data !== null){return (marker ? (data.map((x=>
        <Marker icon={IconLib.veteran} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:other.veteran.title")}</span>
                </header>
                <content>
                    {t("ui:Map.enemyTypes.dread")} | {t("enemies:"+x.string)}
                    <br/>
                    {t("ui:Map.placedBy")}: x.contributer
                    <id>ID: alphareactor{x.string}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
AlphaReactor:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__alphareactor").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.alphaReactor));
        return ()=>clearInterval(i);
    });
    if (data !== null) {return (marker ? (data.map((x=>
        <Marker icon={IconLib.datapod} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:other.alphaReactor.title")}</span>
                </header>
                <content>
                    {t("items:other.alphaReactor.description")}
                    <br/>
                    {t("ui:Map.placedBy")}: x.contributer
                    <id>ID: alphareactor{x.id}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
StellarFragment:()=>{
    const {t} = useTranslation();
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.stellarSeed));
        return ()=>clearInterval(i);
    });
    const data = [
        {"lat": -1068, "lng": 1423.5}
    ]
    return(marker ? (data.map((x=>
        <Circle 
            center={[x.lat,x.lng]}
            radius={35}
            pathOptions={{
                color: 'gold',
                fillColor: 'yellow',
                fillOpacity: '0.25'
            }}
        >
            <Marker icon={IconLib.stellarSeed} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltip-window>
                    <header>
                        <span><menuicon/> {t("items:other.stellarSeed.title")}</span>
                    </header>
                    <content>
                        {t("items:other.stellarSeed.description")}
                    </content>
                </tooltip-window></Tooltip>
            </Marker>
        </Circle>
    ))):<Fragment/>)
},
StellarGrace:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__stellargrace").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.stellarGrace));
        return ()=>clearInterval(i);
    });
    if (data !== null){return (marker ? (data.map((x=>
        <Marker icon={()=>{switch (x.string){
            case "gold":
                return IconLib.stellarGrace_Gold
            case "silver":
                return IconLib.stellarGrace_Silver
            default:
                return IconLib.stellarGrace_Default
        }}} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:other.stellarGrace.title")}</span>
                </header>
                <content>
                    {t("ui:Map.type")}: {t("ui:Map.stellarGraceType."+x.string)}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: stellargrace{x.id}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Datapod:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__datapod").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.datapod));
        return ()=>clearInterval(i);
    });
    if (data !== null) {return (marker ? (data.map((x=>
        <Marker 
            icon={()=>{setInterval(()=>{
                if(window.localStorage_Checked.datapods[x.string] === 1){return IconLib.datapodChecked}else{return IconLib.datapod}
            })}
            }
            position={[x.lat,x.lng]} 
            eventHandlers={function(){
                this.addEventListener("contextmenu", function(e){
                    e.preventDefault();
                    if(window.localStorage_Checked.datapods[x.string] === 1){
                        window.localStorage_Checked.datapods[x.string] = 0
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    } else {
                        window.localStorage_Checked.datapods[x.string] = 1
                        localStorage.setItem("checked",JSON.stringify(window.localStorage_Checked))
                    };
                })
            }}
        >
            <Tooltip direction='top'><tooltip-window>
                <header>
                     <span><menuicon/> {t("items:other.datapod.title")}</span>
                </header>
                <content>
                    {t("datapods:"+x.string)}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {x.string}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
BGM:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__musicPlace").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.musicPlace));
        return ()=>clearInterval(i);
    });
    if (data !== null) {return (marker ? (data.map((x=>
        <Marker icon={IconLib.musicPlace} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:other.musicPlace.title")}</span>
                </header>
                <content>
                    {x.string}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Mischief:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=other__mischief").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.other.mischief));
        return ()=>clearInterval(i);
    });
    if (data !== null) {return (marker ? (data.map((x=>
        <Circle 
            center={[x.lat,x.lng]}
            radius={4}
            pathOptions={{
                color: 'lightblue',
                fillColor: 'lightblue',
                fillOpacity: '1'
            }}
        >
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:other.mischief.title")}</span>
                </header>
                <content>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: mischief{x.id}</id>
                </content>
            </tooltip-window></Tooltip>
        </Circle>
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
</>)};