import React from "react";
import linkedIn from "../assets/linkedin_logo.jpg";
import github from "../assets/github.png";
import email from "../assets/email.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>© Gia-Phong Tran 2024</h3>
        {/* <p>Email: giaphong.tran@tum.de</p> */}
      </div>
      <div className="social-buttons">
        <a
          href="https://github.com/G-Phong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/gia-phong-tran-480577196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="mailto:giaphong.tran@tum.de" className="email-link">
          <img src={email} alt="Email" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
