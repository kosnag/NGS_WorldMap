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

  const checkLocalStorage = (category, item) => {
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

  const setLocalStorage = (category, item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1){
      window.localStorage_Settings[category][item] = 0
      localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
    } else {
      window.localStorage_Settings[category][item] = 1
      localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
    };
  }

  const [toggleTab, setToggleTab] = useState('landmarks');
  const clickToggleTab = (tab) => setToggleTab(tab);

  const Button = (props) => {
    return (
      <button 
        onMouseEnter={() => {
          setPreviewIcon("./assets/images/icons/"+props.category+"/"+props.item+".png")
          setPreviewRarity(props.rarity)
          setPreviewTitle(t("items:"+props.category+"."+props.item+".title"))
          setPreviewDescription(t("items:"+props.category+"."+props.item +".description"))
        }}
        ><Checkbox icon={<span/>}
        checked={checkLocalStorage(props.category, props.item)}
        onChange={() => setLocalStorage(props.category, props.item)}
        label={t("items:"+props.category+"."+props.item+".title")}
      /></button>
    )
  }
  const ButtonFood = (props) => {
    return (
      <button 
        onMouseEnter={() => {
          setPreviewIcon("./assets/images/icons/food/"+props.item+".png")
          setPreviewRarity(props.rarity)
          setPreviewTitle(t("items:food."+props.item))
          props.notable === true ? 
          setPreviewDescription(
            t("ui:Map.type")+": "+t("ui:Map.foodType."+props.type)+"\n"+
            t("items:food.description.prefix."+props.prefix)+" / "+t("items:food.description.type."+props.type)+"\n"+
            t("items:food.description.prefix.notable")
          )
          :
          setPreviewDescription(
            t("ui:Map.type")+": "+t("ui:Map.foodType."+props.type)+"\n"+
            t("items:food.description.prefix."+props.prefix)+" / "+t("items:food.description.type."+props.type)
          )
        }}
        ><Checkbox icon={<span/>}
        checked={checkLocalStorage("food", props.item)}
        onChange={() => setLocalStorage("food", props.item)}
        label={t("items:food."+props.item)}
      /></button>
    )
  }

  const [dataJSON,setDataJSON] = useState({});
  useEffect(() => {
    document.getElementById('menu-legend').classList.add('hidden');
    fetch("//raw.githubusercontent.com/kosnag/NGS_WorldMap/master/public/assets/storages/settings.json").then(response=>response.json()).then(d=>setDataJSON(d));
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
          <>
            <items className={toggleTab === 'landmarks' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.landmark.map((x=>
                <Button category="landmark" item={x} rarity="places"/>
              ))}
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.mineral.map((x=>
                <Button category="mineral" item={x.item} rarity={x.rarity}/>
              ))}
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.food.map((x=>
                <ButtonFood item={x.item} prefix={x.prefix} type={x.type} rarity={x.rarity} notable={x.notable}/>
              ))}
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.container.map((x=>
                <Button category="container" item={x.item} rarity={x.rarity}/>
              ))}
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.other.map((x=>
                <Button category="other" item={x.item} rarity={x.rarity}/>
              ))}
            </items>
          </>
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