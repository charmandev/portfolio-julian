import React, { useState } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css";

const AccordionItem = ({ index, title, isActive, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={() => onClick(index)}>
      {title}
    </div>
    <div className={`accordion-content ${isActive ? "active" : ""}`}>
      <CodeDisplay />
    </div>
  </div>
);

const ScrollableCodeDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      <div className="title-wrapper">
        <div className="line"></div>

        <h3 className="projects-title">Proyectos</h3>
        <div className="line"></div>
      </div>
      {[0, 1, 2].map((index) => (
        <AccordionItem
          key={index}
          index={index}
          title={`Código ${index + 1}`}
          isActive={activeIndex === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default ScrollableCodeDisplay;
