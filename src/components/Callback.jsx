import React, { useCallback, useMemo, useState } from "react";
import ChildA from "./ChildA";

const Callback = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(5);

  let multiply = useMemo(() => {
    console.log("***************");
    return count * 10;
  }, [count]);

  let display = useCallback(() => {
    console.log("I am display function");
  }, []);

  return (
    <div>
      <h1>multiply = {multiply}</h1>
      <h1>Count1 = {count}</h1>
      <button onClick={() => setCount(count + 1)}>incre</button>

      <hr />

      <h1>Count2 = {count2}</h1>
      <button onClick={() => setCount2(count2 + 5)}>Incre</button>

      <hr />
      <ChildA display={display} />
    </div>
  );
};

export default Callback;
