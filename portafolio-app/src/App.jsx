import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contenido">
        <div className="Texto">
          <p>
            Hola, <br /> <span className="text-celeste">Soy Julian.</span>{" "}
            <br />
            <span className="text-rosa"> Devops Engineer</span> <br /> And
            <span className="text-rosa"> Developer</span>
          </p>
          <div className="botones">
            <button className="boton">Contactame</button>
            <button className="boton">Download CV</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
