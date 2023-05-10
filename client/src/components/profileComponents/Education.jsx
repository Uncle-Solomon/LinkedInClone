import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import cu from "../../assets/cu.jpeg";

const Education = () => {
  return (
    <div className="rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 bg-white my-2 ">
      <div className="flex justify-between">
        <h1>Experience</h1>
        <div className="flex gap-2 cursor-pointer">
          <AiOutlinePlus />
          <BsPencil />
        </div>
      </div>
      <div className="flex justify-between gap-3 border-b text-xs mt-2">
        <img src={cu} className="rounded-full w-12 h-12" />
        <div>
          <p className="text-sm font-semibold mb-2">Covenant University</p>
          <p className="my-1 font-extralight">
            Bachelor of Engineering - B.Eng, Computer Engineering
          </p>
          <p className="my-1 font-extralight">2017 - 2022</p>
          <p className="my-2 font-semibold">
            Skills:
            <span className="font-extralight ml-1">
              Technical Writing · Creative Problem Solving
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
