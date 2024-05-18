import React from "react";
import logo from "./assets/KACK_logo.png";
import MobileSidebar from "./MobileSidebar";

export function Sidebar() {
  return (
    <>
      <div className="navbar-desktop">
        <ul className="navbar-nav">
          <a href="/">
            {" "}
            <img src={logo} alt="KACK Logo" className="nav-logo" />{" "}
          </a>

          <li className="nav-item">
            <a href="/Dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/Table">Donars</a>
          </li>
          <li className="nav-item">
            <a href="/FoodRequest">Requests</a>
          </li>
        </ul>
      </div>
      <div className="navbar-mobile">
        <MobileSidebar />
      </div>
    </>
  );
}
