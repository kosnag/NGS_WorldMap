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
  const [previewDescription, setPreviewDescription] = useState("");

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

  const setLocalStorage = (category,item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1){
      window.localStorage_Settings[category][item] = 0
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    } else {
      window.localStorage_Settings[category][item] = 1
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    };
  }

  const [toggleTab, setToggleTab] = useState('landmarks');
  const clickToggleTab = (tab) => setToggleTab(tab);

  const Button=(props)=>{return (
      <button 
        onMouseEnter={() => {
          setPreviewIcon("./assets/images/icons/"+props.cat+"/"+props.item+".png")
          setPreviewRarity(props.rarity)
          setPreviewTitle(t("items:"+props.cat+"."+props.item+".title"))
          setPreviewDescription(t("items:"+props.cat+"."+props.item+".description"))
        }}
        ><Checkbox icon={<span/>}
        checked={checkLocalStorage(props.cat,props.item)}
        onChange={() => setLocalStorage(props.cat,props.item)}
        label={t("items:"+props.cat+"."+props.item+".title")}
      /></button>
  )}
  const ButtonFood=(props)=>{return (
    <button 
      onMouseEnter={() => {
        setPreviewIcon("./assets/images/icons/food/"+props.item+".png")
        setPreviewRarity(props.rarity)
        setPreviewTitle(t("items:food."+props.item+""))
        setPreviewDescription(t("ui:Map.type")+": "+t("ui:Map.foodType."+props.type)+"\n"+t("items:food.description.prefix."+props.prefix)+" / "+t("items:food.description.type."+props.type))
      }}
      ><Checkbox icon={<span/>}
      checked={checkLocalStorage("food",props.item)}
      onChange={() => setLocalStorage("food",props.item)}
      label={t("items:food."+props.item)}
    /></button>
)}

  useEffect(()=>{
    document.getElementById('menu-legend').classList.add('hidden');
  },[]);
  useEffect(() => {
    setPreviewTitle(t("items:nothing"));
    setPreviewDescription("");
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
              <ButtonFood item="aelio_apple" prefix="rich" type="fruit" rarity="common"/>
              <ButtonFood item="aelio_peach" prefix="light" type="fruit" rarity="common"/>
              <ButtonFood item="aelio_pear" prefix="crisp" type="fruit" rarity="common"/>
              <ButtonFood item="aelio_banana" prefix="robust" type="fruit" rarity="common"/>

              <ButtonFood item="aelio_clam" prefix="rich" type="seafood" rarity="common"/>
              <ButtonFood item="aelio_turbanShell" prefix="light" type="seafood"rarity="common"/>
              <ButtonFood item="aelio_crab" prefix="crisp" type="seafood"rarity="common"/>
              <ButtonFood item="aelio_lobster" prefix="robust" type="seafood" rarity="common"/>

              <ButtonFood item="aelio_herb" prefix="rich" type="vegetable" rarity="common"/>
              <ButtonFood item="aelio_mushroom" prefix="light" type="vegetable"rarity="common"/>
              <ButtonFood item="aelio_tomato" prefix="crisp" type="vegetable"rarity="common"/>
              <ButtonFood item="aelio_turnip" prefix="robust" type="vegetable" rarity="common"/>


              <ButtonFood item="retem_cherries" prefix="rich" type="fruit" rarity="common"/>
              <ButtonFood item="retem_mango" prefix="light"type="fruit" rarity="common"/>
              <ButtonFood item="retem_carambola" prefix="crisp" type="fruit" rarity="common"/>
              <ButtonFood item="retem_strawberry" prefix="robust" type="fruit" rarity="common"/>

              <ButtonFood item="retem_scallop" prefix="rich" type="seafood" rarity="common"/>
              <ButtonFood item="retem_seaSlug" prefix="light" type="seafood" rarity="common"/>
              <ButtonFood item="retem_urchin" prefix="crisp" type="seafood" rarity="common"/>
              <ButtonFood item="retem_hermitCrab" prefix="robust" type="seafood" rarity="common"/>

              <ButtonFood item="retem_eggplant" prefix="rich" type="vegetable" rarity="common"/>
              <ButtonFood item="retem_cranberries" prefix="light" type="vegetable" rarity="common"/>
              <ButtonFood item="retem_mushroom" prefix="crisp" type="vegetable" rarity="common"/>
              <ButtonFood item="retem_cauliflower" prefix="robust" type="vegetable" rarity="common"/>
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              <Button cat="container" item="red" rarity="special"/>
              <Button cat="container" item="green" rarity="common"/>
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              <Button cat="other" item="veteran"rarity="rare"/>
              <Button cat="other" item="alphaReactor" rarity="very-rare"/>
              <Button cat="other" item="stellarSeed" rarity="rare"/>
              <Button cat="other" item="stellarGrace" rarity="special"/>
              <Button cat="other" item="datapod" rarity="places"/>
              <Button cat="other" item="musicPlace" rarity="places"/>
              <Button cat="other" item="mischief" rarity="special"/>
            </items>
          <info>
            <background className={previewRarity}/>
            <img alt="" src={previewIcon}/>
            <name>{previewTitle}</name>
            <thesis>{previewDescription}</thesis>
          </info>
        </columns>
      </window>
    </Draggable>
  );
};