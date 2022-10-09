import React from "react";
import { Routes, Route } from "react-router-dom";
// Page d'accueil
import Home from "../pages/Home";
//Page log 
import Register from "../pages/log/register";
import Login from "../pages/log/login";
const index = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default index;