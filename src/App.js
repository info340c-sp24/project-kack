import React from "react";
import Page from "./Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
