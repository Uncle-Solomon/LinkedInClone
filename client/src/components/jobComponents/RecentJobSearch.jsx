import React from "react";

const RecentJobSearch = () => {
  return (
    <div className="bg-white w-full text-sm">
      <div className="flex justify-between px-4 pt-4 pb-2 border-b mb-2">
        <p className="font-semibold">Recent job searches</p>
        <p>Clear</p>
      </div>
      <div className="flex justify-between items-center px-4 py-1 border-b ">
        <div className="flex gap-2">
          <div className="p-2 text-sm text-gray-400 ">
            <h2 className="text-black leading-2 font-bold">
              back end developer
            </h2>
            <p>Abuja, Federal Capital Territory, Nigeria · Internship</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-1 border-b ">
        <div className="flex gap-2">
          <div className="p-2 text-sm text-gray-400 ">
            <h2 className="text-black leading-2 font-bold">
              fullstack developer
            </h2>
            <p>Abuja, Federal Capital Territory, Nigeria · Internship</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-1 border-b ">
        <div className="flex gap-2">
          <div className="p-2 text-sm text-gray-400 ">
            <h2 className="text-black leading-2 font-bold">machine learning</h2>
            <p>Abuja, Federal Capital Territory, Nigeria · Internship</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobSearch;
