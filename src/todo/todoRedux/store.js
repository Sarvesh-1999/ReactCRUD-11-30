import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./todoSlice";
export const myStore = configureStore({
  reducer: {
    todo: todoReducers,
  },
});
