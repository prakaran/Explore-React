// useEffect is a hook in React that allows us to perform side effect in the function components.
// sideEffects : data fetching, dom manipulation, subscriptions, timers etc
// useEffect hook needs two arguments: one callback function, functional dependency

import React, { useEffect, useState } from "react";

// const url = "https://jsonplaceholder.typicode.com/todos";
const url = "https://api.github.com/users";

const UseEffetBasics = () => {
  const [users, setUsers] = useState([]);

  //   const myFunction = () => {
  //     console.log("Hello there I am from myFunction");
  //   };
  //   myFunction();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((value) => setUsers(value));
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UseEffetBasics;
