import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { MobileSidebar, Sidebar } from "./MobileSidebar";
import { TableHeader } from "./TableHeader";
import { DashboardRow } from "./DashboardRow";
import CardComponent from "./Cards.js";
import { db } from "./index.js";
import { ref, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const donorsRef = ref(db, "donations");
    onValue(donorsRef, (snapshot) => {
      const data = snapshot.val();
      const donorsList = data ? Object.values(data) : [];
      donorsList.sort((a, b) => b.timestamp - a.timestamp);
      setDonors(donorsList);
    });
  }, []);

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
            <table>
              <TableHeader
                columnNames={[
                  "Name",
                  "Email",
                  "Phone",
                  "Address",
                  "City",
                  "State",
                  "Zip",
                  "Donation",
                ]}
              />
              <tbody>
                {firstTenDonors.map((donors) => (
                  <DashboardRow key={donors.user_id} donorData={donors} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
