import React, { useRef } from "react";
import IconItem from "../IconItem/IconItem";
import "./Slide.css"; // Importa el archivo CSS para el componente Slide

// Importa las imágenes
import awsIcon from "../../assets/iconos/aws.png";
import bashIcon from "../../assets/iconos/Bash.png";
import cicdIcon from "../../assets/iconos/CICD.png";
import dockerIcon from "../../assets/iconos/Docker.png";
import githubActionsIcon from "../../assets/iconos/Github Actions.png";
import kubernetesIcon from "../../assets/iconos/Kubernetes.png";
import nodejsIcon from "../../assets/iconos/Nodejs.png";
import pythonIcon from "../../assets/iconos/python.png";
import terraformIcon from "../../assets/iconos/Terraform.png";
import reactIcon from "../../assets/iconos/react.png";
import jsIcon from "../../assets/iconos/js.png";
import htmlIcon from "../../assets/iconos/html.png";
import cssIcon from "../../assets/iconos/css.png";

const Slide = () => {
  const sliderRef = useRef(null);

  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-grid" ref={sliderRef}>
        <IconItem
          icon={<img src={htmlIcon} alt="HTML" className="icon-img" />}
          description="HTML"
        />
        <IconItem
          icon={<img src={cssIcon} alt="CSS" className="icon-img" />}
          description="CSS"
        />
        <IconItem
          icon={<img src={jsIcon} alt="JavaScript" className="icon-img" />}
          description="JavaScript"
        />
        <IconItem
          icon={<img src={reactIcon} alt="React" className="icon-img" />}
          description="React"
        />
        <IconItem
          icon={<img src={awsIcon} alt="AWS" className="icon-img" />}
          description="AWS"
        />
        <IconItem
          icon={<img src={bashIcon} alt="Bash" className="icon-img" />}
          description="Bash"
        />
        <IconItem
          icon={<img src={cicdIcon} alt="CI/CD" className="icon-img" />}
          description="CI/CD"
        />
        <IconItem
          icon={<img src={dockerIcon} alt="Docker" className="icon-img" />}
          description="Docker"
        />
        <IconItem
          icon={
            <img
              src={githubActionsIcon}
              alt="GitHub Actions"
              className="icon-img"
            />
          }
          description="GitHub Actions"
        />
        <IconItem
          icon={
            <img src={kubernetesIcon} alt="Kubernetes" className="icon-img" />
          }
          description="Kubernetes"
        />
        <IconItem
          icon={<img src={nodejsIcon} alt="Node.js" className="icon-img" />}
          description="Node.js"
        />
        <IconItem
          icon={<img src={pythonIcon} alt="Python" className="icon-img" />}
          description="Python"
        />
        <IconItem
          icon={
            <img src={terraformIcon} alt="Terraform" className="icon-img" />
          }
          description="Terraform"
        />
      </div>
    </div>
  );
};

export default Slide;
