import React from "react";
import "./Card.css"; // Asegúrate de tener este archivo para los estilos

const Card = ({ title, icon: Icon, topText, bottomText }) => {
  return (
    <div className="card">
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
