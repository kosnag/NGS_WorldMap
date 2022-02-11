import React, { useEffect } from 'react';
import L from 'leaflet';
import IconLib from '../../../assets/js/mapicons';
import '../../../assets/js/i18n';
import { useTranslation } from "react-i18next";
import ReactDOMServer from 'react-dom/server';

window.local_json = {
    battledias: undefined,
    cocoons: undefined,
    mags: undefined,
    towers: undefined,
    uq: undefined,
    ryukers: undefined
}
const marker_landmarks = {
    battledias: [],
    cocoons: [],
    mags: [],
    towers: [],
    uq: [],
    ryukers: []
}

const FromJSON = () => {
    const { t } = useTranslation();
    useEffect(()=>{
        console.log("map/markers/fromJSON.jsx")
        fetch('./assets/data/ryukers.json')
            .then(response => response.json())
            .then(data =>{ 
                window.local_json.ryukers = data
                for(var i=0;i<window.local_json.ryukers.length;i++){
                    marker_landmarks.ryukers[i] = L.marker(
                        [window.local_json.ryukers[i].latlng[0],window.local_json.ryukers[i].latlng[1]],
                        {icon:IconLib.landmarks__ryuker}).bindTooltip((ReactDOMServer.renderToString(
                        <div>{t("items:Title."+window.local_json.ryukers[i].string)}</div>
                        )),{direction:"top"});
                    if(window.localStorage_Settings.landmarks.ryuker === 1){
                        marker_landmarks.ryukers[i].addTo(window.gamemap);
                    };
                }
            });
    },[t])
    return <></>;
};

export default FromJSON;