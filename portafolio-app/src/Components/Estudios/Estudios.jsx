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
    </div>
  );
};

export default Estudios;
