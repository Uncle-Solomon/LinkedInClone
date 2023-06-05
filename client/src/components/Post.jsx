import React, { useState } from "react";
import ajanaku from "../assets/ajanaku.jpeg";
import dataPicture from "../assets/data.jpg";
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
        console.log(responseData);
        setdata(responseData.post);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white p-2 mt-2">
      {data ? (
        data.map((item) => (
          <div>
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
              <img src={ajanaku} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold text-sm">{item.user}</h3>
                <p className=" text-xs text-gray-800 font-light">
                  Electrical Engineering Graduate | Leader | Data Analyst (in
                  view)
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
                <p className="text-xs text-gray-400">{item.textBody}</p>
                <div>
                  <img src={dataPicture} className="max-h-[2000px]" />
                </div>
                <div>
                  <span className="flex">
                    <AiFillLike className="text-blue-800 -mr-1.5" />
                    <BsFillChatHeartFill className="text-red-700" />

                    <span className="ml-1 text-xs font-thin">
                      Anjolaoluwa Olutomilayo{" "}
                      <span>
                        and <span>7 others.</span>
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
        <p>Couldn't load all posts, I'm sorry</p>
      )}
    </div>
  );
  {
    /* <div>
      {data ? (
        // Display the fetched data
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.textHead}</li>
          ))}
        </ul>
      ) : (
        // Show a loading state or error message
        <p>Loading...</p>
      )}
    </div> */
  }
  {
    /* ); */
  }
};

export default Post;
