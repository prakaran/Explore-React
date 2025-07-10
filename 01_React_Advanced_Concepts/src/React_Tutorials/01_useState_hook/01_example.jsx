import React, { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>ErrorExample</div>
      <h1>{count}</h1>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
