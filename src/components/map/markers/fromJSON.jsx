import React, { useEffect, useState, map, Fragment } from 'react';
//import L from 'leaflet';
import IconLib from './icons';
import '../../../assets/js/i18n';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";


export default function FromJSON(){
    const { t } = useTranslation();

    const [battledias, set_battledias] = useState([]);
    const [cocoons, set_cocoons] = useState([]);
    const [mags, set_mags] = useState([]);
    const [ryukers, set_ryukers] = useState([]);
    const [sections, set_sections] = useState([]);
    const [towers, set_towers] = useState([]);
    const [uq, set_uq] = useState([]);
    const [stellarSeeds, set_stellarSeeds] = useState([]);

    useEffect(() => {
        fetch("./assets/data/battledias.json").then(response => response.json()).then((battledias) => set_battledias(battledias));
        fetch("./assets/data/cocoons.json").then(response => response.json()).then((cocoons) => set_cocoons(cocoons));
        fetch("./assets/data/mags.json").then(response => response.json()).then((mags) => set_mags(mags));
        fetch("./assets/data/ryukers.json").then(response => response.json()).then((ryukers) => set_ryukers(ryukers));
        fetch("./assets/data/sections.json").then(response => response.json()).then((sections) => set_sections(sections));
        fetch("./assets/data/towers.json").then(response => response.json()).then((towers) => set_towers(towers));
        fetch("./assets/data/uq.json").then(response => response.json()).then((uq) => set_uq(uq));
        fetch("./assets/data/stellarSeeds.json").then(response => response.json()).then((stellarSeeds) => set_stellarSeeds(stellarSeeds));
    },[])
    return (
        <Fragment>
            {ryukers.map((x => (
                <Marker icon={IconLib.landmarks__ryuker} position={x.latlng}>
                    <Tooltip>{t("items:Title:"+x.string)}</Tooltip>
                </Marker>
            )))}
        </Fragment>
    )
};