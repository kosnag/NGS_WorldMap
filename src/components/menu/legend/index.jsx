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
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {return true}
    else
      {return false}
  }

  function setLocalStorage(category,item){
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1){
      window.localStorage_Settings[category][item]=0
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    }else{
      window.localStorage_Settings[category][item]=1
      localStorage.setItem("settings",JSON.stringify(window.localStorage_Settings))
    };
    
  }

  const [toggleTab, setToggleTab] = useState('landmarks');
  function clickToggleTab(tab){setToggleTab(tab)};

  useEffect(() => {
    document.getElementById('menu-legend').classList.add('hidden');
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
          <>
            <items className={toggleTab === 'landmarks' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("landmarks__ryuker","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","ryuker")}
                onChange={() => setLocalStorage("landmarks","ryuker")}
                label={t("ui:LegendMenu.Items.landmarks.ryuker")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks__cocoon","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","cocoon")}
                onChange={() => setLocalStorage("landmarks","cocoon")}
                label={t("ui:LegendMenu.Items.landmarks.cocoon")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks__tower","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","tower")}
                onChange={() => setLocalStorage("landmarks","tower")}
                label={t("ui:LegendMenu.Items.landmarks.tower")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks__battledia","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","battledia")}
                onChange={() => setLocalStorage("landmarks","battledia")}
                label={t("ui:LegendMenu.Items.landmarks.battledia")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks__mag","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","mag")}
                onChange={() => setLocalStorage("landmarks","mag")}
                label={t("ui:LegendMenu.Items.landmarks.mag")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks__urgent","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","uq")}
                onChange={() => setLocalStorage("landmarks","uq")}
                label={t("ui:LegendMenu.Items.landmarks.urgent")}
              /></button>
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("mineral__monotite","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","monotite")}
                onChange={() => setLocalStorage("minerals","monotite")}
                label={t("items:Title.mineral__monotite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__dualomite","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","dualomite")}
                onChange={() => setLocalStorage("minerals","dualomite")}
                label={t("items:Title.mineral__dualomite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__trinite","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","trinite")}
                onChange={() => setLocalStorage("minerals","trinite")}
                label={t("items:Title.mineral__trinite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__tetracite","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","tetracite")}
                onChange={() => setLocalStorage("minerals","tetracite")}
                label={t("items:Title.mineral__tetracite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__photonQuartz","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonQuartz")}
                onChange={() => setLocalStorage("minerals","photonQuartz")}
                label={t("items:Title.mineral__photonQuartz")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__photonChunk","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonChunk")}
                onChange={() => setLocalStorage("minerals","photonChunk")}
                label={t("items:Title.mineral__photonChunk")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral__photonScale","very-rare")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonScale")}
                onChange={() => setLocalStorage("minerals","photonScale")}
                label={t("items:Title.mineral__photonScale")}
              /></button>
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("food__aelio_apple","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_apple")}
                onChange={() => setLocalStorage("food","aelio_apple")}
                label={t("items:Title.food__aelio_apple")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_banana","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_banana")}
                onChange={() => setLocalStorage("food","aelio_banana")}
                label={t("items:Title.food__aelio_banana")}
              /></button>
             <button 
                onMouseEnter={() => setPreview("food__aelio_clam","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_clam")}
                onChange={() => setLocalStorage("food","aelio_clam")}
                label={t("items:Title.food__aelio_clam")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_crab","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_crab")}
                onChange={() => setLocalStorage("food","aelio_crab")}
                label={t("items:Title.food__aelio_crab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_herb","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_herb")}
                onChange={() => setLocalStorage("food","aelio_herb")}
                label={t("items:Title.food__aelio_herb")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_lobster","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_lobster")}
                onChange={() => setLocalStorage("food","aelio_lobster")}
                label={t("items:Title.food__aelio_lobster")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_mushroom","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_mushroom")}
                onChange={() => setLocalStorage("food","aelio_mushroom")}
                label={t("items:Title.food__aelio_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_peach","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_peach")}
                onChange={() => setLocalStorage("food","aelio_peach")}
                label={t("items:Title.food__aelio_peach")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_pear","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_pear")}
                onChange={() => setLocalStorage("food","aelio_pear")}
                label={t("items:Title.food__aelio_pear")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_tomato","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_tomato")}
                onChange={() => setLocalStorage("food","aelio_tomato")}
                label={t("items:Title.food__aelio_tomato")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_turbanShell","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_turbanShell")}
                onChange={() => setLocalStorage("food","aelio_turbanShell")}
                label={t("items:Title.food__aelio_turbanShell")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__aelio_turnip","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_turnip")}
                onChange={() => setLocalStorage("food","aelio_turnip")}
                label={t("items:Title.food__aelio_turnip")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_cauliflower","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cauliflower")}
                onChange={() => setLocalStorage("food","retem_cauliflower")}
                label={t("items:Title.food__retem_cauliflower")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_cherries","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cherries")}
                onChange={() => setLocalStorage("food","retem_cherries")}
                label={t("items:Title.food__retem_cherries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_cranberries","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cranberries")}
                onChange={() => setLocalStorage("food","retem_cranberries")}
                label={t("items:Title.food__retem_cranberries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_eggplant","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_eggplant")}
                onChange={() => setLocalStorage("food","retem_eggplant")}
                label={t("items:Title.food__retem_eggplant")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_fruit","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_fruit")}
                onChange={() => setLocalStorage("food","retem_fruit")}
                label={t("items:Title.food__retem_fruit")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_hermitCrab","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_hermitCrab")}
                onChange={() => setLocalStorage("food","retem_hermitCrab")}
                label={t("items:Title.food__retem_hermitCrab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_mango","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_mango")}
                onChange={() => setLocalStorage("food","retem_mango")}
                label={t("items:Title.food__retem_mango")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_mushroom","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_mushroom")}
                onChange={() => setLocalStorage("food","retem_mushroom")}
                label={t("items:Title.food__retem_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_scallop","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_scallop")}
                onChange={() => setLocalStorage("food","retem_scallop")}
                label={t("items:Title.food__retem_scallop")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_seaSlug","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_seaSlug")}
                onChange={() => setLocalStorage("food","retem_seaSlug")}
                label={t("items:Title.food__retem_seaSlug")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_strawberry","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_strawberry")}
                onChange={() => setLocalStorage("food","retem_strawberry")}
                label={t("items:Title.food__retem_strawberry")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food__retem_urchin","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_urchin")}
                onChange={() => setLocalStorage("food","retem_urchin")}
                label={t("items:Title.food__retem_urchin")}
              /></button>
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("containers__redBox","special")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","redBox")}
                onChange={() => setLocalStorage("containers","redBox")}
                label={t("items:Title.containers__redBox")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("containers__greenBox","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","greenBox")}
                onChange={() => setLocalStorage("containers","greenBox")}
                label={t("items:Title.containers__greenBox")}
              /></button>
              <button 
                style={{display: "none"}}
                onMouseEnter={() => setPreview("containers__goldBox","common")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","goldBox")}
                onChange={() => setLocalStorage("containers","goldBox")}
                label={t("items:Title.containers__goldBox")}
              /></button>
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("other__veteran","rare")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","veteran")}
                onChange={() => setLocalStorage("other","veteran")}
                label={t("ui:LegendMenu.Items.other.veteran")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other__alphaReactor","very-rare")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","alphaReactor")}
                onChange={() => setLocalStorage("other","alphaReactor")}
                label={t("ui:LegendMenu.Items.other.alphaReactor")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other__stellarSeed","rare")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","stellarSeed")}
                onChange={() => setLocalStorage("other","stellarSeed")}
                label={t("ui:LegendMenu.Items.other.stellarSeed")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other__stellarGrace","special")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","stellarGrace")}
                onChange={() => setLocalStorage("other","stellarGrace")}
                label={t("ui:LegendMenu.Items.other.stellarGrace")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other__dataPod","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","datapod")}
                onChange={() => setLocalStorage("other","datapod")}
                label={t("ui:LegendMenu.Items.other.dataPod")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other__musicPlace","places")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","musicPlace")}
                onChange={() => setLocalStorage("other","musicPlace")}
                label={t("ui:LegendMenu.Items.other.musicPlace")}
              /></button>
            </items>
          </>
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