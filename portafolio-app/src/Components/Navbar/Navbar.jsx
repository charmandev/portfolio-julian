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
          className={`navbar-toggler ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Experience{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projects{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blogs{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Education{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
