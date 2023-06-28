import Card from "../Card/index";
import { Progress } from "antd";
import { IoIosMore, IoMdRefresh,IoIosMan, IoIosList ,IoIosDesktop } from "react-icons/io";

const Widget = ({ image, title, subtitle, point1, point2, point3, point4 }) => {
  return (
    <div>
      <div>
        <Card extra="!flex-row flex-grow items-center rounded-[20px] w-[19rem] h-[10rem]">
          <div className="absolute group-hover:text-xl opacity-0 cursor-pointer right-0 mr-8 top-5 group-hover:opacity-100 group-hover:transition-all duration-300  ">
            <IoIosMore />
          </div>

          <div className="ml-[8px] h-[90px] mb-[3rem] w-auto flex-row items-center rounded-xl group-hover:mb-[8rem] transition-all duration-300 ">
            <div className="h-[83px] w-[83px] rounded-lg p-4 " alt="">
              {image}
            </div>
          </div>

          <div className=" relative bottom-[2rem] h-50 ml-2  w-auto flex-col justify-center space-y-2 group-hover:mb-[4rem] transition-all duration-300 ">
            <h4 className="text-xl font-bold text-navy-700">{title}</h4>
            <p className="font-dm text-sm font-medium text-gray-600">
              {subtitle}
            </p>
          </div>

          <div className=" absolute grid grid-cols-2 gap-4  h-50 ml-[6rem] opacity-0 top-[7rem] w-auto items-center justify-center transition-all duration-300 group-hover:opacity-100 ">
            <div>
              <div className=" absolute top-0.5 right-[10.8rem]  text-gray-700 group-hover:text-xl opacity-0 cursor-pointer  mr-8 group-hover:opacity-100 group-hover:transition-all duration-300  ">
                <IoIosMan />
              </div>
              <p className="font-dm text-sm font-medium  text-gray-600">
                {point1} students
              </p>
            </div>
            <div>
              <div className=" absolute top-0.5 right-[2.5rem] text-gray-700 group-hover:text-xl opacity-0 cursor-pointer mr-8  group-hover:opacity-100 group-hover:transition-all duration-300  ">
                <IoMdRefresh />
              </div>
              <p className=" ml-6 font-dm text-sm font-medium text-gray-600">
                {point2} min
              </p>
            </div>
            <div>
              <div className=" absolute top-9 right-[10.8rem] text-gray-700 group-hover:text-xl opacity-0 cursor-pointer mr-8  group-hover:opacity-100 group-hover:transition-all duration-300  ">
                <IoIosList />
              </div>
              <p className="font-dm text-sm font-medium text-gray-600">
                {point3} Assignments
              </p>
            </div>
            <div>
              <div className=" absolute top-9 right-[2.5rem] text-gray-700 group-hover:text-xl opacity-0 cursor-pointe mr-8  group-hover:opacity-100 group-hover:transition-all duration-300  ">
                <IoIosDesktop />
              </div>
              <p className=" ml-6 font-dm text-sm font-medium text-gray-600">
                {point4} Videos
              </p>
            </div>
          </div>

          <div>
            <div className=" relative w-[16rem] top-[5rem] right-[8rem] group-hover:w-[5rem]  group-hover:mt-[4rem] transition-all duration-300 ">
              <Progress
                percent={10}
                style={{ width: "100%", height: "20px" }}
              />
            </div>
            <div className=" relative right-6 top-10 flex flex-row  gap-2 transition-all duration-300  ">
              <button class=" opacity-0 rounded-xl border-2 border-blue-500 px-5 py-2 text-sm mb-3 font-medium text-blue-500 transition duration-200 hover:text-white hover:bg-blue-600 active:bg-red-700/5 group-hover:opacity-100">
                skip
              </button>
              <button class=" opacity-0 rounded-full bg-blue-500 px-5 py-2 text-sm mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 group-hover:opacity-100">
                Continue
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Widget;
