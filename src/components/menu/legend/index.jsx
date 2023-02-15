import React, { Fragment, useEffect, useState } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../functions';
import Checkbox from "react-custom-checkbox";
import { useTranslation } from "react-i18next";

export default function MenuLegend(){
  const {t} = useTranslation();

  const [previewIcon, setPreviewIcon] = useState("./assets/images/icons/null.png");
  const [previewRarity, setPreviewRarity] = useState("matoi");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");
  const [toggleAccordionFood, setAccordionFood] = useState("");

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
          props.rarity === "very-rare" ? 
          setPreviewDescription(
            t("ui:Map.type")+": "+t("ui:Map.foodType."+props.type)+"\n"+
            t("items:food.description.prefix."+props.prefix)+" / "+t("items:food.description.type."+props.type)+"\n"+
            t("items:food.description.prefix.special")
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
    fetch("./assets/storages/settings.json").then(response=>response.json()).then(d=>setDataJSON(d));
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
            >{t("ui:legendMenu.categories.landmarks")}</button>
            <button 
              className={toggleTab === 'minerals' ? "active" : ""}
              onClick={() => clickToggleTab('minerals')}
            >{t("ui:legendMenu.categories.minerals")}</button>
            <button 
              className={toggleTab === 'food' ? "active" : ""}
              onClick={() => clickToggleTab('food')}
            >{t("ui:legendMenu.categories.food")}</button>
            <button 
              className={toggleTab === 'containers' ? "active" : ""}
              onClick={() => clickToggleTab('containers')}
            >{t("ui:legendMenu.categories.containers")}</button>
            <button 
              className={toggleTab === 'other' ? "active" : ""}
              onClick={() => clickToggleTab('other')}
            >{t("ui:legendMenu.categories.other")}</button>
          </category>
          <>
            <items className={toggleTab === 'landmarks' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.landmark.map((x=>
                <>{x.disabled === true ? <Fragment/>:
                <Button category="landmark" item={x.item} rarity="places"/>}</>
              ))}
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.mineral.map((x=>
                <>{x.disabled === true ? <Fragment/>:
                <Button category="mineral" item={x.item} rarity={x.rarity}/>}</>
              ))}
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.food.map((x=>
                <accordion>
                  <button onClick={()=>{
                    if(toggleAccordionFood === x.group_locale_id){
                      setAccordionFood("")
                    }else{
                      setAccordionFood(x.group_locale_id)
                    }
                    }}>{t("sections:regions."+x.group_locale_id)}<span className="accordionIcon">{toggleAccordionFood === x.group_locale_id ? "-" : "+"}</span></button>
                  <list className={toggleAccordionFood === x.group_locale_id ? "active" : ""}>
                    {(x.items.map((z=>
                      <>{z.disabled === true ? <Fragment/>:
                      <ButtonFood item={z.item} type={z.type} prefix={z.prefix} rarity={z.rarity}/>
                      } 
                      </>
                    )))}
                  </list>
                </accordion>
              ))}
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.container.map((x=>
                <>{x.disabled === true ? <Fragment/>:
                  <Button category="container" item={x.item} rarity={x.rarity}/>
                }</>
              ))}
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              {dataJSON.items && dataJSON?.items.other.map((x=>
                <>{x.disabled === true ? <Fragment/>:
                  <Button category="other" item={x.item} rarity={x.rarity}/>
                }</>
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