// IconItem.jsx
import React from "react";
import "./IconItem.css"; // Asegúrate de tener este archivo CSS

const IconItem = ({ icon: Icon, description, color }) => {
  return (
    <div className={`icon-item ${color}`}>
      <div className="icon-container">
        {/* Si el icono es una función (imagen), lo renderizamos directamente */}
        {typeof Icon === "function" ? (
          <Icon />
        ) : (
          <div className="icon-img">{Icon}</div>
        )}
      </div>
      <div className="icon-description">{description}</div>
    </div>
  );
};

export default IconItem;
