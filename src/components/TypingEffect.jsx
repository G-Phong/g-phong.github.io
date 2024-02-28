import React, { useState, useEffect } from "react";

function TypingEffect({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop the interval when the typing is complete
      }
    }, 150); // Adjust the typing speed here

    return () => clearInterval(interval);
  }, [text, index]);

  return <span className="typing-effect">{displayText}</span>;
}


export default TypingEffect;
