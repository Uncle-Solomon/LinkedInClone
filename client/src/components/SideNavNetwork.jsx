import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import {
  RiChatSmile3Fill,
  RiContactsBook2Line,
  RiPagesLine,
  RiHashtag,
} from "react-icons/ri";
import {
  BsPeopleFill,
  BsFillPersonFill,
  BsFillCalendarDateFill,
  BsNewspaper,
} from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

import ebuka from "../assets/ebuka.jpeg";
import ad from "../assets/ad.png";

import RandomFooter from "./RandomFooter";

const SideNavNetwork = () => {
  return (
    <div>
      <div className="rounded-md w-[90%] mx-auto shadow-md bg-white text-gray-500 font-light text-md hover:cursor-pointer">
        <div className="flex mb-2">
          <h1 className="text-black text-base font-normal pl-6 pt-2">
            Manage my Network
          </h1>
        </div>

        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full ">
          <BsPeopleFill />
          Connections
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <RiContactsBook2Line />
          Contacts
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <BsFillPersonFill />
          Following & Followers
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <IoIosPeople />
          Group
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <BsFillCalendarDateFill />
          Events
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <RiPagesLine />
          Pages
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <BsNewspaper />
          Newsletters
        </div>
        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full">
          <RiHashtag />
          Hashtags
        </div>

        <div className="flex items-center gap-4 my-1 hover:bg-gray-300 py-1 pl-6 w-full ">
          <div className="flex gap-2 items-center font-bold">
            Show Less <MdKeyboardArrowUp className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="rounded-md pb-2 w-[90%] mx-auto mt-2">
        <img src={ad} className=" w-full cursor-pointer" />
        <RandomFooter />
      </div>
    </div>
  );
};

export default SideNavNetwork;
