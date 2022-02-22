import React, { useEffect, useState } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../functions';
import Checkbox from "react-custom-checkbox";
import { useTranslation } from "react-i18next";

export default function MenuLegend(){
  const {t} = useTranslation();

  const [previewIcon, setPreviewIcon] = useState(process.env.PUBLIC_URL+"/assets/images/icons/null.png");
  const [previewRarity, setPreviewRarity] = useState("matoi");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewShortInfo, setPreviewShortInfo] = useState("");

  function setPreview(item,rarity){
    setPreviewIcon(process.env.PUBLIC_URL+"/assets/images/icons/"+item+".png")
    setPreviewRarity(rarity)
    setPreviewTitle(t("items:Title."+item))
    setPreviewShortInfo(t("items:ShortInfo."+item))
  };

  function checkLocalStorage(category,item){
    if (window.localStorage_Settings[category][item] !== null){
      if (window.localStorage_Settings[category][item] === 1){
        return true
      } else {
        return false
      }}
    else {
      return false
    }
  }

  function setLocalStorage(category,item){
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1){
      window.localStorage_Settings[category][item] = 0
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    } else {
      window.localStorage_Settings[category][item] = 1
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    };
  }

  const [toggleTab, setToggleTab] = useState('landmarks');
  function clickToggleTab(tab){setToggleTab(tab)};

  const Button = (props) => {
    return (
      <button 
        onMouseEnter={() => setPreview(props.cat+"__"+props.item,props.rarity)}
        ><Checkbox icon={<span/>}
        checked={checkLocalStorage(props.cat,props.item)}
        onChange={() => setLocalStorage(props.cat,props.item)}
        label={t("items:Title."+props.cat+"__"+props.item)}
      /></button>
    )
  }

  useEffect(()=>{
    document.getElementById('menu-legend').classList.add('hidden');
  },[]);
  useEffect(() => {
    setPreviewTitle(t("items:Title.nothing"));
  },[t]);

  return (
    <Draggable bounds='container' handle='header'>
      <window id='menu-legend'>
        <header>
          <span><menuicon/> {t("ui:NavBar.mapLegend")}</span>
          <closebutton onClick={() => Functions.menuShowHide("menu-legend")}/>
        </header>
        <columns>
          <category>
            <button 
              className={toggleTab === 'landmarks' ? "active" : ""}
              onClick={() => clickToggleTab('landmarks')}
            >{t("ui:LegendMenu.Categories.landmarks")}</button>
            <button 
              className={toggleTab === 'minerals' ? "active" : ""}
              onClick={() => clickToggleTab('minerals')}
            >{t("ui:LegendMenu.Categories.minerals")}</button>
            <button 
              className={toggleTab === 'food' ? "active" : ""}
              onClick={() => clickToggleTab('food')}
            >{t("ui:LegendMenu.Categories.food")}</button>
            <button 
              className={toggleTab === 'containers' ? "active" : ""}
              onClick={() => clickToggleTab('containers')}
            >{t("ui:LegendMenu.Categories.containers")}</button>
            <button 
              className={toggleTab === 'other' ? "active" : ""}
              onClick={() => clickToggleTab('other')}
            >{t("ui:LegendMenu.Categories.other")}</button>
          </category>
            <items className={toggleTab === 'landmarks' ? "active" : ""}>
              <Button cat="landmark" item="ryuker" rarity="places" />
              <Button cat="landmark" item="cocoon" rarity="places" />
              <Button cat="landmark" item="tower" rarity="places" />
              <Button cat="landmark" item="battledia" rarity="places" />
              <Button cat="landmark" item="mag" rarity="places" />
              <Button cat="landmark" item="urgent" rarity="places" />
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              <Button cat="mineral" item="monotite" rarity="common" />
              <Button cat="mineral" item="dualomite" rarity="common" />
              <Button cat="mineral" item="trinite" rarity="common" />
              <Button cat="mineral" item="tetracite" rarity="common" />
              <Button cat="mineral" item="photonQuartz" rarity="common" />
              <Button cat="mineral" item="photonChunk" rarity="common" />
              <Button cat="mineral" item="photonScale" rarity="very-rare" />
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              <Button cat="food" item="aelio_apple" rarity="common" />
              <Button cat="food" item="aelio_banana" rarity="common" />
              <Button cat="food" item="aelio_clam" rarity="common" />
              <Button cat="food" item="aelio_crab" rarity="common" />
              <Button cat="food" item="aelio_herb" rarity="common" />
              <Button cat="food" item="aelio_lobster" rarity="common" />
              <Button cat="food" item="aelio_mushroom" rarity="common" />
              <Button cat="food" item="aelio_peach" rarity="common" />
              <Button cat="food" item="aelio_pear" rarity="common" />
              <Button cat="food" item="aelio_tomato" rarity="common" />
              <Button cat="food" item="aelio_turbanShell" rarity="common" />
              <Button cat="food" item="aelio_turnip" rarity="common" />

              <Button cat="food" item="retem_cauliflower" rarity="common" />
              <Button cat="food" item="retem_cherries" rarity="common" />
              <Button cat="food" item="retem_cranberries" rarity="common" />
              <Button cat="food" item="retem_eggplant" rarity="common" />
              <Button cat="food" item="retem_fruit" rarity="common" />
              <Button cat="food" item="retem_hermitCrab" rarity="common" />
              <Button cat="food" item="retem_mango" rarity="common" />
              <Button cat="food" item="retem_mushroom" rarity="common" />
              <Button cat="food" item="retem_scallop" rarity="common" />
              <Button cat="food" item="retem_seaSlug" rarity="common" />
              <Button cat="food" item="retem_strawberry" rarity="common" />
              <Button cat="food" item="retem_urchin" rarity="common" />
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              <Button cat="container" item="red" rarity="special" />
              <Button cat="container" item="green" rarity="common" />
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              <Button cat="other" item="veteran" rarity="rare" />
              <Button cat="other" item="alphaReactor" rarity="very-rare" />
              <Button cat="other" item="stellarSeed" rarity="rare" />
              <Button cat="other" item="stellarGrace" rarity="special" />
              <Button cat="other" item="datapod" rarity="places" />
              <Button cat="other" item="musicPlace" rarity="places" />
            </items>
          <info>
            <background className={previewRarity}/>
            <img alt="" src={previewIcon}/>
            <name>{previewTitle}</name>
            <thesis>{previewShortInfo}</thesis>
          </info>
        </columns>
      </window>
    </Draggable>
  );
};