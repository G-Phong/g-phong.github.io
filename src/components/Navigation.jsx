const Navigation = ({ content, handleButtonClick, isDark, toggleTheme }) => {
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
      <div className="theme-switch-wrapper">
        <span className="theme-label">🌙</span>
        <label className="theme-switch">
          <input type="checkbox" checked={!isDark} onChange={toggleTheme} />
          <span className="theme-slider"></span>
        </label>
        <span className="theme-label">☀️</span>
      </div>
    </div>
  );
};

export default Navigation;