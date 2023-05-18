import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 pb-1">
      <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-1 mx-auto pl-2 lg:pl-56 mb-6 pt-2">
        Linked <BsLinkedin className="h-7 w-7 " />
      </h1>

      <form className="w-[24rem] border rounded-md shadow-sm mx-auto mt-24 px-8 py-4">
        <h1 className="text-3xl my-3 ">Sign in</h1>
        <p className="text-xs font-bold my-2">Email or phone number</p>
        <input
          type="email"
          className="w-full p-2 rounded-md  border cursor-pointer"
        />

        <p className="text-xs font-bold my-2">
          Password (6 or more characters)
        </p>
        <input
          type="password"
          className="w-full p-2 rounded-md border cursor-pointer"
        />

        <p className="text-sm text-blue-600 cursor-pointer my-8 font-semibold">
          Forgot Password?
        </p>

        <button className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700">
          Sign in
        </button>

        <div className="grid grid-cols-12 my-4 w-full">
          <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
          <span className="col-span-2 text-center  h-1">or</span>
          <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
        </div>

        <button className="p-2.5 w-full border border-black text-black font-light rounded-full my-2 hover:bg-gray-100">
          Sign in with Google
        </button>

        <p className="text-xs text-center text-gray-500 mt-4 font-semibold mb-8">
          New to LinkedIn?{" "}
          <span
            onClick={() => navigate("/signup")}
            className=" text-blue-600 cursor-pointer"
          >
            Join now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
