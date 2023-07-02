import React from "react";

import profilepicture from "../assets/test.jpg";
import background from "../assets/background.jpg";

import { AiOutlineClose } from "react-icons/ai";

const SingleCreatorCard = () => {
  return (
    <div className="rounded-md pb-2 col-span-6 md:col-span-4 lg:col-span-3 shadow-md bg-white mx-2 my-2 hover:outline hover:outline-[0.3px] outline-gray-50 hover:shadow-black hover:shadow-md group">
      <div>
        <div className="h-28 relative">
          <img src={background} className="w-full h-[50%] rounded-t-md" />
          <img
            src={profilepicture}
            className="w-20 h-20 rounded-full border border-white -mt-10 top-6 items-center mx-auto"
          />
          <AiOutlineClose className="text-white bg-blend-overlay text-md w-6 h-6 p-1 rounded-full absolute top-1 right-1 cursor-pointer hidden group-hover:block" />
        </div>
        <div className="pl-3 mt-[-0.5rem]">
          <h1 className="font-bold text-sm leading-5 w-[80%] mb-4 text-center">
            Ameh Solomon Onyeke
          </h1>
          <p className="text-xs font-thin text-center mt-2">
            Software Backend Developer | Machine Learning and AI ...
          </p>
          <p className="text-xs font-thin text-center mt-4 mb-4">
            <span className="">30</span> mutual connections
          </p>
          <div className="flex justify-center items-center">
            <button className="border rounded-3xl px-4 py-2 flex gap-1 text-blue-600 font-semibold hover:bg-blue-200">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCreatorCard;
