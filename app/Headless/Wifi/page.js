"use client"
import React, { useEffect, useState } from 'react';
import './Wifi.css';
import { Quote } from 'lucide-react'; // ✅ Lucide icon

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''), 10);
    if (start === end) return;

    const totalDuration = 2000;
    const incrementTime = 20;
    const increment = end / (totalDuration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {target.startsWith('+') ? '+' : ''}
      {count}
      {target.endsWith('%') ? '%' : ''}
    </span>
  );
};

const AgilitySection = () => {
  return (
    <div className="wifi">
      <h2 className="wifi-title">Business agility accelerates revenue growth</h2>

      <div className="wifi-stats">
        <div className="wifi-stat">
          <div className="wifi-number"><AnimatedNumber target="50%" /></div>
          <div className="wifi-label">FASTER TIME TO MARKET</div>
        </div>

        <div className="wifi-stat">
          <div className="wifi-number"><AnimatedNumber target="+83%" /></div>
          <div className="wifi-label">AVERAGE ONLINE REVENUE INCREASE</div>
        </div>

        <div className="wifi-stat">
          <div className="wifi-number"><AnimatedNumber target="+60%" /></div>
          <div className="wifi-label">AVERAGE SITE SPEED INCREASE</div>
        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-icon">
          <Quote size={100} strokeWidth={2.9} />
      
        <p className="testimonial-text">
          We chose Alokai because of the out-of-the-box library with all of the components and the JavaScript frontend. This helped us save a huge amount of time for development.
        </p>
      
        </div>
        <div className="testimonial-author">
          <strong>David Tidy</strong>
          <div className="testimonial-role">Digital Product Manager at Brompton</div>
        </div>
      </div>
    </div>
  );
};

export default AgilitySection;
