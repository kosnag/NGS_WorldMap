import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const Load = {
Battledia:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.battledia));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/battledias.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={(()=>{
            if(x.type === "yellow"){return iconLib.battledia_yellow}
            if(x.type === "purple"){return iconLib.battledia_purple}
        })()} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("battledias:regular."+x.id)}</span>
                </header>
                <content>
                    {t("items:landmark.battledia.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.battledia.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                    <content>
                    <select onChange={handleSelectChange}>
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){jsx.push(
                                <option value={i}>{t("ui:Map.rank")} {i+1}</option>
                            )}
                            return jsx;
                        })()}
                    </select>
                    <br/><br/>
                    <name>{t("battledias:regular."+x.id)}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.requiredBP")}</span>
                                <border/>
                                <value>{x.ranks[tier] != null ? x.ranks[tier].minBP : <Fragment/>}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>{x.ranks[tier] != null ? x.ranks[tier].enemyLv : <Fragment/>}</value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src="./assets/images/banners/other/battledia.png" alt="" />
                        {(()=>{
                            const jsx = [];
                            for (let i=0; i<x.ranks.length; i++){
                                jsx.push(<>{(()=>{
                                    if(x.ranks[tier] != null){return (
                                        <info className={tier === i ? "" : "hidden"}>
                                            <span>
                                                {(()=>{
                                                    if(x.type === "purple"){return t("ui:Map.rewards.possible")}
                                                    if(x.type === "yellow"){return t("ui:Map.rewards.guaranteed")}
                                                })()}
                                            </span>
                                            <border/>
                                            <rewards>
                                                <div>
                                                    {(x.ranks[i].rewards.map((y=><>
                                                        {(()=>{
                                                            if (y.count != null){return (<>
                                                                <l>{t(y.item)}</l>
                                                                <r>{(()=>{if(
                                                                    Number.isInteger(y.count) === true && (
                                                                        y.item === "rewards:value.seasonalpoints"
                                                                            ||
                                                                        y.item === "rewards:value.meseta"
                                                                            ||
                                                                        y.item === "rewards:value.experience"
                                                                    )
                                                                ){
                                                                    return (<>{y.count}</>)
                                                                } else if (Number.isInteger(y.count) === true){
                                                                    return (<>x{y.count}</>)
                                                                } else {
                                                                    return (<>{y.count}</>)
                                                                }})()}</r>
                                                            </>);
                                                        } else {
                                                            return (<full>{t(y.item)}</full>);
                                                        }})()}
                                                    </>)))}
                                                </div>
                                            </rewards>
                                        </info>
                                    )}
                                })()}</>)
                            }
                            return jsx;
                        })()}
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("battledias:type."+x.type+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("battledias:type."+x.type+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
QuestCounter:()=>{
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
            fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/settings.json").then(response=>response.json()).then(s=>setSettings(s))
            :
            setSettings({});
    },[marker]);
    useEffect(()=>{
        marker === 1 ?
            fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/quests.json").then(response=>response.json()).then(d=>setData(d))
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
                                    checkSettings?.visibility && checkSettings.visibility.limited_quest_active === true
                                    ?
                                    (toggleTab === "limited" ? "active" : "")
                                    :
                                    "disabled"
                                }
                                onClick={()=>
                                    checkSettings?.visibility && checkSettings.visibility.limited_quest_active === true
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
                                    <span>{t("ui:Map.maxPlayers")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].players : "NaN"}</value>
                                </level>
                                <level>
                                    <span>{t("ui:Map.requiredBP")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].minBP : "NaN"}</value>
                                </level>
                                <level>
                                    <span>{t("ui:Map.enemyLv")}</span>
                                    <border/>
                                    <value>{quest !== null ? data.triggers[quest].enemyLv : "NaN"}</value>
                                </level>
                            </div>
                        </info>
                        <cont>
                            <img src={quest !== null ? data.triggers[quest].img_url : "./assets/images/banners/other/null.png"} alt="" />
                            <info>
                                <span>{t("ui:Map.rewards.firstTime")}</span>
                                <border/>
                                <rewards>
                                    {(quest !== null ? data.triggers[quest].firstRewards.map((y=>
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
                                    )) : <Fragment/>)}
                                </rewards>
                                <br/>
                                <span>{t("ui:Map.rewards.guaranteed")}</span>
                                <border/>
                                <rewards>
                                    {(quest !== null ? data.triggers[quest].rewards.map((y=>
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
                                    )) : <Fragment/>)}
                                </rewards>
                            </info>
                        </cont>
                        <span>{t("ui:Map.description")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".description") : "NaN"}
                        <br/><br/>
                        {quest !== null ? (data.triggers[quest].sp_fail_condition === true ? <>
                        <span>{t("ui:Map.failCondition")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".failCondition") : "NaN"}
                        <br/><br/>
                        </> : <Fragment/>):<Fragment/>}
                        <span>{t("ui:Map.clearCondition")}</span>
                        <border/>
                        {quest !== null ? t("quests:triggers."+data.triggers[quest].id+".clearCondition") : "NaN"}
                    </content>
                </columns> : <Fragment/>}
                {toggleTab === "limited" ?
                <columns>
                    <content>
                        <select onChange={handleSelectChangeLTD}>
                            {(()=>{
                                const jsx = [];
                                if(data.limited.ranks){
                                    for (let i=0; i<data.limited.ranks.length; i++){jsx.push(
                                        <option value={i}>{t("ui:Map.rank")} {i+1}</option>
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
                                    <span>{t("ui:Map.maxPlayers")}</span>
                                    <border/>
                                    <value>{data.limited.players}</value>
                                </level>
                                <level>
                                    <span>{t("ui:Map.requiredBP")}</span>
                                    <border/>
                                    <value>{data.limited.ranks[tierLTD].minBP}</value>
                                </level>
                                <level>
                                    <span>{t("ui:Map.enemyLv")}</span>
                                    <border/>
                                    <value>{data.limited.ranks[tierLTD].enemyLv}</value>
                                </level>
                            </div>
                        </info>
                        <cont>
                            <img src={data.limited.img_url} alt="" />
                            <info>
                                <span>{t("ui:Map.rewards.guaranteed")}</span>
                                <border/>
                                <rewards>
                                    <div>
                                        <l>{t("rewards:value.seasonalpoints")}</l>
                                        <r>{data.limited.ranks[tierLTD].points}</r>
                                    </div>
                                </rewards>
                            </info>
                        </cont>
                        <span>{t("ui:Map.description")}</span>
                        <border/>
                        {t("quests:limited.description")}
                        <br/><br/>
                        <span>{t("ui:Map.clearCondition")}</span>
                        <border/>
                        {t("quests:limited.clearCondition")}
                    </content>
                </columns> : <Fragment/>}
            </popupwindow></Popup>
        </Marker>
    )):<Fragment/>)}
},
Cocoon:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.cocoon));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/cocoons.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker?(data.map((x=>
        <Marker icon={iconLib.cocoon} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("cocoons:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.cocoon.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.cocoon.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <name>{t("cocoons:"+x.id+".title")}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                             </level>
                            <level>
                                <span>{t("ui:Map.recommendedBP")}</span>
                                <border/>
                                <value>{x.minBP}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>{x.enemyLv}</value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src="./assets/images/banners/other/trainia.png" alt="" />
                        <info>
                            <span>{t("ui:Map.rewards.firstTime")}</span>
                            <border/>
                            <rewards>
                                <div>
                                    <l>{t("rewards:value.skillpoint")}</l>
                                    <r>x1</r>
                                </div>
                            </rewards>
                            </info>
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("cocoons:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.subMissions")}</span>
                    <border/>
                    <submission-divider/> {t("cocoons:"+x.id+".subMission1")}
                    <br/>
                    <submission-divider/> {t("cocoons:"+x.id+".subMission2")}
                    <br/>
                    <submission-divider/> {t("cocoons:"+x.id+".subMission3")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("cocoons:"+x.id+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Mag:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.mag));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=landmark__mag").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.mag} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
            <header>
                <span><menuicon/> {t("mags:type."+x.string)}</span>
            </header>
            <content>
                {t("items:landmark.mag.title")}
                <id>ID: {x.string}</id>
            </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Ryuker:()=>{
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.ryuker));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=landmark__ryuker").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.ryuker} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("ryukers:"+x.string)}</span>
                </header>
                <content>
                    {t("items:landmark.ryuker.title")}
                    <id>ID: {x.string}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Tower:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.tower));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/towers.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.tower} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("towers:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.tower.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.tower.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <name>{t("towers:"+x.id+".title")}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                             </level>
                            <level>
                                <span>{t("ui:Map.recommendedBP")}</span>
                                <border/>
                                <value>{x.minBP}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>{x.enemyLv}</value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src="./assets/images/banners/other/trainia.png" alt="" />
                        <info>
                            <span>{t("ui:Map.rewards.firstTime")}</span>
                            <border/>
                            <rewards>
                                <div>
                                    <l>{t("rewards:value.skillpoint")}</l>
                                    <r>x4</r>
                                </div>
                            </rewards>
                            </info>
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("towers:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.subMissions")}</span>
                    <border/>
                    <submission-divider/> {t("towers:"+x.id+".subMission1")}
                    <br/>
                    <submission-divider/> {t("towers:"+x.id+".subMission2")}
                    <br/>
                    <submission-divider/> {t("towers:"+x.id+".subMission3")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("towers:"+x.id+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
UQ:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.urgent));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/urgents.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.urgent} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("urgents:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.urgent.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.urgent.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <select onChange={handleSelectChange}>
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){jsx.push(
                                <option value={i}>{t("ui:Map.rank")} {i+1}</option>
                            )}
                            return jsx;
                        })()}
                    </select>
                    <br/><br/>
                    <name>{t("urgents:"+x.id+".title")}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.requiredBP")}</span>
                                <border/>
                                <value>
                                    {x.ranks[tier] != null ? <>{x.ranks[tier].minBP}</> : <Fragment/>}
                                </value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>
                                    {x.ranks[tier] != null ? <>{x.ranks[tier].enemyLv}</> : <Fragment/>}
                                </value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src={"./assets/images/banners/urgents/"+x.id+".png"} alt="" />
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){// eslint-disable-next-line
                                jsx.push(<>{(()=>{
                                    if(x.ranks[tier] != null){return (// eslint-disable-next-line
                                        <info className={tier == i ? "" : "hidden"}>
                                            <span>{t("ui:Map.rewards.firstTime")}</span>
                                            <border/>
                                            <rewards>
                                                {(x.firstRewards.map((y=>
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
                                                )))}
                                            </rewards>
                                            <br/>
                                            <span>{t("ui:Map.rewards.guaranteed")}</span>
                                            <border/>
                                            <rewards>
                                                {(x.ranks[i].rewards.map((y=>
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
                                                )))}
                                            </rewards>
                                        </info>
                                    )}
                                })()}</>)
                            }
                            return jsx;
                        })()}
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("urgents:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("urgents:"+x.id+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
},
Trinitas:()=>{
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.trinitas));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/data/trinitas.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.trinitas} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("trinitas:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.trinitas.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.trinitas.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <name>{t("trinitas:"+x.id+".title")}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                <value>{x.players}</value>
                             </level>
                            <level>
                                <span>{t("ui:Map.requiredBP")}</span>
                                <border/>
                                <value>{x.minBP}</value>
                            </level>
                            <level>
                                <span>{t("ui:Map.enemyLv")}</span>
                                <border/>
                                <value>{x.enemyLv}+</value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src="./assets/images/banners/other/trinitas.png" alt="" />
                        <info>
                            <span>{t("ui:Map.rewards.possible")}</span>
                            <border/>
                            <rewards>
                                <div>
                                    {(x.rewards.map((y=><full>{t(y.item)}</full>)))}
                                </div>
                            </rewards>
                        </info>
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t("trinitas:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("trinitas:"+x.id+".clearCondition")}
                    <br/><br/>
                    <span>{t("ui:Map.failCondition")}</span>
                    <border/>
                    {t("trinitas:"+x.id+".failCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}}

export default function Landmarks(){return(<>
<Load.Battledia/>
<Load.QuestCounter/>
<Load.Cocoon/>
<Load.Mag/>
<Load.Ryuker/>
<Load.Tower/>
<Load.UQ/>
<Load.Trinitas/>
</>)};