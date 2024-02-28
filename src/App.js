import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

function App() {
  const [content, setContent] = useState("timeline");

  const handleButtonClick = (content) => {
    setContent(content);
  };

  return (
    <div>
      <Header />
      <Navigation
        content={content}
        handleButtonClick={handleButtonClick}
      />
      <Content content={content} />
    </div>
  );
}

export default App;
