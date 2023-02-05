import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

export default function AdvTrainia(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark.advTrainia));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./assets/data/advTrainia.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={iconLib.advTrainia} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("advTrainia:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark.advTrainia.title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark.advTrainia.title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <name>{t("advTrainia:"+x.id+".title")}</name>
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
                        <img src="./assets/images/banners/other/advTrainia.png" alt="" />
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
                    {t("advTrainia:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t("advTrainia:"+x.id+".clearCondition")}
                    <br/><br/>
                    <span>{t("ui:Map.failCondition")}</span>
                    <border/>
                    {t("advTrainia:"+x.id+".failCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}