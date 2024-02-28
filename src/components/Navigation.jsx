import React from "react";

const Navigation = ({ content, handleButtonClick }) => {
  return (
    <div className="navigation-bar">
      <div className="buttons-container">
        <button
          className={`nav-button ${content === "timeline" ? "active" : ""}`}
          onClick={() => handleButtonClick("timeline")}
        >
          My Timeline
        </button>
        <button
          className={`nav-button ${content === "projects" ? "active" : ""}`}
          onClick={() => handleButtonClick("projects")}
        >
          My Coding Projects
        </button>
        <button
          className={`nav-button ${content === "passions" ? "active" : ""}`}
          onClick={() => handleButtonClick("passions")}
        >
          My Passions
        </button>
      </div>
    </div>
  );
};

export default Navigation;
