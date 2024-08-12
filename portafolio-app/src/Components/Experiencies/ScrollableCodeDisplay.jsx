import React, { useState } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css"; // Sigue usando el archivo CSS actual

const ScrollableCodeDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(0)}>
          Experiencia 1{" "}
        </div>
        <div
          className={`accordion-content ${activeIndex === 0 ? "active" : ""}`}
        >
          <CodeDisplay />
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(1)}>
          Experiencia 2{" "}
        </div>
        <div
          className={`accordion-content ${activeIndex === 1 ? "active" : ""}`}
        >
          <CodeDisplay />
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(2)}>
          Experiencia 3{" "}
        </div>
        <div
          className={`accordion-content ${activeIndex === 2 ? "active" : ""}`}
        >
          <CodeDisplay />
        </div>
      </div>
    </div>
  );
};

export default ScrollableCodeDisplay;
