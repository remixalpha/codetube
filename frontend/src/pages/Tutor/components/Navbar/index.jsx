import React,{useState} from "react";

import { Link, } from "react-router-dom";

import { FiSearch } from "react-icons/fi";


import Dropdown from "../../../../components/dropdown/index";


import avatar from "../../../../assets/img/avatars/avatar1.png";
import logo from "../../../../assets/img/covers/figma.png";

import ProfileBanner from "../../../../components/Probanner/minbanner";
import Menu from "../../../../components/Menu/profilemenu";

const Navbar = ({ searchQuery, setSearchQuery }) => {

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 ">
      <div className="ml-[6px]">
        <p className="shrink text-[33px] capitalize text-navy-700">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 pl-[17rem]"
          >
            👋 Hey,Rahul
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700  dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 " />
          </p>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400  "
          />
        </div>

        {/* start Notification */}
        <Dropdown
          button={
            <div className="cursor-pointer relative">
            <div className="icon">
              <lord-icon
                src="https://cdn.lordicon.com/psnhyobz.json"
                trigger="hover"
                colors="primary:#707eae"
                state="hover"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
    
          </div>
          }
          children={
            <div className="flex w-[360px] flex-col gap-4 rounded-[20px] bg-lightPrimary p-4 shadow-xl shadow-shadow-500 ">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 ">
                  Notification
                </p>
              </div>
              {/* 1st notification */}
              <button className=" Nofitication flex w-full items-center rounded-[20px] bg-white p-4 ">
                <div className=" h-[90px] w-[85px] bg-white  py-4  ">
                  <img
                    className="flex items-center justify-center w-12 h-12 ml-2 rounded-full object-cover"
                    src={logo}
                    // onClick={ProfileButtonClick}
                    alt=""
                  />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <h1 className="mb-1 text-left text-base font-bold text-gray-900 ">
                    MongoDB
                  </h1>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A new MongoDB video update is available!
                  </p>
                </div>
              </button>

              {/* 2nd notification */}
              <button className=" Nofitication flex w-full items-center rounded-[20px] bg-white p-4">
                <div className=" h-[90px] w-[85px] bg-white  py-4  ">
                  <img
                    className="flex items-center justify-center w-12 h-12 ml-2 rounded-full object-cover"
                    src={logo}
                    // onClick={ProfileButtonClick}
                    alt=""
                  />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <h1 className="mb-1 text-left text-base font-bold text-gray-900 ">
                    Java 
                  </h1>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A java video update  is available!
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={
            " px-[6rem] py-10  top-4 -left-[230px] md:-left-[440px] w-max"
          }
          animation="origin-[80%_0%] transition-all duration-300 ease-in-out"
        />


        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full object-cover "
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-[40rem] w-[16rem] flex-col justify-start rounded-[20px] bg-lightPrimary bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="mt-3 ml-4 flex flex-col">
                <ProfileBanner />
                <Menu />
              </div>
            </div>
          }
          classNames={"py-8  top-8 -left-[215px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />
      </div>
    </nav>
  );
};

export default Navbar;
