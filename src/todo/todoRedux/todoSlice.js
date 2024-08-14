import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      let filteredTodo = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.todos=filteredTodo
    },
  },
});
export let todoReducers = todoSlice.reducer;
export let { addTodo, removeTodo } = todoSlice.actions;
