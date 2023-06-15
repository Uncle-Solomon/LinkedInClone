import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [otherNames, setOtherNames] = useState("");

  return (
    <div className=" ">
      <div className="bg-gray-100 pb-1">
        <h1
          className="text-3xl font-bold text-blue-600 flex items-center gap-1 mx-auto pl-2 lg:pl-56 mb-6 pt-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Edit User Info
        </h1>

        <form className="w-[22rem] mx-auto p-4 bg-white">
          <p className="text-xs font-bold my-2">Email or phone number</p>
          <input
            type="email"
            className="w-full  border cursor-pointer"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <p className="text-xs font-bold my-2">
            Password (6 or more characters)
          </p>
          <input
            type="password"
            className="w-full border cursor-pointer"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

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

          <div className="">
            <p className="text-xs font-bold my-2">Last Name:</p>
            <input
              type="text"
              className="w-full  border cursor-pointer"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <p className="text-xs font-bold my-2">Other Names:</p>
            <input
              type="text"
              className="w-full  border cursor-pointer"
              required
              onChange={(e) => {
                setOtherNames(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
