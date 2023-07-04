import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/card.css";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoLogoAndroid,IoLogoAngular } from "react-icons/io5";

import cover from "../../../../assets/img/covers/fsd4.gif";

import avatar from "../../../../assets/img/avatars/avatar3.png";

const Card = () => {
  const navigate = useNavigate();

  // navgation

  return (
    <div className="group space-y-5  ">
      <div className="box rounded-[2rem] h-[10rem] w-96 bg-green-300 p-4 border transition-all  duration-300 ease-in-out  hover:cursor-pointer hover:border">
        {/* <img
          className="thumb w-full rounded-lg h-full  object-cover "
          src={cover}
          alt=""
        /> */}
        <div className="text-4xl flex flex-row items-end justify-end ">
          <BsArrowUpRightCircle />
        </div>

        <div className="flex " >
        <div className="flex w-[4rem] h-[4rem]  ml-2  bg-white text-4xl  rounded-full  p-4 items-center justify-center ">
            <IoLogoAndroid />
          </div>
        <div className=" flex flex-col  ml-3 mb-10 " >
            <h1 className="text-xl font-bold " >Android Development</h1>
            <p className="2xl  leading-2  text-black ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit

              </p>
          </div>

        </div>
      </div>

      <div className="box rounded-[2rem] h-[10rem] w-96 bg-orange-300 p-4 border transition-all  duration-300 ease-in-out  hover:cursor-pointer hover:border">
        {/* <img
          className="thumb w-full rounded-lg h-full  object-cover "
          src={cover}
          alt=""
        /> */}
        <div className="text-4xl flex flex-row items-end justify-end ">
          <BsArrowUpRightCircle />
        </div>

        <div className="flex " >
        <div className="flex w-[4rem] h-[4rem]  ml-2  bg-white text-4xl  rounded-full  p-4 items-center justify-center ">
            <IoLogoAngular />
          </div>
        <div className=" flex flex-col  ml-3 mb-10 " >
            <h1 className="text-xl font-bold " >Angular Development</h1>
            <p className="2xl  leading-2  text-black ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit

              </p>
          </div>

        </div>
      </div>

    
    </div>
  );
};

export default Card;
