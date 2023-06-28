import React, { useState } from "react";
import avatar1 from "../../../../assets/img/avatars/avatar11.png";
import banner from "../../../../assets/img/covers/demo.jpeg";
import Card from "./Card/index";

const Card3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      extra={"items-center  h-full w-[22rem] mt-5 ml-5 mr-5 p-[16px] bg-cover"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background and profile */}
      <div
        className={`relative mt-1 flex h-[10rem] w-full justify-center rounded-xl transition-all duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute mr-[14rem] -bottom-12 flex h-[60px] w-[60px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img className={`h-full w-full rounded-full ${
              isHovered ? "pointer-events-none":""
          } `}
          src={avatar1} alt="" />
        </div>
      </div>

      {/* Video */}
      {isHovered && (
        <div className="absolute bottom-[10.5rem] h-[10rem] w-[19rem]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            controls
            autoPlay
          />
        </div>
      )}

      {/* Name and position */}
      <div className="mt-4 ml-4 flex flex-col items-start">
        <h4 className="text-xl font-bold text-navy-700 ">JavaScript Basic</h4>
        <p className="text-base mr-5 font-normal text-gray-600">Javascript</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-row items-center justify-center gap-1">
          <p className="text-sm font-normal text-gray-600">4M</p>
          <p className="text-sm font-normal text-gray-600">Views</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <p className="text-sm font-normal text-gray-600">3 month </p>
          <p className="text-sm font-normal text-gray-600">ago</p>
        </div>
      </div>
    </Card>
  );
};

export default Card3;
