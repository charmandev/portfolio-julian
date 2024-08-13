// Slide.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "./Slide.css";

const Slide = () => {
  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-wrapper">
        <div className="icon-slider">
          <div className="icon-item">
            <FaHtml5 className="icon" />
            <div className="icon-description">HTML5</div>
          </div>
          <div className="icon-item">
            <FaCss3Alt className="icon" />
            <div className="icon-description">CSS3</div>
          </div>
          <div className="icon-item">
            <FaJs className="icon" />
            <div className="icon-description">JavaScript</div>
          </div>
          <div className="icon-item">
            <FaReact className="icon" />
            <div className="icon-description">React</div>
          </div>
          <div className="icon-item">
            <FaNodeJs className="icon" />
            <div className="icon-description">Node.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
