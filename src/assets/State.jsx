import React, { useState } from "react";

function State() {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat eius optio accusantium quisquam odit.
  Minus animi quibusdam modi libero aliquam explicabo molestiae cum iusto. Ipsa nemo cum soluta dignissimos
  exercitationem esse excepturi ea, iusto beatae voluptate quisquam consequatur labore placeat nam nostrum
  laborum! Voluptates, saepe aut explicabo error minima exercitationem sunt quis enim nulla ipsam, dolore
  eaque nostrum odio eos! Eum excepturi culpa dolorum. Ad dicta iste velit eveniet temporibus. Saepe voluptatem
  aspernatur cumque praesentium quae doloribus maxime dolores aliquam exercitationem eaque, odit ea, ullam ex
  assumenda. Doloremque fuga totam ratione deleniti error alias saepe. Nisi unde at perferendis eum tempora
  fuga accusamus. Magni impedit quibusdam molestiae laboriosam! Blanditiis, officia incidunt ut minus quos`;

  const maxLength = 200;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText =
    isExpanded || text.length <= maxLength
      ? text
      : text.slice(0, maxLength) + "...";

  return (
    <>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={toggleExpand}>{isExpanded ? "less" : "more"}</button>
      )}
    </>
  );
}

export default State;
