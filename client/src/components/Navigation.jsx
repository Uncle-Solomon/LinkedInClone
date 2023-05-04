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
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [clicked, setClicked] = useState(0);

  const navigate = useNavigate();

  const handleClick = (state, addr, e) => {
    navigate(addr);
    setClicked(state);
  };
  return (
    <nav className=" sticky top-0 flex p-2 items-center bg-white shadow-sm gap-12 justify-start lg:justify-between w-full text-xs h-12 mx-auto my-0 min-h-[100%] ">
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
            <span className="hidden md:block">My Network</span>
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
            onClick={() => handleClick(5)}
          >
            <span>
              <IoIosNotifications className="w-4 h-4  active:border-b-2 mx-auto" />
            </span>
            <span className="hidden md:block">Notifications</span>
          </li>
          <li className={`w-auto cursor-pointer`}>
            <img
              src={profilepicture}
              className="w-5 h-5 rounded-full"
              alt="A profile picture"
            />
            <span className="hidden md:block">Me</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <div className={`cursor-pointer`}>
          <span>
            <CgMenuGridR className="w-4 h-4 mx-auto" />
          </span>
          For Business
        </div>
        <a href="#" className=" underline text-[#b0a113]">
          <p>Get Hired Faster.</p> <p>Try Premium Free</p>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
