import React from "react";
import "./ProfileSection.css";
import perfilJulian from "../../assets/PerfilJulian.png"; // Ajusta la ruta si es necesario

const ProfileSection = () => {
  return (
    <div className="contenedor">
      <div className="text-container">
        <h2 className="title">WHO I AM?</h2>
        <p className="description">
          My name is ABU SAID. I am a professional and enthusiastic programmer
          in my daily life. I am a quick learner with a self-learning attitude.
          I love to learn and explore new technologies and am passionate about
          problem-solving. I love almost all the stacks of web application
          development and love to make the web more open to the world. My core
          skill is based on JavaScript and I love to do most of the things using
          JavaScript. I am available for any kind of job opportunity that suits
          my skills and interests.
        </p>
      </div>
      <div className="image-container">
        <img src={perfilJulian} alt="Perfil de Julian" />
      </div>
    </div>
  );
};

export default ProfileSection;
