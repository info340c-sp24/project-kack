import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "./assets/KACK_logo.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div className="navbar desktop">
        <ul className="navbar-nav">
          <a href="/">
            {" "}
            <img src={logo} alt="KACK Logo" className="nav-logo" />{" "}
          </a>

          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/map">Map</a>
          </li>
          <li className="nav-item">
            <a href="/request">Request</a>
          </li>
          <li className="nav-item">
            <a href="/form">Login</a>
          </li>
        </ul>
      </div>
      <div className="navbar mobile">
        <MobileNavbar />
      </div>
    </>
  );
};
export default Navbar;
