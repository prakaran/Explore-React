import React, { useState } from "react";

const CodeExample = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((currentState) => currentState + 1);
  };

  //   const myFunction = () => {
  //     setCount(count + 1);
  //     console.log("MyFunction is here.");
  //   };
  //   myFunction();

  setCount(count + 1);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default CodeExample;
