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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/request" element={<Food_Request />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/table" element={<Table />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
