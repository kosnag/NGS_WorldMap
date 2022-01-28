import React, { Fragment, useEffect, useState } from 'react';
import "./stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";

import './../../../assets/js/i18n';
import { useTranslation } from "react-i18next";

const MenuLegend = () => {

  const {t} = useTranslation(["items","ui"]);

  const [previewIcon, setPreviewIcon] = useState(process.env.PUBLIC_URL+"/assets/images/icons/null.png");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewShortInfo, setPreviewShortInfo] = useState("");

  const setPreview = (item) => {
    setPreviewIcon(process.env.PUBLIC_URL+"/assets/images/icons/"+item+".png");
    setPreviewTitle(t("items:Title."+item));
    setPreviewShortInfo(t("items:ShortInfo."+item));
  };

  const [toggleTab, setToggleTab] = useState('landmarks');
  const clickToggleTab = (tab) => {
    setToggleTab(tab);
  };

  useEffect(() => {
    document.getElementById('menu-legend').classList.add('hidden');
    setPreviewTitle(t("items:Title.nothing"));
  }, [t]);
    
  window.localStorage_Settings = JSON.parse(localStorage.getItem("settings"));
  
  const checkLocalStorage = (category, item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {return true}
    else
      {return false}
  }
  const setLocalStorage = (category, item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {
        window.localStorage_Settings[category][item]=0
        localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
      }
    else 
      {
        window.localStorage_Settings[category][item]=1
        localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
      }
  }

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
          <Fragment>
            <items className={toggleTab === 'landmarks' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("landmarks_ryuker")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","ryuker")}
                onChange={() => setLocalStorage("landmarks","ryuker")}
                label={t("ui:LegendMenu.Items.landmarks.ryuker")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_cocoon")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","cocoon")}
                onChange={() => setLocalStorage("landmarks","cocoon")}
                label={t("ui:LegendMenu.Items.landmarks.cocoon")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_tower")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","tower")}
                onChange={() => setLocalStorage("landmarks","tower")}
                label={t("ui:LegendMenu.Items.landmarks.tower")}
              /></button>
              <button 
                onMouseEnter={() => {setPreview("landmarks_battledia")}}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","battledia")}
                onChange={() => setLocalStorage("landmarks","battledia")}
                label={t("ui:LegendMenu.Items.landmarks.battledia")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_mag")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","mag")}
                onChange={() => setLocalStorage("landmarks","mag")}
                label={t("ui:LegendMenu.Items.landmarks.mag")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_urgent")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("landmarks","uq")}
                onChange={() => setLocalStorage("landmarks","uq")}
                label={t("ui:LegendMenu.Items.landmarks.urgent")}
              /></button>
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("mineral_monotite")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","monotite")}
                onChange={() => setLocalStorage("minerals","monotite")}
                label={t("items:Title.mineral_monotite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_dualomite")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","dualomite")}
                onChange={() => setLocalStorage("minerals","dualomite")}
                label={t("items:Title.mineral_dualomite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_trinite")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","trinite")}
                onChange={() => setLocalStorage("minerals","trinite")}
                label={t("items:Title.mineral_trinite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_tetracite")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","tetracite")}
                onChange={() => setLocalStorage("minerals","tetracite")}
                label={t("items:Title.mineral_tetracite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonQuartz")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonQuartz")}
                onChange={() => setLocalStorage("minerals","photonQuartz")}
                label={t("items:Title.mineral_photonQuartz")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonChunk")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonChunk")}
                onChange={() => setLocalStorage("minerals","photonChunk")}
                label={t("items:Title.mineral_photonChunk")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonScale")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("minerals","photonScale")}
                onChange={() => setLocalStorage("minerals","photonScale")}
                label={t("items:Title.mineral_photonScale")}
              /></button>
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("food_aelio_apple")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_apple")}
                onChange={() => setLocalStorage("food","aelio_apple")}
                label={t("items:Title.food_aelio_apple")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_banana")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_banana")}
                onChange={() => setLocalStorage("food","aelio_banana")}
                label={t("items:Title.food_aelio_banana")}
              /></button>
             <button 
                onMouseEnter={() => setPreview("food_aelio_clam")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_clam")}
                onChange={() => setLocalStorage("food","aelio_clam")}
                label={t("items:Title.food_aelio_clam")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_crab")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_crab")}
                onChange={() => setLocalStorage("food","aelio_crab")}
                label={t("items:Title.food_aelio_crab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_herb")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_herb")}
                onChange={() => setLocalStorage("food","aelio_herb")}
                label={t("items:Title.food_aelio_herb")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_lobster")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_lobster")}
                onChange={() => setLocalStorage("food","aelio_lobster")}
                label={t("items:Title.food_aelio_lobster")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_mushroom")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_mushroom")}
                onChange={() => setLocalStorage("food","aelio_mushroom")}
                label={t("items:Title.food_aelio_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_peach")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_peach")}
                onChange={() => setLocalStorage("food","aelio_peach")}
                label={t("items:Title.food_aelio_peach")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_pear")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_pear")}
                onChange={() => setLocalStorage("food","aelio_pear")}
                label={t("items:Title.food_aelio_pear")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_snail")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_snail")}
                onChange={() => setLocalStorage("food","aelio_snail")}
                label={t("items:Title.food_aelio_snail")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_tomato")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_tomato")}
                onChange={() => setLocalStorage("food","aelio_tomato")}
                label={t("items:Title.food_aelio_tomato")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_turnip")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","aelio_turnip")}
                onChange={() => setLocalStorage("food","aelio_turnip")}
                label={t("items:Title.food_aelio_turnip")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cauliflower")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cauliflower")}
                onChange={() => setLocalStorage("food","retem_cauliflower")}
                label={t("items:Title.food_retem_cauliflower")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cherries")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cherries")}
                onChange={() => setLocalStorage("food","retem_cherries")}
                label={t("items:Title.food_retem_cherries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cranberries")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_cranberries")}
                onChange={() => setLocalStorage("food","retem_cranberries")}
                label={t("items:Title.food_retem_cranberries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_eggplant")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_eggplant")}
                onChange={() => setLocalStorage("food","retem_eggplant")}
                label={t("items:Title.food_retem_eggplant")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_fruit")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_fruit")}
                onChange={() => setLocalStorage("food","retem_fruit")}
                label={t("items:Title.food_retem_fruit")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_hermitCrab")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_hermitCrab")}
                onChange={() => setLocalStorage("food","retem_hermitCrab")}
                label={t("items:Title.food_retem_hermitCrab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_mango")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_mango")}
                onChange={() => setLocalStorage("food","retem_mango")}
                label={t("items:Title.food_retem_mango")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_mushroom")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_mushroom")}
                onChange={() => setLocalStorage("food","retem_mushroom")}
                label={t("items:Title.food_retem_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_scallop")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_scallop")}
                onChange={() => setLocalStorage("food","retem_scallop")}
                label={t("items:Title.food_retem_scallop")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_seaSlug")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_seaSlug")}
                onChange={() => setLocalStorage("food","retem_seaSlug")}
                label={t("items:Title.food_retem_seaSlug")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_strawberry")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_strawberry")}
                onChange={() => setLocalStorage("food","retem_strawberry")}
                label={t("items:Title.food_retem_strawberry")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_urchin")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("food","retem_urchin")}
                onChange={() => setLocalStorage("food","retem_urchin")}
                label={t("items:Title.food_retem_urchin")}
              /></button>
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("containers_redBox")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","redBox")}
                onChange={() => setLocalStorage("containers","redBox")}
                label={t("items:Title.containers_redBox")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("containers_greenBox")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","greenBox")}
                onChange={() => setLocalStorage("containers","greenBox")}
                label={t("items:Title.containers_greenBox")}
              /></button>
              <button 
                style={{display: "none"}}
                onMouseEnter={() => setPreview("containers_goldBox")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("containers","goldBox")}
                onChange={() => setLocalStorage("containers","goldBox")}
                label={t("items:Title.containers_goldBox")}
              /></button>
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("other_veteran")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","veteran")}
                onChange={() => setLocalStorage("other","veteran")}
                label={t("ui:LegendMenu.Items.other.veteran")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_alphaReactor")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","alphaReactor")}
                onChange={() => setLocalStorage("other","alphaReactor")}
                label={t("ui:LegendMenu.Items.other.alphaReactor")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_stellarSeed")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","stellarSeed")}
                onChange={() => setLocalStorage("other","stellarSeed")}
                label={t("ui:LegendMenu.Items.other.stellarSeed")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_stellarGrace")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","stellarGrace")}
                onChange={() => setLocalStorage("other","stellarGrace")}
                label={t("ui:LegendMenu.Items.other.stellarGrace")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_dataPod")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","datapod")}
                onChange={() => setLocalStorage("other","datapod")}
                label={t("ui:LegendMenu.Items.other.dataPod")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_musicPlace")}
                ><Checkbox icon={<span/>}
                checked={checkLocalStorage("other","musicPlace")}
                onChange={() => setLocalStorage("other","musicPlace")}
                label={t("ui:LegendMenu.Items.other.musicPlace")}
              /></button>
            </items>
          </Fragment>
          <info>
            <background className='lightblue'/>
            <img alt="" src={previewIcon}/>
            <name>{previewTitle}</name>
            <thesis>{previewShortInfo}</thesis>
          </info>
        </columns>
      </window>
    </Draggable>
  );
};

export default MenuLegend;