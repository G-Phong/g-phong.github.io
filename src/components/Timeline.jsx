import React, { useState } from "react";
import "../App.css";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import bertrandtImage from "../assets/bertrandt.jpg";
import germanFrenchImage from "../assets/german_french.jpg";
import javaImage from "../assets/java.png";
import kitImage from "../assets/kit.png";
import ntuaImage from "../assets/ntua.png";
import pbbImage from "../assets/pbb.png";
import phongImage from "../assets/phong.jpg";
import tumImage from "../assets/tum.png";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  const [content, setContent] = useState("timeline");

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  const handleButtonClick = (content) => {
    setContent(content);
  };

  return (
    <VerticalTimeline>
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";

        let image;
        switch (element.image) {
          case "bertrandt.jpg":
            image = bertrandtImage;
            break;
          case "german_french.jpg":
            image = germanFrenchImage;
            break;
          case "java.png":
            image = javaImage;
            break;
          case "kit.png":
            image = kitImage;
            break;
          case "ntua.png":
            image = ntuaImage;
            break;
          case "pbb.png":
            image = pbbImage;
            break;
          case "phong.jpg":
            image = phongImage;
            break;
          case "tum.png":
            image = tumImage;
            break;
          default:
            image = phongImage; // Default image
        }

        return (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="custom-date" // Added className for the date
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
            <div className="timeline-content">
              <div className="image-container">
                <img src={image} alt="Profile" className="profile-image" />
              </div>
              <div className="content-text">
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {/* {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )} */}
              </div>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default Timeline;
