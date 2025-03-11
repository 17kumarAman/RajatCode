
import React, { useState } from "react";
import './FAQ.css'
const FaqData = [
  {
    question: 'Why choose Kushel Digi for PHP development?',
    answer: "Kushel Digi Solutions excels in PHP web development, offering a blend of innovation, client-centric focus, and a highly skilled team to deliver tailored solutions aligning with your business goals.",
  },
  {
    question: 'How does Kushel Digi use React in PHP projects?',
    answer: 'In PHP web development, Kushel Digi harnesses React to enhance user interfaces, ensuring high performance and seamless user experiences across diverse platforms.',
  },
  {
    question: 'Advantages of Native PHP and how does Kushel Digi use it?',
    answer: 'Native PHP development provides optimal performance and seamless integration. Kushel Digi leverages this to create robust, scalable, and efficient web solutions tailored to client needs.',
  },
  {
    question: 'Key factors in choosing a PHP service provider?',
    answer: "When choosing a PHP web development provider, consider factors such as expertise, proven track record, and alignment with your business objectives for a successful partnership.",
  },
  {
    question: "Insights into PHP's compatibility with web technologies?",
    answer: "PHP is compatible with diverse web technologies, ensuring flexibility and seamless integration.",
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









