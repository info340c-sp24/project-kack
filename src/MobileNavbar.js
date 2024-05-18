import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "./assets/KACK_logo.png";

const MobileNavbar = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        <img src={logo} alt="KACK Logo" className="nav-logo" />
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="map" className="menu-item" href="/map">
        Map
      </a>
      <a id="donate" className="menu-item" href="/form">
        Donate
      </a>
      <a id="login" className="menu-item" href="/login">
        Login
      </a>
    </Menu>
  );
};
export default MobileNavbar;
