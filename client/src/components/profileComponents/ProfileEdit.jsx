import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const ProfileEdit = () => {
  return (
    <div className="rounded-md px-4 py-2 my-2 w-[95%] mx-auto shadow-md  z-0 bg-white  ">
      <div className="flex justify-between items-start my-6 text-xs ">
        <p className="font-bold text-sm border-b pb-2">
          Edit public profile & URL
        </p>{" "}
        <AiFillQuestionCircle />
      </div>
      <div className="flex justify-between items-start my-6 text-xs ">
        <p className="font-bold text-sm border-b pb-2">
          Add profile in another language
        </p>{" "}
        <AiFillQuestionCircle />
      </div>
    </div>
  );
};

export default ProfileEdit;
