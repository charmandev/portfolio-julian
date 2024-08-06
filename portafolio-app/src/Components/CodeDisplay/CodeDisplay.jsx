import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Asegúrate de que este archivo CSS esté disponible

const CodeDisplay = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, []);

  const coderCode = `
const coder = {
    name: 'Abu Said',
    skills: ['React','NextJS','Redux','Express','NestJS','MySql',
    'MongoDB','Docker','AWS'
    ],
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
        <code ref={codeRef} className="language-js">
          {coderCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
