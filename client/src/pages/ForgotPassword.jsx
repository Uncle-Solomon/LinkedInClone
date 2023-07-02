import React, { useState, useEffect, useContext } from "react";
import { BsEye, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, ToggleShowPassword] = useState(false);
  const [showConfirmPassword, ToggleShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [err, setErr] = useState("");
  const { userData, setUserData } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);

    try {
      const response = await fetch("http://localhost:8000/forgot-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();
      if (data.success == true) {
        alert("password successfully resetted");
        navigate("/signin");
      } else {
        setErr(JSON.stringify(data.errors));
        setLoading(true);
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }

    // navigate("/signin");
  };

  return (
    <div className="bg-gray-50 pb-1">
      <h1
        className="text-3xl font-bold text-blue-600 flex items-center gap-1 mx-auto pl-2 lg:pl-56 mb-6 pt-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Linked{" "}
        <BsLinkedin
          className="h-7 w-7 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-[24rem] border border-gray-300 rounded-md shadow-lg mx-auto mt-8 lg:mt-20 px-8 py-4"
      >
        <h1 className="text-3xl my-3 ">Forgot Password</h1>
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
          New Password (6 or more characters)
        </p>
        <div className="flex relative">
          <input
            type={showPassword ? `text` : `password`}
            className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="absolute right-2 top-3.5"
            onClick={(e) => {
              e.preventDefault();
              ToggleShowPassword(!showPassword);
            }}
          >
            <BsEye />
          </button>
        </div>
        <p>
          {err && (
            <p className="text-xs font-bold my-1 text-red-900">Error: {err}</p>
          )}
        </p>

        <p className="text-xs font-bold my-2">
          Confirm New Password (6 or more characters)
        </p>
        <div className="flex relative mb-8">
          <input
            type={showConfirmPassword ? `text` : `password`}
            className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button
            className="absolute right-2 top-3.5"
            onClick={(e) => {
              e.preventDefault();
              ToggleShowConfirmPassword(!showPassword);
            }}
          >
            <BsEye />
          </button>
        </div>
        {loading ? (
          <button
            type="submit"
            className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700"
          >
            Submitting... Please wait
          </button>
        )}
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

export default ForgotPassword;
