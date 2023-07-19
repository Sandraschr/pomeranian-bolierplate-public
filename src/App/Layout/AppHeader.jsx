import React from 'react';
import {Logo} from '../Components/Logo';
import './styles/header.css';
import arrowDownSvg from '../Images/toggle-arrow.svg';
import settingsSvg from '../Images/setting.svg';

export function AppHeader() 
  {

    function handleClickButton(message) {
  
      console.log(message);
  
    }
  
  
  
  
    return (
  
      <header>
  
        <Logo />
  
        <div className="header-info">
  
          <button
  
            onClick={() => handleClickButton('I am settings button!')}
  
            className="header-settings-btn"
  
          >
  
            <img src={settingsSvg} alt="settings button" />
  
          </button>
  
          <div className="header-image-placeholder"></div>
  
          <div className="header-personal-info">
  
            <p>Sandra</p>
  
            <p>kursantka</p>
  
          </div>
  
          <button
  
            onClick={() => handleClickButton('I am dropdown button!')}
  
            className="header-dropdown-btn"
  
          >
  
            <img src={arrowDownSvg} alt="dropdown button" />
  
          </button>
  
        </div>
  
      </header>
  
    );
}