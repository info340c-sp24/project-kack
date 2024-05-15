import React from "react";
import { Link } from 'react-router-dom'; 
import Footer from "./Footer.js";
function PageFlex(props){
  return(
    <main className="mainPage" aria-labelledby="main-heading">
    <section className="flex-container">
        <article className="nourishing-hope">
          <h1>NOURISHING HOPE TOGETHER</h1>
          <p>From Compassion to Action - Together, We Nourish Hope</p>
          <a href="about_us/about_us.html">
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
    <div className="foodbank-list-section" aria-labelledby="local-food-banks-heading">
      <h2 className="foodbank-list-title" id="local-food-banks-heading">
        LOCAL FOOD BANKS
      </h2>
      <p className="foodbank-list-subtitle">
        Supporting our community through nourishment and care.
      </p>
      <div className="foodbank-cards-container">
        {foodBanks.map(bank => (
          <div className="foodbank-card" key={bank.id} aria-labelledby={`${bank.id}-heading`}>
            <div className="foodbank-card-content">
              <h3 id={`${bank.id}-heading`}>
                {bank.name}
              </h3>
              <p>{bank.description}</p>
            </div>
            <a href={bank.link} className="btn-details" target="_blank" rel="noopener noreferrer" aria-label={`View ${bank.name} details`}>
              <span className="material-symbols-outlined">arrow_forward_ios</span> Details
            </a>
          </div>
        ))}
      </div>
    </div>

  );
}
function Mainpage() {
  const foodBanks = [
    {
      id: 'university-district-food-bank',
      name: 'University District Food Bank',
      description: 'Serving the community since 1998, the University District Food Bank provides essential food assistance to individuals and families in need, fostering a thriving community.',
      link: 'https://www.udistrictfoodbank.org/'
    },
    {
      id: 'Food-Resource-Network',
      name: 'Food Resource Network',
      description: 'Providing a lifeline to those in need, the Food Resource Network offers vital food support services, promoting health and wellness in the community.',
      link: 'https://familyworksseattle.org/'
    },
    {
      id: 'UW-Food-Pantry',
      name: 'UW Food Pantry',
      description: 'UW Food Pantry provides essential food assistance and community support, promoting health and unity in the U-District area.',
      link: 'https://www.washington.edu/anyhungryhusky/the-uw-food-pantry/'
    }
  ];

  return (
    <>
    <div>
      <PageFlex 
        title="NOURISHING HOPE TOGETHER"
        description="From Compassion to Action - Together, We Nourish Hope"
        link="/about_us"
      />
      <FoodContainers foodBanks={foodBanks} />
    </div>
    <Footer />
    </>
  );
  
}

export default Mainpage;