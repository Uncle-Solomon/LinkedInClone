import React from "react";
import Navigation from "../components/Navigation";

const Network = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-5 md:px-10 lg:px-20 ">
        <div className=" col-span-4 lg:col-span-3"></div>
        <div className=" col-span-8 lg:col-span-6 px-2"></div>
        <div className=" hidden lg:block lg:col-span-3"></div>
      </div>
    </div>
  );
};

export default Network;
