import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Homepage";
import Signup from "../pages/Signup";
import Login from "../pages/Loginpage";
export const AllRotes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
