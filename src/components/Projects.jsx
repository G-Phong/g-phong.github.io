import React from "react";
import { ProductCard } from "react-ui-cards";
import img_beaglebone from "../assets/beaglebone.jpg";
import img_splitwise from "../assets/splitwise.png";
import img_led_matrix from "../assets/led_matrix.png";
import img_xmc4500 from "../assets/xmc4500.png";
import img_xai_app from "../assets/xai_app.png";

import TypingEffect from "./TypingEffect";

function Projects() {
  return (
    <div className="projects">
      <TypingEffect text="My Coding Projects" />

      <div className="card-container">
        <ProductCard
          productName="Expense Tracker"
          photos={[img_splitwise]}
          description="Terminal-based Splitwise Clone - made in the TUM course Advanced Programming"
          url="https://github.com/G-Phong/Expense-Tracker"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="Web App: Explainable AI"
          photos={[img_xai_app]}
          description="Master thesis TUM-fml 2023: XAI Model for a CP-based Shift Scheduling Algorithm"
          url="https://github.com/G-Phong/XAI-scheduling-model"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="LED Matrix Control"
          photos={[img_led_matrix]}
          description="Programming a LED matrix within the TUM project UNICARagil"
          url="https://github.com/G-Phong/SA-LED-matrix-UNICARagil"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="Real-Time Microcontroller Programming"
          photos={[img_beaglebone]}
          description="Programming of a BeagleBone microcontroller within the TUM course Echtzeitfähige Geräte und Roboter"
          url="https://github.com/G-Phong/EGR-microcontroller"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="Embedded Systems & Cybersecurity"
          photos={[img_xmc4500]}
          description="Exercises within the TUM course Embedded Systems and Security"
          url="https://github.com/G-Phong/ESS-Cybersecurity"
          buttonText="GitHub Repo"
        ></ProductCard>
      </div>
    </div>
  );
}

export default Projects;
