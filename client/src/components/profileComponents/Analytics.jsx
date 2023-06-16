import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdPeople, MdOutlineBarChart, MdSearch } from "react-icons/md";

const Analytics = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md  z-0  my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <h1 className="font-bold leading-none">Analytics</h1>
      <p className="flex gap-1 items-center text-xs text-gray-600 font-light mb-2">
        <AiFillEye /> Private to you
      </p>

      <div className="flex gap-2 items-start my-6 text-xs ">
        <MdPeople className="font-bold text-base" />
        <span>
          <p className="font-bold text-sm">34 profile views</p>
          <p>Discover who's viewed your profile</p>
        </span>
      </div>
      <div className="flex gap-2 items-start my-6 text-xs ">
        <MdOutlineBarChart className="font-bold text-sm" />
        <span>
          <p className="font-bold text-sm">39 post impressions</p>
          <p>Check out who's engaging with your posts</p>
        </span>
      </div>
      <div className="flex gap-2 items-start my-6 text-xs ">
        <MdSearch className="font-bold text-sm" />
        <span>
          <p className="font-bold text-sm">6 search appearances</p>
          <p>See how often you appear in search results</p>
        </span>
      </div>
    </div>
  );
};

export default Analytics;
