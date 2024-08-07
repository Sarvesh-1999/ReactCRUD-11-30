import React from "react";
import "./global.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Allusers from "./components/Allusers";

const App = () => {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/allusers",
          element: <Allusers />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default App;
