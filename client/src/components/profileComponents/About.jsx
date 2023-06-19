import React, { useContext, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";

import { AppContext } from "../../ContextProvider";
import { useNavigate } from "react-router-dom";

const About = ({ isOpen }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (userData) {
    console.log(userData);
    obj = JSON.parse(userData);
  }
  return (
    <div
      className={`rounded-md p-6 w-[95%] mx-auto shadow-md  z-0 my-2 ${
        isOpen ? "" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-base font-bold">About</h1>
        <BsPencil />
      </div>
      {obj.about ? (
        <p className="text-xs mt-6">{obj.about}</p>
      ) : (
        <p className="text-xs mt-6">Please edit your about</p>
      )}
    </div>
  );
};

export default About;
