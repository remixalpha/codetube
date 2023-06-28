import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Courses from "./pages/Courses/course";
import Profile from "./pages/ProfilePage/profile";
import Tutor from "./pages/Tutor/tutor";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/pro" element={<Profile />} />
        <Route exact path="/tut" element={<Tutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
