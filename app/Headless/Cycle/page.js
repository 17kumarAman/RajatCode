"use client"
import React from "react";
import "./Cycle.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPencilAlt, FaPaintBrush, FaProjectDiagram, FaCogs } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    icon: <FaPencilAlt className="service-icon" />,
    title: "Unlimited Customization",
    description:
      "Define and align your project’s vision with internal goals using our business analysis services. Our Business Analysts will assess your business & user needs, define project scope, and formalize requirements.",
  },
  {
    icon: <FaPaintBrush className="service-icon" />,
    title: "Omnichannel Experience",
    description: "UI/UX design services for engaging and efficient digital products.",
  },
  {
    icon: <FaProjectDiagram className="service-icon" />,
    title: "Faster Innovation",
    description: "Robust architecture design for scalable software solutions.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Sign Up via Social Media",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "CMS Integration",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Personalization",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Advanced Search and Navigation",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Robust Security and Compliance",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Multi-currency and Multi-language Support",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Marketing Automation Integration",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "API-first Architecture",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: " Microservices Architecture",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Headless CMS Integration",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Progressive Web App (PWA) Support",
    description: "Full-cycle development tailored to business goals and needs.",
  },
  {
    icon: <FaCogs className="service-icon" />,
    title: "Advanced Analytics and Reporting",
    description: "Full-cycle development tailored to business goals and needs.",
  },
];

const FullCycleEngineering = () => {
  return (
    <div className="full-cycle-container">
      <div className="header-with-buttons">
        <h2 className="full-cycle-heading">
        Headless Commerce Features
        </h2>
        <div className="arrow-controls">


<button className="arrow-btn my-prev-btn"><FaArrowLeft /></button>
<button className="arrow-btn my-next-btn"><FaArrowRight /></button>

        </div>
      </div>

      <p className="full-cycle-subtext">
      The headless strategy lets you connect the best possible backend tech stack with suitable frontend platforms. So you can have outstanding features coupled with captivating user interface and experience.
      </p>

      <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={4} // Default view
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: { slidesPerView: 1.2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 }, // Large screens = 5 cards
  }}
  navigation={{
    nextEl: ".my-next-btn",
    prevEl: ".my-prev-btn",
  }}
  className="service-slider"
>

        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              {/* <p className="service-description">{service.description}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullCycleEngineering;
