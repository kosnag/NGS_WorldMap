import React, { useState, Fragment, useEffect } from 'react';
import IconLib from '../icons';
import { useTranslation } from "react-i18next";
import { Marker, Tooltip } from "react-leaflet";
import "../tooltip.scss";

const TemplateFood = (props) => {
    const {t} = useTranslation();
    const [data,setData] = useState([]);
    const [marker,setMarker] = useState([]);
    useEffect(()=>{fetch("./api/read.php?table=food__"+props.id).then(response=>response.json()).then(d=>setData(d))},[props]);
    useEffect(()=>{
        var i = setInterval(()=>setMarker(window.localStorage_Settings.food[props.id]));
        return ()=>clearInterval(i);
    });
    if (data !== null) {
        return(marker ? (data.map((x=>
            <Marker icon={IconLib[props.id]} position={[x.lat,x.lng]}>
                <Tooltip direction='top'><tooltip-window>
                    <header>
                        <span><menuicon/> {t("items:Title.food__"+props.id)}</span>
                    </header>
                    <content>
                        {t("ui:LegendMenu.Categories.food")}
                        <br/>
                        {t("ui:Map.type")}: {t("ui:Map.foodType."+props.type)}
                        <id>ID: {props.id}{x.id}</id>
                    </content>
                </tooltip-window></Tooltip>
            </Marker>
            ))) : <Fragment/>)
    } else {
        return <Fragment/>
    }
}
const Load = {
    Aelio: {
        Apple:()=>{         return <TemplateFood id="aelio_apple" type="fruit" />},
        Banana:()=>{        return <TemplateFood id="aelio_banana" type="fruit" />},
        Clam:()=>{          return <TemplateFood id="aelio_clam" type="seafood" />},
        Crab:()=>{          return <TemplateFood id="aelio_crab" type="seafood" />},
        Herb:()=>{          return <TemplateFood id="aelio_herb" type="vegetables" />},
        Lobster:()=>{       return <TemplateFood id="aelio_lobster" type="seafood" />},
        Mushroom:()=>{      return <TemplateFood id="aelio_mushroom" type="vegetables" />},
        Peach:()=>{         return <TemplateFood id="aelio_peach" type="fruit" />},
        Pear:()=>{          return <TemplateFood id="aelio_pear" type="fruit" />},
        Tomato:()=>{        return <TemplateFood id="aelio_tomato" type="vegetables" />},
        TurbanShell:()=>{   return <TemplateFood id="aelio_turbanShell" type="seafood" />},
        Turnip:()=>{        return <TemplateFood id="aelio_turnip" type="vegetables" />},
    },
    Retem: {
        Cauliflower:()=>{   return <TemplateFood id="retem_cauliflower" type="vegetables" />},
        Cherries:()=>{      return <TemplateFood id="retem_cherries" type="fruit" />},
        Cranberries:()=>{   return <TemplateFood id="retem_cranberries" type="vegetables" />},
        Eggplant:()=>{      return <TemplateFood id="retem_eggplant" type="vegetables" />},
        Carambola:()=>{     return <TemplateFood id="retem_carambola" type="fruit" />},
        HermitCrab:()=>{    return <TemplateFood id="retem_hermitCrab" type="seafood" />},
        Mango:()=>{         return <TemplateFood id="retem_mango" type="fruit" />},
        Mushroom:()=>{      return <TemplateFood id="retem_mushroom" type="vegetables" />},
        Scallop:()=>{       return <TemplateFood id="retem_scallop" type="seafood" />},
        SeaSlug:()=>{       return <TemplateFood id="retem_seaSlug" type="seafood" />},
        Strawberry:()=>{    return <TemplateFood id="retem_strawberry" type="fruit" />},
        SeaUchin:()=>{      return <TemplateFood id="retem_seaUrchin" type="seafood" />},
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