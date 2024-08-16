import React from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa"; // Importa los íconos necesarios
import "./Footer.css"; // Asegúrate de que el archivo CSS esté en el mismo directorio o ajusta la ruta

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Developer Portfolio by Julian M. Gonzalez</p>
      <div className="footer-links">
        <a href="#" className="footer-link">
          <FaStar className="FooterIcon" />
          <span className="text">Star</span>
        </a>
        <a href="#" className="footer-link">
          <FaCodeBranch className="FooterIcon" />
          <span className="text">Fork</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
