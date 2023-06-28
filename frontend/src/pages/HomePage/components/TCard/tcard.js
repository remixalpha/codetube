import React from "react";
import avatar from "../../../../assets/img/avatars/avatar4.png";
import Card from "./Card/index";
import {
  IoIosMore
} from "react-icons/io";

const Tutor = () => {
  return (
    <Card
      extra={
        "items-center  h-[15rem] w-[8rem] -mt-6  -ml-4 mr-5 p-[20px] bg-cover"
      }
    >
      {/* Background and profile */}
      
      <div className="absolute group-hover:text-xl opacity-0 cursor-pointer right-0 mr-8  group-hover:opacity-100 group-hover:transition-all duration-300  " >
        <IoIosMore/>
      </div>


      <div className="absolute  flex h-[87px] w-[87px] items-center justify-center rounded-[30px] bg-cover   group-hover:left-5 group-hover:mt-5 group-hover:scale-100 group-hover:transition-all duration-300 ">
        <img className="h-full w-full rounded-[30px]" src={avatar} alt="" />
      </div>

      {/* Name and position */}
      <div className="mt-[7rem]  flex flex-col items-center gap-2 group-hover:m-10 group-hover:ml-16 group-hover:transition-all duration-300 ">
        <h4 className="text-md ml-5 font-bold text-navy-700  group-hover:transition-all duration-300 ">UI/UX Design</h4>
        <p className="text-sm  font-normal text-gray-600">Alena</p>
      </div>
      {/* hidden details */}
      <div className=" absolute flex  bottom-5 mt-6 mb-3 gap-4 md:!gap-10 bg-white rounded-full p-1 opacity-0 transition-all duration-300   group-hover:opacity-100  ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-1xl font-bold text-navy-700 ">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-1xl font-bold text-navy-700 ">9.7K</p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-1xl font-bold text-navy-700 ">434</p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </Card>
  );
};

export default Tutor;
