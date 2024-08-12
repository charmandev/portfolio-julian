import React, { useState, useEffect, useRef } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css";

const AccordionItem = ({ index, title, isActive, onClick, ref }) => {
  return (
    <div className="accordion-item" ref={ref}>
      <div className="accordion-title" onClick={() => onClick(index)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? "active" : ""}`}>
        <CodeDisplay />
      </div>
    </div>
  );
};

const ScrollableCodeDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggling logic
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = accordionRefs.current.indexOf(entry.target);

        if (entry.isIntersecting) {
          setActiveIndex(index);
        } else if (activeIndex === index) {
          setActiveIndex(null);
        }
      });
    }, options);

    accordionRefs.current.forEach((item) => observer.observe(item));

    return () => {
      accordionRefs.current.forEach((item) => observer.unobserve(item));
    };
  }, [activeIndex]);

  return (
    <div className="accordion-wrapper">
      <div className="title-wrapper">
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
          ref={(el) => (accordionRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default ScrollableCodeDisplay;
