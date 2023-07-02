import React, { useState } from "react";
import ajanaku from "../assets/ajanaku.jpeg";
import profilepictureMale from "../assets/pp.jpg";
import profilepictureFemale from "../assets/ppfemale.jpg";
// import dataPicture from "../assets/data.jpg";
import { ColorRing } from "react-loader-spinner";

import { BsThreeDots, BsFillChatHeartFill } from "react-icons/bs";
import { BiWorld, BiRepost } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { MdComment } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect } from "react";

const Post = () => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://linked-in-clone-backend.onrender.com/posts"
        );
        const responseData = await response.json();
        //(responseData);
        setdata(responseData.post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="space-y-4 ">
      {data ? (
        [...data].reverse().map((item) => (
          <div className="bg-white p-3 rounded-lg">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <img src={ajanaku} className="w-5 h-5 rounded-full" />
                <p className="text-xs">
                  <span className="font-bold">Governor Ajanaku</span>{" "}
                  <span>commented on </span>this
                </p>
              </div>
              <BsThreeDots />
            </div>
            <hr className="w-full my-2 " />

            <div className="flex gap-2">
              {item.user.gender == "Female" ? (
                <img
                  src={profilepictureFemale}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <img
                  src={profilepictureMale}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <h3 className="font-bold text-sm">
                  {item.user.lastName} {item.user.otherNames}
                </h3>
                <p className=" text-xs text-gray-800 font-light">
                  {item.user.headline}
                </p>
                <p className="gap-2 inline text-xs text-gray-800">1w .</p>
                <BiWorld className="inline w-4 h-4" />
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-sm font-semibold leading-8">
                  {item.textHead}
                </h1>
                <p className="text-xs text-gray-800 mb-4">{item.textBody}</p>
                <div>
                  <img src={item.imgUrl} className="max-h-[500px] w-[100%]" />
                </div>
                <div>
                  <span className="flex">
                    <AiFillLike className="text-blue-800 -mr-1.5" />
                    <BsFillChatHeartFill className="text-red-700" />

                    <span className="ml-1 text-xs font-thin">
                      Anjolaoluwa Olutomilayo{" "}
                      <span>
                        and <span>{item.numberofLikes} others.</span>
                      </span>
                    </span>
                  </span>
                </div>

                <hr className="my-2 " />

                <div className=" px-2">
                  <div className="flex mx-auto px-0.5 justify-between w-[80%] md:gap-6 text-sm text-gray-600 font-light">
                    <span className="flex gap-2">
                      <FiThumbsUp className="h-5 w-5" />
                      Like
                    </span>
                    <span className="flex gap-2">
                      {" "}
                      <MdComment className="h-5 w-5" />
                      Comment
                    </span>
                    <span className="flex gap-2">
                      <BiRepost className="h-5 w-5" />
                      Repost
                    </span>
                    <span className="flex gap-2">
                      <RiSendPlaneFill className="h-5 w-5" />
                      Send
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center mt-12">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
