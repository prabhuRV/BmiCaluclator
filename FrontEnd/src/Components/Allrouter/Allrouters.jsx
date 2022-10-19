import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import SignUp from "../pages/SingnUp";
import { Home } from "../pages/Home";
import { BmiCalucator } from "../pages/BmiCalucator";
import { RequiredAuth } from "../pages/RequiredAuth";
import { DashBoard } from "../pages/DashBoard";

export const Allrouters = () => {
  return (
    <div>
      <Navbar />

      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/" element={
        <RequiredAuth>
        <BmiCalucator />
        </RequiredAuth>} />
      </Routes>
    </div>
  );
};
