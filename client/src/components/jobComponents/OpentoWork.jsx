import React from "react";
import profilepicture from "../../assets/test.jpg";
import background from "../../assets/background.png";

import { FaUserPlus } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const OpentoWork = () => {
  return (
    <div className="rounded-md pb-2 bg-white mx-2 my-2">
      <div>
        <div className="pl-3 pt-6 pr-3 mt-[-0.5rem]">
          <h1 className="font-bold text-sm leading-5 w-[80%] mb-2">
            Open to work
          </h1>
          <p className="text-xs font-thin mt-2">
            Software Backend Developer | Machine Learning and AI ...
          </p>
          <div className="text-xs font-semibold flex gap-4 items-center mt-4 mb-4">
            <p>Show recruiters you're open to new job opportunities</p>
            <img src={profilepicture} className="w-12 h-12 rounded-full " />
          </div>
          <p className="text-xs font-thin mt-2">
            Increase your chances of getting a job sooner when you are
            #OpenToWork - you control who sees this.
          </p>

          <button className="flex gap-1 mt-4 text-sm items-center hover:text-blue-600 hover:underline text-semibold">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpentoWork;
