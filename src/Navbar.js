import React from "react";
import logo from './images/KACK_logo.png';

const Navbar = () => {
  return (
    <div class='navbar'>
      <ul class='navbar-nav'>
        <a href='/'> <img src={logo} alt='KACK Logo' class='nav-logo' /> </a>
        
        <li class='nav-item'>
          <a href='/about'>About</a>
        </li>
        <li class='nav-item'>
          <a href='/map'>Map</a>
        </li>
        <li class='nav-item'>
          <a href='/request'>Request</a>
        </li>
        <li class='nav-item'>
          <a href='/form'>Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
