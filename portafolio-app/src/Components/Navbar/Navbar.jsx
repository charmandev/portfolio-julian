import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Julian <br />
          <span> M. Gonzalez</span>
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
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("infoPersonal")}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("Experiences")}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("Skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("Projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("Studies")}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleSmoothScroll("BlogSeccion")}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
