import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, icon, borderColor, onClick }) => {
  const buttonStyle = borderColor
    ? { border: `1px solid ${borderColor}`, background: "transparent" }
    : {
        border: "1px solid rgba(255, 255, 255, 0.2)",
        background: "transparent",
      };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  borderColor: "rgba(255, 255, 255, 0.2)",
  onClick: () => {},
};

export default Button;
