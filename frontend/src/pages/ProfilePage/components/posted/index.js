import React from "react";
import { MdModeEditOutline } from "react-icons/md";

import Card from "../Card/index";
import Courses from "../CourCard/index";

const Videos = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full p-5 flex flex-row ">
        <h4 className="text-xl font-bold text-navy-700 ">Posts</h4>
        <div className="relative left-[90rem] flex items-center justify-center text-gray-700 ">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 ">
        <div className=" grid grid-cols-4 gap-8 ">
          <Courses />
     
        </div>
      </div>
    </Card>
  );
};

export default Videos;
