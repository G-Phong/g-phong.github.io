import React from "react";

import "./Header.css";

import img_phong_portrait from "../assets/phong_portrait.jpg";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div>
          <h1 className="title">Gia-Phong Tran</h1>
        </div>
        {/* Circular testimonial section */}
        <div className="testimonial-container">
          <img
            src={img_phong_portrait}
            alt="Phong"
            className="testimonial-image"
          />
        </div>
      </div>
      <div className="subtitle-container">
        <h2 className="subtitle">
          Mechatronics Engineer | Embedded Systems | Multilingual | Sports and
          Chess Enthusiast
        </h2>
      </div>
    </div>
  );
}
export default Header;
