import React from "react";
import { MdModeEditOutline } from "react-icons/md";

import Card from "../Card/index";

const Videos = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 ">
          All projects
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can find more details about your projects. Keep you user
          engaged by providing meaningful information.
        </p>
      </div>
      {/* Project 1 */}
      <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center">
          <div className="">
            {/* <img className="h-[83px] w-[83px] rounded-lg" src={image1} alt="" /> */}
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 ">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 "
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 ">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center">
          <div className="">
            {/* <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" /> */}
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 ">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 "
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 ">
          <MdModeEditOutline />
        </div>
      </div>
      {/* Project 1 */}
      <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 ">
        <div className="flex items-center">
          <div className="">
            {/* <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" /> */}
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 ">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 "
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 ">
          <MdModeEditOutline />
        </div>
      </div>
    </Card>
  );
};

export default Videos;
