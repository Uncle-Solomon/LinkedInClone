import React from "react";
import { FaSave, FaStickyNote } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineDone, MdOutlineNote, MdSettings } from "react-icons/md";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";

const SideJobNavLeft = () => {
  return (
    <div>
      <div className="rounded-md pb-2 w-[95%] mx-auto shadow-md bg-white p-6">
        <ul>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <FaSave /> My Jobs
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <IoIosNotifications /> Job Alerts
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <MdOutlineDone /> Demonstrate Skills
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <FaStickyNote />
            Interview Prep
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <MdOutlineNote />
            Resume Builder
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <BsFillPlayBtnFill />
            Job Seeker Guidance
          </li>
          <li className="my-6 text-sm text-gray-800 font-semibold items-center flex gap-1.5">
            <MdSettings />
            Application Settings
          </li>
        </ul>
      </div>
      <div className="p-6">
        <button className="flex gap-2 items-center w-full border border-blue-600 py-2 px-4 text-center rounded-3xl text-blue-600 font-semibold text-sm">
          <SlNote /> Post a free job
        </button>
      </div>
    </div>
  );
};

export default SideJobNavLeft;
