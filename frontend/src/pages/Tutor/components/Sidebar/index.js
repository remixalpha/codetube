import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Sidebar({ expandSidebar }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Dark-mode
  const handleDarkModeChange = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // navgation

  const HomeButtonClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const BookmarkButtonClick = (event) => {
    event.preventDefault();
    navigate("/bookmark");
  };

  const CourseButtonClick = (event) => {
    event.preventDefault();
    navigate("/courses");
  };


  return (
    <div className="fixed top-5 w-[15rem] h-[56rem] ml-5 rounded-lg bg-white transition-all duration-500 overflow-hidden ">
      
      {/* Logo and Title */}
      <div className="w-[224px] p-10">

        <lord-icon
          src="https://cdn.lordicon.com/rwotyanb.json"
          trigger="morph"
          colors="primary:#121331,secondary:#30c9e8"
          style={{ width: "30px", height: "30px" }}
        />

        <a className="text-3xl ml-2 font-bold text-navy-700 " href=" ">
          Codei.
        </a>
      </div>

<div className="flex flex-col items-center justify-center mt-[2rem] gap-4 " >


      {/*Home*/}
      <div
        className="w-4/5 h-15  flex items-center justify-start gap-3 p-5 cursor-pointer rounded-full  hover:scale-105  hover:bg-lightPrimary"
        onClick={HomeButtonClick}
      >
        <lord-icon
          className="cursor-pointer"
          src="https://cdn.lordicon.com/osuxyevn.json"
          trigger="hover"
          style={{ width: "22px", height: "22px" }}
        />
        <h1 className="font-bold text-navy-700 cursor-pointer">Explore</h1>
      </div>

      {/*Courses*/}
      <div className="w-4/5 h-15  flex items-center justify-start gap-3 p-5 cursor-pointer rounded-[2rem] hover:scale-105 hover:bg-lightPrimary"
       onClick={CourseButtonClick}>
        <lord-icon
          className="cursor-pointer"
          src="https://cdn.lordicon.com/svbmmyue.json"
          trigger="hover"
          style={{ width: "22px", height: "22px" }}
        />
        <h1 className="font-bold text-navy-700  cursor-pointer">Courses</h1>
      </div>

      {/*Bookmark*/}
      <div className="w-4/5 h-15  flex items-center justify-start gap-3 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-lightPrimary"
      onClick={BookmarkButtonClick}>
        <lord-icon
          className="cursor-pointer"
          src="https://cdn.lordicon.com/gigfpovs.json"
          trigger="hover"
          style={{ width: "22px", height: "22px" }}
        />
        <h1 className="font-bold text-navy-700 cursor-pointer">Bookmark</h1>
      </div>

      {/*Teachers*/}
      <div
        className="w-4/5 h-15  flex items-center justify-start gap-3 p-5 cursor-pointer rounded-full hover:scale-105 bg-lightPrimary "
      
      >
        <lord-icon
          className="cursor-pointer"
          src="https://cdn.lordicon.com/bhfjfgqz.json"
          trigger="hover"
          style={{ width: "22px", height: "22px" }}
        />
        <h1 className="font-bold text-navy-700 cursor-pointer">Tutor</h1>
      </div>



      {/* DarkMode */}
      <label className="mr-10">
        <input
          type="checkbox"
          id="dark"
          checked={darkMode}
          onChange={handleDarkModeChange}
        />
        <span className="check" />
      </label>

      </div>
    </div>
  );
}

export default Sidebar;
