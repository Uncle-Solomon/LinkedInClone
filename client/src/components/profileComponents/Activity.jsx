import React from "react";

const Activity = () => {
  return (
    <div className="rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 bg-white my-2 ">
      <div className="flex justify-between items-center">
        <span>
          <h1 className="text-base font-bold">Activity</h1>
          <p>393 followers</p>
        </span>
        <button className="text-sm font-semibold text-blue-700 border border-blue-700 py-1 px-4 rounded-3xl hover:border-2 hover:bg-blue-200">
          Start a post
        </button>
      </div>
    </div>
  );
};

export default Activity;
