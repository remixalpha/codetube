import React, { useState } from "react";

import Sidebar from "../HomePage/components/Sidebar/index";
import Banner from "./components/Probanner/index";
import Videos from "./components/PopuCard/index";

const CoursesContent = () => {
  return (
    <div className="flex flex-wrap overflow-hidden ">
      <div>
        <Sidebar />
      </div>
      <div className=" flex flex-col  pl-72 pt-10 ">
        <div className="flex flex-row  ">
          <Banner />
        </div>
        <div className="grid grid-cols-4 gap-4 items-start justify-center m mt-8">
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default CoursesContent;
