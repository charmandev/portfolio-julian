import React from "react";
import "./Estudios.css";
import Card from "../Card/Card";
import { FaLaptop } from "react-icons/fa";
import estudio from "../../assets/estudio.png";
import githubCertification from "../../assets/githubCertification.png";
import actionCertification from "../../assets/ActionCertification.png";

const Estudios = () => {
  return (
    <div className="estudiosContainer">
      <div className="estudiosTitle">
        <h3>Estudios</h3>
      </div>
      <div className="estudiosContent">
        <div className="imageWrapper">
          <img src={estudio} alt="Computadora" className="estudioImage" />
        </div>
        <div className="cardWrapper">
          <Card
            title="Card Title"
            icon={FaLaptop}
            topText="Top Text"
            bottomText="Bottom Text"
          />
          <Card
            title="Card Title"
            icon={FaLaptop}
            topText="Top Text"
            bottomText="Bottom Text"
          />
          <Card
            title="Card Title"
            icon={FaLaptop}
            topText="Top Text"
            bottomText="Bottom Text"
          />
        </div>
      </div>
      <div className="estudiosTitle">
        <h3>Insignias</h3>
      </div>
      <div className="badge-container">
        <a
          href="https://www.credly.com/badges/6f44dc9f-f344-477d-82fe-9e39729d0a07/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <img
            src={githubCertification}
            alt="GitHub Certification"
            className="badge-image"
          />
        </a>
        <a
          href="https://www.credly.com/badges/6b0b7b70-b42f-433f-ab25-1ae41eea6fcb/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <img
            src={actionCertification}
            alt="Action Certification"
            className="badge-image"
          />
        </a>
      </div>
    </div>
  );
};

export default Estudios;
