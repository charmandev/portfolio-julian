import React from "react";
import "./ProfileSection.css";
import perfilJulian from "../../assets/PerfilJulian.png"; // Ajusta la ruta si es necesario

const ProfileSection = () => {
  return (
    <div className="contenedor">
      <div className="text-container">
        <h2 className="title">WHO I AM?</h2>
        <p className="description">
          I am a DevOps engineer with a passion for learning and applying new
          technologies. I specialize in automations aligned with the software
          developemnt life cycle and Infrastructure as Code (IaC) practices,
          with experience in implementing solutions using Docker and managing
          cloud services. I am focused on growth in artificial intelligence and
          DevSecOps security, integrating security practices throughout the
          development cycle. My goal is to continue improving my skills and
          contribute innovative solutions that optimize development and
          operations processes, ensuring the continuous and secure delivery of
          products and services.
        </p>
      </div>
      <div className="image-container">
        <img
          src={perfilJulian}
          alt="Perfil de Julian"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
