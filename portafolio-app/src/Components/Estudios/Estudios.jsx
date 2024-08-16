import React from "react";
import "./Estudios.css";
import Card from "../Card/Card";
import { FaLaptop } from "react-icons/fa";
import estudio from "../../assets/estudio.png";

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
          href="https://github.com/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
            alt="GitHub Badge"
            className="badge-image"
          />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="badge-link"
        >
          <img
            src="https://img.shields.io/badge/Python-306998?style=flat&logo=python&logoColor=white"
            alt="Python Badge"
            className="badge-image"
          />
        </a>
      </div>
    </div>
  );
};

export default Estudios;
