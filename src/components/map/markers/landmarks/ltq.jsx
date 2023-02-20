import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

export default function LTQ(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(e.target.value);
    const [checkAvailability, setAvailability] = useState(false);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.ltq));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{
        marker === 1 ?
            fetch("./assets/storages/settings.json").then(response=>response.json()).then(s=>setData(s))
            :
            setData({});
            
    },[marker]);
    const coordinates = [
        {"lat":-1435, "lng":643.5},
        {"lat":-1691.25, "lng":1571.625},
        {"lat":-588.5, "lng":750.25},
        {"lat":-765.125, "lng":1371.125}
    ]
    useEffect(()=>{
        if(data.settings != null){
            if(data.settings.limited_quest.active === true){
                setAvailability(true)
            }
        }
    },[data])
    if(checkAvailability === true){
        if(data !== null){return(marker ? (coordinates.map((x=>
            <Marker icon={iconLib.ltq} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltipwindow>
                    <header>
                        <span><menuicon/> {t("items:landmark.quests.title")}</span>
                    </header>
                    <content>
                        {t("items:landmark.quests.description")}
                    </content>
                </tooltipwindow></Tooltip>
                <Popup ref={popupRef}><popupwindow>
                    <header>
                        <span><menuicon/> {t("items:landmark.quests.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                    </header>
                    <content>
                        <select onChange={handleSelectChange}>
                            {(()=>{if(data.settings != null){
                                const jsx = [];
                                for (var i=0; i<data.settings.limited_quest.ranks.length; i++){jsx.push(
                                    <option value={i}>{t("ui:map.rank")} {i+1}</option>
                                )}
                                return jsx;
                            }})()}
                        </select>
                        <br/><br/>
                        <name>{t("quests:limited.title")}</name>
                        <br/>
                        <info>
                            <div>
                                <level>
                                    <span>{t("ui:map.maxPlayers")}</span>
                                    <border/>
                                    <value>{data.settings && data.settings.limited_quest.players}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.requiredBP")}</span>
                                    <border/>
                                    <value>{data.settings && data.settings.limited_quest.ranks[tier].minBP}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.enemyLv")}</span>
                                    <border/>
                                    <value>{data.settings && data.settings.limited_quest.ranks[tier].enemyLv}</value>
                                </level>
                            </div>
                        </info>
                        <cont>
                            <img src={"./assets/images/banners/other/limited.png"} alt="" />
                            {(()=>{if(data.settings != null){
                                const jsx = [];
                                for (var i=0; i<data.settings.limited_quest.ranks.length; i++){// eslint-disable-next-line
                                    jsx.push(<>{(()=>{
                                        if(data.settings.limited_quest.ranks[tier] != null){return (// eslint-disable-next-line
                                            <info className={tier == i ? "" : "hidden"}>
                                                <span>{t("ui:map.rewards.guaranteed")}</span>
                                                <border/>
                                                <rewards>
                                                    <div>
                                                        {data?.settings && data.settings.seasonal_event === true ?
                                                        <>
                                                            <l>{t("rewards:value.seasonalpoints")}</l>
                                                            <r>{data.settings.limited_quest.ranks[tier].points}</r>
                                                        </>
                                                        :
                                                            <Fragment/>
                                                        }
                                                    </div>
                                                </rewards>
                                            </info>
                                        )}
                                    })()}</>)
                                }
                                return jsx;
                            }})()}
                        </cont>
                        <span>{t("ui:map.description")}</span>
                        <border/>
                        {t("quests:limited.description")}
                        <br/><br/>
                        <span>{t("ui:map.clearCondition")}</span>
                        <border/>
                        {t("quests:limited.clearCondition")}
                    </content>
                </popupwindow></Popup>
            </Marker>
        ))):<Fragment/>)}else{return <Fragment/>}
    } else {
        return <Fragment/>
    }
}