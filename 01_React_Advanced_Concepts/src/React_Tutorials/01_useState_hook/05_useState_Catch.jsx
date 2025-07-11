import React, { useState } from "react";

const UseStateCatch = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setTimeout((currentState) => {
    //   console.log("clicked");
    //   setValue(value + 1);
    // }, 3000);

    setTimeout(() => {
      setValue((currentState) => {
        const updatedState = currentState + 1;
        return updatedState;
      }, 3000);
      console.log("clicked");
    }, 3000);
  };

  return (
    <>
      <h1>UseStateCatch</h1>
      <h2>{value}</h2>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  );
};

export default UseStateCatch;
