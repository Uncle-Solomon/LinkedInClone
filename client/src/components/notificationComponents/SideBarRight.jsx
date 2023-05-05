import React from "react";
import profilepicture from "../../assets/profilepic.jpeg";
import job from "../../assets/job.jpeg";

const SideBarRight = () => {
  return (
    <div className="bg-white px-4 py-4">
      <p className="text-sm font-thin ">
        Ameh, stay informed on industry news and trends
      </p>
      <div className="flex w-[80%] my-3 mx-auto gap-4 px-4 items-center">
        <img src={profilepicture} className="w-12 h-12 rounded-full" />
        <img src={job} className="w-12 h-12" />
      </div>
      <p className=" text-sm">
        Ameh, grow your business with news and insights from Web-flake Digital
        Agency
      </p>
      <div className="flex justify-center items-center">
        <button className="border rounded-3xl px-2 py-1 text-blue-600 font-semibold text-sm hover:bg-blue-200">
          Follow
        </button>
      </div>
    </div>
  );
};

export default SideBarRight;
