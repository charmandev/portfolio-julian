import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProfileSection from "./Components/ProfileSection/ProfileSection";
import About from "./Components/Routes/About";
import Slide from "./Components/Slide/Slide";
import ScrollableCodeDisplay from "./Components/Experiencies/ScrollableCodeDisplay";
import InfoProfesional from "./Components/InfoProfesional/InfoProfesional";
import Estudios from "./Components/Estudios/Estudios";
import Blogs from "./Components/Blogs/Blogs";
import Contacto from "./Components/Contacto/Contacto";
import ContentSection from "./Components/ContentSection/ContentSection";
import Badges from "./Components/Badge/Badge";
import Footer from "./Components/Footer/Footer";
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
        <Footer />
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
    <ContentSection />
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
    <div className="insignias">
      <Badges />
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
