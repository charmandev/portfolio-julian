import React from "react";
import "./InfoProfesional.css"; // Asegúrate de que este archivo CSS exista
import Card from "../Card/Card";
import { FaLaptop } from "react-icons/fa";
const InfoProfesional = () => {
  return (
    <div className="ContenedorGeneralInfo">
      <h3>Experiencias</h3>
      <div className="infoProfesionalContenedor">
        <img src="https://via.placeholder.com/250" alt="" />
        <div className="CardContenedor">
          {" "}
          <Card
            title="Card Title"
            icon={FaLaptop} // Pasa el ícono como componente
            topText="Top Text"
            bottomText="Bottom Text"
          />{" "}
          <Card
            title="Card Title"
            icon={FaLaptop} // Pasa el ícono como componente
            topText="Top Text"
            bottomText="Bottom Text"
          />{" "}
          <Card
            title="Card Title"
            icon={FaLaptop} // Pasa el ícono como componente
            topText="Top Text"
            bottomText="Bottom Text"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default InfoProfesional;
