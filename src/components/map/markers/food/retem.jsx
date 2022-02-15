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

export default function RetemFood(){
    return (
        <Fragment>
            <Load.Cauliflower/>
            <Load.Cherries/>
            <Load.Cranberries/>
            <Load.Eggplant/>
            <Load.Fruit/>
            <Load.HermitCrab/>
            <Load.Mango/>
            <Load.Mushroom/>
            <Load.Scallop/>
            <Load.SeaSlug/>
            <Load.Strawberry/>
            <Load.Uchin/>
        </Fragment>
    )
};