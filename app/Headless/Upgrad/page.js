"use client"
import React from "react";
import "./Upgrad.css";

const updates = [
  {
    title: "Easy Updates and Upgrades",
    text1: `All the e-commerce platforms are updating regularly because of new features and security updates. `,
    text2:`But, there is a huge problem with the platform update: merchants are bound to update their websites as well. 
           Headless commerce services solution is by far the best approach for this situation. `,
     text3:` Also, every time whenever an upgrade is pushed there is a minimal amount of changes required in the e-commerce platform.`,          
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743811229/easy-updates-and-upgrades-1_tdp5di.webp"
  },
  {
    title: "Microservices Approach",
    text1: `Modern e-commerce platforms and marketplaces are not dependent on a single source. They are connected via multiple platforms including.`,
    text2:`PIM/MDM – for product data management.
ERP – for OMS (Order management system).
CRM – for cart abandonment and B2B commerce.
Chat – for faster B2B communication between supplier vendors.`,
text3:`And many more such services are used. Headless architecture gives the flexibility to connect the frontend and render all those APIs`,
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743813099/microservices-approach-1_fxnv3h.webp"
  },
  {
    title: "Easy Updates and Upgrades",
    text1: `Headless commerce services ensure a one-time investment, freeing you from concerns about platform backend upgrades or updates.`,
    text2:`As headless platforms are API driven it gives flexibility to developers. No need to depend on monolith architecture.`,
    text3:`Any frontend developer aware of React or Vue can easily update or modify the frontend headless e-commerce.`,
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743813099/less-dependency-and-easy-to-build-1-1_hur8fh.webp"
  },
  {
    title: "Search Engine Optimization",
    text1: `Most of these headless solutions including vue storefront or nextjs or gatsby.js all are ultrafast. Which gives a better performance for the users. `,
    text2:`As react and vuejs both users modem concepts like server side rendering and virtual dom.`,
    text3:`Not limited to that, headless ecommerce also boosts the google page experience score( core web vitals ) which is critical for search engine rankings.`,
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743813098/search-engine-optimization-1_pcqpwv.webp"
  }
];

const UpdateSection = () => {
  return (
    <section className="updatee-section">
      <div className="update-container">

      <div className="headless-intro">
        <h3>What is Headless Development?</h3>
        <p>
          Headless development means decoupling backend with frontend. That means the backend is used for API purposes and front development and site rendering run on modern frameworks like Reactjs.
        </p>
      </div>
        {updates.map((update, index) => (
          <div
            className={`update-section ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="update-text">
              <h2>{update.title}</h2>
              <p>{update.text1}</p>
              <p>{update.text2}</p>
              <p>{update.text3}</p>
            </div>
            <div className="update-image">
              <div className="update-card">
                <img src={update.img} alt="Product" className="product-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpdateSection;
