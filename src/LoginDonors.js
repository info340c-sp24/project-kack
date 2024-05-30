import React, { useState } from "react";
import KackBlack from "./assets/Kack_black_icon.png";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function LoginDonors() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [ifSignIn, setIfSignIn] = useState(false);

  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (ifSignIn) {
      // Existing user sign-in
      // *** Change: Updated to check email instead of userName ***
      if (email === "") {
        alert("Please enter your email");
      } else if (password === "") {
        alert("Please enter your password");
      } else {
        // *** Change: Use email and password for sign-in ***
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert("Login successfully");
            console.log(userCredential); // Debugging line
            navigate("/Mainpage");
          })
          .catch((error) => {
            //const errorCode = error.code;
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
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            console.log(error); // Debugging line
          });
      }
    }
  };

  const singIn = () => {
    setIfSignIn(!ifSignIn);
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
    <div className="loginDonors">
      <div className="loginDonors_main">
        <div
          className="loginDonors_container loginDonors_a-container"
          id="a-container"
          style={ifSignIn ? { left: "-50px" } : { right: "-50px" }}
        >
          <form
            className="loginDonors_form"
            id="a-form"
            method=""
            action=""
            onSubmit={handleSubmit}
          >
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
                ? "Using email for SIGN IN"
                : "Using email for registration"}
            </span>
            {/* *** Change: Removed username input for sign-in *** */}
            {ifSignIn ? null : (
              <input
                className="loginDonors_form__input loginDonors_up_userName"
                type="text"
                placeholder="UserName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            )}
            <input
              className="loginDonors_form__input loginDonors_up_Email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginDonors_form__input loginDonors_up_pwd"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="loginDonors_form__button loginDonors_button loginDonors_submit loginDonors_sub_singUp"
              type="submit"
            >
              {ifSignIn ? "SIGN IN" : "SIGN UP"}
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
                ? "Enter your email and password to sign in. If you do not have an account, please click SIGN UP to create an account."
                : "To keep connected with us, please click sign in with your Donor's Username. If you do not have a donor account, you need to create an account."}
            </p>
            <button
              onClick={singIn}
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
