import React, { useContext, useEffect } from "react";

import { AppContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import ebuka from "../assets/test.jpg";

const CreatePostModal = ({ isOpen, handleToggle }) => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
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
      className={`${
        isOpen
          ? "absolute left-[10%] top-6 bg-white max-h-[80vh] z-50 p-6 w-[60%] rounded-lg"
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
        <form>
          <div className="flex gap-4 items-start my-6 text-xs w-[40%] hover:bg-gray-200 p-1 rounded-lg ">
            <img src={ebuka} className="h-12 w-12 rounded-full" />
            <div>
              <p className="my-2 font-bold">
                {obj.lastName} {obj.otherNames}
              </p>
              <p className="my-2">{obj.headline}</p>
            </div>
          </div>

          <textarea
            className="my-1 border-none text-sm h-40 lg:text-sm p-2.5 rounded-md w-full border border-gray-800 hover:border-2"
            placeholder="What do you want to talk about?"
          ></textarea>

          <span className="text-sm">
            <HiOutlinePhotograph className="inline-block h-6 w-8 mr-1 text-gray-400" />
            Add Photo
            <input type="file" id="file-input" />
          </span>

          <button
            className="flex mt-2 p-1 px-2 bg-gray-400 text-white rounded-xl text-sm "
            type="submit"
          >
            Post
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default CreatePostModal;
