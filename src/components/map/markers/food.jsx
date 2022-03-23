import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";
import "../tooltip.scss";

const Template= (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=food__"+props.id).then(response=>response.json()).then(d=>setData(d))},[props]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.food[props.id]));
        return ()=>clearInterval(i);
    });
    if (data !== null){return(marker ? (data.map((x=>
        <Marker icon={IconLib[props.id]} position={[x.lat,x.lng]}>
            <Tooltip direction='top'><tooltip-window>
                <header>
                    <span><menuicon/> {t("items:food."+props.id+"")}</span>
                </header>
                <content>
                    {t("ui:LegendMenu.Categories.food")}
                    <br/>
                    {t("ui:Map.type")}: {t("ui:Map.foodType."+props.type)}
                    <br/>
                    {t("ui:Map.placedBy")}: {x.contributer}
                    <id>ID: {props.id}{x.id}</id>
                </content>
            </tooltip-window></Tooltip>
        </Marker>
    ))):<Fragment/>)}else{return <Fragment/>}
}

const Load = {
    Aelio: {
        Apple:()=>{return <Template 
            id="aelio_apple"
            type="fruit"
        />},
        Banana:()=>{return <Template 
            id="aelio_banana" 
            type="fruit"
        />},
        Clam:()=>{return <Template 
            id="aelio_clam" 
            type="seafood"
        />},
        Crab:()=>{return <Template 
            id="aelio_crab" 
            type="seafood"
        />},
        Herb:()=>{return <Template 
            id="aelio_herb" 
            type="vegetable"
        />},
        Lobster:()=>{return <Template 
            id="aelio_lobster" 
            type="seafood"
        />},
        Mushroom:()=>{return <Template 
            id="aelio_mushroom" 
            type="vegetable"
        />},
        Peach:()=>{return <Template 
            id="aelio_peach" 
            type="fruit"
        />},
        Pear:()=>{return <Template 
            id="aelio_pear" 
            type="fruit"
        />},
        Tomato:()=>{return <Template 
            id="aelio_tomato" 
            type="vegetable"
        />},
        TurbanShell:()=>{return <Template 
            id="aelio_turbanshell" 
            type="seafood"
        />},
        Turnip:()=>{return <Template 
            id="aelio_turnip" 
            type="vegetable"
        />},
    },
    Retem: {
        Cauliflower:()=>{return <Template 
            id="retem_cauliflower" 
            type="vegetable"
        />},
        Cherries:()=>{return <Template 
            id="retem_cherries" 
            type="fruit"
        />},
        Cranberries:()=>{return <Template 
            id="retem_cranberries" 
            type="vegetable"
        />},
        Eggplant:()=>{return <Template 
            id="retem_eggplant" 
            type="vegetable"
        />},
        Carambola:()=>{return <Template 
            id="retem_carambola" 
            type="fruit"
        />},
        HermitCrab:()=>{return <Template 
            id="retem_hermitcrab" 
            type="seafood"
        />},
        Mango:()=>{return <Template 
            id="retem_mango" 
            type="fruit"
        />},
        Mushroom:()=>{return <Template 
            id="retem_mushroom" 
            type="vegetable"
        />},
        Scallop:()=>{return <Template 
            id="retem_scallop" 
            type="seafood"
        />},
        SeaSlug:()=>{return <Template 
            id="retem_seaslug" 
            type="seafood"
        />},
        Strawberry:()=>{return <Template 
            id="retem_strawberry" 
            type="fruit"
        />},
        SeaUchin:()=>{return <Template 
            id="retem_urchin" 
            type="seafood"
        />},
    },
}

export default function Food(){
    return (
        <Fragment>
            <Load.Aelio.Apple/>
            <Load.Aelio.Banana/>
            <Load.Aelio.Clam/>
            <Load.Aelio.Crab/>
            <Load.Aelio.Herb/>
            <Load.Aelio.Lobster/>
            <Load.Aelio.Mushroom/>
            <Load.Aelio.Peach/>
            <Load.Aelio.Pear/>
            <Load.Aelio.Tomato/>
            <Load.Aelio.TurbanShell/>
            <Load.Aelio.Turnip/>

            <Load.Retem.Cauliflower/>
            <Load.Retem.Cherries/>
            <Load.Retem.Cranberries/>
            <Load.Retem.Eggplant/>
            <Load.Retem.Carambola/>
            <Load.Retem.HermitCrab/>
            <Load.Retem.Mango/>
            <Load.Retem.Mushroom/>
            <Load.Retem.Scallop/>
            <Load.Retem.SeaSlug/>
            <Load.Retem.Strawberry/>
            <Load.Retem.SeaUchin/>
        </Fragment>
    )
};