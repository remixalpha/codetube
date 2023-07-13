import React, { useEffect, useState } from "react";

import avatar from "../../../../assets/img/avatars/avatar11.png";
import banner from "../../../../assets/img/profile/banner.png";
import Card from "../Card/index";

import { getTutorById } from "../../../../utils/api/tutorApi";


const Profile = () => {
  const [tutor, setTutor] = useState(null);
  
  useEffect(() => {
    const fetchTutor = async (tutorId) => {
      try {
        const response = await getTutorById(tutorId); 
        setTutor(response.data);
      } catch (error) {
        console.log("Failed to fetch tutor:", error);
      }
    };

    fetchTutor();
  }, []);

  if (!tutor) {
    return null; 
  }
  return (
    <Card extra={"items-center  h-full mt-5 ml-5 mr-5 p-[16px] bg-cover"}>
      {/* Background and profile */}
     
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

       {/* Name and position */}
       <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 ">{tutor.name}</h4>
        <p className="text-base font-normal text-gray-600">{tutor.field}</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 ">{tutor.postCount}</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 ">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 ">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
      </Card>
  );
};

export default Profile;
