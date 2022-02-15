import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const Load = {
    Battledia:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/battledias.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.battledia));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    },
    Cocoon:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/cocoons.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.cocoon));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    },
    Mag:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/mags.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.mag));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    },
    Ryuker:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/ryukers.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.ryuker));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    },
    Tower:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/towers.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.tower));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    },
    UQ:()=>{
        const {t} = useTranslation();
        const [data,setData] = useState([]);
        useEffect(()=>{fetch("./assets/data/uq.json").then(response=>response.json()).then((d)=>{setData(d)})},[]);
        const [marker,setMarker] = useState([]);
        setInterval(()=>setMarker(window.localStorage_Settings.landmarks.uq));
        return(
            <Fragment>
                {marker ? <Fragment>{(data.map((x=>
                    <Marker icon={IconLib.landmarks__cocoon} position={x.latlng}>
                        <Tooltip direction='top'>
                            <tooltipwindow><header><span><menuicon/> {t("cocoons:"+x.id)}</span></header><content>{t("items:Title.landmarks__cocoon")}</content></tooltipwindow>
                        </Tooltip>
                        <Popup></Popup>
                    </Marker>
                )))}</Fragment> : <Fragment/>}
            </Fragment>
        )
    }
}

export default function Landmarks(){
    return (
        <Fragment>
            <Load.Battledia/>
            <Load.Cocoon/>
            <Load.Mag/>
            <Load.Ryuker/>
            <Load.Tower/>
            <Load.UQ/>
        </Fragment>
    )
};