import React from "react";

const Explore = () => {
  return (
    <div className="grid grid-cols-10 space-x-12 w-full py-8 md:py-16 lg:py-20 lg:pl-56 lg:pr-12 lg:mr-12 my-8 bg-gray-100">
      <div className="col-span-10 md:col-span-10 lg:col-span-3 p-1">
        <h1 className=" text-black text-5xl font-extralight w-[90%] my-10 leading-11">
          Explore collaborative articles
        </h1>
      </div>
      <div className="col-span-10 md:col-span-10 lg:col-span-4 p-1 space-x-2">
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Marketing
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Public Administration
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Healthcare
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          IT Services
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Business Administration
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Telecommunications
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Construction Management
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Engineering
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Human Resources
        </button>
        <button
          className="mt-2 border border-black hover:bg-gray-100 rounded-3xl py-3 px-4  gap-1 text-sm text-black font-semibold"
          type="button"
        >
          Research
        </button>
      </div>
    </div>
  );
};

export default Explore;
