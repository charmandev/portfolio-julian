import React from "react";
import "./Badge.css"; // Archivo de estilos
import githubCertification from "../../assets/githubCertification.png";
import actionCertification from "../../assets/ActionCertification.png";

const Badges = () => {
  return (
    <div className="badges-section">
      <h2 className="badges-title">Certifications</h2>
      <div className="badges-container">
        <div className="badge">
          <a
            href="https://www.credly.com/badges/6f44dc9f-f344-477d-82fe-9e39729d0a07/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubCertification} alt="GitHub Certification" />
          </a>
          <p className="badge-title">GitHub Certification</p>
        </div>
        <div className="badge">
          <a
            href="https://www.credly.com/badges/6b0b7b70-b42f-433f-ab25-1ae41eea6fcb/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={actionCertification} alt="Action Certification" />
          </a>
          <p className="badge-title">Action Certification</p>
        </div>
      </div>
    </div>
  );
};

export default Badges;
