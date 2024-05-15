import React, { useState } from "react";
import "./login_foodbank.css";

function LoginFoodBank() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="main">
      <div className={`container ${isSignUp ? "a-container" : "b-container"}`}>
        <form className="form">
          <h2 className="form_title title">
            {isSignUp ? "Create Account" : "Sign in to Website"}
          </h2>
          <div className="form__icons">
            <img
              className="form__icon"
              src="./images/Kack_black_icon.png"
              alt="KACK Logo"
            />
          </div>
          <span className="form__span">
            {isSignUp
              ? "Using email for registration"
              : "Using UserName for SIGN In"}
          </span>
          <input
            className="form__input"
            type="text"
            placeholder={isSignUp ? "UserName" : "UserName"}
          />
          {isSignUp && (
            <input className="form__input" type="text" placeholder="Email" />
          )}
          <input
            className="form__input"
            type="password"
            placeholder="Password"
          />
          <button className="form__button button submit">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>
      </div>
      <div className="switch" id="switch-cnt">
        <div className="switch__circle"></div>
        <div className="switch__circle switch__circle--t"></div>
        <div
          className={`switch__container ${isSignUp ? "is-hidden" : ""}`}
          id="switch-c1"
        >
          <h2 className="switch__title title">Hi, FoodBank!</h2>
          <p className="switch__description description">
            To keep connected with us please click sign in with your Username.
            If you do not have a FoodBank account you need to create an account.
          </p>
          <button
            className="switch__button button switch-btn"
            onClick={handleSwitch}
          >
            SIGN IN
          </button>
        </div>
        <div
          className={`switch__container ${isSignUp ? "" : "is-hidden"}`}
          id="switch-c2"
        >
          <h2 className="switch__title title">Welcome Back!</h2>
          <p className="switch__description description">
            Enter your foodBank's UserName on the right and start journey with
            us, If you do not have a account, please click SIGN Up to create a
            account.
          </p>
          <button
            className="switch__button button switch-btn"
            onClick={handleSwitch}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginFoodBank;
