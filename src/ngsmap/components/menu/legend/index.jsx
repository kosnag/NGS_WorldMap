import React, { Fragment, useEffect, useState } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";

import './../../../assets/js/i18n';
import { useTranslation } from "react-i18next";

function MenuLegend(){
  const { t, i18n } = useTranslation(["items","ui"]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
    //document.getElementById('menu-mapLegend').classList.add('hidden-window');
  });

  return (
    <Draggable
      bounds='.menu-freespace-container'
      handle='.menu-header-mapLegend'
    >
      <div 
        className='menu-window'
        id='menu-mapLegend'
      >
        <div className='menu-header menu-header-mapLegend'>
          <span className='menu-header-text'><span className="menu-icon"/> Map Legend</span>
          <span className='menu-closebutton' onClick={() => {Functions.menuShowHide("menu-mapLegend")}}/>
        </div>
        <div className='menu-columns'>
          <div className='menu-col-cat'>
            <button 
              className={toggleLegendTab === 'landmarks' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('landmarks')}
            >{t("ShortInfo.empty")}</button>
            <button 
              className={toggleLegendTab === 'minerals' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('minerals')}
            >Minerals</button>
            <button 
              className={toggleLegendTab === 'food' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('food')}
            >Food</button>
            <button 
              className={toggleLegendTab === 'containers' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('containers')}
            >Containers</button>
            <button 
              className={toggleLegendTab === 'other' ? "menu-button-cat active-category" : "menu-button-cat"}
              onClick={() => clickToggleLegendTab('other')}
            >Other</button>
            <button onClick={() => changeLanguage("en_JP")}>EN</button>
            <button onClick={() => changeLanguage("ru_RU")}>RU</button>
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
                label="Ryuker Devices"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_cocoon")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Cocoons"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_tower")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Towers"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_battledia")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Battledias"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_mag")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Region Mags"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("landmarks_urgent")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Urgent Quests"
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
                label="Monotite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_dualomite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Dualomite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_trinite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Trinite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_tetracite")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Tetracite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonQuartz")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Quartz"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonChunk")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Chunk"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("mineral_photonScale")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Scale"
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
                label="Nourishing Aelio Apple"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_banana")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Banana"
              /></button>
             <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_clam")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Aelio Clam"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_crab")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Crab"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_herb")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Aelio Herb"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_lobster")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Lobster"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_mushroom")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Mushroom"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_peach")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Peach"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_pear")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Pear"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_snail")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Snail"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_tomato")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Tomato"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_aelio_turnip")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Turnip"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cauliflower")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Cauliflower"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cherries")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Cherries"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_cranberries")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Cranberries"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_eggplant")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Eggplant"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_fruit")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Retem Star Fruit"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_hermitCrab")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Hermit Crab"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_mango")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Mango"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_mushroom")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Retem Mushroom"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_scallop")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Scallop"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_seaSlug")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Sea Slug"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_strawberry")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Strawberry"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("food_retem_urchin")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Retem Sea Urchin"
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
                label="Item Container [Red]"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("containers_greenBox")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Green]"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("containers_goldBox")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Gold]"
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
                label="Veterans"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Music places"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_alphaReactor")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Alpha Reactors"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_stellarSeed")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Seeds"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Graces"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {setPreview("other_dataPod")}}
                onMouseLeave={() => {setPreview("null")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Datapods"
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