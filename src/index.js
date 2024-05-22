import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDZL4RRHchH7PCeoxNPMW-BjLdahWpe7c",
  authDomain: "info-340-kack.firebaseapp.com",
  projectId: "info-340-kack",
  storageBucket: "info-340-kack.appspot.com",
  messagingSenderId: "854008262989",
  appId: "1:854008262989:web:808be53a4a979f5c6b0704",
  measurementId: "G-L8H9QQB87T",
  databaseURL: "https://info-340-kack-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export { db };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
