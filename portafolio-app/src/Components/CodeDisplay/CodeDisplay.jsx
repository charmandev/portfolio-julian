import React from "react";
import "./CodeDisplay.css";

const syntaxHighlight = (code) => {
  if (!code) return ""; // Retorna un string vacío si code es undefined o null

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

const CodeDisplay = ({ codeString = "" }) => {
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
