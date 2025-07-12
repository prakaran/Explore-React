import React, { useState } from "react";

let x = 1;
const UseStateCatch = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // console.log(value);

    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   console.log(newState);
    //   return newState;
    // });

    setTimeout(() => {
      console.log("clicked");
      setValue((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
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
