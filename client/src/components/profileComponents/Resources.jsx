import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";

const Resources = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <h1 className="font-bold leading-none">Resources</h1>
      <p className="flex gap-1 items-center text-xs text-gray-600 font-light mb-2">
        <AiFillEye className="font-bold text-base" /> Private to you
      </p>

      <div className="flex gap-2 items-start my-6 text-xs ">
        <FaSatelliteDish />
        <span>
          <p className="font-bold text-sm">Creator mode</p>
          <p>
            Get discovered, showcase content on your profile, and get access to
            creator tools
          </p>
        </span>
      </div>
      <div className="flex gap-2 items-start my-6 text-xs ">
        <MdPeople className="font-bold text-base" />{" "}
        <span>
          <p className="font-bold text-sm">My network</p>
          <p>See and manage your connections and interests.</p>
        </span>
      </div>
    </div>
  );
};

export default Resources;
