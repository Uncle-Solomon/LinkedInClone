import React from "react";

const PostJob = () => {
  return (
    <div className="grid grid-cols-10 pl-2 space-x-16 w-full py-2 lg:pl-56 lg:pr-12 lg:mr-12 bg-[#f1ece5]">
      <div className="col-span-10 md:col-span-10 lg:col-span-3 p-1">
        <h1 className=" text-amber-900 text-4xl font-normal w-[90%] my-10 leading-11">
          Post your job for millions of people to see
        </h1>
      </div>
      <div className="col-span-10 md:col-span-10 lg:col-span-4 p-1 space-x-2">
        <button
          className="my-10 border border-blue-600 hover:bg-gray-200 rounded-3xl py-3 px-4  gap-1 text-sm text-blue-600 font-semibold"
          type="button"
        >
          Post a job
        </button>
      </div>
    </div>
  );
};

export default PostJob;
