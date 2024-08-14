import React from "react";
import { removeTodo } from "./todoRedux/todoSlice";
import { useSelector,useDispatch } from "react-redux";
const Todos = () => {
  let todos = useSelector((state) => state.todo.todos);
  console.log(todos);

  let dispatch=useDispatch()
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
