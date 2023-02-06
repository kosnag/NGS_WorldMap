import React, { useState, useEffect, Fragment, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Polygon, Popup } from "react-leaflet";

export default function Sections(){
    const {t} = useTranslation();
    const popupRef = useRef();
    const [data,setData] = useState([]);
    const [tier,setTier] = useState(0);
    const handleSelectChange=(e)=>setTier(e.target.value);
    useEffect(()=>{fetch("./assets/data/sections.json").then(response=>response.json()).then(d=>setData(d))},[]);
    const polygonColor =(x)=>{
        if(x === "lobby"){return "blue"}
        if(x === "gathering"){return "green"}
        if(x === "combat"){return "red"}
    }
    if(data !== null){return(data.map((x=>
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
            <Popup ref={popupRef}><popupwindow>
                <header>
                    <span><menuicon/> {t("sections:type."+x.type)}</span><closebutton onClick={()=>popupRef.current._source._map._popup._closeButton.click()}/>
                </header>
                <content>
                    {(()=>{if(x.type === "combat"){return <>
                        <select onChange={handleSelectChange}>
                        {(()=>{
                            const jsx = [];
                            for (var i=0; i<x.ranks.length; i++){
                                jsx.push(<option value={i}>{t("ui:map.rank")} {i+1}</option>)
                            }
                            return jsx;
                        })()}
                        </select>
                        <br/><br/>
                    </>}})()}
                    <name>{t("sections:sections."+x.region+"."+x.id)}</name>
                    <br/>
                    <cont><img src={"./assets/images/banners/sections/"+x.region+"/"+x.id+".png"} className="section" alt="" /></cont>
                    {(()=>{
                        if(x.type === "lobby"){return <>
                            <span>{t("ui:map.maxPlayers")}</span>
                            <border/>
                            100
                        </>}
                        if(x.type === "gathering"){return <>
                            <info>
                                <div>
                                    <level>
                                        <span>{t("ui:map.maxPlayers")}</span>
                                        <border/>
                                        <value>32</value>
                                    </level>
                                    <level>
                                        <span>{t("ui:map.recommendedBP")}</span>
                                        <border/>
                                        <value>{x.minBP}</value>
                                    </level>
                                    <level>
                                        <span>{t("ui:map.enemyLv")}</span>
                                        <border/>
                                        <value>{x.enemyLv}</value>
                                    </level>
                                </div>
                            </info>
                            {x.gigantix ? <>
                                <span>{t("ui:map.enemyTypes.gigantix")}</span>
                                <border/>
                                {t("enemies:"+x.gigantix)}
                            </>:<Fragment/>}
                            {x.ancient ? <>
                                <span>{t("ui:map.enemyTypes.ancient")}</span>
                                <border/>
                                {(()=>{
                                    const jsx = [];
                                    for (var i=0; i<x.ancient.length; i++){
                                        if (i === 0){
                                            jsx.push(<>{t("enemies:"+x.ancient[i])}</>)
                                        } else {
                                            jsx.push(<>, {t("enemies:"+x.ancient[i])}</>)
                                        }
                                    }
                                    return jsx;
                                })()}
                            </>:<Fragment/>}
                        </>}
                        if(x.type === "combat"){return <>
                            <info>
                                <div>
                                    <level>
                                        <span>{t("ui:map.maxPlayers")}</span>
                                        <border/>
                                        <value>8</value>
                                    </level>
                                    <level>
                                        <span>
                                            {(()=>{// eslint-disable-next-line
                                                if (tier == 0){
                                                    return <>{t("ui:map.recommendedBP")}</>
                                                } else {
                                                    return <>{t("ui:map.requiredBP")}</>
                                                }
                                            })()}
                                        </span>
                                        <border/>
                                        <value>
                                            {(()=>{if (x.ranks[tier] != null){return <>{x.ranks[tier].minBP}</>}})()}
                                        </value>
                                    </level>
                                    <level>
                                        <span>{t("ui:map.enemyLv")}</span>
                                        <border/>
                                        <value>
                                            {(()=>{if (x.ranks[tier] != null){return <>{x.ranks[tier].enemyLv}</>}})()}
                                        </value>
                                    </level>
                                </div>
                            </info>
                        </>}
                    })()}
                </content>
            </popupwindow></Popup>
        </Polygon>
    )))}else{return <Fragment/>}
}