import React from "react";
import background from "../../assets/background.jpg";

import SingularPeopleViewed from "./SingularPeopleViewed";

import { BiRightArrowAlt } from "react-icons/bi";

const PeopleAlsoViewed = ({ isOpen }) => {
  return (
    <div
      className={`rounded-md  my-2 w-[95%] mx-auto shadow-md  z-0 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="px-4 py-2">
        <h1 className="my-2">People also viewed</h1>
        <SingularPeopleViewed />
        <SingularPeopleViewed />
        <SingularPeopleViewed />
        <SingularPeopleViewed />
      </div>
      <div className="flex items-center w-full font-semibold hover:bg-gray-300 gap-2 justify-center text-sm -mt-6 p-2 ">
        Show more <BiRightArrowAlt />
      </div>
    </div>
  );
};

export default PeopleAlsoViewed;
