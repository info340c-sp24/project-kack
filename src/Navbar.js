import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="menu_out.html" className="hamburger-menu">
        <span className="material-symbols-outlined">menu</span>
      </a>
      <a href="home.html" className="logo">
        <img src="assets/Kack_black_icon.png" alt="KACK Logo" />
      </a>
      <div className="nav-center">
        <a href="about.html">ABOUT</a>
        <a href="map.html">MAP</a>
        <a href="request.html">REQUEST</a>
      </div>
      <a href="login.html" className="login">
        <span className="material-symbols-outlined">person_add</span>
        REGISTER/LOGIN
      </a>
    </div>
  );
};

export default Navbar;
