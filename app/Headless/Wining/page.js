"use client"
import React from "react";
import "./Wining.css";

export default function StepSection() {
  return (
    <section className="step-section">
        <div className="tayp">
      <h2 className="step-title">
        Be on the winning side of eCommerce <br />
        with a right-fit headless solution.
      </h2>
      <p className="step-subtitle">
        Take 4 steps to choose the best approach for your business:
      </p>

      <div className="step-cards">
        <div className="step-card">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279665_at9s8v.png" alt="Submit a form" />
          <span className="stepp-number">1</span>
          <p className="step-text">Submit a form</p>
        </div>

        <div className="step-card">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Phone-Guide-Icon_1_yisahz.png" alt="Jump on a call" />
          <span className="stepp-number">2</span>
          <p className="step-text">Jump on a call with us</p>
        </div>

        <div className="step-card">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279668_m7aelj.png" alt="Free consultation" />
          <span className="stepp-number">3</span>
          <p className="step-text">Get a free consultation</p>
        </div>

        <div className="step-card">
          <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743799256/Group_1171279672_qanrno.png" alt="Project estimate" />
          <span className="stepp-number">4</span>
          <p className="step-text">Receive a project estimate</p>
        </div>
      </div>

      <button className="connect-button">LET’S CONNECT →</button>
      </div>
    </section>
  );
}