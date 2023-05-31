import React, { useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

const SignIn = ({ signinUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const x = signinUser(email, password);
    x.then((result) => {
      console.log(result);
      if (result.success === true) {
        navigate("/feed");
      }
    });
  };

  return (
    <div className="bg-gray-50 pb-1">
      <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-1 mx-auto pl-2 lg:pl-56 mb-6 pt-2">
        Linked <BsLinkedin className="h-7 w-7 " />
      </h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-[24rem] border border-gray-300 rounded-md shadow-lg mx-auto mt-8 lg:mt-20 px-8 py-4"
      >
        <h1 className="text-3xl my-3 ">Sign in</h1>
        <p className="text-xs font-bold my-2">Email or phone number</p>
        <input
          type="email"
          className="w-full p-2 rounded-md  border cursor-pointer hover:bg-gray-200 hover:outline-2"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>
          {err && (
            <p className="text-xs font-bold my-1 text-red-900">Error: {err}</p>
          )}
        </p>

        <p className="text-xs font-bold my-2">
          Password (6 or more characters)
        </p>
        <input
          type="password"
          className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>
          {err && (
            <p className="text-xs font-bold my-1 text-red-900">Error: {err}</p>
          )}
        </p>

        <p className="text-sm text-blue-600 cursor-pointer my-4 font-semibold">
          Forgot Password?
        </p>

        <button
          type="submit"
          className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700"
        >
          Sign in
        </button>

        <div className="grid grid-cols-12 mt-4 mb-8 w-full">
          <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
          <span className="col-span-2 text-center  h-1">or</span>
          <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
        </div>

        <button className="p-1.5 w-full border border-black text-black font-light rounded-full my-2 hover:bg-gray-100 text-sm flex gap-1 items-center justify-center">
          <FcGoogle className="h-6 w-6 " /> Sign in with Google
        </button>

        <p className="text-sm text-center text-gray-500 mt-6 font-semibold mb-8">
          New to LinkedIn?{" "}
          <span
            onClick={() => navigate("/signup")}
            className=" text-blue-600 cursor-pointer"
          >
            Join now.
          </span>
        </p>
      </form>

      <div className="grid grid-cols-2 space-x-2 p-4 text-xs font-medium text-gray-700">
        <ul className="col-span-1">
          <li className="py-2 flex gap-0.5 font-semibold items-center">
            Linked <BsLinkedin className="h-3 w-3 mr-0.5 " /> &copy; 2023
          </li>
          <li className="py-2">Accessibility</li>
          <li className="py-2">Privacy Policy</li>
          <li className="py-2">Copyright Policy</li>
          <li className="py-2">Guest Controls</li>
          <li className="py-2">Language</li>
        </ul>
        <ul className="col-span-1">
          <li className="py-2">About</li>
          <li className="py-2">User Agreement</li>
          <li className="py-2">Cookie Policy</li>
          <li className="py-2">Brand Policy</li>
          <li className="py-2">Community Guidelines</li>
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
