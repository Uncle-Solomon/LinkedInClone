import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import profilepicture from "../assets/profilepic.jpeg";
import { MdHome, MdRssFeed } from "react-icons/md";
import {
  BsPersonPlusFill,
  BsSearch,
  BsFillChatRightDotsFill,
  BsBriefcaseFill,
  BsSlashSquareFill,
} from "react-icons/bs";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { RiArrowDownSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const LoginNavigation = () => {
  return (
    <nav className=" sticky top-0 z-50 flex my-2 p-2 items-center bg-white shadow-sm gap-8 justify-start lg:justify-between w-full text-sm md:text-xs h-12 mx-auto min-h-[100%] ">
      <div className="flex gap-0.5 items-center text-blue-600">
        <p className="text-3xl font-bold ">Linked</p>
        <BsLinkedin className="h-8 w-8" />
      </div>

      <div className=" border-r-2 w-[57%] border-gray-100 pr-2">
        <ul className="flex justify-end md:gap-8 items-center">
          <li>
            <span>
              <MdHome className={`w-4 h-4  mx-auto`} />
            </span>
            <span className="hidden md:block">Discover</span>
          </li>
          <li>
            <span>
              <BsPersonPlusFill className="w-4 h-4 active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block text-center md:leading-none">
              People
            </span>
          </li>
          <li>
            <span>
              <BsFillChatRightDotsFill className="w-4 h-4 rounded-lg  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Learning</span>
          </li>
          <li>
            <span>
              <BsBriefcaseFill className="w-4 h-4  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Jobs</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-2">
        <button
          className="mt-2 hover:bg-gray-100 rounded-2xl py-3 px-4 flex gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Join now
        </button>
        <button
          className="mt-2 hover:bg-gray-100 border border-blue-600 rounded-3xl py-3 px-4 flex gap-1 text-sm text-blue-600 font-semibold"
          type="button"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default LoginNavigation;
