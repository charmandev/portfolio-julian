import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import CodeDisplay from "./Components/CodeDisplay/CodeDisplay";
import ProfileSection from "./Components/ProfileSection/ProfileSection";
import About from "./Components/Routes/About";
import Slide from "./Components/Slide/Slide";
import ScrollableCodeDisplay from "./Components/Experiencies/ScrollableCodeDisplay";
import InfoProfesional from "./Components/InfoProfesional/InfoProfesional";
import Estudios from "./Components/Estudios/Estudios";
import Blogs from "./Components/Blogs/Blogs";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaUserFriends,
  FaDownload,
} from "react-icons/fa";
import Button from "./Components/Button/Button";
import Contacto from "./Components/Contacto/Contacto";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          &uarr;
        </button>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="background-container"></div>
    <div className="contenido">
      <div className="Texto">
        <p>
          Hola, <br />{" "}
          <span className="text-celeste">Soy Julian M.Gonzalez</span> <br />
          <span className="text-rosa"> Devops Engineer</span> <br /> And
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
        <CodeDisplay />
      </div>
    </div>
    <div id="infoPersonal" className="Info">
      <ProfileSection />
    </div>
    <div id="Experiences" className="infoProfesional">
      <InfoProfesional />
    </div>
    <div id="Skills" className="slideContenedor">
      <Slide />
    </div>
    <div id="Projects" className="scrollContainer">
      <ScrollableCodeDisplay />
    </div>
    <div id="Studies" className="EstudiosContainer">
      <Estudios />
    </div>
    {/* Aquí agregamos el nuevo contenedor Blog */}
    <div id="BlogSeccion" className="BlogsContainer">
      <Blogs />
    </div>

    <div className="ContactContainer">
      <Contacto />
    </div>
  </div>
);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default App;
