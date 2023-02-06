import React, { useState, Fragment, useEffect } from 'react';
import { iconLib } from "../index.jsx";
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

const Template= (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.food[props.id]));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=food__"+props.id).then(response=>response.json()).then(d=>setData(d)) : setData([])},[props.id, marker]);
    if (data !== null) {return(marker ? (data.map((x=>
        <Marker icon={iconLib[props.id]} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltipwindow>
                <header>
                    <span><menuicon/> {t("items:food."+props.id)}</span>
                </header>
                <content>
                    {t("ui:legendMenu.categories.food")}
                    <br/>
                    {t("ui:map.type")}: {t("ui:map.foodType."+props.type)}
                    <br/>
                    {x.rarity === "very-rare" ? <>
                        {t("items:food.description.prefix.special")}
                        <br/>
                    </>:<Fragment/>}
                    {t("ui:map.placedBy")}: {x.contributer}
                    <id>ID: {props.id}{x.id}</id>
                </content>
            </tooltipwindow></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}

export default function Food(){
    const [dataJSON,setDataJSON] = useState([]);
    useEffect(()=>{
        fetch("./assets/storages/settings.json").then(response=>response.json()).then(d=>setDataJSON(d))
    },[]);
    return <>{dataJSON.items && dataJSON?.items.food.map((x=>
        <Template id={x.item} type={x.type} rarity={x.rarity}/>
    ))}</>
};