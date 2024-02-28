import React from "react";

import Timeline from "./Timeline";
import Projects from "./Projects";
import Passions from "./Passions";

import Footer from "./Footer";

const Content = ({ content }) => {
  return (
    <div className="content-container">
      {content === "timeline" && <Timeline />}
      {content === "projects" && <Projects />}
      {content === "passions" && <Passions />}
      <Footer />
    </div>
  );
};

export default Content;
