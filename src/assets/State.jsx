import React, { useState } from "react";

function State() {
  const [isExpanded, setisExpanded] = useState(true);
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sint
  odio numquam, veritatis earum, impedit magni consequuntur architecto
  officiis quia magnam alias optio nemo nisi. Cum quis commodi deleniti
  debitis.`;
  const handleOnclick = function (maxlegnth) {
    text.slice(0, maxlegnth);
  };

  return (
    <>
      <p>{text}</p>
      <button onClick={handleOnclick}>more</button>
    </>
  );
}

export default State;
