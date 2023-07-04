import React from "react";
import avatar from "../../../../assets/img/avatars/avatar11.png";
import banner from "../../../../assets/img/covers/fsd4.gif";
import cover from "../../../../assets/img/Banners/Banner1.png";
import Card from "./Card/index";

const Banner = () => {
  return (
    <Card extra={" relative  h-[20rem] w-[99rem]"}
     >
      {/* Background and profile */}

      <div className="absolute top-5 left-12  flex h-[50px] w-[50px] gap-4 rounded-full border-[4px] border-white bg-pink-400 ">
  
        <img className="h-full w-full rounded-full" src={avatar} alt="" />
        <h3 className=" mt-2 text-xl font-bold text-navy-700">Anju </h3>
      </div>
      <div className=" absolute right-5 top-5  transition-all duration-300 ">
        <lord-icon
          className="cursor-pointer"
          src="https://cdn.lordicon.com/gigfpovs.json"
          trigger="hover"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div className="flex items-end justify-end ml-[60rem] h-[20rem] w-[20rem]  ">
        <img src={banner} alt="" />
      </div>
      <div className=" absolute flex flex-col top-5 p-20 ">
        <h3 className="text-5xl font-bold text-navy-700">MEARN STACK </h3>
        <p className="2xl leading-5 pt-10 text-navy-700 text-left mr-[50rem] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi tempora
          nulla enim suscipit! Exercitationem, minus asperiores, culpa eaque
          quis deserunt velit nulla modi officiis cum voluptates ducimus natus
          aliquid molestias?
        </p>
      </div>
    </Card>
  );
};

export default Banner;
