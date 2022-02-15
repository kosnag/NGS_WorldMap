import React, { useState, Fragment } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip, Popup} from "react-leaflet";

const Load = {/*
    Battledia:()=>{
        const {t} = useTranslation();
        const [data, setData] = useState([]);

        fetch("./api/read.php?table=").then(response => response.json()).then((data) => setData(data));
        if(window.localStorage_Settings.. === 1){return (
            data.map((data => 
            <Marker icon={IconLib.} position={data.latlng}>
                <Tooltip>{t("items:Title:"+data.string)}</Tooltip>
            </Marker>
        )))}else return <Fragment/>
    }*/
}

export default function AelioFood(){
    return (
        <Fragment>
            <Load.Apple/>
            <Load.Banana/>
            <Load.Clam/>
            <Load.Crab/>
            <Load.Herb/>
            <Load.Lobster/>
            <Load.Mushroom/>
            <Load.Peach/>
            <Load.Pear/>
            <Load.Tomato/>
            <Load.TurbanShell/>
            <Load.Turnip/>
        </Fragment>
    )
};