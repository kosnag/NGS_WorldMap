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
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.advTrainia));
        return ()=>clearInterval(i);
    });
    return(marker ? 
        <Marker icon={iconLib.advTrainia} position={[props.lat,props.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("advTrainia:"+props.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.advTrainia.title")}
                    <id>ID: {props.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.advTrainia.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
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
                    <name>{t("advTrainia:"+props.id+".title")}</name>
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
                        <img src="./assets/images/banners/other/advTrainia.png" alt="" />
                        {(()=>{
                            const jsx = [];
                            for (let i=0; i<props.object.ranks.length; i++){
                                jsx.push(<>{(()=>{
                                    if(props.object.ranks[tier]){return (
                                        <info className={tier === i ? "" : "hidden"}>
                                            <span>{t("ui:map.rewards.possible")}</span>
                                            <border/>
                                            <rewards>
                                            <div>
                                                {(()=>{
                                                    if(props.object.ranks[i].rewards){
                                                        return(props.object.ranks[i].rewards.map(y=>(
                                                            <full>{t(y)}</full>
                                                        )))
                                                    }
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
                    <span>{t("ui:map.description")}</span>
                    <border/>
                    {t("advTrainia:"+props.id+".description")}
                    <br/><br/>
                    <span>{t("ui:map.clearCondition")}</span>
                    <border/>
                    {t("advTrainia:"+props.id+".clearCondition")}
                    <br/><br/>
                    <span>{t("ui:map.failCondition")}</span>
                    <border/>
                    {t("advTrainia:"+props.id+".failCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    :<Fragment/>)
}

export default function AdvTrainia(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("./assets/data/advTrainia.json").then(response=>response.json()).then(d=>setData(d))
    },[]);
    return <>{(()=>{
        const jsx = [];
        for(var i = 0; i < data.length; i++){
            jsx.push(<Template 
                object={data[i]}
                id={data[i].id} 
                lat={data[i].lat} 
                lng={data[i].lng} 
                players={data[i].players} 
            />)
        }
        return jsx;
    })()}</>



}