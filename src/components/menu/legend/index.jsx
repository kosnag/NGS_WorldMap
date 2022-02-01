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
  const [previewRarity, setPreviewRarity] = useState("matoi");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewShortInfo, setPreviewShortInfo] = useState("");

  const setPreview = (item,rarity) => {
    setPreviewIcon(process.env.PUBLIC_URL+"/assets/images/icons/"+item+".png");
    setPreviewRarity(rarity);
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
                onMouseEnter={() => setPreview("landmarks_ryuker","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","ryuker")}
                onChange={() => Functions.setLocalStorage("landmarks","ryuker")}
                label={t("ui:LegendMenu.Items.landmarks.ryuker")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_cocoon","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","cocoon")}
                onChange={() => Functions.setLocalStorage("landmarks","cocoon")}
                label={t("ui:LegendMenu.Items.landmarks.cocoon")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_tower","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","tower")}
                onChange={() => Functions.setLocalStorage("landmarks","tower")}
                label={t("ui:LegendMenu.Items.landmarks.tower")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_battledia","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","battledia")}
                onChange={() => Functions.setLocalStorage("landmarks","battledia")}
                label={t("ui:LegendMenu.Items.landmarks.battledia")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_mag","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","mag")}
                onChange={() => Functions.setLocalStorage("landmarks","mag")}
                label={t("ui:LegendMenu.Items.landmarks.mag")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("landmarks_urgent","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("landmarks","uq")}
                onChange={() => Functions.setLocalStorage("landmarks","uq")}
                label={t("ui:LegendMenu.Items.landmarks.urgent")}
              /></button>
            </items>
            <items className={toggleTab === 'minerals' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("mineral_monotite","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","monotite")}
                onChange={() => Functions.setLocalStorage("minerals","monotite")}
                label={t("items:Title.mineral_monotite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_dualomite","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","dualomite")}
                onChange={() => Functions.setLocalStorage("minerals","dualomite")}
                label={t("items:Title.mineral_dualomite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_trinite","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","trinite")}
                onChange={() => Functions.setLocalStorage("minerals","trinite")}
                label={t("items:Title.mineral_trinite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_tetracite","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","tetracite")}
                onChange={() => Functions.setLocalStorage("minerals","tetracite")}
                label={t("items:Title.mineral_tetracite")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonQuartz","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","photonQuartz")}
                onChange={() => Functions.setLocalStorage("minerals","photonQuartz")}
                label={t("items:Title.mineral_photonQuartz")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonChunk","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","photonChunk")}
                onChange={() => Functions.setLocalStorage("minerals","photonChunk")}
                label={t("items:Title.mineral_photonChunk")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("mineral_photonScale","very-rare")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("minerals","photonScale")}
                onChange={() => Functions.setLocalStorage("minerals","photonScale")}
                label={t("items:Title.mineral_photonScale")}
              /></button>
            </items>
            <items className={toggleTab === 'food' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("food_aelio_apple","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_apple")}
                onChange={() => Functions.setLocalStorage("food","aelio_apple")}
                label={t("items:Title.food_aelio_apple")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_banana","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_banana")}
                onChange={() => Functions.setLocalStorage("food","aelio_banana")}
                label={t("items:Title.food_aelio_banana")}
              /></button>
             <button 
                onMouseEnter={() => setPreview("food_aelio_clam","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_clam")}
                onChange={() => Functions.setLocalStorage("food","aelio_clam")}
                label={t("items:Title.food_aelio_clam")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_crab","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_crab")}
                onChange={() => Functions.setLocalStorage("food","aelio_crab")}
                label={t("items:Title.food_aelio_crab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_herb","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_herb")}
                onChange={() => Functions.setLocalStorage("food","aelio_herb")}
                label={t("items:Title.food_aelio_herb")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_lobster","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_lobster")}
                onChange={() => Functions.setLocalStorage("food","aelio_lobster")}
                label={t("items:Title.food_aelio_lobster")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_mushroom","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_mushroom")}
                onChange={() => Functions.setLocalStorage("food","aelio_mushroom")}
                label={t("items:Title.food_aelio_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_peach","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_peach")}
                onChange={() => Functions.setLocalStorage("food","aelio_peach")}
                label={t("items:Title.food_aelio_peach")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_pear","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_pear")}
                onChange={() => Functions.setLocalStorage("food","aelio_pear")}
                label={t("items:Title.food_aelio_pear")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_tomato","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_tomato")}
                onChange={() => Functions.setLocalStorage("food","aelio_tomato")}
                label={t("items:Title.food_aelio_tomato")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_turbanShell","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_turbanShell")}
                onChange={() => Functions.setLocalStorage("food","aelio_turbanShell")}
                label={t("items:Title.food_aelio_turbanShell")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_aelio_turnip","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","aelio_turnip")}
                onChange={() => Functions.setLocalStorage("food","aelio_turnip")}
                label={t("items:Title.food_aelio_turnip")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cauliflower","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_cauliflower")}
                onChange={() => Functions.setLocalStorage("food","retem_cauliflower")}
                label={t("items:Title.food_retem_cauliflower")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cherries","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_cherries")}
                onChange={() => Functions.setLocalStorage("food","retem_cherries")}
                label={t("items:Title.food_retem_cherries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_cranberries","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_cranberries")}
                onChange={() => Functions.setLocalStorage("food","retem_cranberries")}
                label={t("items:Title.food_retem_cranberries")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_eggplant","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_eggplant")}
                onChange={() => Functions.setLocalStorage("food","retem_eggplant")}
                label={t("items:Title.food_retem_eggplant")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_fruit","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_fruit")}
                onChange={() => Functions.setLocalStorage("food","retem_fruit")}
                label={t("items:Title.food_retem_fruit")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_hermitCrab","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_hermitCrab")}
                onChange={() => Functions.setLocalStorage("food","retem_hermitCrab")}
                label={t("items:Title.food_retem_hermitCrab")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_mango","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_mango")}
                onChange={() => Functions.setLocalStorage("food","retem_mango")}
                label={t("items:Title.food_retem_mango")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_mushroom","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_mushroom")}
                onChange={() => Functions.setLocalStorage("food","retem_mushroom")}
                label={t("items:Title.food_retem_mushroom")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_scallop","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_scallop")}
                onChange={() => Functions.setLocalStorage("food","retem_scallop")}
                label={t("items:Title.food_retem_scallop")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_seaSlug","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_seaSlug")}
                onChange={() => Functions.setLocalStorage("food","retem_seaSlug")}
                label={t("items:Title.food_retem_seaSlug")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_strawberry","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_strawberry")}
                onChange={() => Functions.setLocalStorage("food","retem_strawberry")}
                label={t("items:Title.food_retem_strawberry")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("food_retem_urchin","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("food","retem_urchin")}
                onChange={() => Functions.setLocalStorage("food","retem_urchin")}
                label={t("items:Title.food_retem_urchin")}
              /></button>
            </items>
            <items className={toggleTab === 'containers' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("containers_redBox","special")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("containers","redBox")}
                onChange={() => Functions.setLocalStorage("containers","redBox")}
                label={t("items:Title.containers_redBox")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("containers_greenBox","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("containers","greenBox")}
                onChange={() => Functions.setLocalStorage("containers","greenBox")}
                label={t("items:Title.containers_greenBox")}
              /></button>
              <button 
                style={{display: "none"}}
                onMouseEnter={() => setPreview("containers_goldBox","common")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("containers","goldBox")}
                onChange={() => Functions.setLocalStorage("containers","goldBox")}
                label={t("items:Title.containers_goldBox")}
              /></button>
            </items>
            <items className={toggleTab === 'other' ? "active" : ""}>
              <button 
                onMouseEnter={() => setPreview("other_veteran","rare")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","veteran")}
                onChange={() => Functions.setLocalStorage("other","veteran")}
                label={t("ui:LegendMenu.Items.other.veteran")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_alphaReactor","very-rare")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","alphaReactor")}
                onChange={() => Functions.setLocalStorage("other","alphaReactor")}
                label={t("ui:LegendMenu.Items.other.alphaReactor")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_stellarSeed","rare")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","stellarSeed")}
                onChange={() => Functions.setLocalStorage("other","stellarSeed")}
                label={t("ui:LegendMenu.Items.other.stellarSeed")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_stellarGrace","special")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","stellarGrace")}
                onChange={() => Functions.setLocalStorage("other","stellarGrace")}
                label={t("ui:LegendMenu.Items.other.stellarGrace")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_dataPod","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","datapod")}
                onChange={() => Functions.setLocalStorage("other","datapod")}
                label={t("ui:LegendMenu.Items.other.dataPod")}
              /></button>
              <button 
                onMouseEnter={() => setPreview("other_musicPlace","places")}
                ><Checkbox icon={<span/>}
                checked={Functions.checkLocalStorage("other","musicPlace")}
                onChange={() => Functions.setLocalStorage("other","musicPlace")}
                label={t("ui:LegendMenu.Items.other.musicPlace")}
              /></button>
            </items>
          </Fragment>
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

export default MenuLegend;