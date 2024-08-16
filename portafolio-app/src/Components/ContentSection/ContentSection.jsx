import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaUserFriends,
  FaDownload,
} from "react-icons/fa";
import Button from "../Button/Button";
import CodeDisplay from "../CodeDisplay/CodeDisplay";
import "./ContentSection.css";

const codeString = `
const coder = {
  name: 'Julian M. Gonzalez',
  skills: ['Docker', 'AWS', 'Github Actions', 'React', 'Terraform', 'bash', 'python', 'Nodejs', 'CI/CD', 'Kubernetes', 'ArgoCD', 'JavaScript'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`;

const ContentSection = () => {
  return (
    <div className="contenido">
      <div className="Texto">
        <p>
          Hello, <br />{" "}
          <span className="text-celeste">I am Julian M. Gonzalez</span> <br />
          <span className="text-rosa"> DevOps Engineer</span> <br /> And
          <span className="text-rosa"> Developer</span>
        </p>

        <div className="botones">
          <a
            href="https://github.com/tu-perfil"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tu-perfil"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/tu-perfil"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/tu-numero"
            className="boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="custom-buttons">
          <Button
            text="CONTACT ME"
            icon={<FaUserFriends />}
            borderColor="rgba(255, 0, 150, 0.6)"
            onClick={() => alert("Contact Me clicked!")}
          />
          <Button
            text="GET RESUME"
            icon={<FaDownload />}
            borderColor="rgba(255, 94, 0, 0.6)"
            onClick={() => alert("Get Resume clicked!")}
          />
        </div>
      </div>
      <div className="CodeDescripcion">
        <CodeDisplay codeString={codeString} />
      </div>
    </div>
  );
};

export default ContentSection;
