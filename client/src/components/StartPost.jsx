import React, { useContext, useEffect } from "react";
import profilepicture from "../assets/test.jpg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsFillCalendarDateFill } from "react-icons/bs";
import profilepictureMale from "../assets/pp.jpg";
import profilepictureFemale from "../assets/ppfemale.jpg";
import { MdArticle } from "react-icons/md";

import { AppContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";

const StartPost = ({ handleToggle }) => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (userData) {
    //(userData);
    obj = JSON.parse(userData);
  }
  return (
    <div className="border rounded-md p-2 mb-4 bg-white" onClick={handleToggle}>
      <div className="flex gap-2">
        {obj.gender == "Male" ? (
          <img src={profilepictureMale} className="w-10 h-10 rounded-full" />
        ) : (
          <img src={profilepictureFemale} className="w-10 h-10 rounded-full" />
        )}
        <input
          type="text"
          disabled
          placeholder="Start a post"
          className="h-10 w-[80%] rounded-3xl outline-none border border-gray-800 px-3 text-sm"
        />
      </div>
      <div className="flex gap-2 justify-between mt-4 text-sm mr-2">
        <span>
          <HiOutlinePhotograph className="inline-block h-6 w-8 mr-1 text-blue-600" />{" "}
          Photo
        </span>
        <span>
          <BsFillPlayBtnFill className="inline-block h-4 w-6 mr-1 text-green-800" />{" "}
          Video
        </span>
        <span>
          <BsFillCalendarDateFill className="inline-block h-4 w-4 mr-1 text-amber-600 " />{" "}
          Event
        </span>
        <span>
          <MdArticle className="inline-block h-4 w-4 mr-1 text-orange-700" />{" "}
          Write Article
        </span>
      </div>
    </div>
  );
};

export default StartPost;
