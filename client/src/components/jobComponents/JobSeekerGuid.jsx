import React from "react";
import { FiArrowRight } from "react-icons/fi";
import resumePic from "../../assets/resumePic.gif";

const JobSeekerGuid = () => {
  return (
    <div className="rounded-md pb-2 bg-white mx-2 my-4">
      <div>
        <div className="pl-3 pt-6 pr-3 mt-[-0.5rem]">
          <h1 className="font-bold text-sm leading-5 w-[80%] mb-2">
            Job Seeker Guidance
          </h1>
          <p className="text-xs font-thin mt-2">
            Software Backend Developer | Machine Learning and AI ...
          </p>
          <div className="text-xs font-semibold flex justify-between gap-4 items-center mt-4 mb-4">
            <p>I want to improve my resume</p>
            <img src={resumePic} className="w-16 h-16" />
          </div>
          <p className="text-xs font-thin mt-2">
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>

          <button className="flex gap-1 mt-4 text-sm items-center hover:text-blue-600 hover:underline text-semibold">
            Show more <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerGuid;
