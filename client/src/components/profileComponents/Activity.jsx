import React from "react";

import { BsFillChatHeartFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

const Activity = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md w-[95%] mx-auto shadow-md z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className=" p-6 ">
        <div className="flex justify-between items-center">
          <span>
            <h1 className="text-base font-bold">Activity</h1>
            <p className="text-xs font-semibold text-blue-600 hover:underline hover:font-bold">
              393 followers
            </p>
          </span>
          <button className="text-sm font-semibold text-blue-700 border border-blue-700 py-1 px-4 rounded-3xl hover:border-2 hover:bg-blue-200">
            Start a post
          </button>
        </div>
        <div className="border-b">
          <p className="text-xs font-semibold my-4">
            Ameh Solomon Onyeke{" "}
            <span className="font-thin">
              commented on a post
              <span> .2d</span>
            </span>
          </p>
          <p className="text-xs py-2 font-light">Congratulations Boss</p>
          <div className="text-xs flex justify-between font-extralight">
            <span className="flex text-xs my-2">
              <AiFillLike className="text-blue-800 -mr-1.5" />
              <BsFillChatHeartFill className="text-red-700 mr-1" />
              82
            </span>
            <div>43 Comments . 1 post</div>
          </div>
        </div>
        <div className="border-b">
          <p className="text-xs font-semibold my-4">
            Ameh Solomon Onyeke{" "}
            <span className="font-thin">
              commented on a post
              <span> .2d</span>
            </span>
          </p>
          <p className="text-xs py-2 font-light">Congratulations Boss</p>
          <div className="text-xs flex justify-between font-extralight">
            <span className="flex text-xs my-2">
              <AiFillLike className="text-blue-800 -mr-1.5" />
              <BsFillChatHeartFill className="text-red-700 mr-1" />
              82
            </span>
            <div>43 Comments . 1 post</div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full  hover:bg-gray-300 gap-2 justify-center text-sm -mt-6 p-2 ">
        Show all activity <BiRightArrowAlt />
      </div>
    </div>
  );
};

export default Activity;
