import React from "react";
import Navigation from "../components/Navigation";
import SideNavNetwork from "../components/SideNavNetwork";
import Invitations from "../components/Invitations";
import Alumni from "../components/Alumni";

const Network = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-5 md:px-10 lg:px-20 ">
        <div className=" col-span-3">
          <SideNavNetwork />
        </div>
        <div className=" col-span-9 px-2">
          <Invitations />
          <Alumni />
        </div>
      </div>
    </div>
  );
};

export default Network;
