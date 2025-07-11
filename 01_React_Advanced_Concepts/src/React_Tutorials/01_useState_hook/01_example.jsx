import React, { useState } from "react";

import { data } from "../../data";

const ErrorExample = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  const handleClick = (id) => {
    const updatedArray = people.filter((person) => person.id != id);
    setPeople(updatedArray);
  };

  const deleteAll = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        return (
          <>
            <div>
              <h2>{person.name}</h2>
              <button onClick={() => handleClick(person.id)} className="btn">
                Delete
              </button>
            </div>
          </>
        );
      })}
      <button style={{ marginTop: "20px" }} onClick={deleteAll} className="btn">
        Delete All
      </button>
    </>
  );
};

export default ErrorExample;
