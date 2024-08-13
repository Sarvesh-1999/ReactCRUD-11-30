import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
const RouterApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route path="/loginuser" element={<LoginUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;
