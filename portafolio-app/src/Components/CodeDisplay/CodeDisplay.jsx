import React from "react";
import "./CodeDisplay.css"; // Asegúrate de tener este archivo CSS para los estilos

const CodeDisplay = () => {
  const coderCode = `
const coder = {
    name: 'Abu Said',
    skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
`;

  return (
    <div className="contenedorCodigo">
      <pre>
        <code>{coderCode}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
