import React from "react";
import avatar from "../../assets/img/avatars/avatar11.png";
import banner from "../../assets/img/profile/banner.png";
import Card from "./Card/index";




const Minprofile = () => {
  return (
    <Card extra={"items-center  h-[15rem] w-[16rem] -mt-6  -ml-4 mr-5 p-[16px] bg-cover"}>
      {/* Background and profile */}
     
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-[27px] bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 ">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-[5rem] flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 ">
        Adela
        </h4>
        <p className="text-sm  ml-5 font-normal text-gray-600">Product Manager</p>
      </div>
      </Card>
  );
};

export default Minprofile;
