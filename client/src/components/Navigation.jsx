import React from "react";
import logo from "../assets/Logo.png";
import { MdRssFeed } from "react-icons/md";
import {
  BsPersonPlusFill,
  BsBriefcase,
  BsChatLeft,
  BsThreeDots,
  BsSearch,
} from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="">
      <ul className="flex justify-between gap-5 items-center p-2 h-[80px] w-full shadow-lg">
        <div className="w-[130px] h-[80px] border-r-2 border-gray-100">
          {" "}
          <img src={logo} className="w-[46px] h-[46px] mx-auto mt-[17px] " />
        </div>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <MdRssFeed className="mx-auto w-[24px] h-[24px] " /> Feed
          </span>
        </li>
        <li className="w-[90px] text-center ">
          <span className=" ">
            <BsPersonPlusFill Feed className=" w-[24px] h-[24px] mx-auto " />{" "}
            Network
          </span>
        </li>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <BsBriefcase className="mx-auto w-[24px] h-[24px] " /> Jobs
          </span>
        </li>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <BsChatLeft className="mx-auto w-[24px] h-[24px] " /> Chat
          </span>
        </li>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <IoIosNotificationsOutline className="mx-auto w-[24px] h-[24px] " />{" "}
            Notifications
          </span>
        </li>
        <div className="relative w-[367px] border border-x-2 border-gray-100">
          <BsSearch className="absolute left-2 top-8 mr-10" />
          <input
            type="search"
            placeholder="Search"
            className="w-[360px] h-[80px] p-5 ml-4 outline-none"
          />
        </div>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <MdRssFeed className="mx-auto w-[24px] h-[24px] " /> Feed
          </span>
        </li>
        <li className="w-[90px] text-center">
          <span className=" text-center">
            <BsThreeDots className="mx-auto w-[24px] h-[24px] " /> Other
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
