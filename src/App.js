import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About_us from "./AboutUs";
import Mainpage from "./Mainpage";
import Dashboard from "./Dashboard";
import Food_Request from "./FoodRequest";
import Forms from "./Forms";
import Login from "./Login";
import Register from "./Register";
import MapComponent from "./Maps";
import Table from "./Table";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import FormComponent from "./Forms";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Food_Request" element={<Food_Request />} />
          <Route path="/forms" element={<FormComponent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
