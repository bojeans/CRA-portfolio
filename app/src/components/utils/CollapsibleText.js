import React, { useState, useEffect } from "react";

const ExpandableText = ({ text }) => {
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

  return (
    <div>
      <p>
        {showAllText ? text : `${text.substring(0, maxChars)} `}
        {!showAllText && (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={toggleShowAllText}
          >
            ...
          </span>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;
