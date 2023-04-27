import React from "react";
import profilepicture from "../assets/profilepic.jpeg";
import background from "../assets/background.png";

const SideNavLeft = () => {
  return (
    <div className="rounded-md h-[50vh] w-[90%] mx-auto shadow-md bg-white">
      <div>
        <div className="h-28 relative">
          <img src={background} className="w-full h-[50%] rounded-t-md" />
          <img
            src={profilepicture}
            className="w-16 h-16 rounded-full border border-white absolute top-6 left-4"
          />
        </div>
        <div className="pl-3 mt-[-0.5rem]">
          <h1 className="font-bold text-lg leading-5 w-[80%] mb-4">
            Ameh Solomon Onyeke
          </h1>
          <p className="text-xs font-thin">
            <span className="font-semibold mr-0.5 text-sm">30</span> profile
            Views
          </p>
          <p className="text-xs font-thin">
            <span className="font-semibold mr-0.5 text-sm">30</span> post
            impressions
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavLeft;
