import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import SingularSkill from "./SingularSkill";

const Skills = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md w-[95%] mx-auto shadow-md  z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="p-6 ">
        <div className="flex justify-between">
          <h1>Skills</h1>
          <div className="flex gap-2 cursor-pointer">
            <button className="mx-2 py-1 px-2 border border-blue-600 text-blue-600 rounded-2xl font-semibold text-sm  hover:bg-blue-100">
              Demonstrate Skills
            </button>
            <AiOutlinePlus />
            <BsPencil />
          </div>
        </div>
        <SingularSkill />
        <SingularSkill />
      </div>
      <div className="flex items-center w-full  hover:bg-gray-300 gap-2 justify-center text-sm mt-2 p-2 ">
        Show all <span>15 </span>skills <BiRightArrowAlt />
      </div>
    </div>
  );
};

export default Skills;
