import React, { useState } from "react";
import { addTodo } from "./todoRedux/todoSlice";
import { useDispatch } from "react-redux";
const CreateTodo = () => {
  let [input, setInput] = useState("");
  let dispatch = useDispatch();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function todoSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <form id="todoForm">
      <label htmlFor="">Todo</label>
      <input
        type="text"
        placeholder="Enter Todo....."
        value={input}
        onChange={handleChange}
      />
      <button onClick={todoSubmit}>Add</button>
    </form>
  );
};

export default CreateTodo;
