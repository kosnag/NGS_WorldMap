import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";

const Template = (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.mineral[props.id]));
        return ()=>clearInterval(i);
    });
    useEffect(()=>{marker === 1 ? fetch("./api/read.php?table=mineral__"+props.id).then(response=>response.json()).then(d=>setData(d)) : setData([])},[props.id, marker]);
    if(data !== null){return(marker ? (data.map((x=>
        <Marker icon={IconLib[props.id]} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:mineral."+props.id+".title")}</span>
                </header>
                <content>
                    {t("ui:LegendMenu.Categories.minerals")}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {props.id}{x.id}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}

export default function Minerals(){
    const [dataJSON,setDataJSON] = useState([]);
    useEffect(()=>{
        fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/settings.json").then(response=>response.json()).then(d=>setDataJSON(d))
    },[]);
    return (
        <Fragment>
            {(()=>{dataJSON.items.mineral.map((x=>
                <Template id={x.item}/>
            ))})()}
        </Fragment>
    )
};