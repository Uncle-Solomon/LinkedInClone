import React, { useState } from "react";
import Navigation from "../components/Navigation";
import SideNavLeft from "../components/SideNavLeft";
import StartPost from "../components/StartPost";
import Post from "../components/Post";
import SideNavRight from "../components/SideNavRight";
import CreatePostModal from "./CreatePostModal";

const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className=" bg-gray-100 min-h-[100vh]">
      <Navigation />
      <div className=" grid grid-cols-12 mt-5 px-1 md:px-6 lg:px-12 ">
        <div className=" px-1 col-span-12 md:col-span-4 lg:col-span-3">
          <SideNavLeft />
        </div>
        <div className=" col-span-12 my-1 md:my-0 md:col-span-8 lg:col-span-6 px-4">
          <StartPost handleToggle={handleModalToggle} />
          <Post />
          <CreatePostModal
            isOpen={isModalOpen}
            handleToggle={handleModalToggle}
          />
        </div>
        <div className=" hidden lg:block lg:col-span-3">
          <SideNavRight />
        </div>
      </div>
    </div>
  );
};

export default Feed;
