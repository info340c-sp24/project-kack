import React, { useState } from "react";
import KackBlack from "./assets/Kack_black_icon.png";
import { useNavigate } from "react-router-dom";

export default function LoginDonors() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [ifSignIn, setIfSignIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("foodUser")) || {
      user: [],
      pwd: [],
    };
    if (ifSignIn) {
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

  const singIn = () => {
    setIfSignIn(!ifSignIn);
  };

  return (
    <div className="loginDonors">
      <div className="loginDonors_main">
        <div
          className="loginDonors_container loginDonors_a-container"
          id="a-container"
          style={ifSignIn ? { left: "-50px" } : { right: "-50px" }}
        >
          <form className="loginDonors_form" id="a-form" method="" action="">
            <h2 className="loginDonors_form_title loginDonors_title">
              {ifSignIn ? "Sign in to Website" : "Create Account"}
            </h2>
            <div className="loginDonors_form__icons">
              <img
                className="loginDonors_form__icon"
                src={KackBlack}
                alt="KACK Logo"
              />
            </div>
            <span className="loginDonors_form__span">
              {ifSignIn
                ? "Using UserName for SIGN IN"
                : "Using email for registration"}
            </span>
            <input
              className="loginDonors_form__input loginDonors_up_userName"
              type="text"
              placeholder="UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {ifSignIn ? null : (
              <input
                className="loginDonors_form__input loginDonors_up_Email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            <input
              className="loginDonors_form__input loginDonors_up_pwd"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="loginDonors_form__button loginDonors_button loginDonors_submit loginDonors_sub_singUp"
              onClick={handleSubmit}
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div
          className="loginDonors_switch"
          id="switch-cnt"
          style={ifSignIn ? { right: 0 } : { left: 0 }}
        >
          <div className="loginDonors_switch__circle"></div>
          <div className="loginDonors_switch__circle loginDonors_switch__circle--t"></div>
          <div className="loginDonors_switch__container" id="switch-c1">
            <h2 className="loginDonors_switch__title loginDonors_title">
              {ifSignIn ? "Hello Friend!" : "Hi, Donor!"}
            </h2>
            <p className="loginDonors_switch__description loginDonors_description">
              {ifSignIn
                ? "Enter your Donor's UserName on the right and start journey with us,If you do not have a account, please click SIGN Up to create aaccount."
                : "To keep connected with us please click sign in with your Donor'sUsername. If you do not have a donor account you need to create anaccount."}
            </p>
            <button
              onClick={() => {
                // navigate("/LoginFoodBank")
                singIn();
              }}
              className="loginDonors_switch__button loginDonors_button loginDonors_switch-btn"
            >
              {ifSignIn ? "SIGN UP" : "SIGN IN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
