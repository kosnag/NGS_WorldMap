import React, { useState, Fragment, useEffect, useRef } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";
import "../tooltip.scss";
import "../popup.scss";

const Load = {
Battledia:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const close = () => {popupRef.current._closeButton.click()}
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(1);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{fetch("./assets/data/battledias.json").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.battledia));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.battledia} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'><tooltip-window>
    <header><span><menuicon/> {t("battledias:"+x.string)}</span></header><content>{t("items:Title.landmarks__battledia")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    <Popup ref={popupRef}><popup-window>
        <header><span><menuicon/> {t("items:Title.landmarks__battledia")}</span><closebutton onClick={()=>close()}/></header>
        <content>
            <select onChange={handleSelectChange}>
                {(x.ranks.map((y=> 
                    <option value={y.rank}>{t("ui:Map.rank")} {y.rank}</option>
                )))}
            </select>
            <br/><br/>
            <name>{t("battledias:"+x.string+".title")}</name>
            <border/>
            <cont>
                <img src={"./assets/images/banners/urgents/df.jpg"} alt={""}/>
                {(x.ranks.map((y=>// eslint-disable-next-line
                    <info className={tier == y.rank ? "":"hidden"}>
                        <level>
                            <div>
                                <l>{t("ui:Map.maxPlayers")}</l>
                                <r>{x.players}</r>
                            </div>
                            <div>
                                <l>{t("ui:Map.requiredBP")}</l>
                                <r>{y.minBP}</r>
                            </div>
                            <div>
                                <l>{t("ui:Map.enenyLv")}</l>
                                <r>{y.enemyLv}</r>
                            </div>
                        </level>
                        <br/>
                        <span>{(()=>{
                            switch(x.type){
                                case "purple":
                                    return t("ui:Map.possibleRewards")
                                case "yellow":
                                    return t("ui:Map.guaranteedRewards")
                                default:
                                    return <Fragment/>
                            }
                        })()}</span>
                        <border/>
                        {(()=>{
                            switch(x.type){
                                case "yellow":
                                    return (
                                        <rewards>{(y.rewards.map((z=>// eslint-disable-next-line
                                            <div>
                                                <l>{t("rewards:"+z.item)}</l>
                                                <r>x{z.count}</r>
                                            </div>
                                        )))}</rewards>
                                    );
                                default:
                                    return (
                                        <rewards>{(y.rewards.map((z=>// eslint-disable-next-line
                                            <div>
                                                <full>{t("rewards:"+z.item)}</full>
                                            </div>
                                        )))}</rewards>
                                    );
                            }
                        })()}
                    </info>
                )))}
            </cont>
            <span>{t("ui:Map.clearCondition")}</span>
            <border/>
            {t("battledias:clearCondition")}
            <br/><br/>
            <span>{t("ui:Map.clearCondition")}</span>
            <border/>
            {t("battledias:description")}
        </content>
    </popup-window></Popup>
    </Marker>)))}</>:<Fragment/>)
},
Cocoon:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const close=()=>popupRef.current._closeButton.click();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./assets/data/cocoons.json").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.cocoon));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.cocoon} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'><tooltip-window>
    <header><span><menuicon/> {t("cocoons:"+x.string)}</span></header><content>{t("items:Title.landmarks__cocoon")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    <Popup><popup-window>

    </popup-window></Popup>
    </Marker>)))}</>:<Fragment/>)
},
Mag:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=landmarks__mags").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.mag));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.mag} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'><tooltip-window>
    <header><span><menuicon/> {t("mags:"+x.string)}</span></header><content>{t("items:Title.landmarks__mag")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    </Marker>)))}</>:<Fragment/>)
},
Ryuker:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=landmarks__ryukers").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.ryuker));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.ryuker} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'><tooltip-window>
    <header><span><menuicon/> {t("ryukers:"+x.string)}</span></header><content>{t("items:Title.landmarks__ryuker")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    </Marker>)))}</>:<Fragment/>)
},
Tower:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const close=()=>popupRef.current._closeButton.click();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./assets/data/towers.json").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.tower));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.tower} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'>
    <tooltip-window>
    <header><span><menuicon/> {t("towers:"+x.string)}</span></header><content>{t("items:Title.landmarks__tower")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    <Popup><popup-window>

    </popup-window></Popup>
    </Marker>)))}</>:<Fragment/>)
},
UQ:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const close=()=>popupRef.current._closeButton.click();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(1);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{fetch("./assets/data/uq.json").then(response=>response.json()).then(d=>setData(d))},[]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmarks.uq));
        return ()=>clearInterval(i);
    });
    return(marker?<>{(data.map((x=>
    <Marker icon={IconLib.uq} position={[x.lat,x.lng]} key={x.id}>
    <Tooltip direction='top'><tooltip-window>
    <header><span><menuicon/> {t("urgents:"+x.string)}</span></header><content>{t("items:Title.landmarks__urgent")}<id>ID: {x.string}</id></content>
    </tooltip-window></Tooltip>
    <Popup><popup-window>

    </popup-window></Popup>
    </Marker>)))}</>:<Fragment/>)
}}

export default function Landmarks(){return(<>
<Load.Battledia/>
<Load.Cocoon/>
<Load.Mag/>
<Load.Ryuker/>
<Load.Tower/>
<Load.UQ/>
</>)};