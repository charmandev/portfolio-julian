import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CodeDisplay from "./Components/CodeDisplay/CodeDisplay";
import About from "./Components/Routes/About";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaUserFriends,
  FaDownload,
} from "react-icons/fa";
import Button from "./Components/Button/Button";
import "./App.css";

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
          Hola, <br /> <span className="text-celeste">Soy Julian.</span> <br />
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
    <div className="Info"></div>
  </div>
);

export default App;
