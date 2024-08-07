import React from "react";
import "./CodeDisplay.css";

const codeString = `
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

const syntaxHighlight = (code) => {
  const patterns = {
    keyword: /\b(const|function|return|this|true|false)\b/g,
    variable: /\b(coder)\b/g,
    operator: /[=,:{}[\]()&;]/g,
    string: /'[^']*'/g,
    property:
      /\b(name|skills|hardWorker|quickLearner|problemSolver|hireable|length)\b/g,
    boolean: /\b(true|false)\b/g,
    number: /\b(\d+)\b/g,
    bracket: /[\[\]{}()]/g,
  };

  // No need to escape characters here
  return code.replace(
    new RegExp(
      Object.values(patterns)
        .map((pattern) => pattern.source)
        .join("|"),
      "g"
    ),
    (match) => {
      for (const [key, pattern] of Object.entries(patterns)) {
        if (pattern.test(match)) {
          return `<span class="${key}">${match}</span>`;
        }
      }
      return match;
    }
  );
};

const CodeDisplay = () => {
  return (
    <div className="code-container">
      <div className="code-header">
        <span className="circle red"></span>
        <span className="circle yellow"></span>
        <span className="circle green"></span>
      </div>
      <pre className="code-block">
        <code
          dangerouslySetInnerHTML={{ __html: syntaxHighlight(codeString) }}
        />
      </pre>
    </div>
  );
};

export default CodeDisplay;
