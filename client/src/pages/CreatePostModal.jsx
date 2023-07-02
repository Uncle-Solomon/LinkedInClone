import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import ebuka from "../assets/test.jpg";
import profilepictureMale from "../assets/pp.jpg";
import profilepictureFemale from "../assets/ppfemale.jpg";

const CreatePostModal = ({ isOpen, handleToggle }) => {
  const [textHead, setTextHead] = useState("");
  const [textBody, setTextBody] = useState("");

  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (!userData) {
    //("There is an error");
  }
  //(userData);
  obj = JSON.parse(userData);

  const handlepostCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://linked-in-clone-backend.onrender.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            obj,
            textHead,
            textBody,
          }),
        }
      );

      const data = await response.json();
      if ((data.success = true)) {
        navigate("/feed");
        isOpen = false;
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
  };
  return (
    <div
      className={`${
        isOpen
          ? "absolute left-0 top-6 bg-white h-[100vh] z-50 p-6 w-full rounded-lg"
          : "hidden"
      }`}
    >
      <div>
        <div className="flex justify-between pb-4 border-b border-gray-200">
          <p className="text-sm font-light">Create New Post</p>
          <MdOutlineCancel
            className="cursor-pointer h-6 w-6"
            onClick={handleToggle}
          />
        </div>
        <form onSubmit={handlepostCreate}>
          <div className="flex gap-4 items-start my-6 text-xs w-[40%] hover:bg-gray-200 p-1 rounded-lg ">
            {obj.gender == "Male" ? (
              <img
                src={profilepictureMale}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <img
                src={profilepictureFemale}
                className="w-12 h-12 rounded-full"
              />
            )}{" "}
            <div>
              <p className="my-2 font-bold">
                {obj.lastName} {obj.otherNames}
              </p>
              <p className="my-2">{obj.headline}</p>
            </div>
          </div>

          <textarea
            className="my-1 border-none text-sm h-10 lg:text-sm p-2.5 rounded-md w-full border border-gray-800 hover:border-2"
            placeholder="Set a title for your post"
            onChange={(e) => {
              setTextHead(e.target.value);
            }}
          ></textarea>

          <textarea
            className="my-1 border-none text-sm h-[50vh] lg:text-sm p-2.5 rounded-md w-full border border-gray-800 hover:border-2"
            placeholder="What do you want to talk about?"
            onChange={(e) => {
              setTextBody(e.target.value);
            }}
          ></textarea>

          <button
            className="flex mt-2 p-1 px-2 bg-gray-400 text-white rounded-xl text-sm "
            type="submit"
            onClick={handleToggle}
          >
            Post
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default CreatePostModal;
