import React from "react";
import profilepicture from "../assets/profilepic.jpeg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsFillCalendarDateFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

const StartPost = () => {
  return (
    <div className="border rounded-md p-2">
      <div className="flex gap-2">
        <img src={profilepicture} className="w-10 h-10 rounded-full" />
        <input
          type="text"
          placeholder="Start a post"
          className="h-10 w-[80%] rounded-3xl outline-none border border-gray-800 px-3 text-sm"
        />
      </div>
      <div className="flex gap-2 justify-between mt-4 text-sm">
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-8 mr-1 text-blue-600" />{" "}
          Photo
        </span>
        <span>
          <BsFillPlayBtnFill className="inline-block h-4 w-6 mr-1 text-green-800" />{" "}
          Video
        </span>
        <span>
          <BsFillCalendarDateFill className="inline-block h-4 w-4 mr-1 text-amber-600 " />{" "}
          Event
        </span>
        <span>
          <MdArticle className="inline-block h-4 w-4 mr-1 text-orange-700" />{" "}
          Write Article
        </span>
      </div>
    </div>
  );
};

export default StartPost;
