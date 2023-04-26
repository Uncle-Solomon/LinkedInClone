import React from "react";
import profilepicture from "../assets/profilepic.jpeg";
import { HiOutlinePhotograph } from "react-icons/hi";

const StartPost = () => {
  return (
    <div className="border rounded-md p-2">
      <div className="flex gap-2">
        <img src={profilepicture} className="w-10 h-10 rounded-full" />
        <input
          type="text"
          placeholder="Start a post"
          className="h-10 w-[80%] rounded-3xl border border-gray-800 px-3 text-sm"
        />
      </div>
      <div className="flex gap-2 justify-between mt-4">
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-6 mr-2" /> Photo
        </span>
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-6 mr-2" /> Photo
        </span>
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-6 mr-2" /> Photo
        </span>
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-6 mr-2" /> Photo
        </span>
      </div>
    </div>
  );
};

export default StartPost;
