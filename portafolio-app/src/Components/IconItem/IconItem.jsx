// IconItem.jsx
import React from "react";
import "./IconItem.css"; // Asegúrate de tener el archivo CSS para los íconos

const IconItem = ({ icon: Icon, description, color }) => {
  return (
    <div className="icon-item">
      <div className="icon-container">
        <Icon className={`icon ${color}`} />
      </div>
      <div className="icon-description">{description}</div>
    </div>
  );
};

export default IconItem;
