import React from "react";
import opentowork from "../../assets/landing.png";
import opentowork2 from "../../assets/landing2.png";
import opentowork3 from "../../assets/landing3.png";

import { useState } from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const OpenToWork = () => {
  const [carousel, setCarousel] = useState(0);
  const handleNext = () => {
    if (carousel < 2) {
      setCarousel(carousel + 1);
    }
  };
  const handlePrev = () => {
    if (carousel > 0) {
      setCarousel(carousel - 1);
    }
  };
  return (
    <div className=" h-[85vh] relative pt-8 md:pt-16 lg:pt-32 w-full lg:pl-56 lg:pr-12 lg:mr-12  bg-gray-100">
      {carousel == 0 && (
        <div className="grid grid-cols-10 absolute animate-slide w-full space-x-16  ">
          <div className="col-span-10 md:col-span-10 my-auto lg:col-span-4 p-1">
            <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
              Let the right people know you’re open to work
            </h1>
            <p className="text-black text-2xl md:text-3xl font-extralight w-[90%] my-10 leading-11">
              With the Open To Work feature, you can privately tell recruiters
              or publicly share with the LinkedIn community that you are looking
              for new job opportunities.
            </p>
          </div>
          <div className="col-span-10 md:col-span-10  my-auto lg:col-span-4 p-1 space-x-2 relative">
            <img
              src={opentowork}
              className="hidden lg:block  lg:h-[24rem] lg:w-[24rem] md:h-60 md:w-60"
            />
          </div>
          <button onClick={handleNext}>
            <AiFillRightCircle className="absolute right-0 top-[50%] h-12 w-12 text-gray-700 hover:text-black" />
          </button>
        </div>
      )}
      {carousel == 1 && (
        <div className="grid grid-cols-10 absolute animate-slide w-full space-x-16  ">
          <div className="col-span-10 md:col-span-10 my-auto lg:col-span-4 p-1">
            <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
              Conversations today could lead to opportunity tomorrow
            </h1>
            <p className="text-black text-2xl md:text-3xl font-extralight w-[90%] my-10 leading-11">
              Sending messages to people you know is a great way to strengthen
              relationships as you take the next step in your career.
            </p>
          </div>
          <div className="col-span-10 md:col-span-10  my-auto lg:col-span-4 p-1 space-x-2 relative">
            <img
              src={opentowork2}
              className="hidden lg:block  lg:h-[24rem] lg:w-[24rem] md:h-60 md:w-60"
            />
          </div>
          <button onClick={handleNext}>
            <AiFillRightCircle className="absolute right-0 top-[50%] h-12 w-12 text-gray-700 hover:text-black" />
          </button>
          <button onClick={handlePrev} className="absolute left-0 top-[50%]">
            <AiFillLeftCircle className="h-12 w-12 text-gray-700 hover:text-black" />
          </button>
        </div>
      )}
      {carousel == 2 && (
        <div className="grid grid-cols-10 absolute animate-slide w-full space-x-16  ">
          <div className="col-span-10 md:col-span-10 my-auto lg:col-span-4 p-1">
            <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
              Stay up to date on your industry
            </h1>
            <p className="text-black text-2xl md:text-3xl font-extralight w-[90%] my-10 leading-11">
              From live videos, to stories, to newsletters and more, LinkedIn is
              full of ways to stay up to date on the latest discussions in your
              industry.
            </p>
          </div>
          <div className="col-span-10 md:col-span-10  my-auto lg:col-span-4 p-1 space-x-2 relative">
            <img
              src={opentowork3}
              className="hidden lg:block  lg:h-[24rem] lg:w-[24rem] md:h-60 md:w-60"
            />
          </div>
          <button onClick={handlePrev} className="absolute left-0 top-[50%]">
            <AiFillLeftCircle className="h-12 w-12 text-gray-700 hover:text-black" />
          </button>
        </div>
      )}
    </div>
  );
};

export default OpenToWork;
