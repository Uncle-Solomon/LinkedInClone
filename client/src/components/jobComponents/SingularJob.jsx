import React from "react";
import job from "../../assets/job.jpeg";

import { FaSave } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";

const SingularJob = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 my-2 ">
      <div className="flex justify-between p-1 group w-full">
        <div className="flex gap-2">
          <img src={job} className="w-12 h-12" />
          <div>
            <h3 className="text-blue-600 text-sm group-hover:underline">
              Software Engineer
            </h3>
            <p className="text-sm font-thin">Turing</p>
            <p className="text-sm font-thin mb-2">
              Lagos, Lagos State, Nigeria (Remote)
            </p>
            <p className="text-xs font-thin mb-3">Actively recruiting</p>

            <p className="text-xs font-thin ">
              1 week ago.{" "}
              <span className="text-green-900 font-semibold">
                17 applicants
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 cursor-pointer text-gray-600">
          <AiFillEyeInvisible className="hidden group-hover:block" />
          <FaSave />
        </div>
      </div>
    </div>
  );
};

export default SingularJob;
