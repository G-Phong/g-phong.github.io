const Navigation = ({ content, handleButtonClick }) => {
  return (
    <div className="navigation-bar">
      <div className="buttons-container">
        <button
          className={`nav-button ${content === "about" ? "active" : ""}`}
          onClick={() => handleButtonClick("about")}
        >
          about.
        </button>
        <button
          className={`nav-button ${content === "xp" ? "active" : ""}`}
          onClick={() => handleButtonClick("xp")}
        >
          journey.
        </button>
        <button
          className={`nav-button ${content === "projects" ? "active" : ""}`}
          onClick={() => handleButtonClick("projects")}
        >
          code.
        </button>
      </div>
    </div>
  );
};

export default Navigation;