import React from "react";
import ebuka from "../../assets/ebuka.jpeg";
import { BsThreeDots } from "react-icons/bs";

const SingleNotification = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 border-b ">
      <div className="flex gap-2">
        <div className="p-2 text-sm flex gap-2 text-gray-400 ">
          <img src={ebuka} className="h-12 w-12 rounded-full" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptas dolorem assumenda inventore modi quam accusantium
          </p>
          <div>
            <span>2h</span>
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
