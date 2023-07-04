import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/card.css";

import { BsArrowUpRightCircle } from "react-icons/bs";

import cover from "../../../../assets/img/covers/fsd4.gif";
import cover2 from "../../../../assets/img/covers/fsd5.gif";
import cover3 from "../../../../assets/img/covers/demo.jpeg";
import cover4 from "../../../../assets/img/covers/Google.png";

import avatar from "../../../../assets/img/avatars/avatar3.png";
import avatar2 from "../../../../assets/img/avatars/avatar4.png";
import avatar3 from "../../../../assets/img/avatars/avatar5.png";
import avatar4 from "../../../../assets/img/avatars/avatar6.png";

import Btn1 from "../../../../components/Btn/btn1";

const Card = () => {
  const navigate = useNavigate();

  // navgation

  const ProfileButtonClick = (event) => {
    event.preventDefault();
    navigate("/pro");
  };
  return (
    <div className="group">
      <div className="box rounded-[2rem] h-[30rem] w-96 bg-white p-4 transition-all duration-300 ease-in-out  hover:cursor-pointer hover:border ">
        <img
          className="thumb w-full rounded-lg h-60 object-cover"
          src={cover}
          alt=""
        />

        <div className="tutor mb-6 mt-4 flex items-center gap-8">
          <img
            className="w-12 h-12 ml-4 mb-[5rem] rounded-full object-cover"
            src={avatar}
            onClick={ProfileButtonClick}
            alt=""
          />

          <div className="details">
            <h3 className="title text-2xl font-bold capitalize ">MEARN fa-stack</h3>
            <h4 className="text-gray-800 ">John deo</h4>
            <span className="text-gray-700">21-03-2022</span>

            <div className=" relative flex flex-row gap-2 top-10 right-10 " >
         
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/xddtsyvc.json"
                  trigger="hover"
                  colors="primary:#121331"
                  state="hover"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
              <h3 className="text-gray-800 ">41 Videos</h3>
            </div>

            <div className=" relative top-6 left-[12rem] text-[3rem]">
              <BsArrowUpRightCircle />
            </div>
            <div className=" relative  opacity-0 group-hover:opacity-100 bottom-[25rem] left-[13rem] transition-all duration-300 ">
              <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/gigfpovs.json"
                trigger="hover"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>

             
        {/* <div className="box rounded-[2rem] w-96 bg-white p-4 transition duration-200 ease-in-out  hover:cursor-pointer hover:border">
          <img
            className="thumb w-full rounded-lg h-60 object-cover"
            src={cover2}
            alt=""
          />

          <div className="tutor mb-6 mt-4 flex items-center gap-8">
            <img
              className="w-12 h-12 ml-4 mb-[5rem] rounded-full object-cover"
              src={avatar2}
              alt=""
            />

            <div className="">
              <h3 className="title text-2xl font-bold capitalize ">HTML</h3>
              <h4 className="text-gray-800">John deo</h4>
              <span className="text-gray-700">21-03-2022</span>
              <div className="mt-5 space-x-16 ">
                <Btn1 />
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/gigfpovs.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
            </div>
          </div>
        </div>
     

  
        <div className="box rounded-[2rem] w-96 bg-white p-4 transition duration-200 ease-in-out  hover:cursor-pointer hover:border">
          <img
            className="thumb w-full rounded-lg h-60 object-cover"
            src={cover3}
            alt=""
          />

          <div className="tutor mb-6 mt-4 flex items-center gap-8">
            <img
              className="w-12 h-12 ml-4 mb-[5rem] rounded-full object-cover"
              src={avatar3}
              alt=""
            />

            <div className="">
              <h3 className="title text-2xl font-bold capitalize ">HTML</h3>
              <h4 className="text-gray-800">John deo</h4>
              <span className="text-gray-700">21-03-2022</span>
              <div className="mt-5 space-x-16 ">
                <Btn1 />
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/gigfpovs.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
            </div>
          </div>
        </div>
     

 
        <div className="box rounded-[2rem] w-96 bg-white p-4 transition duration-200 ease-in-out  hover:cursor-pointer hover:border">
          <img
            className="thumb w-full rounded-lg h-60 object-cover"
            src={cover4}
            alt=""
          />

          <div className="tutor mb-6 mt-4 flex items-center gap-8">
            <img
              className="w-12 h-12 ml-4 mb-[5rem] rounded-full object-cover"
              src={avatar4}
              alt=""
            />

            <div className="">
              <h3 className="title text-2xl font-bold capitalize ">HTML</h3>
              <h4 className="text-gray-800">John deo</h4>
              <span className="text-gray-700">21-03-2022</span>
              <div className="mt-5 space-x-16 ">
                <Btn1 />
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/gigfpovs.json"
                  trigger="hover"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
            </div>
          </div>
        </div>
       */}

 
    </div>
  );
};

export default Card;
