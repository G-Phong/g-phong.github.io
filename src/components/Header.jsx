import React from "react";

import "./Header.css";

import img_phong_portrait from "../assets/phong_portrait.jpg";

function Header() {
  return (
    <div>
      <div className="header-container">
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
