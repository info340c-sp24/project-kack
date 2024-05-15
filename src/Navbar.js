import React from "react";

const Navbar = () => {
  return (
    <div class='navbar'>
      <ul class='navbar-nav'>
        <li class='nav-item'>
          <a href='/'>Home</a>
        </li>
        <li class='nav-item'>
          <a href='/about'>About</a>
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
