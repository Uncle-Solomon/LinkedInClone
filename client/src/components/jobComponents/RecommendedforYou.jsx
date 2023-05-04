import React from "react";

const RecommendedforYou = () => {
  return (
    <div className="bg-white w-full my-4 text-sm">
      <div className="px-4 pt-4 pb-2 mb-2">
        <p className="font-semibold">Recommended for you</p>
        <p className="font-thin ">Based on your profile and search history</p>
      </div>
      <div className="flex justify-between items-center px-4 py-1">
        <div className="flex gap-2"></div>
      </div>
    </div>
  );
};

export default RecommendedforYou;
