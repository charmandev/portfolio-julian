import React from "react";
import "./ProfileSection.css";

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
        <img
          src="data:image/png;base64,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"
          alt="Profile"
          className="image"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
