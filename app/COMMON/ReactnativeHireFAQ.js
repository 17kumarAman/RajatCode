import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  
  {
    question: 'Can I hire developers of my choice?',
    answer: 'Yes, hiring the right developers for your project is a key advantage.',
  },
  {
    question: 'Why is React Native the best?',
    answer: 'React Native offers cross-platform development, efficiency, and a native-like experience.',
  },
  {
    question: "Do you have experience in integrating native features into React Native apps?",
    answer: 'Yes, our agency has expertise in seamlessly integrating native device features.',
  },
  {
    question: 'Why hire dedicated React Native developers?',
    answer: "Dedicated developers ensure focused attention on your project.",
  },
  {
    question: 'What is the process for hiring a React Native developer?',
    answer: "Contact us, and we'll guide you through the hiring process.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqr-section">
      <h2>Frequently Asked Questions ?</h2>
      <div className="faqr-container">
        {FaqData.map((item, index) => (
          <div className={`faqr-item ${activeIndex === index ? "expanded" : ""}`} key={index}>
            <div className="faqr-question">
              <h4 className="questionFAQR">{item.question}</h4>
              <button className="toggle-btn" onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <p className="faqr-answer">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;












