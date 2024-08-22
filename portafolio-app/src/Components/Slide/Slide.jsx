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

// Define los colores para cada tecnología
const technologyColors = {
  HTML: "#E34F26", // Ejemplo de color para HTML
  CSS: "#1572B6", // Ejemplo de color para CSS
  JavaScript: "#F7DF1E", // Ejemplo de color para JavaScript
  React: "#61DAFB", // Ejemplo de color para React
  AWS: "#232F3E", // Ejemplo de color para AWS
  Bash: "#4EAA25", // Ejemplo de color para Bash
  CI_CD: "#D4AC0D", // Ejemplo de color para CI/CD
  Docker: "#2496ED", // Ejemplo de color para Docker
  GitHubActions: "#2088FF", // Ejemplo de color para GitHub Actions
  Kubernetes: "#326CE5", // Ejemplo de color para Kubernetes
  Nodejs: "#8CC84B", // Ejemplo de color para Node.js
  Python: "#306998", // Ejemplo de color para Python
  Terraform: "#7B42BC", // Ejemplo de color para Terraform
};

const Slide = () => {
  const sliderRef = useRef(null);

  return (
    <div className="slide-container">
      <h2>Skills</h2>
      <div className="icon-grid" ref={sliderRef}>
        <IconItem
          icon={<img src={htmlIcon} alt="HTML" className="icon-img" />}
          description="HTML"
          color={technologyColors.HTML}
        />
        <IconItem
          icon={<img src={cssIcon} alt="CSS" className="icon-img" />}
          description="CSS"
          color={technologyColors.CSS}
        />
        <IconItem
          icon={<img src={jsIcon} alt="JavaScript" className="icon-img" />}
          description="JavaScript"
          color={technologyColors.JavaScript}
        />
        <IconItem
          icon={<img src={reactIcon} alt="React" className="icon-img" />}
          description="React"
          color={technologyColors.React}
        />
        <IconItem
          icon={<img src={awsIcon} alt="AWS" className="icon-img" />}
          description="AWS"
          color={technologyColors.AWS}
        />
        <IconItem
          icon={<img src={bashIcon} alt="Bash" className="icon-img" />}
          description="Bash"
          color={technologyColors.Bash}
        />
        <IconItem
          icon={<img src={cicdIcon} alt="CI/CD" className="icon-img" />}
          description="CI/CD"
          color={technologyColors.CI_CD}
        />
        <IconItem
          icon={<img src={dockerIcon} alt="Docker" className="icon-img" />}
          description="Docker"
          color={technologyColors.Docker}
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
          color={technologyColors.GitHubActions}
        />
        <IconItem
          icon={
            <img src={kubernetesIcon} alt="Kubernetes" className="icon-img" />
          }
          description="Kubernetes"
          color={technologyColors.Kubernetes}
        />
        <IconItem
          icon={<img src={nodejsIcon} alt="Node.js" className="icon-img" />}
          description="Node.js"
          color={technologyColors.Nodejs}
        />
        <IconItem
          icon={<img src={pythonIcon} alt="Python" className="icon-img" />}
          description="Python"
          color={technologyColors.Python}
        />
        <IconItem
          icon={
            <img src={terraformIcon} alt="Terraform" className="icon-img" />
          }
          description="Terraform"
          color={technologyColors.Terraform}
        />
      </div>
    </div>
  );
};

export default Slide;
