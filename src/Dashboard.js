import React from "react";
import Footer from "./Footer";
import { MobileSidebar, Sidebar } from "./MobileSidebar";

const Dashboard = () => {
  return (
    <div>
      <MobileSidebar />
      <Sidebar />
      <h1>Dashboard</h1>
      <Footer />
    </div>
  );
};

export default Dashboard;
