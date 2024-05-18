import React from "react";
import foodBanks from "./data/foodBanks.json";
import Footer from "./Footer.js";
import MobileNavbar from "./MobileNavbar.js";
function PageFlex(props) {
  return (
    <main className="mainPage" aria-labelledby="main-heading">
      <section className="flex-container">
        <article className="nourishing-hope">
          <h1>NOURISHING HOPE TOGETHER</h1>
          <p>From Compassion to Action - Together, We Nourish Hope</p>
          <a href="/about">
            <button
              className="read-more"
              aria-label="Read more about Nourishing Hope"
            >
              Read More
            </button>
          </a>
        </article>
      </section>
    </main>
  );
}

function FoodContainers({ foodBanks }) {
  return (
    <div
      className="foodbank-list-section"
      aria-labelledby="local-food-banks-heading"
    >
      <h2 className="foodbank-list-title" id="local-food-banks-heading">
        LOCAL FOOD BANKS
      </h2>
      <p className="foodbank-list-subtitle">
        Supporting our community through nourishment and care.
      </p>
      <div className="foodbank-cards-container">
        {foodBanks.map((bank) => (
          <div
            className="foodbank-card"
            key={bank.id}
            aria-labelledby={`${bank.id}-heading`}
          >
            <div className="foodbank-card-content">
              <h3 id={`${bank.id}-heading`}>{bank.name}</h3>
              <p>{bank.description}</p>
            </div>
            <a
              href={bank.link}
              className="btn-details"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${bank.name} details`}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>{" "}
              Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
function Mainpage() {
  return (
    <div>
      <MobileNavbar />
      <PageFlex
        title="NOURISHING HOPE TOGETHER"
        description="From Compassion to Action - Together, We Nourish Hope"
        link="/about_us"
      />
      <FoodContainers foodBanks={foodBanks} />
      <Footer />
    </div>
  );
}

export default Mainpage;
