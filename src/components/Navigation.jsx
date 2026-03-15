const Navigation = ({ content, handleButtonClick, isDark, toggleTheme }) => {
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