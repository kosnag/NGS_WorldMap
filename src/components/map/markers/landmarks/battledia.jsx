import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

export default function Battledia(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(Number(e.target.value));
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
}