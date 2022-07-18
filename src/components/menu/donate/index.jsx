import React, { useState, useEffect } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../functions';
import { useTranslation } from "react-i18next";

import boostyImg from "../../../assets/icons/boosty.png"

export default function MenuDonate(){
  const {t} = useTranslation();

  const [toggleTab, setToggleTab] = useState('boosty');

  useEffect(()=>{
    document.getElementById('menu-donate').classList.add('hidden');
  },[])

  return (
    <Draggable bounds='container' handle='header'>
      <window id='menu-donate'>
        <header>
          <span><menuicon/> {t("ui:NavBar.donate")}</span>
          <closebutton onClick={() => Functions.menuShowHide("menu-donate")}/>
        </header>
        <columns>
          <category>
            <button 
              className={toggleTab === 'boosty' ? "active" : ""}
              onClick={() => setToggleTab('boosty')}
            >Boosty</button>
            <button 
              className={toggleTab === 'qiwi' ? "active" : ""}
              onClick={() => setToggleTab('qiwi')}
            >Qiwi</button>
          </category>
          <>
            <items id="boosty" className={toggleTab === 'boosty' ? "active" : ""}>
              <div>
                <a href="https://boosty.to/kosnag" rel="noopener noreferrer" target="_blank">
                  <img alt=""src={boostyImg}/>
                </a>
              </div>
            </items>
            <items id="qiwi" className={toggleTab === 'qiwi' ? "active" : ""}>
              <div>
                <iframe
                  src={"https://widget.qiwi.com/widgets/middle-widget-300x300?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPyr9iWQjzW1n3wciwKE9cC3NQi2PG7BV8CNzW7MSFyMJjkBnGmJVSZMcEDYZPWxVTWC8wkwzAcWWtRjU2LXRtUJwA9XUjp46ZY3BqphuKx"}
                  title="qiwi"
                />
              </div>
            </items>
          </>
        </columns>
      </window>
    </Draggable>
  );
};