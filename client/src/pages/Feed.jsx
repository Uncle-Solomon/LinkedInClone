import React from "react";
import Navigation from "../components/Navigation";
import SideNavLeft from "../components/SideNavLeft";
import StartPost from "../components/StartPost";
import Post from "../components/Post";
import SideNavRight from "../components/SideNavRight";

const Feed = () => {
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-5 md:px-10 lg:px-20 ">
        <div className=" col-span-4 lg:col-span-3">
          <SideNavLeft />
        </div>
        <div className=" col-span-8 lg:col-span-6 px-2">
          <StartPost />
          <Post />
          <Post />
        </div>
        <div className=" hidden lg:block lg:col-span-3">
          <SideNavRight />
        </div>
      </div>
    </div>
  );
};

export default Feed;
