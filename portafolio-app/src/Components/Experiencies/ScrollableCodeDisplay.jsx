import React from "react";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ScrollableCodeDisplay.css"; // Importa el archivo CSS

const ScrollableCodeDisplay = () => {
  return (
    <div className="scrollable-container">
      <div className="scrollable-content">
        <div className="code-display-container">
          <div className="code-item">
            <CodeDisplay />
          </div>
          <div className="code-item">
            <CodeDisplay />
          </div>
          <div className="code-item">
            <CodeDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableCodeDisplay;
