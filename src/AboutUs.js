import React from "react";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import MobileNavbar from "./MobileNavbar.js";
function AboutUs(props) {
  return (
    <>
      <header>
        <Navbar />
        <MobileNavbar />
      </header>
      <main className="ab_main">
        <section className="ab_container">
          <h1 className="ab_heading">About Us</h1>
          <p>
            Welcome to KACK, where we connect communities with local food banks.
            Our mission is to support our community through nourishment and
            care.
          </p>
          <section className="aboutus-page">
            <h3>What is KACK?</h3>
            <p>
              Welcome to KACK, a dynamic platform dedicated to combating food
              insecurity in the Seattle area by fostering effective
              communication and collaboration between food banks and donors. At
              Kack, we understand that food insecurity is a complex issue
              influenced by economic hardship and social inequality, exacerbated
              by Seattle's high living costs and income disparities. Our mission
              is to streamline the donation process and ensure that food banks
              receive precisely what they need, when they need it.
            </p>
          </section>
          <section className="aboutus-page">
            <h3>Problem Description</h3>
            <p>
              Seattle's high cost of living and significant income disparities
              contribute to widespread food insecurity, leaving many residents
              struggling to obtain nutritious food consistently. Food banks in
              the area play a crucial role in mitigating this issue, but they
              face logistical challenges due to a lack of effective
              communication tools. These challenges prevent food banks from
              efficiently matching their urgent needs with the supplies and help
              available from donors and volunteers. As a result, food banks
              often end up with either surplus or insufficient stock of crucial
              items. Existing platforms and solutions do not adequately
              streamline the process for donors and volunteers to identify and
              meet the specific needs of different food banks.
            </p>
            <p>
              Our website aims to address these inefficiencies by providing a
              centralized, intuitive platform that directly connects the needs
              of food banks with community resources, ensuring that donations
              and volunteer efforts are both timely and accurately targeted.
            </p>
          </section>
          <section className="team"></section>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default About_us;
