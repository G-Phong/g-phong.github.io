import Timeline from "./Timeline";
import Projects from "./Projects";
import Passions from "./Passions";

import Footer from "./Footer";

const Content = ({ content }) => {
  return (
    <div className="content-container">
      {content === "about" && <Passions />}
      {content === "xp" && <Timeline />}
      {content === "projects" && <Projects />}
      <Footer />
    </div>
  );
};

export default Content;
