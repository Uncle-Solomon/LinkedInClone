import React from "react";
import opentowork from "../../assets/landing.png";

const OpenToWork = () => {
  return (
    <div className="grid grid-cols-10 space-x-16 w-full py-2 lg:pl-56 lg:pr-12 lg:mr-12 my-8 bg-gray-100">
      <div className="col-span-10 md:col-span-10 lg:col-span-3 p-1">
        <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
          Let the right people know you’re open to work
        </h1>
        <p>
          With the Open To Work feature, you can privately tell recruiters or
          publicly share with the LinkedIn community that you are looking for
          new job opportunities.
        </p>
      </div>
      <div className="col-span-10 md:col-span-10 lg:col-span-4 p-1 space-x-2">
        <img src={opentowork} />
      </div>
    </div>
  );
};

export default OpenToWork;
