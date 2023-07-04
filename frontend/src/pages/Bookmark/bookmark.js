import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar/index";
import Navbar from "./components/Navbar/index";
import Course from "./components/CourCard/index";
import Videos from "./components/PopuCard/index";


import AddBtn from "../../components/Btn/add";

function Courses() {
  return (
    <div>
      {/* Navbar & Main Content */}
      <div className="p-[1rem]">
        <Navbar />
      </div>
      <div className="mt-3 grid h-full grid-cols-1 gap-1 xl:grid-cols-2 2xl:grid-cols-3">
        <Sidebar />
        {/* Main Content */}
        <div className="h-fit w-[100rem] xl:col-span-1 2xl:col-span-3  ml-[17rem] ">

          <div className="fixed ml-[95rem] mt-[44rem] z-50 ">
            <AddBtn />
          </div>
   
             {/* courses */}
             <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl text-navy-700 font-bold  ">
              Courses
            </h1>
            <div className="box-container grid grid-cols-4 gap-4 items-start justify-center  mt-8 ">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />

            </div>
          </div>


          {/* courses */}
          <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl text-navy-700 font-bold  ">
              Videos
            </h1>
            <div className="box-container grid grid-cols-4 gap-4 items-start justify-center  mt-8 ">
              <Videos/>
              <Videos/>
              <Videos/>
              <Videos/>
              <Videos/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Courses;
