import { useState } from "react";

const CollapsibleText = ({ text, maxLength }) => {
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
          <button onClick={toggleShowAllText}>
            {showAllText ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleText;
