import React, { useEffect, useState } from "react";
import {
  BsPersonPlusFill,
  BsSearch,
  BsFillChatRightDotsFill,
  BsBriefcaseFill,
  BsSlashSquareFill,
} from "react-icons/bs";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import {
  MdOutlineExplore,
  MdPeopleAlt,
  MdOutlineEventNote,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const LoginNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav className=" z-50 flex my-2 p-2 items-center bg-white shadow-sm gap-2 justify-start lg:justify-between w-full text-sm md:text-xs h-12 mx-auto min-h-[100%] ">
      <div
        className="flex gap-0.5 items-center text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <p className="text-3xl font-bold ">Linked</p>
        <BsLinkedin className="h-8 w-8" />
      </div>

      <div className=" border-r-2 w-[57%] border-gray-100 pr-2">
        <ul className=" justify-end  hidden lg:flex gap-8 items-center cursor-pointer">
          <li>
            <span>
              <MdOutlineExplore className={`w-5 h-5 text-gray-500  mx-auto`} />
            </span>
            <span className="hidden md:block">Discover</span>
          </li>
          <li>
            <span>
              <MdPeopleAlt className="w-5 h-5 text-gray-500 active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block text-center md:leading-none">
              People
            </span>
          </li>
          <li>
            <span>
              <MdOutlineEventNote className="w-5 h-5 text-gray-500 rounded-lg  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Learning</span>
          </li>
          <li>
            <span>
              <BsBriefcaseFill className="w-5 h-5 text-gray-500  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Jobs</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-end gap-2 w-full md:w-auto lg:justify-start">
        <button
          className="mt-2  w-[6rem] hover:bg-gray-100 rounded-2xl py-3 px-4 flex gap-1 text-sm text-black font-semibold"
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Join now
        </button>
        <button
          className="mt-2 w-[5rem] hover:bg-gray-100 border border-blue-600 rounded-3xl py-3 px-4 flex gap-1 text-sm text-blue-600 font-semibold"
          type="button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default LoginNavigation;
