// NewIconItem.jsx
import React from "react";
import "./IconItem.css"; // Asegúrate de tener este archivo CSS

const NewIconItem = ({ icon: Icon, description, color }) => {
  return (
    <div className="new-icon-item" style={{ backgroundColor: color }}>
      <div className="new-icon-container">
        {typeof Icon === "function" ? (
          <Icon />
        ) : (
          <div className="new-icon-img">{Icon}</div>
        )}
      </div>
      <div className="new-icon-description">{description}</div>
    </div>
  );
};

export default NewIconItem;
