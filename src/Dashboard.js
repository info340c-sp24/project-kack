import React from "react";
import Footer from "./Footer";
import { MobileSidebar, Sidebar } from "./MobileSidebar";
import { DonorTable } from "./DonorTable";
import donors from "./data/donors.json";
import CardComponent from "./Cards.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const firstTenDonors = donors.slice(0, 10);
  return (
    <div className="dashboard-page container-fluid">
      <div className="sidebars col-2">
        <MobileSidebar />
        <Sidebar />
      </div>
      <div className="dashboard-container">
        <div id="dashboard-page" className="row">
          <h1>Dashboard</h1>
          <CardComponent
            id="card1"
            percentage={70}
            amount={25970}
            label="Total Donations"
            timePeriod="Last 24 hours"
          />
          <CardComponent
            percentage={80}
            amount={17500}
            label="Revenue"
            timePeriod="Last 24 hours"
          />
          <CardComponent
            percentage={50}
            amount={10500}
            label="Expenses"
            timePeriod="Last 24 hours"
          />
          <h1>Donors</h1>
          <div className="tableRow row">
            <DonorTable donorsList={firstTenDonors} className="DonorTable" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
