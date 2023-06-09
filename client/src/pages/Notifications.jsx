import React from "react";
import Navigation from "../components/Navigation";
import SideBarLeft from "../components/notificationComponents/SideBarLeft";
import RandomFooter from "../components/RandomFooter";
import SideBarRight from "../components/notificationComponents/SideBarRight";
import Main from "../components/notificationComponents/Main";

const Notifications = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-2 md:px-5 lg:px-12 ">
        <div className=" col-span-12 md:col-span-3 lg:col-span-3">
          <SideBarLeft />
        </div>
        <div className=" col-span-12 md:col-span-5 lg:col-span-6 px-2 ">
          <Main />
        </div>
        <div className=" col-span-12 md:col-span-4 lg:col-span-3 ">
          <SideBarRight />
          <RandomFooter />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
