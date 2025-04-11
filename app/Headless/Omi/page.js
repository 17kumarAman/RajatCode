"use client"
import React from 'react';
import './Omi.css';

const StorefrontSection = () => {
  return (
    <section className="storefront-section">
      <div className="storefront-container">
        
        {/* Left Column with Single Image */}
        <div className="storefront-left">
          <img
            className="storefront-image"
            src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743788144/collage-code-headless-product-card-vercel_1_qt3ton.png"
            alt="Product Card Collage"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="storefront-right">
          <h2>Launch your next storefront with blazing-fast performance.</h2>
          <p>
            Next.js commerce delivers the perfect balance of speed-to-market, site performance, 
            and memorable customer experience. That's why we've built Catalyst. Catalyst allows you 
            to take advantage of all of these benefits with the flexibility and support of an ecommerce 
            platform by offering a composable reference architecture in Next.js with React Server Components 
            and our GraphQL storefront API.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorefrontSection;
