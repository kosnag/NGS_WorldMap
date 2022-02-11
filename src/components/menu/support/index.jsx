import React, { useEffect, useState, Fragment } from 'react';
import "./style.scss";
import Draggable from 'react-draggable';
import Functions from '../../../assets/js/functions';

import { useTranslation } from "react-i18next";

export default function MenuSupport(){
  const {t} = useTranslation();

  const [toggleTab, setToggleTab] = useState('kofi');
  const clickToggleTab = (tab) => {
    setToggleTab(tab)
  };

  useEffect(() => {
    document.getElementById('menu-support').classList.add('hidden'); 
  }, []);

  return (
    <Draggable bounds='container' handle='header'>
      <window id='menu-support'>
        <header>
          <span><menuicon/> {t("ui:NavBar.support")}</span>
          <closebutton onClick={() => Functions.menuShowHide("menu-support")}/>
        </header>
        <columns>
          <category>
            <button 
              className={toggleTab === 'kofi' ? "active" : ""}
              onClick={() => clickToggleTab('kofi')}
            >Kofi</button>
            <button 
              className={toggleTab === 'qiwi' ? "active" : ""}
              onClick={() => clickToggleTab('qiwi')}
            >Qiwi</button>
          </category>
          <Fragment>
            <items id="kofi" className={toggleTab === 'kofi' ? "active" : ""}>
              <div>
                <iframe
                  src={"https://ko-fi.com/kosnag/?&widget=true&embed=true&preview=true"}
                  title="kofi"
                />
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
          </Fragment>
        </columns>
      </window>
    </Draggable>
  );
};