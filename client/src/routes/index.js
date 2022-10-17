import React from "react";
import { Routes, Route } from "react-router-dom";
// Page d'accueil
import Home from "../pages/Home";
//Page log 
import Register from "../pages/log/register";
import Login from "../pages/log/login";
//profil
import Bio from "../pages/Profil/bio";
import Profils from "../pages/Profil/Profils"

import UpdateProfil from "../pages/UpdateProfil";
import UpdatePost from "../pages/UpdatePost";
const index = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/profils" element={<Profils />} />
        <Route path="/updateprofil" element={<UpdateProfil />} />
        <Route path="/updatepost" element={<UpdatePost />} />
      </Routes>
  );
};

export default index;