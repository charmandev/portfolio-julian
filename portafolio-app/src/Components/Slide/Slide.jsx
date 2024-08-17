// Slide.jsx
import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import awsIcon from "../../assets/iconos/aws.png";
import bashIcon from "../../assets/iconos/Bash.png";
import cicdIcon from "../../assets/iconos/CICD.png";
import dockerIcon from "../../assets/iconos/Docker.png";
import githubActionsIcon from "../../assets/iconos/Github Actions.png";
import kubernetesIcon from "../../assets/iconos/Kubernetes.png";
import nodejsIcon from "../../assets/iconos/Nodejs.png";
import pythonIcon from "../../assets/iconos/python.png";
import terraformIcon from "../../assets/iconos/Terraform.png";
import IconItem from "../IconItem/IconItem"; // Asegúrate de importar el componente
import "./Slide.css"; // Importa el archivo CSS para el componente Slide

const Slide = () => {
  const sliderRef = useRef(null);

  const handleIconClick = () => {
    if (sliderRef.current) {
      sliderRef.current.classList.add("paused");
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.classList.remove("paused");
        }
      }, 1000); // Detén el slider por 1 segundo
    }
  };

  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-wrapper">
        <div className="icon-slider" ref={sliderRef} onClick={handleIconClick}>
          {/* React Icons */}
          <IconItem icon={FaHtml5} description="HTML5" color="html5" />
          <IconItem icon={FaCss3Alt} description="CSS3" color="css3" />
          <IconItem icon={FaJs} description="JavaScript" color="js" />
          <IconItem icon={FaReact} description="React" color="react" />
          <IconItem icon={FaNodeJs} description="Node.js" color="nodejs" />

          {/* Image Icons */}
          <div className="icon-item">
            <img src={awsIcon} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="icon-item">
            <img src={bashIcon} alt="Bash" />
            <p>Bash</p>
          </div>
          <div className="icon-item">
            <img src={cicdIcon} alt="CI/CD" />
            <p>CI/CD</p>
          </div>
          <div className="icon-item">
            <img src={dockerIcon} alt="Docker" />
            <p>Docker</p>
          </div>
          <div className="icon-item">
            <img src={githubActionsIcon} alt="Github Actions" />
            <p>Github Actions</p>
          </div>
          <div className="icon-item">
            <img src={kubernetesIcon} alt="Kubernetes" />
            <p>Kubernetes</p>
          </div>
          <div className="icon-item">
            <img src={nodejsIcon} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="icon-item">
            <img src={pythonIcon} alt="Python" />
            <p>Python</p>
          </div>
          <div className="icon-item">
            <img src={terraformIcon} alt="Terraform" />
            <p>Terraform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
