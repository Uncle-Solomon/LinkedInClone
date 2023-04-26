import React from "react";
import Navigation from "../components/Navigation";
import SideNavLeft from "../components/SideNavLeft";
import StartPost from "../components/StartPost";
import Post from "../components/Post";
import SideNavRight from "../components/SideNavRight";

const Feed = () => {
  return (
    <div>
      <Navigation />
      <div className=" grid grid-cols-12 mt-5">
        <div className=" col-span-3">
          <SideNavLeft />
        </div>
        <div className=" col-span-6">
          <StartPost />
          <Post />
        </div>
        <div className=" col-span-3">
          <SideNavRight />
        </div>
      </div>
    </div>
  );
};

export default Feed;
