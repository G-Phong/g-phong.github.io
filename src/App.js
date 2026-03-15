import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [content, setContent] = useState("timeline");
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out-cubic", offset: 80 });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleButtonClick = (content) => {
    setContent(content);
    setTimeout(() => AOS.refresh(), 50);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div>
      <ParticlesBackground isDark={isDark} />
      <Header />
      <Navigation
        content={content}
        handleButtonClick={handleButtonClick}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Content content={content} />
    </div>
  );
}

export default App;