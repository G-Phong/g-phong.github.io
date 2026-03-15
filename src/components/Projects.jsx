import { useState } from "react";
import img_beaglebone from "../assets/beaglebone.jpg";
import img_splitwise from "../assets/splitwise.png";
import img_led_matrix from "../assets/led_matrix.png";
import img_xmc4500 from "../assets/xmc4500.png";
import img_xai_app from "../assets/xai_app.png";

import img_cpp from "../assets/cpp.png";
import img_python from "../assets/python.png";
import img_c from "../assets/c.png";
import img_react from "../assets/react.png";


const ProjectCard = ({ title, photos, description, url }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClick = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="project-card">
      <div className="project-photo-container" onClick={handleClick} title="Click to cycle images">
        <img src={photos[photoIndex]} alt={title} className="project-photo" />
        {photos.length > 1 && <span className="photo-counter">{photoIndex + 1}/{photos.length}</span>}
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-action">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects">
      <h2 className="section-title" data-aos="fade-up">My Coding Projects</h2>

      <div className="card-container">
        <div data-aos="fade-up" data-aos-delay="0" style={{width: "100%", maxWidth: "900px"}}>
          <ProjectCard
            title="Real-Time Programming"
            photos={[img_beaglebone, img_c]}
            description="Programming of a BeagleBone microcontroller — low-level coding with C"
            url="https://github.com/G-Phong/EGR-microcontroller"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" style={{width: "100%", maxWidth: "900px"}}>
          <ProjectCard
            title="Embedded Security"
            photos={[img_xmc4500, img_c]}
            description="Exploiting vulnerabilities on a microcontroller — low-level coding with C"
            url="https://github.com/G-Phong/ESS-Cybersecurity"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" style={{width: "100%", maxWidth: "900px"}}>
          <ProjectCard
            title="LED Matrix Control"
            photos={[img_led_matrix, img_cpp]}
            description="Programming a LED matrix for an autonomous vehicle — C++ and a ROS-like Framework"
            url="https://github.com/G-Phong/SA-LED-matrix-UNICARagil"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="300" style={{width: "100%", maxWidth: "900px"}}>
          <ProjectCard
            title="Expense Tracker"
            photos={[img_splitwise, img_cpp]}
            description="Terminal-based Splitwise Clone — written in C++"
            url="https://github.com/G-Phong/Expense-Tracker"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" style={{width: "100%", maxWidth: "900px"}}>
          <ProjectCard
            title="XAI Web App"
            photos={[img_xai_app, img_python, img_react]}
            description="Master thesis 2023: Explainable AI for Preference-based Shift Scheduling — Python Flask and React"
            url="https://github.com/G-Phong/XAI-scheduling-model"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;