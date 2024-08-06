import React, { useState } from "react";
import "./Navbar.css"; // Asegúrate de que este archivo CSS esté correctamente importado

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar-brand">
          Julian
        </a>
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
