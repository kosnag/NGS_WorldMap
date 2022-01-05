import React, { Fragment, useEffect, useState } from 'react';
import "./../stylesheet.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';
import Checkbox from "react-custom-checkbox";

function MenuLegend(){
  const [previewIcon, setPreviewIcon] = useState(process.env.PUBLIC_URL+"/assets/images/icons/empty.png");
  function clickPreviewIcon(index){setPreviewIcon(process.env.PUBLIC_URL+"/assets/images/icons/"+index+".png");};

  const [toggleLegendTab, setToggleLegendTab] = useState('landmarks');
  function clickToggleLegendTab(index){setToggleLegendTab(index);};
  
  var title = "";
  var shortinfo = "";

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
            >Landmarks</button>
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
          </div>
          <Fragment>
            <div 
              className={toggleLegendTab === 'landmarks' ? "menu-col-item active-tab" : "menu-col-item"}
            >
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_ryuker")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Ryuker Devices"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_cocoon")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Cocoons"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_tower")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Towers"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_battledia")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Battledias"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_mag")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Region Mags"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("landmarks_urgent")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
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
                onMouseEnter={() => {clickPreviewIcon("mineral_monotite")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Monotite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_dualomite")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Dualomite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_trinite")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Trinite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_tetracite")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Tetracite"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_photonQuartz")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Quartz"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_photonChunk")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Photon Chunk"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("mineral_photonScale")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
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
                onMouseEnter={() => {clickPreviewIcon("food_aelio_apple")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Aelio Apple"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_banana")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Banana"
              /></button>
             <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_clam")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Aelio Clam"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_crab")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Crab"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_herb")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Aelio Herb"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_lobster")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Lobster"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_mushroom")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Mushroom"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_peach")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Peach"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_pear")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Pear"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_snail")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Aelio Snail"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_tomato")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Aelio Tomato"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_aelio_turnip")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Aelio Turnip"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_cauliflower")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Cauliflower"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_cherries")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Cherries"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_cranberries")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Cranberries"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_eggplant")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Eggplant"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_fruit")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Retem Star Fruit"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_hermitCrab")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Hermit Crab"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_mango")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Mango"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_mushroom")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Sharp Retem Mushroom"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_scallop")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Nourishing Retem Scallop"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_seaSlug")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Refreshing Retem Sea Slug"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_strawberry")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={true}
                label="Healthy Retem Strawberry"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("food_retem_urchin")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
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
                onMouseEnter={() => {clickPreviewIcon("containers_redBox")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Red]"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("containers_greenBox")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Item Container [Green]"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("containers_goldBox")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
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
                onMouseEnter={() => {clickPreviewIcon("other_veteran")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Veterans"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Music places"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("other_alphaReactor")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Alpha Reactors"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("other_stellarSeed")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Seeds"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Stellar Graces"
              /></button>
              <button 
                className='menu-button-item'
                onMouseEnter={() => {clickPreviewIcon("other_dataPod")}}
                onMouseLeave={() => {clickPreviewIcon("empty")}}
                ><Checkbox icon={<span></span>}
                checked={false}
                label="Datapods"
              /></button>
            </div>
          </Fragment>
          <div className='menu-col-info'>
            <div className='menu-col-info-icon lightblue'/>
            <img alt="" src={previewIcon}/>
            <div className='menu-col-info-title'>{title}</div>
            <div className='menu-col-info-thesis'>{shortinfo}</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default MenuLegend;