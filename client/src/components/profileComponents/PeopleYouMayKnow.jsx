import React from "react";
import background from "../../assets/background.jpg";

import SingularPeopleViewed from "./SingularPeopleViewed";

import { AiOutlineDown } from "react-icons/ai";

const PeopleYouMayKnow = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md  my-2 w-[95%] mx-auto shadow-md  z-0 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="px-4 py-2">
        <h1 className="my-2">People you may know</h1>
        <SingularPeopleViewed />
        <SingularPeopleViewed />
        <SingularPeopleViewed />
        <SingularPeopleViewed />
      </div>
      <div className="flex items-center w-full font-semibold hover:bg-gray-300 gap-2 justify-center text-sm -mt-6 p-2 ">
        Show more <AiOutlineDown />
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
