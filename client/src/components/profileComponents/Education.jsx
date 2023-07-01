import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../ContextProvider";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import educationPicture from "../../assets/education.jpg";

const Education = ({ isOpen, handleToggle }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);
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
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h1>Education</h1>
        <div className="flex gap-2 cursor-pointer">
          <AiOutlinePlus onClick={handleToggle} />
          <BsPencil onClick={handleToggle} />
        </div>
      </div>
      {obj.education ? (
        obj.education.map((item) => (
          <div>
            {item.map((param) => (
              <div className="flex  gap-3 border-b text-xs mt-2">
                <img
                  src={educationPicture}
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <p className="text-sm font-semibold mb-2">
                    {param.UniversityName}
                  </p>
                  <p className="my-1 font-extralight">{param.degree}</p>
                  <p className="my-1 font-extralight">
                    {new Date(param.startDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(param.endDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="my-2 font-semibold">
                    Skills:
                    <span className="font-extralight ml-1">{param.skills}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-xs mt-6">Please edit your education history</p>
      )}

      {/* <div className="flex  gap-3 border-b text-xs mt-2">
        <img src={educationPicture} className="rounded-full w-12 h-12" />
        <div>
          <p className="text-sm font-semibold mb-2">Covenant University</p>
          <p className="my-1 font-extralight">
            Bachelor of Engineering - B.Eng, Computer Engineering
          </p>
          <p className="my-1 font-extralight">2017 - 2022</p>
          <p className="my-2 font-semibold">
            Skills:
            <span className="font-extralight ml-1">
              Technical Writing · Creative Problem Solving
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Education;
