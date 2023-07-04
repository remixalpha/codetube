import React, { useState, useEffect } from "react";
import "./css/userhome.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar/index";
import Banner from "../../components/Banner/hbanner";
import Filter from "./components/Filter/navfilter";
import Tutor from "../HomePage/components/TCard/tcard";
import Course from "./components/CourCard/index";
import Continue from "./components/CCard.js/ccard.js";
import Popular from "./components/PopuCard/index";

import AddBtn from "../../components/Btn/add";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [courses, setCourses] = useState([
  //   { id: 1, title: "Mearn stack" },
  //   { id: 2, title: "Angular" },
  //   { id: 3, title: ".NET" },
  //   // Add more course objects as needed
  // ]);

  // const filteredCourses = courses.filter((course) =>
  //   course.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <div className="item-center overflow-hidden " >
      {/* Navbar & Main Content */}
      <div className="p-[1rem]  ">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          <div className="mt-[2rem] ml-7 h-[22rem] w-full bg-navy-700 rounded-[30px] ">
            <h1 className="text-2xl pl-8 pt-6 font-semibold text-white  mb-10 ">
              Tutors
            </h1>
            <div className="flex flex-row gap-4 ml-[4rem] ">
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
            <h1 className="text-2xl font-semibold text-navy-700  mb-5  ">
              Continue Watching
            </h1>
            <div className=" gap-12 grid grid-cols-4  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
              <Continue />
            </div>
          </div>
          {/* courses */}
          <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl font-semibold text-navy-700 ">
              Our Courses
            </h1>
            <div className="box-container grid grid-cols-4 gap-2 items-start justify-center  mt-8 ">
              {/* {filteredCourses.map((course) => (
            <Course key={course.id} title={course.title} />
          ))} */}
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </div>
          </div>

          <div className="mt-[2rem] ml-5">
            <h1 className="text-2xl font-semibold text-navy-700 mt-10 ">
              Popular Videos
            </h1>
            <div className=" grid grid-cols-4 gap-4 items-start justify-center m mt-8 ">
              <Popular />
              <Popular />
              <Popular />
              <Popular />
              <Popular />
              <Popular />
              <Popular />
              <Popular />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
