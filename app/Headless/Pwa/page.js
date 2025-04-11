"use client"
import React, { useState } from "react";
import "./Pwa.css";

const tabData = {
  Speed: {
    heading: "Granting webstores an unprecedented performance.",
    content1: "Headless: The decoupled front-end & back-end with API-based integrations make the platform lighter and thus significantly faster.",
    content2: "PWA: Service workers enable instant loading regardless of network connection thanks to next-level cache & requests management.",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743795855/Speed-Tab-Picture_1_cqbsnh.png",
  },
  Uniqueness: {
    heading: "Personalize your webstore without any limitations.",
    content1: "Headless : the decoupled front-end &amp; back-end with API-base integrations make the platform lighter and thus significantly faster.",
    content2: "PWA: service workers enable instant loading regardless of network connection thanks to next-level cache & requests management.",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854131/Uniqueness-Tab-Picture.png_1_tqkhcb.png",
  },
  Agility: {
    heading: "Feel the Freedom of experimentation.",
    content1: "Headless : the decoupled front-end &amp; back-end with API-base integrations make the platform lighter and thus significantly faster.",
    content2: "PWA: service workers enable instant loading regardless of network connection thanks to next-level cache & requests management.",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854193/Agility-Tab-Picture.png_1_zq3pfu.png",
  },
  Growth: {
    heading: "Feel the Freedom of experimentation.",
    content1: "Headless : the decoupled front-end &amp; back-end with API-base integrations make the platform lighter and thus significantly faster.",
    content2: "PWA: service workers enable instant loading regardless of network connection thanks to next-level cache & requests management.",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743854192/Growth-Tab-Picture.png_1_p1qgal.png",
  },
};

export default function HeadlessPWASection() {
  const [activeTab, setActiveTab] = useState("Speed");
  const { heading, content1, content2, image } = tabData[activeTab];

  return (
    <section className="headless-pwa">
      <div className="headless-pwa-title">
        What <span className="headless-pwa-bold">headless</span> PWAs stand for
      </div>

      <div className="headless-pwa-tabs">
        {Object.keys(tabData).map((tab) => (
          <div
            key={tab}
            className={`headless-pwa-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="headless-pwa-content">
        <div className="headless-pwa-text-section">
          <h2>{heading}</h2>
          <p>
            <span className="headless-pwa-bolld">Headless</span>: {content1}
          </p>
          <p>
            <span className="headless-pwa-bolld">PWA</span>: {content2}
          </p>
        </div>
        <div className="headless-pwa-image-section">
          <img src={image} alt={activeTab + " Preview"} />
        </div>
      </div>
    </section>
  );
}
