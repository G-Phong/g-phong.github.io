import React from "react";
import { ProductCard } from "react-ui-cards";
import img_beaglebone from "../assets/beaglebone.jpg";
import img_splitwise from "../assets/splitwise.png";
import img_led_matrix from "../assets/led_matrix.png";
import img_xmc4500 from "../assets/xmc4500.png";
import img_xai_app from "../assets/xai_app.png";

import img_cpp from "../assets/cpp.png";
import img_python from "../assets/python.png";
import img_c from "../assets/c.png";
import img_react from "../assets/react.png";

import TypingEffect from "./TypingEffect";

function Projects() {
  return (
    <div className="projects">
      <TypingEffect text="My Coding Projects" />

      <div className="card-container">
        <ProductCard
          productName="Expense Tracker"
          photos={[img_splitwise, img_cpp]}
          description="Terminal-based Splitwise Clone - written in C++"
          url="https://github.com/G-Phong/Expense-Tracker"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="XAI Web App"
          photos={[img_xai_app, img_python, img_react]}
          description="Master thesis 2023: Explainable AI for Preference-based Shift Scheduling - Python Flask and React"
          url="https://github.com/G-Phong/XAI-scheduling-model"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="LED Matrix Control"
          photos={[img_led_matrix, img_cpp]}
          description="Programming a LED matrix for an autonomous vehicle - C++ and a ROS-like Framework"
          url="https://github.com/G-Phong/SA-LED-matrix-UNICARagil"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="Real-Time Programming"
          photos={[img_beaglebone, img_c]}
          description="Programming of a BeagleBone microcontroller - low-level coding with C"
          url="https://github.com/G-Phong/EGR-microcontroller"
          buttonText="GitHub Repo"
        ></ProductCard>

        <ProductCard
          productName="Embedded Security"
          photos={[img_xmc4500, img_c]}
          description="Exploiting vulnerabilities on a microcontroller - lowe-level coding with C"
          url="https://github.com/G-Phong/ESS-Cybersecurity"
          buttonText="GitHub Repo"
        ></ProductCard>
      </div>
    </div>
  );
}

export default Projects;
