import React, { useState, Fragment, useEffect, useRef } from 'react';
import { iconLib } from "../../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const TrainingTrainiaTemplate = (props) => {
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.landmark[props.type]));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./assets/data/"+props.type+"s.json").then(response=>response.json()).then(d=>setData(d)) : setData([])},[props,marker]);
    if(data !== null){return(marker?(data.map((x=>
        <Marker icon={iconLib[props.type]} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t(props.type+"s:"+x.id+".title")}</span>
                </header>
                <content>
                    {t("items:landmark."+props.type+".title")}
                    <id>ID: {x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("items:landmark."+props.type+".title")}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    <name>{t(props.type+"s:"+x.id+".title")}</name>
                    {x.challenge ? 
                    <><br/>{t("ui:Map.availableChallengeRank")}</>
                    :
                    <Fragment/>
                    }
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
                                    {props.type === "cocoon" ? 
                                    <r>x1</r>
                                    :
                                    <r>x4</r>
                                    }
                                </div>
                            </rewards>
                            </info>
                    </cont>
                    <span>{t("ui:Map.description")}</span>
                    <border/>
                    {t(props.type+"s:"+x.id+".description")}
                    <br/><br/>
                    <span>{t("ui:Map.subMissions")}</span>
                    <border/>
                    <submission-divider/> {t(props.type+"s:"+x.id+".subMission1")}
                    <br/>
                    <submission-divider/> {t(props.type+"s:"+x.id+".subMission2")}
                    <br/>
                    <submission-divider/> {t(props.type+"s:"+x.id+".subMission3")}
                    <br/><br/>
                    <span>{t("ui:Map.clearCondition")}</span>
                    <border/>
                    {t(props.type+"s:"+x.id+".clearCondition")}
                </content>
            </popupwindow></Popup>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}

export default function TrainingTrainia(){return(<>
    <TrainingTrainiaTemplate type="cocoon"/>
    <TrainingTrainiaTemplate type="tower"/>
</>)}