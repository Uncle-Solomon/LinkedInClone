import React, { useState } from "react";
import logo from "../assets/Logo.png";
import profilepicture from "../assets/profilepic.jpeg";
import { MdHome, MdRssFeed } from "react-icons/md";
import {
  BsPersonPlusFill,
  BsBriefcase,
  BsChatLeft,
  BsThreeDots,
  BsSearch,
  BsFillChatRightDotsFill,
  BsBriefcaseFill,
} from "react-icons/bs";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";

const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className=" sticky top-0 flex p-2 items-center bg-white shadow-sm justify-between w-full text-xs h-12 mx-auto my-0 min-h-[100%] ">
      <div className="flex justify-between gap-5 items-center">
        <img src={logo} className="h-8 w-8" />
        <div className="w-auto">
          <span>
            <BsSearch className="w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto" />
          </span>
          Search
        </div>
      </div>

      <div className=" border-r-2 border-gray-100 pr-2">
        <ul className="flex gap-5 items-center">
          <li className="w-auto">
            <a href="/">
              <span>
                <MdHome
                  className={
                    onclick
                      ? `border border-red-500`
                      : `w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto`
                  }
                />
              </span>
              Home
            </a>
          </li>
          <li className="w-auto">
            <span>
              <BsPersonPlusFill className="w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto" />
            </span>
            My Network
          </li>
          <li className="w-auto">
            <span>
              <BsBriefcaseFill className="w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto" />
            </span>
            Jobs
          </li>
          <li className="w-auto">
            <span>
              <BsFillChatRightDotsFill className="w-4 h-4 rounded-lg text-gray-500 hover:text-black active:border-b-2 mx-auto" />
            </span>
            Messaging
          </li>
          <li className="w-auto">
            <span>
              <IoIosNotifications className="w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto" />
            </span>
            Notifications
          </li>
          <li className="w-auto">
            <img
              src={profilepicture}
              className="w-5 h-5 rounded-full"
              alt="A profile picture"
            />
            Me
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center ">
        <div className="w-auto">
          <span>
            <CgMenuGridR className="w-4 h-4 text-gray-500 hover:text-black active:border-b-2 mx-auto" />
          </span>
          For Business
        </div>
        <a href="#">Get Hired Faster. Try Premium Free</a>
      </div>
    </nav>
  );
};

export default Navigation;
