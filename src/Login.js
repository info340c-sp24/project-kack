import React from "react";
import "./index.css";
import logo from "./assets/KACK_logo.png";

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
          <a href="/LoginFoodBank" className="kackLoginOptionButton">
            FOOD BANK
          </a>
          <a href="/LoginDonors" className="kackLoginOptionButton">
            DONOR
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
