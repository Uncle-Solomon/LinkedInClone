import React from "react";
import opentowork from "../../assets/landing.png";

const OpenToWork = () => {
  return (
    <div className="grid grid-cols-10 h-[85vh] space-x-16 w-full lg:pl-56 lg:pr-12 lg:mr-12  bg-gray-100">
      <div className="col-span-10 md:col-span-10 my-auto lg:col-span-4 p-1">
        <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
          Let the right people know you’re open to work
        </h1>
        <p className="text-black text-3xl font-extralight w-[90%] my-10 leading-11">
          With the Open To Work feature, you can privately tell recruiters or
          publicly share with the LinkedIn community that you are looking for
          new job opportunities.
        </p>
      </div>
      <div className="col-span-10 md:col-span-10  my-auto lg:col-span-4 p-1 space-x-2">
        <img src={opentowork} className="h-[24rem] w-[24rem]" />
      </div>
    </div>
  );
};

export default OpenToWork;
