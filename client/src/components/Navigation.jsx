import React from "react";
import logo from "../assets/Logo.png";
import profilepicture from "../assets/profilepic.jpeg";
import { MdHome, MdRssFeed } from "react-icons/md";
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
    <nav className=" sticky top-0 flex p-5 justify-between w-full text-xs h-20 mx-auto my-0 min-h-[100%] ">
      <div className="flex justify-between gap-5 items-center">
        <img src={logo} className="h-8 w-8" />
        <div>
          <span>
            <BsSearch />
          </span>
          Search
        </div>
      </div>

      <div>
        <ul className="flex gap-5 items-center">
          <li>
            <span>
              <MdHome />
            </span>
            Home
          </li>
          <li>
            <span>
              <BsPersonPlusFill />
            </span>
            My Network
          </li>
          <li>
            <span>
              <BsBriefcase />
            </span>
            Jobs
          </li>
          <li>Messaging</li>
          <li>Notifications</li>
          <li>
            <img
              src={profilepicture}
              className="w-5 h-5 rounded-full"
              alt="A profile picture"
            />
            Me
          </li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <div>For Business</div>
        <a href="#">Get Hired Faster. Try Premium Free</a>
      </div>
    </nav>
  );
};

export default Navigation;
