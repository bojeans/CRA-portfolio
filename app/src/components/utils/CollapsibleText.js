import React, { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";

const CollapsibleText = ({ text }) => {
  const [showAllText, setShowAllText] = useState(false);
  const [maxChars, setMaxChars] = useState(100); // Default value

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

  const toggleShowAllText = () => {
    setShowAllText(!showAllText);
  };

  // Check if text is defined and is a string
  if (typeof text !== "string") {
    return null; // Or handle the case where text is not valid
  }

  return (
    <>
      {showAllText ? (
        <>
          <p>{text}</p>
          <button onClick={toggleShowAllText} className="dark-collapse">
            <GoTriangleUp />
          </button>
        </>
      ) : (
        <>
          <p>{text.substring(0, maxChars)}</p>
          <button onClick={toggleShowAllText} className="dark-expand">
            ...
          </button>
        </>
      )}
    </>
  );
};

export default CollapsibleText;
