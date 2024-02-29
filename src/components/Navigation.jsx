import React from "react";

const Navigation = ({ content, handleButtonClick }) => {
  return (
    <div className="navigation-bar">
      <div className="buttons-container">
        <button
          className={`nav-button ${content === "timeline" ? "active" : ""}`}
          onClick={() => handleButtonClick("timeline")}
        >
          timeline.
        </button>
        <button
          className={`nav-button ${content === "projects" ? "active" : ""}`}
          onClick={() => handleButtonClick("projects")}
        >
          code.
        </button>
        <button
          className={`nav-button ${content === "passions" ? "active" : ""}`}
          onClick={() => handleButtonClick("passions")}
        >
          passions.
        </button>
      </div>
    </div>
  );
};

export default Navigation;
