import React, { useState } from "react";

import Sidebar from "../HomePage/components/Sidebar/index";
import Banner from "./components/Probanner/index.js";
import Projects from "./components/Procard";
import Posts from "./components/posted";
import Card from "./components/Card/index";

import {IoReaderOutline,IoEaselOutline} from "react-icons/io5";


const ProfileOverview = () => {
  const [activeContent, setActiveContent] = useState(1);

  const handleContentClick = (contentId) => {
    setActiveContent(contentId);
  };
  return (
    <div className="grid grid-cols-1">
      <div>
        <Sidebar />
      </div>
      <div className=" pl-[17rem] ">
        <div>
          <Banner />
        </div>
        <div className="flex flex-row gap-4 p-5 items-center justify-center cursor-pointer " >
          <Card 
            className={`content flex h-10 w-40 gap-2  rounded-full items-center justify-center shadow-3xl shadow-shadow-500 ${activeContent === 1 ? "bg-navy-700 text-white" : "bg-white"}`}
            onClick={() => handleContentClick(1)}
          >
          <IoEaselOutline/>Posts
          </Card>
          <Card
            className={`content flex h-10 w-40 gap-2  rounded-full items-center justify-center shadow-3xl shadow-shadow-500 ${activeContent === 2 ? "bg-navy-700 text-white" : "bg-white"}`}
            onClick={() => handleContentClick(2)}
          >
            <IoReaderOutline/>  Projects
          </Card>
        </div>
        <div className="p-4" >
          {activeContent === 1 && <Posts />}
          {activeContent === 2 && <Projects />}
        </div>
      </div>

    </div>
  );
};

export default ProfileOverview;
