import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "./assets/KACK_logo.png";

const MobileSidebar = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        <img src={logo} alt="KACK Logo" className="nav-logo" />
      </a>
      <a id="Dashboard" className="menu-item" href="/Dashboard">
        Dashboard
      </a>
      <a id="DonarTable" className="menu-item" href="/Table">
        Donars
      </a>
      <a id="FoodRequest" className="menu-item" href="/FoodRequest">
        Request
      </a>
    </Menu>
  );
};
export default MobileSidebar;
