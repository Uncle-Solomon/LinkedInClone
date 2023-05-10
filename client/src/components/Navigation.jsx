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

const Navigation = () => {
  const [clicked, setClicked] = useState(0);

  const [dropdown, setDropdown] = useState(true);

  const navigate = useNavigate();

  const handleClick = (state, addr, e) => {
    navigate(addr);
    setClicked(state);
  };
  const toggleDropDown = () => {
    setDropdown((prevdropdown) => !prevdropdown);
  };

  return (
    <nav className=" sticky top-0 z-50 flex p-2 items-center bg-white shadow-sm gap-12 justify-start lg:justify-between w-full text-xs h-12 mx-auto my-0 min-h-[100%] ">
      <div className="flex justify-between gap-5 items-center">
        <img src={logo} className="h-8 w-8" />
        <div className="w-auto">
          <span>
            <BsSearch className="w-4 h-4  hover:text-black active:border-b-2 mx-auto" />
          </span>
          Search
        </div>
      </div>

      <div className=" border-r-2  border-gray-100 pr-2">
        <ul className="flex gap-4 md:gap-8 items-center">
          <li
            className={`w-auto  hover:text-black cursor-pointer ${
              clicked === 1
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            } `}
            onClick={() => handleClick(1, "/")}
          >
            <span>
              <MdHome className={`w-4 h-4  mx-auto`} />
            </span>
            <span className="hidden md:block">Home</span>
          </li>
          <li
            className={`w-auto  hover:text-black cursor-pointer ${
              clicked === 2
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            } `}
            onClick={() => handleClick(2, "/mynetwork")}
          >
            <span>
              <BsPersonPlusFill className="w-4 h-4 active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block text-center md:leading-none">
              My Network
            </span>
          </li>
          <li
            className={`w-auto  hover:text-black cursor-pointer ${
              clicked === 3
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            } `}
            onClick={() => handleClick(3, "/jobs")}
          >
            <span>
              <BsBriefcaseFill className="w-4 h-4  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Jobs</span>
          </li>
          <li
            className={`w-auto  hover:text-black cursor-pointer ${
              clicked === 4
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            } `}
            onClick={() => handleClick(4)}
          >
            <span>
              <BsFillChatRightDotsFill className="w-4 h-4 rounded-lg  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Messaging</span>
          </li>
          <li
            className={`w-auto  hover:text-black cursor-pointer ${
              clicked === 5
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            } `}
            onClick={() => handleClick(5, "/notifications")}
          >
            <span>
              <IoIosNotifications className="w-4 h-4  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Notifications</span>
          </li>
          <li className={`w-auto cursor-pointer`} onClick={toggleDropDown}>
            <img
              src={profilepicture}
              className="w-5 h-5 rounded-full"
              alt="A profile picture"
            />
            <span className="flex items-center relative">
              Me <RiArrowDownSFill />
              <div
                className={
                  dropdown
                    ? `hidden`
                    : `block bg-white p-2 w-[250px]  absolute z-10 top-6 right-4 border rounded-lg`
                }
              >
                <div className="border-b border-1 pb-0 z-10">
                  <div className="flex gap-2 items-center">
                    <img
                      src={profilepicture}
                      className="rounded-full h-12 w-12"
                    />
                    <div>
                      <h2 className="font-bold text-base leading-none">
                        Ameh Solomon Onyeke
                      </h2>
                      <p
                        className="mb-2 mt-1 text-sm font-thin
                    "
                      >
                        Software Backend Developer | Machine Learning and AI
                        Enthusiast | Technical Writer
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      toggleDropDown;
                      navigate("/profile");
                    }}
                    className="w-[90%] text-blue-600 mt-1 mb-2 font-bold mx-auto p-1 border border-blue-600 rounded-xl"
                  >
                    View Profile
                  </button>
                </div>

                <h3 className="text-sm font-bold">Account</h3>
                <p className="my-3 text-sm font-thin">
                  <BsSlashSquareFill className="inline mr-1 w-4 h-4 text-amber-500" />
                  Try Premium for free
                </p>
                <p className="my-3 text-sm font-thin">Settings & Privacy</p>
                <p className="my-3 text-sm font-thin">Help</p>
                <p className="my-3 text-sm font-thin border-b border-1 pb-2">
                  Language
                </p>
                <h3 className="my-3 text-sm font-bold">Manage</h3>
                <p className="my-3 text-sm font-thin">Posts & Activity</p>
                <p className="my-3 text-sm font-thin">Job Posting Account</p>
                <p className="my-3 text-sm font-thin">Sign Out</p>
              </div>
            </span>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <div className={`cursor-pointer text-center`}>
          <span>
            <CgMenuGridR className="w-4 h-4 mx-auto " />
          </span>
          For Business
        </div>
        <a href="#" className=" underline text-[#b0a113] sm:text-xs ">
          <p>Get Hired Faster.</p> <p>Try Premium Free</p>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
