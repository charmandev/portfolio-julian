import React from "react";
import "./Badge.css"; // Archivo de estilos
import githubCertification from "../../assets/githubCertification.png";
import actionCertification from "../../assets/ActionCertification.png";

const Badges = () => {
  return (
    <div className="badges-section">
      <h2 className="badges-title">Badges</h2>
      <div className="badges-container">
        <div className="badge">
          <img src={githubCertification} alt="GitHub Certification" />
          <p className="badge-title">GitHub Certification</p>
        </div>
        <div className="badge">
          <img src={actionCertification} alt="Action Certification" />
          <p className="badge-title">Action Certification</p>
        </div>
      </div>
    </div>
  );
};

export default Badges;
