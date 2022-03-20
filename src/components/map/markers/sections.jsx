import React, { useState, Fragment, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Polygon, Popup } from "react-leaflet";
import "../popup.scss";

export default function Sections(){
    const {t} = useTranslation();
    //const popupRef = useRef();
    window.popupSectionRef = useRef();
    const close = () => {window.popupSectionRef.current._closeButton.click()}
    const [data,setData] = useState([]);
    const [tier,setTier] = useState("1");
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{fetch("./assets/data/sections.json").then(response=>response.json()).then(d=>setData(d))},[]);
    const polygonColor = (x) => {switch(x){
        case "lobby": return "blue";
        case "gathering": return "green";
        case "combat": return "red";
        default: return <Fragment/>
    }}
    if (data !== null){return(data.map((x=>
        <Polygon
            positions={x.coordinates}
            eventHandlers={{
                mouseover: function(){
                    this.setStyle({
                        fillOpacity: 0.2,
                        opacity: 0.75
                    })
                },
                mouseout: function(){
                    this.setStyle({
                        fillOpacity: 0,
                        opacity: 0.25
                    })
                }
            }}
            pathOptions={{
                fillColor: polygonColor(x.type),
                color: "lightblue",
                weight: 1,
                fillOpacity: 0,
                opacity: 0.25
            }}
        >
            <Popup direction='top' ref={window.popupSectionRef}><popup-window>
                <header>
                    <span><menuicon/> {t("sections:type."+x.type)}</span><closebutton onClick={()=>close()}/>
                </header>
                <content>
                    {x.type === "combat" ? <>
                        <select onChange={handleSelectChange}>
                            {(x.ranks.map((y=> 
                                <option value={y.rank}>{t("ui:Map.rank")} {y.rank}</option>
                            )))}
                        </select>
                    <br/><br/>
                    </>:<Fragment/>}
                    <name>{t("sections:sections."+x.region+"."+x.id)}</name>
                    <br/>
                    <cont>
                        <img src={"./assets/images/banners/sections/"+x.region+"/"+x.id+".png"} className="section" alt="" />
                    </cont>
                    {(()=>{switch(x.type){
                        case "lobby":
                            return <>
                                <span>{t("ui:Map.maxPlayers")}</span>
                                <border/>
                                100
                            </>
                        case "gathering":
                            return <>
                                <info>
                                    <div>
                                        <level>
                                            <span>{t("ui:Map.maxPlayers")}</span>
                                            <border/>
                                            <value>32</value>
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
                                <span>{t("ui:Map.enemyTypes.gigantix")}</span>
                                <border/>
                                {t("enemies:"+x.gigantix)}
                            </>
                        case "combat":
                            return <>{(x.ranks.map((y=>
                                <info className={tier === y.rank.toString() ? "" : "hidden"}>
                                    <div>
                                        <level>
                                            <span>{t("ui:Map.maxPlayers")}</span>
                                            <border/>
                                            <value>8</value>
                                        </level>
                                        <level>
                                            <span>{tier === "1" ? 
                                                <>{t("ui:Map.recommendedBP")}</>
                                                :
                                                <>{t("ui:Map.requiredBP")}</>
                                            }</span>
                                            <border/>
                                            <value>{y.minBP}</value>
                                        </level>
                                        <level>
                                            <span>{t("ui:Map.enemyLv")}</span>
                                            <border/>
                                            <value>{y.enemyLv}</value>
                                        </level>
                                    </div>
                                </info>
                            )))}</>
                        default: return <Fragment/>
                    }})()}
                </content>
            </popup-window></Popup>
        </Polygon>
    )))}else{return <Fragment/>}
}