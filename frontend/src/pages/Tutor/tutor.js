import Navbar from "./components/Navbar/index";
import ProfileCard from "./components/TutorCard/macroprofile";
import Sidebar from "./components/Sidebar/index";
import AddBtn from "../../components/Btn/add";

function Tutor() {
  return (
    <div>
      {/* Navbar & Main Content */}
      <div className="p-[1rem]">
        <Navbar />
      </div>
      <div className="mt-3 grid h-full grid-cols-1 gap-1 xl:grid-cols-2 2xl:grid-cols-3">
        <Sidebar />
        {/* Main Content */}
        <div className="h-fit w-[100rem] xl:col-span-1 2xl:col-span-3  ml-[17rem] ">
          <div className="fixed ml-[95rem] mt-[44rem] z-50 ">
            <AddBtn />
          </div>

          <div className="mt-[2rem] ml-[2rem]">
            <h1 className="text-2xl text-navy-700 font-bold mt-2  ">
              Followed
            </h1>

            <div className="grid grid-cols-5 mt-20  gap-[4rem] ">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutor;
