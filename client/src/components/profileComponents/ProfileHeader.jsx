import React, { useContext, useEffect } from "react";
import profilepictureMale from "../../assets/pp.jpg";
import profilepictureFemale from "../../assets/ppfemale.jpg";

import background from "../../assets/background.jpg";
import {
  BsPersonHearts,
  BsFillCalendarDateFill,
  BsSlashSquareFill,
  BsPencil,
  BsThreeDots,
} from "react-icons/bs";

import { AppContext } from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ handleToggle, isOpen }) => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (userData) {
    //(userData);
    obj = JSON.parse(userData);
  }
  return (
    <div
      className={`rounded-md pb-2 w-[95%] mx-auto shadow-md z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div>
        <div className="h-64 z-0">
          <img src={background} className="w-full h-[50%] z-0 rounded-t-md" />
          <div className="relative">
            {obj.gender == "Male" ? (
              <img
                src={profilepictureMale}
                className="w-24 h-24 rounded-full border-4 border-white absolute -top-12 left-4"
              />
            ) : (
              <img
                src={profilepictureFemale}
                className="w-24 h-24 rounded-full border-4 border-white absolute -top-12 left-4"
              />
            )}

            <BsPencil
              className="absolute -bottom-8 right-4 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
        </div>
        <div className="pl-3 mt-[-4rem]">
          <h1 className="font-bold text-xl leading-none w-[80%] mb-4">
            {obj.lastName} {obj.otherNames}
          </h1>
          <p className="text-sm font-normal pr-3">{obj.headline}</p>
          <p className="text-xs font-thin my-3">
            <span>
              {obj.experience.map((item) =>
                item.map((param) => param.companyName)
              )}
            </span>
            .{" "}
            <span>
              {obj.education.map((item) =>
                item.map((param) => param.UniversityName)
              )}
            </span>
          </p>
          <p className="text-xs font-thin my-2">
            <span>
              {obj.city}, {obj.country}
            </span>{" "}
            <span className=" text-blue-600 hover:underline font-semibold cursor-pointer">
              Contact Info
            </span>
          </p>
          <p className="text-xs my-4 text-blue-600 hover:underline font-semibold cursor-pointer">
            <span>390</span> connections
          </p>
          <div className="space-x-3 my-2">
            <button className="mx-2 py-1 px-2 border border-blue-600 text-white rounded-2xl font-semibold text-sm bg-blue-600 hover:bg-blue-900">
              Open to
            </button>
            <button className="mx-2 py-1 px-2 border border-blue-600 text-blue-600 rounded-2xl font-semibold text-sm  hover:bg-blue-100">
              Add profile section
            </button>
            <button className="mx-2 py-1 px-2 border border-blue-600 text-blue-600 rounded-3xl font-semibold text-sm hover:bg-blue-100 ">
              <BsThreeDots />
            </button>
          </div>
          <div className="p-2 text-xs font-semibold bg-blue-100 w-[80%] my-4 rounded-lg">
            <p className="my-1">Providing Services</p>
            <p className="font-normal">Web Development and Technical Writing</p>
            <p className="my-1 text-blue-600 hover:underline">Show Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
