"use client"
import "./Development.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="developmental">
      <div className="subset">
        <h2 className="developmental-title">
          Why Choose BrainSpate for Headless Commerce Solutions?
        </h2>
        <p className="developmental-subtitle">
          BrainSpate is regarded as one of the best headless commerce companies. We offer a comprehensive suite of services, from custom development to integration and testing. Our experts can help businesses of all sizes leverage the benefits of headless commerce.
        </p>

        <div className="developmental-cards">
          {[ 
            {
              title: "Shopify Headless Development",
              image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743807615/shopify-headless_czd3ql.webp",
              points: [
                "Leverage Shopify's Hydrogen & Oxygen for easy development & deployment.",
                "Build bespoke modern storefronts using React.",
                "High-Performance Headless Shopify Plus Storefronts."
              ]
            },
            {
              title: "BigCommerce Headless Development",
              image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743807614/big-headless_v7tmk5.webp",
              points: [
                "Build server-rendered storefronts using Next.js framework.",
                "Headless BigCommerce Cart & Checkout Flow.",
                "Custom Headless CMS Integration."
              ]
            },
            {
              title: "Magento Headless Development",
              image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743807615/magento-headless_obqrnt.webp",
              points: [
                "Custom UI/UX Development with React or Vue.js.",
                "Magento 2 GraphQL API Integration.",
                "Seamless Payment and Shipping API integration with Magento 2."
              ]
            },
            {
                title: "Odoo Headless Ecommerce Service",

                image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743808470/odoo-headless_wz6t4z.webp",
                points: [
                  "Front-end Framework Integration.",
                  "Odoo PWA Development with React.js.",
                  "Native app development for the Odoo website (Android & iOS)"
                ]
              },
              {
                title: "Migrate to Headless Commerce",
                image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743808470/headless-migration_ajrjl2.webp",
                points: [
                  "Data Migration and Synchronization.",
                  "API Integration and Storefront Development.",
                  "Fine-tuning website speed & performance."
                ]
              },
              {
                title: "Headless Commerce Consulting",
                image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743808470/headless-consulting_xs5dfp.webp",
                points: [
                  "Select Techstack: headless CMS, APIs, and frameworks.",
                  "Headless Performance Monitoring and Analytics",
                  "Security Audits & Compliance."
                ]
              }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="developmental-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="developmental-image-wrapper">
                <img src={item.image} alt={item.title} className="developmental-image" />
              </div>
              <h3>{item.title}</h3>
              <ul className="developmental-points-list">
                {item.points.map((point, i) => (
                  <li key={i} className="developmental-point">
                    <FaArrowRight className="developmental-icon" /> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}