import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../ContextProvider";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import background from "../../assets/favicon.ico";
import sec from "../../assets/sec.jpeg";
import { BiTrash } from "react-icons/bi";

const Experience = ({ isOpen, handleToggle }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (!userData) {
    //(userData);
    console.log("There is an error");
    navigate("/signin");
  }

  obj = JSON.parse(userData);
  let _id = obj._id;

  const deletePosition = async () => {
    try {
      const response = await fetch("https://linked-in-clone-backend.vercel.app/users/add-position", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
        }),
      });

      const data = await response.json();
      //(data);
      if (data) {
        setUserData(JSON.stringify(data));
        onClose();
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
  };
  return (
    <div
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 my-2  ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h1>Experience</h1>
        <div className="flex gap-4 cursor-pointer">
          <AiOutlinePlus onClick={handleToggle} />
          <BsPencil onClick={handleToggle} />
          <BiTrash onClick={deletePosition} />
        </div>
      </div>
      <div>
        {obj.experience ? (
          [...obj.experience].reverse().map((item) => (
            <div className="flex  gap-3 border-b text-xs mt-2">
              {item.map((param) => (
                <div className="flex  gap-3 border-b text-xs mt-2">
                  <img src={background} className="rounded-full w-12 h-12" />
                  <div>
                    <p className="text-sm font-semibold mb-2">{param.role}</p>
                    <p className="my-1 font-extralight">{param.companyName}</p>
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
                    <p className="my-1 font-extralight">
                      {param.location}. {param.locationType}
                    </p>
                    <p className="my-2 font-semibold">
                      Skills:
                      <span className="font-extralight ml-1">
                        {param.skills}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="flex  gap-3 border-b text-xs mt-2">
            <p className="text-sm font-semibold mb-2">
              Please edit your experience
            </p>
          </div>
        )}
      </div>
      {/* <div className="flex  gap-3 border-b text-xs mt-2">
        <img src={background} className="rounded-full w-12 h-12" />
        <div>
          <p className="text-sm font-semibold mb-2">
            Junior Software and Embedded Systems Engineer
          </p>
          <p className="my-1 font-extralight">
            Inspired Technologies Ltd . Internship
          </p>
          <p className="my-1 font-extralight">Jan 2023 - Present . 5 mos</p>
          <p className="my-1 font-extralight">
            Abuja, Federal Capital Territory, Nigeria. Onsite
          </p>
          <p className="my-2 font-semibold">
            Skills:
            <span className="font-extralight ml-1">
              JavaScript · C++ · Flask · Python (Programming Language) · Arduino
              Programming
            </span>
          </p>
        </div>
      </div> */}
      {/* <div className="flex gap-3 border-b text-xs mt-2">
        <img src={sec} className="rounded-full w-12 h-12" />
        <div>
          <p className="text-sm font-semibold mb-2">
            Hardware Maintenance and Technical Support Intern
          </p>
          <p className="my-1 font-extralight">
            Securities and Exchange Commission, Nigeria{" "}
          </p>
          <p className="my-1 font-extralight">May 2021 - Nov 2021 · 7 mos</p>
          <p className="my-1 font-extralight">
            Abuja, Federal Capital Territory, Nigeria. Onsite
          </p>
          <p className="my-2 font-semibold">
            Skills:
            <span className="font-extralight ml-1">
              Computer Hardware Troubleshooting · Networking · Hardware
              Installation · Computer Repair · Technical Support · Creative
              Problem Solving
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Experience;
