import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Courses from "./pages/Courses/course";
import Bookmark from "./pages/Bookmark/bookmark";
import Profile from "./pages/ProfilePage/profile";
import Tutor from "./pages/Tutor/tutor";
import Content from "./pages/ContentPages/CouContent";
import Registration from "./pages/RegistrationPage/index";
import Login from "./pages/LoginPage/index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/registration" element={<Registration/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/bookmark" element={<Bookmark/>} />
        <Route exact path="/pro" element={<Profile />} />
        <Route exact path="/tut" element={<Tutor />} />
        <Route exact path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
