"use client"
import React from "react";
import "./Process.css";

const steps = [
  {
    number: "1",
    title: "Discovery and Strategy",
    description:
      "We kickstart every project with a thorough discovery phase. We delve into your business goals, target audience, and unique requirements. With a solid understanding in hand, we devise a comprehensive strategy tailored to your needs.",
  },
  {
    number: "2",
    title: "Architecture and Planning",
    description:
      "Our experts architect a robust headless commerce solution that aligns with your business objectives. We plan every aspect, from selecting the right technology stack to outlining the user experience.",
  },
  {
    number: "3",
    title: "Development and Integration",
    description:
      "With a solid plan in place, our skilled development team gets to work. We create the foundation of your headless commerce system, integrating all necessary components seamlessly.",
  },
  {
    number: "4",
    title: "Customization and Design",
    description:
      "We craft a visually appealing and user-friendly design that reflects your brand identity. Customization is key, and we ensure your online store stands out while providing a seamless shopping experience.",
  },
  {
    number: "5",
    title: "Testing and Quality Assurance",
    description:
      "Before launching, we rigorously test every component of your headless commerce solution. Our quality assurance team ensures that your website is bug-free, performs optimally, and is secure.",
  },
  {
    number: "6",
    title: "Deployment and Optimization",
    description:
      "We deploy your headless commerce platform, and our work doesn't end there. We continuously monitor performance, make necessary optimizations, and stay ready to adapt to changes in your business landscape.",
  },
  {
    number: "7",
    title: "Training and Support",
    description:
      "We provide training to ensure your team can manage and update your headless commerce website effectively. Our support is ongoing, and we're always here to assist with any questions or issues.",
  },
  {
    number: "8",
    title: "Growth and Scaling",
    description:
      "As your business grows, we're prepared to scale your headless commerce solution to accommodate increased traffic and new features. We're your partners for long-term success.",
  },

];

const Process = () => {
  return (
    <section className="process-section">
      <h2 className="process-title">Our Process</h2>
      <div className="process-container">
        <div className="process-line"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`process-step ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-box">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
