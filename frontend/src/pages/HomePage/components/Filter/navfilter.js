import Widget from "./widget/Widget";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard ,MdAddComment,MdStorage,MdSignalWifiBad } from "react-icons/md";

const Navfilter = () => {
  return (
    <div className="" >
      {/* Card widget */}

      <div className="grid grid-cols-2 ml-4 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-15 gap-[8rem] ">  
       
      <Widget 
          icon={<MdBarChart className="h-7 w-7" />}
          // title={"Earnings"}
          subtitle={"All"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          // title={"Spend this month"}
          subtitle={"Angular"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          // title={"Sales"}
          subtitle={"Javascript"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          // title={"Your Balance"}
          subtitle={"Mongodb"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          // title={"New Tasks"}
          subtitle={"Vite"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          // title={"Total Projects"}
          subtitle={"HTML"}
        />
        <Widget
          icon={<MdAddComment className="h-6 w-6" />}
          // title={"Total Projects"}
          subtitle={"CSS"}
        />
        <Widget
          icon={<MdStorage className="h-6 w-6" />}
          // title={"Total Projects"}
          subtitle={"Java"}
        />
        <Widget
          icon={<MdSignalWifiBad className="h-6 w-6" />}
          // title={"Total Projects"}
          subtitle={"React"}
        />
      </div>
    </div>
  );
};

export default Navfilter;
