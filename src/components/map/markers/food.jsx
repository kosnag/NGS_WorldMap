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
    if (data != null){
        return(marker?<>{(data.map((x=>
            <Marker icon={IconLib[props.icon]} position={[x.lat,x.lng]} key={x.id}><Tooltip direction='top'><tooltip-window>
            <header>
                <span><menuicon/> {t("items:Title.food__"+props.id)}</span>
            </header>
            <content>
                {t("ui:Map.foodType."+props.type)}
                <br/>
                {t("items:Title.landmarks__mag")}
                <id>ID: {props.id}{x.id}</id>
            </content>
            </tooltip-window></Tooltip></Marker>)))}</>:<Fragment/>)
    }else{return <Fragment/>}
}
const Load = {
    Aelio: {
        Apple:()=>{         return <TemplateFood id={"aelio_apple"} icon={"aelioApple"} type={""}/>},
        Banana:()=>{        return <TemplateFood id={"aelio_banana"} icon={"aelioBanana"} type={""}/>},
        Clam:()=>{          return <TemplateFood id={"aelio_clam"} icon={"aelioClam"} type={""}/>},
        Crab:()=>{          return <TemplateFood id={"aelio_crab"} icon={"aelioCrab"} type={""}/>},
        Herb:()=>{          return <TemplateFood id={"aelio_herb"} icon={"aelioHerb"} type={""}/>},
        Lobster:()=>{       return <TemplateFood id={"aelio_lobster"} icon={"aelioLobster"} type={""}/>},
        Mushroom:()=>{      return <TemplateFood id={"aelio_mushroom"} icon={"aelioMushroom"} type={""}/>},
        Peach:()=>{         return <TemplateFood id={"faelio_peach"} icon={"aelioPeach"} type={""}/>},
        Pear:()=>{          return <TemplateFood id={"aelio_pear"} icon={"aelioPear"} type={""}/>},
        Tomato:()=>{        return <TemplateFood id={"aelio_tomato"} icon={"aelioTomato"} type={""}/>},
        TurbanShell:()=>{   return <TemplateFood id={"aelio_turbanShell"} icon={"aelioTurbanShell"} type={""}/>},
        Turnip:()=>{        return <TemplateFood id={"aelio_turnip"} icon={"aelioTurnip"} type={""}/>},
    },
    Retem: {
        Cauliflower:()=>{   return <TemplateFood id={"retem_cauliflower"} icon={"retemCauliflower"} type={""}/>},
        Cherries:()=>{      return <TemplateFood id={"retem_cherries"} icon={"retemCherries"} type={""}/>},
        Cranberries:()=>{   return <TemplateFood id={"retem_cranberries"} icon={"retemCranberries"} type={""}/>},
        Eggplant:()=>{      return <TemplateFood id={"retem_eggplant"} icon={"retemEggplant"} type={""}/>},
        Fruit:()=>{         return <TemplateFood id={"retem_fruit"} icon={"retemFruit"} type={""}/>},
        HermitCrab:()=>{    return <TemplateFood id={"retem_hermitCrab"} icon={"retemHermitCrab"} type={""}/>},
        Mango:()=>{         return <TemplateFood id={"retem_mango"} icon={"retemMango"} type={""}/>},
        Mushroom:()=>{      return <TemplateFood id={"retem_mushroom"} icon={"retemMushroom"} type={""}/>},
        Scallop:()=>{       return <TemplateFood id={"retem_scallop"} icon={"retemScallop"} type={""}/>},
        SeaSlug:()=>{       return <TemplateFood id={"retem_seaSlug"} icon={"retemSeaSlug"} type={""}/>},
        Strawberry:()=>{    return <TemplateFood id={"retem_strawberry"} icon={"retemStrawberry"} type={""}/>},
        Uchin:()=>{         return <TemplateFood id={"retem_urchin"} icon={"retemUrchin"} type={""}/>},
        
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
            <Load.Retem.Fruit/>
            <Load.Retem.HermitCrab/>
            <Load.Retem.Mango/>
            <Load.Retem.Mushroom/>
            <Load.Retem.Scallop/>
            <Load.Retem.SeaSlug/>
            <Load.Retem.Strawberry/>
            <Load.Retem.Uchin/>
        </Fragment>
    )
};