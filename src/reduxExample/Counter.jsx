import React from "react";
import { increment, decrement } from "../App";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  let count = useSelector((state) => state.counter.count);
  console.log(count);

  let dispatch = useDispatch();

  function increCounter() {
    dispatch(increment("hello"));
  }
  function decreCounter() {
    dispatch(decrement("byeee"))
  }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increCounter}>increment</button>
      <button onClick={decreCounter}>decrement</button>
    </div>
  );
};

export default Counter;
