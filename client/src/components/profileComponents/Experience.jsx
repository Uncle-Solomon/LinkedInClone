import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

import background from "../../assets/background.png";
import sec from "../../assets/sec.jpeg";

const Experience = () => {
  return (
    <div className="rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 bg-white my-2 ">
      <div className="flex justify-between">
        <h1>Experience</h1>
        <div className="flex gap-2 cursor-pointer">
          <AiOutlinePlus />
          <BsPencil />
        </div>
      </div>
      <div className="flex  gap-3 border-b text-xs mt-2">
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
      </div>
      <div className="flex gap-3 border-b text-xs mt-2">
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
      </div>
    </div>
  );
};

export default Experience;
