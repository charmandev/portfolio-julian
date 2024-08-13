// Slide.jsx
import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import IconItem from "../IconItem/IconItem"; // Asegúrate de importar el componente
import "./Slide.css"; // Importa el archivo CSS para el componente Slide

const Slide = () => {
  const sliderRef = useRef(null);

  const handleIconClick = () => {
    if (sliderRef.current) {
      sliderRef.current.classList.add("paused");
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.classList.remove("paused");
        }
      }, 1000); // Detén el slider por 1 segundo
    }
  };

  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-wrapper">
        <div className="icon-slider" ref={sliderRef} onClick={handleIconClick}>
          <IconItem icon={FaHtml5} description="HTML5" color="html5" />
          <IconItem icon={FaCss3Alt} description="CSS3" color="css3" />
          <IconItem icon={FaJs} description="JavaScript" color="js" />
          <IconItem icon={FaReact} description="React" color="react" />
          <IconItem icon={FaNodeJs} description="Node.js" color="nodejs" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
