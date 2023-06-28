import React, { useState, useEffect } from "react";
import "./css/userhome.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/index";
import Banner from "../../components/Banner/hbanner";
import Filter from "./components/Filter/navfilter";
import Tutor from "../HomePage/components/TCard/tcard";
import Course from "./components/CourCard/index";
import Continue from "./components/CCard.js/ccard.js";
import Popular  from "./components/PopuCard/card3";

import AddBtn from "../../components/Btn/add";

function Home() {
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
          <div className="ml-[1rem]" style={{ width: "100%" }}>
            <Banner />
          </div>
          <div className="fixed ml-[95rem] mt-[14rem] z-50 ">
            <AddBtn />
          </div>
          <div className="mt-[2rem] flex flex-row gap-4">
            <Filter />
          </div>
          {/* Tutors */}
          <div className="mt-[2rem] ml-7 ">
            <h1 className="text-2xl text-navy-700 font-bold  mb-10 ">
              Tutors
            </h1>
            <div className="flex flex-row gap-4 ">
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
              <Tutor />
            </div>
          </div>
          {/* Continue */}
          <div className="mt-[2rem] ml-5 ">
            <h1 className="text-2xl text-navy-700 font-bold mb-5  ">
              Continue Watching
            </h1>
            <div className=" gap-12 grid grid-cols-4  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
              <Continue />
              <Continue />
            </div>
          </div>
          {/* courses */}
          <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl text-navy-700 font-bold  ">
              Our Courses
            </h1>
            <div className="box-container grid grid-cols-4 gap-2 items-start justify-center  mt-8 ">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </div>
          </div>

          <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl text-navy-700 font-bold mt-10  ">
              Popular Videos
            </h1>
            <div className=" grid grid-cols-4 gap-4 items-start justify-center  mt-8 ">
              <Popular  />
              <Popular  />
              <Popular  />
              <Popular  />
              <Popular  />
              <Popular  />
              <Popular  />
              <Popular  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
