import React, { useState } from "react";
import Widget from "./widget/Widget";

import { IoLogoAngular,IoLogoJavascript,IoLogoHtml5 } from "react-icons/io5";
import { SiMongodb,SiVitess,SiTailwindcss } from "react-icons/si";
import { FaJava,FaReact } from "react-icons/fa";
import {
  MdBarChart,

} from "react-icons/md";

const Navfilter = () => {
  const [activeSubtitle, setActiveSubtitle] = useState("All"); // Track the active subtitle

  // Function to handle widget click
  const handleWidgetClick = (subtitle) => {
    setActiveSubtitle(subtitle); // Update the active subtitle
  };

  return (
    <div className="cursor-pointer">
      {/* Card widget */}

      <div className="grid grid-cols-2 ml-4 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-15 gap-[9rem] ">
        <Widget
          className={`${
            activeSubtitle === "All"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<MdBarChart className="h-7 w-7" />}
          subtitle={"All"}
          active={activeSubtitle === "All"} // Check if this subtitle is active
          onClick={() => handleWidgetClick("All")} // Handle widget click
        />
        <Widget
          className={`${
            activeSubtitle === "Angular"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<IoLogoAngular className="h-6 w-6" />}
          subtitle={"Angular"}
          active={activeSubtitle === "Angular"}
          onClick={() => handleWidgetClick("Angular")}
        />
        <Widget
          className={`${
            activeSubtitle === "Javascript"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<IoLogoJavascript className="h-7 w-7" />}
          subtitle={"Javascript"}
          active={activeSubtitle === "Javascript"}
          onClick={() => handleWidgetClick("Javascript")}
        />
        <Widget
          className={`${
            activeSubtitle === "MongoDB"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<SiMongodb className="h-7 w-7" />}
          subtitle={"MongoDB"}
          active={activeSubtitle === "MongoDB"}
          onClick={() => handleWidgetClick("MongoDB")}
        />
        <Widget
          className={`${
            activeSubtitle === "Vite"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<SiVitess className="h-7 w-7" />}
          subtitle={"Vite"}
          active={activeSubtitle === "Vite"}
          onClick={() => handleWidgetClick("Vite")}
        />
        <Widget
          className={`${
            activeSubtitle === "HTML"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<IoLogoHtml5 className="h-7 w-7" />}
          subtitle={"HTML"}
          active={activeSubtitle === "HTML"}
          onClick={() => handleWidgetClick("HTML")}
        />
        <Widget
          className={`${
            activeSubtitle === "Tailwindcss"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<SiTailwindcss className="h-7 w-7" />}
          subtitle={"Tailwindcss"}
          active={activeSubtitle === "Tailwindcss"}
          onClick={() => handleWidgetClick("Tailwindcss")}
        />
        <Widget
          className={`${
            activeSubtitle === "Java"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<FaJava className="h-7 w-7" />}
          subtitle={"Java"}
          active={activeSubtitle === "Java"}
          onClick={() => handleWidgetClick("Java")}
        />
        <Widget
          className={`${
            activeSubtitle === "React"
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700"
          }`}
          icon={<FaReact className="h-6 w-6" />}
          subtitle={"React"}
          active={activeSubtitle === "React"}
          onClick={() => handleWidgetClick("React")}
        />
      </div>
    </div>
  );
};

export default Navfilter;
