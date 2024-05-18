import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import KackBlack from "./assets/Kack_black_icon.png";
import { useNavigate } from "react-router-dom";

function LoginFoodBank() {
  const [isSignUp, setIsSignUp] = useState(true);
  const switchCnt = useRef(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [ifSignIn, setIfSignIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  console.log("isSignUp", isSignUp);

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("foodUser")) || {
      user: [],
      pwd: [],
    };
    if (!isSignUp) {
      if (userName === "") {
        alert("Please enter your account");
      } else if (password === "") {
        alert("Please enter your password");
      } else if (!users.user.includes(userName)) {
        alert("This account is not registered!");
      } else {
        const index = users.user.indexOf(userName);
        if (users.pwd[index] === password) {
          alert("Login successfully");
          navigate("/dashboard");
          // Redirect user or change component state as needed
        } else {
          alert("Wrong Password");
        }
      }
    } else {
      if (userName.length < 3) {
        alert("The account number cannot be less than 3 digits");
      } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
      ) {
        alert("The mailbox format is incorrect");
      } else if (password.length < 6) {
        alert("The password must contain at least 6 characters");
      } else if (users.user.includes(userName)) {
        alert("The account has been registered");
      } else {
        users.user.push(userName);
        users.pwd.push(password);
        localStorage.setItem("foodUser", JSON.stringify(users));
        alert("Registration success, please go to login");
        setUserName("");
        setEmail("");
        setPassword("");
      }
    }
  };

  const signIn = () => {
    // setIfSignIn(!ifSignIn);
  };

  return (
    <div className="loginFoodBank">
      <div className="loginFoodBank_main">
        <div
          style={!isSignUp ? { left: "-50px" } : { right: "-50px" }}
          className="loginFoodBank_container loginFoodBank_b-container"
          id="b-container"
        >
          <form className="loginFoodBank_form" id="b-form" method="" action="">
            <h2 className="loginFoodBank_form_title loginFoodBank_title">
              {!isSignUp ? "Sign in to Website" : "Create Account"}
            </h2>
            <div className="loginFoodBank_form__icons">
              <img
                className="loginFoodBank_form__icon"
                src={KackBlack}
                alt="KACK Logo"
              />
            </div>
            <span className="loginFoodBank_form__span">
              {!isSignUp
                ? "Using UserName for SIGN In"
                : "Using email for registration"}
            </span>
            <input
              className="loginFoodBank_form__input loginFoodBank_in_userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
            {isSignUp ? (
              <input
                className="loginDonors_form__input loginDonors_up_Email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : null}
            <input
              className="loginFoodBank_form__input loginFoodBank_in_pwd"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              onClick={handleSubmit}
              className="loginFoodBank_form__button loginFoodBank_button loginFoodBank_submit loginFoodBank_sub_singIn"
            >
              {isSignUp ? "SIGN Up" : "SIGN IN"}
            </button>
          </form>
        </div>
        <div
          ref={switchCnt}
          style={!isSignUp ? { right: "-10px" } : { left: "-20px" }}
          className="loginFoodBank_switch"
          id="switch-cnt"
        >
          <div
            className={`loginFoodBank_foodbank-switch__container`}
            id="switch-c2"
          >
            <h2 className="loginFoodBank_switch__title loginFoodBank_title">
              {!isSignUp ? "Welcome Back!" : "Hi, FoodBank!"}
            </h2>
            <p className="loginFoodBank_switch__description loginFoodBank_description">
              {isSignUp
                ? "To keep connected with us please click sign in with your Username.If you do not have a FoodBank account you need to create an account."
                : "Enter your foodBank's UserName on the right and start journey with us, If you do not have a account, please click SIGN Up to create a account."}
            </p>
            <button
              onClick={() => {
                handleSwitch();
                // navigate("/LoginDonors")
              }}
              className="loginFoodBank_switch__button loginFoodBank_button loginFoodBank_switch-btn"
            >
              {!isSignUp ? "SIGN UP" : "SIGN IN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFoodBank;
