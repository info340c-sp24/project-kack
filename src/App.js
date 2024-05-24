import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Mainpage from "./Mainpage";
import Dashboard from "./Dashboard";
import FoodRequest from "./FoodRequest";
import Login from "./Login";
import LoginFoodBank from "./LoginFoodBank";
import LoginDonors from "./LoginDonors";
import Register from "./Register";
import MapComponent from "./Maps";
import Table from "./Table";
import Footer from "./Footer";
import FormComponent from "./Forms";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/FoodRequest" element={<FoodRequest />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LoginFoodBank" element={<LoginFoodBank />} />
          <Route path="/LoginDonors" element={<LoginDonors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/table" element={<Table />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
          <Route path="/dashboard/:name" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
