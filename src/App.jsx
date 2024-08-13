// import React from "react";
// // import "./global.css";
// import Navbar from "./components/Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Layout from "./components/Layout";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Allusers from "./components/Allusers";
// import EditUser from "./components/EditUser";

// const App = () => {
//   let routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/register",
//           element: <Register />,
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/profile",
//           element: <Profile />,
//         },
//         {
//           path: "/allusers",
//           element: <Allusers />,
//         },
//         {
//           path:"/edituser/:userID",
//           element:<EditUser/>
//         }
//       ],
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={routes}></RouterProvider>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Callback from "./components/Callback";
// import Fetch from "./components/customHooks/Fetch";
// import Card from "./components/hoc/Card";
// import Footer from "./components/hoc/Footer";

// const App = () => {
//   return (
//     <div>
//       {/* <Callback/> */}
//       {/*  <Fetch/> */}
//       <Card />
//       <Footer />
//     </div>
//   );
// };

// export default App;

// ! REDUX-TOOLKIT EXAMPLE
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./reduxExample/Counter";

// ! CREATING A SLICE ===> FEATURES
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 5 },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count += 1;
    },
    decrement: (state, action) => {
      console.log(action);
      state.count -= 1;
    },
  },
});
export let { increment, decrement } = counterSlice.actions;

// ! CREATING A STORE
let myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const App = () => {
  return (
    <Provider store={myStore}>
      <Counter />
    </Provider>
  );
};

export default App;
