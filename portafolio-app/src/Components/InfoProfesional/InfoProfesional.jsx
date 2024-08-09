import React from "react";
import "./InfoProfesional.css";
import Card from "../Card/Card";
import { FaLaptop } from "react-icons/fa";
import compuImage from "../../assets/compu.png";

const InfoProfesional = () => {
  return (
    <div className="ContenedorGeneralInfo">
      <div className="titleContainer">
        <h3>Experiencias</h3>
      </div>{" "}
      <div className="infoProfesionalContenedor">
        <div className="compImageWrapper">
          <img src={compuImage} alt="Computadora" className="compuImage" />
        </div>
        <div className="CardContenedor">
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

export default InfoProfesional;
