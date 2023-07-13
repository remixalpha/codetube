import React from "react";
import avatar1 from "../../../../assets/img/avatars/avatar11.png";

import Card from "../Card/index";
import Btn from "../../../../components/Btn/btn3";

const Minprofile = () => {
  return (
    <>
    {/* card-1 */}
      <Card
        extra={
          "items-center  h-[18rem] w-[16rem] -mt-6 -ml-4 mr-5 p-[16px] bg-cover "
        }
      >
        {/* Background and profile */}

        <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover">
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 ">
            <img className="h-full w-full rounded-full object-cover " src={avatar1} alt="" />
          </div>
        </div>

        <div className=" mb-[9rem] ">
          {/* Name and position */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 ">
              Adela
            </h4>
            <p className="text-sm mt-3 ml-5 font-normal text-gray-600">
              Product Manager
            </p>
            <p className="text-sm mt-2 ml-5 font-normal text-gray-600">
              HTML,CSS Developer
            </p>
          </div>

          <div className="mt-6 mb-3 flex gap-5">
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl font-bold text-navy-700 ">
                17
              </p>
              <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl font-bold text-navy-700 ">
                9.7K
              </p>
              <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-1xl font-bold text-navy-700 ">
                434
              </p>
              <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
          </div>

          <div className="relative ml-12 mt-7 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <Btn />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Minprofile;
