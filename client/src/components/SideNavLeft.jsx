import React, { useContext, useEffect } from "react";
import profilepicture from "../assets/test.jpg";
import profilepictureMale from "../assets/pp.png";
import profilepictureFemale from "../assets/ppfemale.png";
import background from "../assets/background.png";
import {
  BsPersonHearts,
  BsFillCalendarDateFill,
  BsSlashSquareFill,
} from "react-icons/bs";

import { AppContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";

const SideNavLeft = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (userData) {
    console.log(userData);
    obj = JSON.parse(userData);
  }

  return (
    <div className="rounded-md pb-2 w-[95%] mx-auto shadow-md bg-white">
      <div>
        <div className="h-28 ">
          <img src={background} className="w-full h-[50%] z-0 rounded-t-md" />
          <div className="relative">
            {obj.gender == "Male" ? (
              <img
                src={profilepictureMale}
                className="w-16 h-16 rounded-full absolute -top-8 left-4"
              />
            ) : (
              <img
                src={profilepictureFemale}
                className="w-16 h-16 rounded-full absolute -top-8 left-4"
              />
            )}
          </div>
        </div>
        <div className="pl-3 mt-[-0.5rem]">
          <h1 className="font-bold text-lg leading-5 w-[80%] mb-4">
            {obj.lastName} {obj.otherNames}
          </h1>
          <p className="font-semibold text-sm md:text-center mb-2 ">
            {obj.headline}
          </p>
          <p className="text-xs font-thin">
            <span className="font-semibold mr-0.5 text-sm">30</span> profile
            Views
          </p>
          <p className="text-xs font-thin">
            <span className="font-semibold mr-0.5 text-sm">30</span> post
            impressions
          </p>

          <hr className="w-[95%] my-5 " />

          <h3 className="text-md text-gray-500 font-semibold mb-4 ">
            <BsPersonHearts className="inline mr-3" />
            Groups
          </h3>
          <h3 className="text-md text-gray-500 font-semibold mb-4 ">
            <BsFillCalendarDateFill className="inline mr-3" />
            Events
          </h3>
        </div>
        <hr className="w-full my-5 " />
        <div className="pl-3 ">
          <p className="text-sm font-thin">Access exclusive tools & Insights</p>
          <p className="text-sm mt-2 font-bold">
            <BsSlashSquareFill className="inline mr-1 w-4 h-4 text-amber-500" />
            Try Premium for free
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavLeft;
