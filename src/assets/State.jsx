import React, { useState } from "react";

function State({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displaychildren =
    isExpanded || children.length <= maxLength
      ? children
      : children.slice(0, maxLength) + "...";

  return (
    <>
      <p>{displaychildren}</p>
      <button onClick={toggleExpand}>{isExpanded ? "less" : "more"}</button>
    </>
  );
}

export default State;
