import React from "react";
import { slide as Menu } from 'react-burger-menu';
import logo from './images/KACK_logo.png';


const MobileNavbar = () => {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          <img src={logo} alt='KACK Logo' className='nav-logo' />
          Home
        </a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="map" className="menu-item" href="/map">Map</a>
        <a id="request" className="menu-item" href="/request">Request</a>
        <a id="form" className="menu-item" href="/form">Login</a>
      </Menu>
    );
  };
export default MobileNavbar;