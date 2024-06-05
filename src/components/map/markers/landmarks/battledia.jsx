import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const Template = (props) => {
    const {t} = useTranslation();
    const popupRef = useRef();
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(Number(e.target.value));
    const [settingsJSON,setSettings] = useState({});
    useEffect(()=>{
        fetch("./assets/jsons/settings.json").then(response=>response.json()).then(d=>setSettings(d))
    },[marker]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.battledia));
        return ()=>clearInterval(i);
    });
    return(marker ? 
        <Marker icon={(()=>{
            if(props.type === "yellow"){return iconLib.battledia_yellow}
            if(props.type === "purple"){return iconLib.battledia_purple}
        })()} position={[props.lat,props.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("battledias:regular."+props.id)}</span>
                </header>
                <content>
                    {t("items:landmark.battledia.title")}
                    <id>ID: {props.id}</id>
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
                            for (var i=0; i<props.object.ranks.length; i++){jsx.push(
                                <option value={i}>{t("ui:map.rank")} {i+1}</option>
                            )}
                            return jsx;
                        })()}
                    </select>
                    <br/><br/>
                    <name>{t("battledias:regular."+props.id)}</name>
                    <br/>
                    <info>
                        <div>
                            <level>
                                <span>{t("ui:map.maxPlayers")}</span>
                                <border/>
                                <value>{props.players}</value>
                            </level>
                            <level>
                                <span>{t("ui:map.requiredBP")}</span>
                                <border/>
                                <value>{props.object.ranks[tier] != null ? props.object.ranks[tier].minBP : <Fragment/>}</value>
                            </level>
                            <level>
                                <span>{t("ui:map.enemyLv")}</span>
                                <border/>
                                <value>{props.object.ranks[tier] != null ? props.object.ranks[tier].enemyLv : <Fragment/>}</value>
                            </level>
                        </div>
                    </info>
                    <cont>
                        <img src="./assets/images/banners/other/battledia.png" alt="" />
                        {(()=>{
                            const jsx = [];
                            for (let i=0; i<props.object.ranks.length; i++){
                                jsx.push(<>{(()=>{
                                    if(props.object.ranks[tier] != null){return (
                                        <info className={tier === i ? "" : "hidden"}>
                                            <span>
                                                {(()=>{
                                                    if(props.type === "purple"){return t("ui:map.rewards.possible")}
                                                    if(props.type === "yellow"){return t("ui:map.rewards.guaranteed")}
                                                })()}
                                            </span>
                                            <border/>
                                            <rewards>
                                            <div>
                                                {(()=>{
                                                    if(props.type === "purple"){return <>
                                                        {(()=>{
                                                            if(props.have_unique_rewards === true){
                                                                return(
                                                                    props.object.rewards.map(y=>(
                                                                        <full>{t(y.item)}</full>
                                                                    ))
                                                                )
                                                            } else {
                                                                if(settingsJSON.settings){
                                                                    return(
                                                                        settingsJSON.settings.default_purple_trigger_rewards.map(y=>(
                                                                            <full>{t(y)}</full>
                                                                        ))
                                                                    )
                                                                }
                                                            }
                                                        })()}
                                                    </>}
                                                    if(props.type === "yellow"){return <>
                                                        {(props.object.ranks[i].rewards.map((y=><>
                                                            {(()=>{
                                                                if (y.count != null){return (<>
                                                                    <l>{t(y.item)}</l>
                                                                    <r>{(()=>{if(
                                                                        Number.isInteger(y.count) === true && (
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
                                                    </>}
                                                })()}
                                            </div>
                                            </rewards>
                                        </info>
                                    )}
                                })()}</>)
                            }
                            return jsx;
                        })()}
                    </cont>
                    {props.type === "purple" ? <>
                        <span>{t("ui:map.enemyTypes.gigantix")}</span>
                        <border/>
                        {(()=>{
                            const jsx = [];
                            if(props.have_unique_bosses_per_rank === true && props.object.ranks[tier].bosses){
                                console.log(props.have_unique_bosses_per_rank)
                                for (var i=0; i<props.object.ranks[tier].bosses.length; i++){
                                    if (i === 0){
                                        jsx.push(<>{t("enemies:"+props.object.ranks[tier].bosses[i])}</>)
                                    } else {
                                        jsx.push(<>, {t("enemies:"+props.object.ranks[tier].bosses[i])}</>)
                                    }
                                }
                            } else {
                                console.log(props.object.bosses)
                                for (var k=0; k<props.object.bosses.length; k++){
                                    if (k === 0){
                                        jsx.push(<>{t("enemies:"+props.object.bosses[k])}</>)
                                    } else {
                                        jsx.push(<>, {t("enemies:"+props.object.bosses[k])}</>)
                                    }
                                }
                            }
                            return jsx;
                        })()}
                        <br/><br/>
                    </>:<Fragment/>}
                    <span>{t("ui:map.description")}</span>
                    <border/>
                    {t("battledias:type."+props.type+".description")}
                    <br/><br/>
                    <span>{t("ui:map.clearCondition")}</span>
                    <border/>
                    {t("battledias:type."+props.type+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    :<Fragment/>)
}

export default function Battledia(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("./assets/data/battledias.json").then(response=>response.json()).then(d=>setData(d))
    },[]);
    return <>{(()=>{
        const jsx = [];
        for(var i = 0; i < data.length; i++){
            jsx.push(<Template 
                object={data[i]}
                type={data[i].type} 
                id={data[i].id} 
                lat={data[i].lat} 
                lng={data[i].lng} 
                players={data[i].players} 
                have_unique_rewards={data[i].have_unique_rewards} 
                have_unique_bosses_per_rank={data[i].have_unique_bosses_per_rank}
            />)
        }
        return jsx;
    })()}</>



}