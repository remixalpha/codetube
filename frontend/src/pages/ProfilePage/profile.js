import Sidebar from "../HomePage/components/Sidebar/index";
import Banner from "./components/Probanner/index.js";
import Videos from "./components/Procard/pro-cardV";

const ProfileOverview = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
      <Sidebar />
      </div>
      <div className=" pl-[17rem] ">
        <div>
        <Banner />
        </div>
     
      <div className="p-6" >
        <Videos />
      </div>

      </div>
    </div>
  );
};

export default ProfileOverview;
