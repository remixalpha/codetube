import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card/index";

const ProfileMenu = () => {
  const navigate = useNavigate();

  const ProfileButtonClick = (event) => {
    event.preventDefault();
    navigate("/pro");
  };

  return (
    <Card extra="items-center h-60 w-[16rem] mt-1 -ml-4 mr-5 p-[16px] ">
      <div className="menu flex flex-col items-center p-5 -mt-7">
        <ul className="mr-2  ">

          <li className="mb-2 flex w-[14rem] items-center rounded-[20px] bg-white p-3  " onClick={ProfileButtonClick}>
            <span className="icon2 mr-5 cursor-pointer">
              <ion-icon name="person-outline" />
            </span>
            <span className="title cursor-pointer">Profile</span>
          </li>

          <li className="mb-2 flex w-full items-center rounded-[20px] bg-white p-4  ">
            <span className="icon2 mr-4">
              <ion-icon name="create-outline" />
            </span>
            <span className="title cursor-pointer">Edit profile</span>
          </li>

          <li className="mb-2 flex w-full items-center rounded-[20px] bg-white p-4 ">
            <span className="icon2 mr-5">
              <ion-icon name="mail-outline" />
            </span>
            <span className="title cursor-pointer">Inbox</span>
          </li>

          <li className="mb-2 flex w-full items-center rounded-[20px] bg-white p-4 ">
            <span className="icon2 mr-5">
              <ion-icon name="settings-outline" />
            </span>
            <span className="title cursor-pointer">Setting</span>
          </li>

          <li className="mb-2 flex w-full items-center rounded-[20px] bg-white p-4 ">
            <span className="icon2 mr-5">
              <ion-icon name="chatbubble-outline" />
            </span>
            <span className="title cursor-pointer">Help</span>
          </li>

          <li className="mb-2 flex w-full items-center rounded-[20px] bg-white p-4 ">
            <span className="icon2 mr-5">
              <ion-icon name="log-out-outline" />
            </span>
            <span className="title cursor-pointer">Sign Out</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default ProfileMenu;
