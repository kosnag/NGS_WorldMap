import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

export default function QuestCounter(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState({});
    const [marker,setMarker] = useState([]);
    const [quest,setQuest] = useState(null);
    const [tierLTD,setTierLTD] = useState(0);
    const handleSelectChangeLTD=(e)=>setTierLTD(e.target.value);
    const [toggleTab,setToggleTab] = useState('triggers');
    const [checkSettings,setSettings] = useState({});
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.quests));
        return ()=>clearInterval(i);
    });
    const coordinates = [
        {"lat":-1435, "lng":643.5},
        {"lat":-1691.25, "lng":1571.625},
        {"lat":-588.5, "lng":750.25}
    ]
    useEffect(()=>{
        marker === 1 ?
            fetch("./assets/storages/settings.json").then(response=>response.json()).then(s=>setSettings(s))
            :
            setSettings({});
    },[marker]);
    useEffect(()=>{
        marker === 1 ?
            fetch("./assets/data/quests.json").then(response=>response.json()).then(d=>setData(d))
            :
            setData({});
    },[marker]);
    if(data !== null){return(marker ? (coordinates.map(c=>
        <Marker icon={iconLib.quests} position={[c.lat,c.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.quests.title")}</span>
                </header>
                <content>
                    {t("items:landmark.quests.description")}
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow className={toggleTab === "triggers" ? "quests triggers" : "quests ltd"}>
                <header>
                    <span><menuicon/> {t("items:landmark.quests.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <nav>
                    <buttons>
                        <button
                            className={toggleTab === "triggers" ? "active" : ""}
                            onClick={()=>setToggleTab("triggers")}
                        >{t("quests:ui.triggers")}</button>
                            <button
                                className={
                                    checkSettings?.settings && checkSettings.settings.seasonal_event === true
                                    ?
                                    (toggleTab === "limited" ? "active" : "")
                                    :
                                    "disabled"
                                }
                                onClick={()=>
                                    checkSettings?.settings && checkSettings.settings.seasonal_event === true
                                    ?
                                    setToggleTab("limited")
                                    :
                                    null
                                }
                            >{t("quests:ui.limited")}</button>
                    </buttons>
                </nav>
                {toggleTab === "triggers" ?
                <columns>
                    <buttons>
                        {(()=>{
                            if(data.triggers){
                                var jsx = [];
                                for(let q=0; q<data.triggers.length; q++){jsx.push(
                                    <button
                                        className={q === quest ? "active" : ""}
                                        onClick={()=>setQuest(q)}
                                    >{t("quests:triggers."+data.triggers[q].id+".title")}</button>
                                )}
                                return jsx;
                            }
                        })()}
                    </buttons>
                    <content>
                        <name>{quest !== null ? t("quests:triggers."+data.triggers[quest].id+".title") : t("items:nothing")}</name>
                        <br/>
                        <info>
                            <div>
                                <level>
                                    <span>{t("ui:map.maxPlayers")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].players : "NaN"}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.requiredBP")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].minBP : "NaN"}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.enemyLv")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].enemyLv : "NaN"}</value>
                                </level>
                            </div>
                        </info>
                        <cont>
                            <img src={quest !== null ? data.triggers[quest].img_url : "./assets/images/banners/other/null.png"} alt="" />
                            <info>
                                <span>{t("ui:map.rewards.firstTime")}</span>
                                <border/>
                                <rewards>
                                    {(quest !== null ? data.triggers[quest].firstRewards.map((y=>
                                        <div>
                                            <l>{t(y.item)}</l>
                                            <r>{(()=>{switch (y.item){
                                                case "rewards:value.meseta":
                                                case "rewards:value.experience":
                                                    return (<>{y.count}</>)
                                                default:
                                                    return (<>x{y.count}</>)
                                            }})()}</r>
                                        </div>
                                    )) : <Fragment/>)}
                                </rewards>
                                <br/>
                                <span>{t("ui:map.rewards.guaranteed")}</span>
                                <border/>
                                <rewards>
                                    {(quest !== null ? data.triggers[quest].rewards.map((y=><>
                                        {(y.item === "rewards:value.seasonalpoints") && (checkSettings?.settings && checkSettings.settings.seasonal_event === false) ? 
                                        <Fragment/>
                                        :
                                        <div>
                                            <l>{t(y.item)}</l>
                                            <r>
                                                {(()=>{switch (y.item){
                                                    case "rewards:value.meseta":
                                                    case "rewards:value.seasonalpoints":
                                                    case "rewards:value.experience":
                                                        return (<>{y.count}</>)
                                                    default:
                                                        return (<>x{y.count}</>)
                                                }})()}
                                            </r>
                                        </div>
                                    }</>)) : <Fragment/>)}
                                </rewards>
                            </info>
                        </cont>
                        <span>{t("ui:map.description")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".description") : "NaN"}
                        <br/><br/>
                        {quest !== null ? (data.triggers[quest].sp_fail_condition === true ? <>
                        <span>{t("ui:map.failCondition")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".failCondition") : "NaN"}
                        <br/><br/>
                        </> : <Fragment/>):<Fragment/>}
                        <span>{t("ui:map.clearCondition")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".clearCondition") : "NaN"}
                    </content>
                </columns> : <Fragment/>}
                {toggleTab === "limited" ?
                <>{checkSettings?.settings && checkSettings.settings.seasonal_event === true ? <columns>
                    <content>
                        <select onChange={handleSelectChangeLTD}>
                            {(()=>{
                                const jsx = [];
                                if(data.limited.ranks){
                                    for (let i=0; i<data.limited.ranks.length; i++){jsx.push(
                                        <option value={i}>{t("ui:map.rank")} {i+1}</option>
                                    )}
                                }
                                return jsx;
                            })()}
                        </select>
                        <br/><br/>
                        <name>{t("quests:limited.title")}</name>
                        <br/>
                        <info>
                            <div>
                                <level>
                                    <span>{t("ui:map.maxPlayers")}</span>
                                    <border/>
                                    <value>{data.limited.players}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.requiredBP")}</span>
                                    <border/>
                                    <value>{data.limited.ranks[tierLTD].minBP}</value>
                                </level>
                                <level>
                                    <span>{t("ui:map.enemyLv")}</span>
                                    <border/>
                                    <value>{data.limited.ranks[tierLTD].enemyLv}</value>
                                </level>
                            </div>
                        </info>
                        <cont>
                            <img src={data.limited.img_url} alt="" />
                            <info>
                                <span>{t("ui:map.rewards.guaranteed")}</span>
                                <border/>
                                <rewards>
                                    <div>
                                        <l>{t("rewards:value.seasonalpoints")}</l>
                                        <r>{data.limited.ranks[tierLTD].points}</r>
                                    </div>
                                </rewards>
                            </info>
                        </cont>
                        <span>{t("ui:map.description")}</span>
                        <border/>
                        {t("quests:limited.description")}
                        <br/><br/>
                        <span>{t("ui:map.clearCondition")}</span>
                        <border/>
                        {t("quests:limited.clearCondition")}
                    </content>
                </columns> : <Fragment/>}</> : <Fragment/>}
            </popupwindow></Popup>
        </Marker>
    )):<Fragment/>)}
}