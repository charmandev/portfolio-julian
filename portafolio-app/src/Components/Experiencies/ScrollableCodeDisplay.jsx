import React, { useState, useEffect, useRef } from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css"; // Sigue usando el archivo CSS actual

const ScrollableCodeDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Intersecta con el viewport
      rootMargin: "0px",
      threshold: 0.1, // Cuánto del elemento debe estar visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = accordionRefs.current.indexOf(entry.target);

        if (entry.isIntersecting) {
          setActiveIndex(index); // Activa el acordeón actual
        } else if (activeIndex === index) {
          setActiveIndex(null); // Desactiva el acordeón si sale del viewport
        }
      });
    }, options);

    accordionRefs.current.forEach((item) => observer.observe(item));

    return () => {
      accordionRefs.current.forEach((item) => observer.unobserve(item));
    };
  }, [activeIndex]);

  return (
    <div className="accordion-container">
      <div
        className="accordion-item"
        ref={(el) => (accordionRefs.current[0] = el)}
      >
        <div className="accordion-title">Código 1</div>
        <div
          className={`accordion-content ${activeIndex === 0 ? "active" : ""}`}
        >
          <CodeDisplay />
        </div>
      </div>
      <div
        className="accordion-item"
        ref={(el) => (accordionRefs.current[1] = el)}
      >
        <div className="accordion-title">Código 2</div>
        <div
          className={`accordion-content ${activeIndex === 1 ? "active" : ""}`}
        >
          <CodeDisplay />
        </div>
      </div>
      <div
        className="accordion-item"
        ref={(el) => (accordionRefs.current[2] = el)}
      >
        <div className="accordion-title">Código 3</div>
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
