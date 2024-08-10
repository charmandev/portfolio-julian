// Slide.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "./Slide.css"; // Importa el archivo CSS

const Slide = () => {
  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-wrapper">
        <div className="icon-slider">
          <FaHtml5 className="icon" />
          <FaCss3Alt className="icon" />
          <FaJs className="icon" />
          <FaReact className="icon" />
          <FaNodeJs className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
