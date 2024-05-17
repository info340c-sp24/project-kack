import React from "react";

export function Sidebar() {
  return (
    <div className="sidebar">
      <a href="home.html" class="logo">
        <img src="assets/Kack_icon.png" alt="KACK Logo" />
      </a>
      <div className="sidebar-links">
        <a href="dashboard.html">Dashboard</a>
        <a href="donors.html">Donors</a>
        <a href="requests.html">Requests</a>
      </div>
    </div>
  );
}

export function HamSidebar() {
  return (
    <div className="ham-sidebar">
      <a href="home.html" class="logo">
        <img src="../images/Kack_icon.png" alt="KACK Logo" />
      </a>
      <div className="sidebar-links">
        <a href="dashboard.html">Dashboard</a>
        <a href="donors.html">Donors</a>
        <a href="requests.html">Requests</a>
      </div>
    </div>
  );
}
