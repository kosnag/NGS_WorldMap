import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";
import "../tooltip.scss";

const Template = (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=mineral__"+props.id).then(response=>response.json()).then(d=>setData(d))},[props]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.mineral[props.id]));
        return ()=>clearInterval(i);
    });
    if (data !== null){return(marker ? (data.map((x=>
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

const Load = {
    Monotite:()=>{return <Template 
        id="monotite"
    />},
    Dualomite:()=>{return <Template 
        id="dualomite"
    />},
    Trinite:()=>{return <Template 
        id="trinite"
    />},
    Tetracite:()=>{return <Template 
        id="tetracite"
    />},
    PhotonQuartz:()=>{return <Template 
        id="photonQuartz"
    />},
    PhotonChunk:()=>{return <Template 
        id="photonChunk"
    />},
    PhotonScale:()=>{return <Template 
        id="photonScale"
    />}
}
export default function Minerals(){
    return (
        <Fragment>
            <Load.Monotite/>
            <Load.Dualomite/>
            <Load.Trinite/>
            <Load.Tetracite/>
            <Load.PhotonQuartz/>
            <Load.PhotonChunk/>
            <Load.PhotonScale/>
        </Fragment>
    )
};