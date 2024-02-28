import React from "react";

import linkedIn from "../assets/linkedin_logo.jpg";
import github from "../assets/github.png";

const Header = () => {
  return (
    <div>
      <h1 className="title">Gia-Phong Tran</h1>
      <div className="subtitle-container">
        <h2 className="subtitle">
          Mechatronics Engineer | Embedded Systems | Multilingual | Sports and
          Chess Enthusiast
        </h2>
        <div className="social-buttons">
        <a href="https://github.com/G-Phong" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/gia-phong-tran-480577196/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Header;
