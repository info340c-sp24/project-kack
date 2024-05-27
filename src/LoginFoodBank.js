import React, { useState, useRef } from "react";
import "./index.css";
import KackBlack from "./assets/Kack_black_icon.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function LoginFoodBank() {
  const [isSignUp, setIsSignUp] = useState(true);
  const switchCnt = useRef(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const auth = getAuth();

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isSignUp) {
      // Existing user sign-in
      if (userName === "") {
        alert("Please enter your account");
      } else if (password === "") {
        alert("Please enter your password");
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert("Login successfully");
            console.log(userCredential); // Debugging line
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            console.log(error); // Debugging line
          });
      }
    } else {
      // New user registration
      if (userName.length < 3) {
        alert("The account number cannot be less than 3 digits");
      } else if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
      ) {
        alert("The mailbox format is incorrect");
      } else if (password.length < 6) {
        alert("The password must contain at least 6 characters");
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert("Registration success, please go to login");
            console.log(userCredential); // Debugging line
            setUserName("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            console.log(error); // Debugging line
          });
      }
    }
  };

  // Set up authentication state observer
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      console.log(`User signed in: ${uid}`); // Debugging line
    } else {
      // User is signed out
      console.log("User signed out"); // Debugging line
    }
  });

  return (
    <div className="loginFoodBank">
      <div className="loginFoodBank_main">
        <div
          style={!isSignUp ? { left: "-50px" } : { right: "-50px" }}
          className="loginFoodBank_container loginFoodBank_b-container"
          id="b-container"
        >
          <form
            className="loginFoodBank_form"
            id="b-form"
            method=""
            action=""
            onSubmit={handleSubmit}
          >
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
                ? "Using UserName for SIGN IN"
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
              className="loginFoodBank_form__button loginFoodBank_button loginFoodBank_submit loginFoodBank_sub_singIn"
              type="submit"
            >
              {isSignUp ? "SIGN UP" : "SIGN IN"}
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
                ? "To keep connected with us please click sign in with your Username. If you do not have a FoodBank account you need to create an account."
                : "Enter your foodBank's UserName on the right and start journey with us. If you do not have a account, please click SIGN UP to create an account."}
            </p>
            <button
              onClick={handleSwitch}
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
