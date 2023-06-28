import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";

import Dropdown from "../../../../components/dropdown/index";

import navbarimage from "../../../../assets/img/layout/navbanner.jpeg";
import avatar from "../../../../assets/img/avatars/avatar1.png";
import logo from "../../../../assets/img/covers/figma.png";

import Minbanner from "../Probanner/minbanner";
import Menu from "../Menu/profilemenu";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 ">
      <div className="ml-[6px]">
        <p className="shrink text-[33px] capitalize text-navy-700">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 pl-[17rem]"
          >
            👋 Hey, Rahul
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
            class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400  "
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 " />
            </p>
          }
          children={
            <div className="flex w-[360px] flex-col gap-4 rounded-[20px] bg-lightPrimary p-4 shadow-xl shadow-shadow-500 ">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 ">
                  Notification
                </p>

              </div>
{/* 1st notification */}
              <button className="flex w-full items-center rounded-[20px] bg-white p-4 ">
              <div className=" h-[90px] w-[85px] bg-white  py-4  ">
                  <img
                    className="flex items-center justify-center w-12 h-12 ml-2 rounded-full object-cover"
                    src={logo}
                    // onClick={ProfileButtonClick}
                    alt=""
                  />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>

{/* 2nd notification */}
              <button className="flex w-full items-center rounded-[20px] bg-white p-4">
              <div className=" h-[90px] w-[85px] bg-white  py-4  ">
                <img
                    className="flex items-center justify-center w-12 h-12 ml-2 rounded-full object-cover"
                    src={logo}
                    // onClick={ProfileButtonClick}
                    alt=""
                  />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    A new update for your downloaded item is available!
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

        {/* start Horizon PRO */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 " />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500">
              <div
                style={{
                  backgroundImage: `url(${navbarimage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              <a
                target="blank"
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 "
              >
                Buy Codetube PRO
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 "
              >
                See Documentation
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 "
              >
                Try Codetube Free
              </a>
            </div>
          }
          classNames={"py-10  top-6 -left-[250px] md:-left-[330px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />

        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>

        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-[40rem] w-[16rem] flex-col justify-start rounded-[20px] bg-lightPrimary bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="mt-3 ml-4 flex flex-col">
                <Minbanner />
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
