import React, { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";

const CollapsibleText = ({ text }) => {
  const [showAllText, setShowAllText] = useState(false);
  const [maxChars, setMaxChars] = useState(100);
  const [isTextTooShort, setIsTextTooShort] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxChars(50); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setMaxChars(100); // Medium screens
      } else {
        setMaxChars(200); // Desktop screens
      }
    };

    // Set initial maxChars on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsTextTooShort(text.length <= maxChars);
  }, [text, maxChars]);

  const toggleShowAllText = () => {
    setShowAllText(!showAllText);
  };

  // Check if text is defined and is a string
  if (typeof text !== "string") {
    return null; // Or handle the case where text is not valid
  }

  const truncatedText = text.substring(0, maxChars);
  const fullText = text;

  return (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: showAllText ? fullText : truncatedText,
        }}
      />
      {!isTextTooShort && (
        <button
          onClick={toggleShowAllText}
          className={showAllText ? "dark-collapse" : "dark-expand"}
        >
          {showAllText ? <GoTriangleUp /> : "..."}
        </button>
      )}
    </>
  );
};

export default CollapsibleText;
