import React from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { BsLinkedin } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="bg-[#EDEEF2] w-full flex h-screen">
      <div className="mx-auto my-auto">
        <p className="text-3xl font-semibold py-2 mb-2 flex justify-center gap-2 text-blue-600">
          LinkedIn Clone <BsLinkedin />
        </p>
        <div className=" flex justify-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="#2563eb"
          />
        </div>
        <p className="text-sm font-semibold flex text-blue-600 my-4">
          Developed by Ameh Solomon Onyeke <FaHeartbeat />
        </p>
      </div>
    </div>
  );
};

export default Loader;
