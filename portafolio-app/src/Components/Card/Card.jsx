import React, { useState } from "react";
import "./Card.css"; // Asegúrate de tener este archivo para los estilos

const Card = ({ title, icon: Icon, topText, bottomText }) => {
  const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`,
    });
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      style={{
        "--x": cursorPos.x,
        "--y": cursorPos.y,
      }}
    >
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <div className="icon-container">
          <Icon className="card-icon" /> {/* Usa el ícono como componente */}
          <div className="text-containerCard">
            <p className="top-text">{topText}</p>
            <p className="bottom-text">{bottomText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
