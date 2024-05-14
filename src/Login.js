import React from "react";
import "./index.css";
import logo from "./images/KACK_logo.png";

function Login() {
  return (
    <div className="kackLoginBody">
      <div className="kackLoginContainer">
        <div className="kackLogoContainer">
          <img src={logo} alt="KACK FOOD BANK Logo" className="kackLoginLogo" />
        </div>

        <div className="login-register">
          <h2 className="kackLoginH2">
            Choose your identity to login/Register:
          </h2>
          <a href="login_foodbank.html" className="kackLoginOptionButton">
            FOOD BANK
          </a>
          <a href="login_donors.html" className="kackLoginOptionButton">
            DONOR
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
