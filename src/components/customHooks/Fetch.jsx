import React from "react";
import useFetchData from "./useFetchData";

const Fetch = () => {

  let data = useFetchData("https://jsonplaceholder.typicode.com/todos/");
  console.log(data);

  return (
    <div>
      {data?.map((todo) => {
        return <h1 key={todo.id}>{todo.title}</h1>;
      })}
    </div>
  );
};

export default Fetch;
