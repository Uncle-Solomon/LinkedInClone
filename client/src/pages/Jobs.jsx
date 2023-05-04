import React from "react";
import Navigation from "../components/Navigation";
import SideJobNavLeft from "../components/SideJobNavLeft";

const Jobs = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-5 md:px-10 lg:px-20 ">
        <div className=" col-span-12 md:col-span-3 lg:col-span-">
          <SideJobNavLeft />
        </div>
        <div className=" col-span-12 md:col-span-5 lg:col-span-9 px-2 "></div>
        <div className=" col-span-12 md:col-span-4 lg:col-span-3 "></div>
      </div>
    </div>
  );
};

export default Jobs;
