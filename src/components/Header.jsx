import "./Header.css";

import img_phong_portrait from "../assets/phong_portrait.jpg";

function Header({ isDark, toggleTheme }) {
  return (
    <div>
      <div className="header-container">
        <div className="header-actions">
          <div className="theme-switch-wrapper">
            <span className="theme-label">🌙</span>
            <label className="theme-switch">
              <input type="checkbox" checked={!isDark} onChange={toggleTheme} />
              <span className="theme-slider"></span>
            </label>
            <span className="theme-label">☀️</span>
          </div>
          <a href="/CV_2026_Tran.pdf" download className="cv-download-btn">
            ↓ Download CV
          </a>
        </div>
        <div className="testimonial-container">
          <img
            src={img_phong_portrait}
            alt="Phong"
            className="testimonial-image"
          />
        </div>
        <h1 className="title">Gia-Phong Tran</h1>
      </div>
      <div className="subtitle-container">
        <h2 className="subtitle">
          Embedded Linux Engineer | C++ & IoT | Marathon Runner | Chess Enthusiast
        </h2>
      </div>
    </div>
  );
}
export default Header;
