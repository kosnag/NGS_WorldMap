import React, { useState, Fragment } from 'react';
import IconLib from './icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const LoadMarkersJSON = {
    Battledia:()=>{
        const {t} = useTranslation();
        const [battledia, set_battledia] = useState([]);

        fetch("./assets/data/battledias.json").then(response => response.json()).then((battledia) => set_battledia(battledia));
        if(window.localStorage_Settings.landmarks.battledia === 1){return (
            battledia.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    Cocoon:()=>{
        const {t} = useTranslation();
        const [cocoon, set_cocoon] = useState([]);

        fetch("./assets/data/cocoons.json").then(response => response.json()).then((cocoon) => set_cocoon(cocoon));
        if(window.localStorage_Settings.landmarks.cocoon === 1){return (
            cocoon.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    Mag:()=>{
        const {t} = useTranslation();
        const [mag, set_mag] = useState([]);

        fetch("./assets/data/mags.json").then(response => response.json()).then((mag) => set_mag(mag));
        if(window.localStorage_Settings.landmarks.mag === 1){return (
            mag.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    Ryuker:()=>{
        const {t} = useTranslation();
        const [ryuker, set_ryuker] = useState([]);

        fetch("./assets/data/ryukers.json").then(response => response.json()).then((ryuker) => set_ryuker(ryuker));
        if(window.localStorage_Settings.landmarks.ryuker === 1){return (
            ryuker.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    /*Sections: ()=>{
        const { t } = useTranslation();
        const [sections, set_sections] = useState([]);

        fetch("./assets/data/sections.json").then(response => response.json()).then((sections) => set_sections(sections));
        if(window.localStorage_Settings.landmarks.battledia === 1){return (
            battledias.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },*/
    Tower: ()=>{
        const {t} = useTranslation();
        const [tower, set_tower] = useState([]);

        fetch("./assets/data/towers.json").then(response => response.json()).then((tower) => set_tower(tower));
        if(window.localStorage_Settings.landmarks.tower === 1){return (
            tower.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    UQ: ()=>{
        const {t} = useTranslation();
        const [uq, set_uq] = useState([]);

        fetch("./assets/data/uq.json").then(response => response.json()).then((uq) => set_uq(uq));
        if(window.localStorage_Settings.landmarks.uq === 1){return (
            uq.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    },
    /*StellarSeeds: ()=>{
        const { t } = useTranslation();
        const [stellarSeeds, set_stellarSeeds] = useState([]);

        fetch("./assets/data/stellarSeeds.json").then(response => response.json()).then((stellarSeeds) => set_stellarSeeds(stellarSeeds));
        if(window.localStorage_Settings.landmarks.battledia === 1){return (
            battledias.map((x => (
            <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
            </Marker>
        ))))}else return <Fragment/>
    }*/
}

export default function FromJSON(){
    return (
        <Fragment>
            <LoadMarkersJSON.Battledia/>
            <LoadMarkersJSON.Cocoon/>
            <LoadMarkersJSON.Mag/>
            <LoadMarkersJSON.Ryuker/>
            <LoadMarkersJSON.Tower/>
            <LoadMarkersJSON.UQ/>
        </Fragment>
    )
};