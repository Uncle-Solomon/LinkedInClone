import React, { useState } from "react";
import { BsLinkedin, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [nameBox, setNameBox] = useState(false);
  const [showPassword, ToggleShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [gender, setGender] = useState("");

  const openNameBox = (e) => {
    e.preventDefault();
    setNameBox(true);
  };

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://linked-in-clone-backend.vercel.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lastName,
            otherNames,
            email,
            password,
            gender,
          }),
        }
      );

      const data = await response.json();
      //(data);
      if (data.success === true) {
        navigate("/signin");
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
  };

  return (
    <div className=" ">
      <div className="bg-gray-100 pb-1">
        <h1
          className="text-3xl font-bold text-blue-600 flex items-center gap-1 mx-auto pl-2 lg:pl-56 mb-6 pt-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Linked <BsLinkedin className="h-7 w-7 " />
        </h1>
        <p className="text-lg md:text-3xl w-[21rem] md:w-[35rem] mx-auto font-normal mb-4">
          Make the most of your professional life
        </p>

        <form className="w-[22rem] mx-auto p-4 bg-white" onSubmit={signupUser}>
          <p className="text-xs font-bold my-2">Email or phone number</p>
          <input
            type="email"
            className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <p className="text-xs font-bold my-2">
            Password (6 or more characters)
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

          <p className="text-xs text-center text-gray-500 mt-4 font-semibold mb-4">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span className=" text-blue-600 cursor-pointer">
              User Agreement, Privacy Policy,
            </span>
            and
            <span className=" text-blue-600 cursor-pointer">
              Cookie Policy.
            </span>
          </p>

          <div className={nameBox ? `block` : `hidden`}>
            <p className="text-xs font-bold my-2">Last Name:</p>
            <input
              type="text"
              className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <p className="text-xs font-bold my-2">Other Names:</p>
            <input
              type="text"
              className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-200 hover:outline-2"
              required
              onChange={(e) => {
                setOtherNames(e.target.value);
              }}
            />
            <p className="text-xs font-bold my-2">Gender:</p>
            <select
              type="text"
              className="w-full text-xs p-2  border cursor-pointer"
              required
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option>Select an option please.</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {nameBox ? (
            <button
              className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700 mt-2"
              type="submit"
            >
              Sign up
            </button>
          ) : (
            <button
              className="p-2.5 w-full border bg-blue-600 text-white font-semibold rounded-full text-sm hover:bg-blue-700 mt-2"
              onClick={openNameBox}
            >
              Agree & Join
            </button>
          )}

          <div className="grid grid-cols-12 mt-4 mb-6 w-full">
            <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
            <span className="col-span-2 text-center  h-1">or</span>
            <span className="col-span-5 bg-gray-400 mt-3 h-[0.0125rem]"></span>
          </div>

          <button className="p-1.5 w-full border border-black text-black font-light rounded-full my-2 hover:bg-gray-100 text-sm flex gap-1 items-center justify-center">
            <FcGoogle className="h-6 w-6 " /> Continue with Google
          </button>

          <p className="text-xs text-center text-gray-500 mt-4 font-semibold mb-8">
            Already on LinkedIn?{" "}
            <span
              onClick={() => navigate("/signin")}
              className=" text-blue-600 cursor-pointer"
            >
              Sign in.
            </span>
          </p>
        </form>
        <p className="text-xs text-center text-gray-700 mt-4 font-semibold mb-4">
          Looking to create a page for a business?{" "}
          <span className=" text-blue-600 cursor-pointer">Get help</span>
        </p>
      </div>

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

export default SignUp;
