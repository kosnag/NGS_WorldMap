import React, { Fragment, useEffect, useState } from 'react';
import "./stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";

import './../../../assets/js/i18n';
import { useTranslation } from "react-i18next";

function MenuLegend(){
  const { t } = useTranslation(["items","ui"]);

  const [previewIcon, setPreviewIcon] = useState("/assets/images/icons/null.png");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewShortInfo, setPreviewShortInfo] = useState("");

  function setPreview(index){
    setPreviewIcon(process.env.PUBLIC_URL+"/assets/images/icons/"+index+".png");
    setPreviewTitle(t("items:Title."+index, {framework:'React'}));
    setPreviewShortInfo(t("items:ShortInfo."+index, {framework:'React'}));
  };

  const [toggleLegendTab, setToggleLegendTab] = useState('landmarks');
  function clickToggleLegendTab(index){setToggleLegendTab(index);};

  useEffect(() => {
    document.getElementById('menu-legend').classList.add('hidden-window');
  }, []);

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header'
    >
      <div 
        className='menu-window'
        id='menu-legend'
      >
        <div className='menu-header'>
          <span className='menu-header-text'><span className="menu-icon"/> Map Legend</span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-legend")}}/>
        </div>
        <div className='menu-columns'>
          <div className='menu-col-cat'>
            <button 
              className={toggleLegendTab === 'landmarks' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('landmarks')}
            >{t("ui:LegendMenu.Categories.landmarks",{framework:"React"})}</button>
            <button 
              className={toggleLegendTab === 'minerals' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('minerals')}
            >{t("ui:LegendMenu.Categories.minerals",{framework:"React"})}</button>
            <button 
              className={toggleLegendTab === 'food' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('food')}
            >{t("ui:LegendMenu.Categories.food",{framework:"React"})}</button>
            <button 
              className={toggleLegendTab === 'containers' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('containers')}
            >{t("ui:LegendMenu.Categories.containers",{framework:"React"})}</button>
            <button 
              className={toggleLegendTab === 'other' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('other')}
            >{t("ui:LegendMenu.Categories.other",{framework:"React"})}</button>
          </div>
          <Fragment>
            <div 
              className={toggleLegendTab === 'landmarks' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_ryuker")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.ryuker",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_cocoon")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.cocoon",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_tower")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.tower",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_battledia")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.battledia",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_mag")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.mag",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_urgent")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("ui:LegendMenu.Items.landmarks.urgent",{framework:"React"})}
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'minerals' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_monotite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_monotite",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_dualomite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_dualomite",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_trinite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_trinite",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_tetracite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_tetracite",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonQuartz")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_photonQuartz",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonChunk")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_photonChunk",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonScale")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.mineral_photonScale",{framework:"React"})}
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'food' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_apple")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_apple",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_banana")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_banana",{framework:"React"})}
              /></button>
             <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_clam")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_clam",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_crab")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_crab",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_herb")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_herb",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_lobster")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_lobster",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_mushroom")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_mushroom",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_peach")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_peach",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_pear")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_pear",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_snail")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_snail",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_tomato")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_tomato",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_turnip")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_aelio_turnip",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cauliflower")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_cauliflower",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cherries")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_cherries",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cranberries")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_cranberries",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_eggplant")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_eggplant",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_fruit")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_fruit",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_hermitCrab")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_hermitCrab",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_mango")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_mango",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_mushroom")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_mushroom",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_scallop")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_scallop",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_seaSlug")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_seaSlug",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_strawberry")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_strawberry",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_urchin")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label={t("items:Title.food_retem_urchin",{framework:"React"})}
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'containers' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("containers_redBox")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("items:Title.containers_redBox",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("containers_greenBox")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("items:Title.containers_greenBox",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("containers_goldBox")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("items:Title.containers_goldBox",{framework:"React"})}
              /></button>
            </div>
            <div 
              className={toggleLegendTab === 'other' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_veteran")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.veteran",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_alphaReactor")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.alphaReactor",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_stellarSeed")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.stellarSeed",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.stellarGrace",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_dataPod")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.dataPod",{framework:"React"})}
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label={t("ui:LegendMenu.Items.other.musicPlace",{framework:"React"})}
              /></button>
            </div>
          </Fragment>
          <div className='menu-col-info'>
            <div className='menu-col-info-icon lightblue'/>
            <img alt="" src={previewIcon}/>
            <div className='menu-col-info-title'>{previewTitle}</div>
            <div className='menu-col-info-thesis'>{previewShortInfo}</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MenuLegend;