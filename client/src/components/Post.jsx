import React from "react";
import ajanaku from "../assets/ajanaku.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const Post = () => {
  return (
    <div className="bg-white p-2">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src={ajanaku} className="w-5 h-5 rounded-full" />
          <p className="text-xs">
            <span className="font-bold">Governor Ajanaku</span>{" "}
            <span>commented on </span>this
          </p>
        </div>
        <BsThreeDots />
      </div>
      <hr className="w-full my-2 " />

      <div className="flex gap-2">
        <img src={ajanaku} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-bold text-sm">Governor Ajanaku</h3>
          <p className=" text-xs text-gray-800 font-light">
            Electrical Engineering Graduate | Leader | Data Analyst (in view)
          </p>
          <p className="gap-2 inline text-xs text-gray-800">1w .</p>
          <BiWorld className="inline w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Post;
