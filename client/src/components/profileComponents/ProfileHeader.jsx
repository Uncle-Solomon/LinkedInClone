import React from "react";
import profilepicture from "../../assets/profilepic.jpeg";
import background from "../../assets/background.png";
import {
  BsPersonHearts,
  BsFillCalendarDateFill,
  BsSlashSquareFill,
  BsPencil,
  BsThreeDots,
} from "react-icons/bs";

const ProfileHeader = () => {
  return (
    <div className="rounded-md pb-2 w-[95%] mx-auto shadow-md bg-white">
      <div>
        <div className="h-64 relative">
          <img src={background} className="w-full h-[50%] rounded-t-md" />
          <img
            src={profilepicture}
            className="w-24 h-24 rounded-full border-4 border-white absolute top-20 left-4"
          />
          <BsPencil className="absolute bottom-20 right-4" />
        </div>
        <div className="pl-3 mt-[-3rem]">
          <h1 className="font-bold text-xl leading-none w-[80%] mb-4">
            Ameh Solomon Onyeke
          </h1>
          <p className="text-sm font-normal pr-3">
            Software Backend Developer | Machine Learning and AI Enthusiast |
            Technical Writer
          </p>
          <p className="text-xs font-thin my-3">
            <span>Inspired Technologies Ltd.</span>{" "}
            <span>Covenant University</span>
          </p>
          <p className="text-xs font-thin my-2">
            <span>Abuja, Federal Capital Territory, Nigeria</span>{" "}
            <span className=" text-blue-600 hover:underline font-semibold cursor-pointer">
              Contact Info
            </span>
          </p>
          <p className="text-xs my-4 text-blue-600 hover:underline font-semibold cursor-pointer">
            <span>390</span> connections
          </p>
          <div className="space-x-3 my-2">
            <button className="mx-2 py-1 px-2 border border-blue-600 text-white rounded-2xl font-semibold text-sm bg-blue-600 hover:bg-blue-900">
              Open to
            </button>
            <button className="mx-2 py-1 px-2 border border-blue-600 text-blue-600 rounded-2xl font-semibold text-sm  hover:bg-blue-100">
              Add profile section
            </button>
            <button className="mx-2 py-1 px-2 border border-blue-600 text-blue-600 rounded-2xl font-semibold text-sm hover:bg-blue-100 ">
              <BsThreeDots />
            </button>
          </div>
          <div className="p-2 text-xs font-semibold bg-blue-100 w-[80%] my-4 rounded-lg">
            <p className="my-1">Providing Services</p>
            <p className="font-normal">Web Development and Technical Writing</p>
            <p className="my-1 text-blue-600 hover:underline">Show Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
