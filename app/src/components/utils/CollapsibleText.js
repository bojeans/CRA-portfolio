import { useState } from "react";

const CollapsibleText = ({ text, maxLength, buttonColor }) => {
  const [showAllText, setShowAllText] = useState(false);

  const toggleShowAllText = () => {
    setShowAllText(!showAllText);
  };

  return (
    <div>
      {text.length <= maxLength ? (
        <p>{text}</p>
      ) : (
        <div>
          <p>{showAllText ? text : `${text.substring(0, maxLength)}...`}</p>
          <button
            className="expand-button"
            style={{ color: showAllText ? "red" : "blue" }}
            onClick={toggleShowAllText}
          >
            {showAllText ? "-" : "+"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleText;
