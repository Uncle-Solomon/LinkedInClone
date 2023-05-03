import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { RiChatSmile3Fill } from "react-icons/ri";

import ebuka from "../assets/ebuka.jpeg";
import ad from "../assets/ad.png";

const SideNavRight = () => {
  return (
    <div>
      <div className="rounded-md p-3 w-[90%] mx-auto shadow-md bg-white">
        <div className="flex mb-2">
          <h1>Add to your feed</h1>
        </div>

        <div className="flex">
          <img
            className="w-10 h-10 rounded-full border border-white"
            src={ebuka}
          />
          <div className="p-2 text-xs text-gray-400">
            <h2 className="text-black leading-2 font-bold">
              Chukwuebuka Udeala
            </h2>
            <p>FrontEnd Web Developer | Android Application Developer ...</p>
            <button
              className="mt-2 outline outline-1 rounded-2xl py-1 px-3 flex gap-1 text-sm text-black font-semibold"
              type="button"
            >
              <AiOutlinePlus className="h-4 w-4" />
              Follow
            </button>
          </div>
        </div>
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full border border-white"
            src={ebuka}
          />
          <div className="p-2 text-xs text-gray-400">
            <h2 className="text-black leading-2 font-bold">
              Chukwuebuka Udeala
            </h2>
            <p>FrontEnd Web Developer | Android Application Developer ...</p>
            <button
              className="mt-2 outline outline-1 rounded-2xl py-1 px-3 flex gap-1 text-sm text-black font-semibold"
              type="button"
            >
              <AiOutlinePlus className="h-4 w-4" />
              Follow
            </button>
          </div>
        </div>
        <div className="flex">
          <img
            className="w-10 h-10 rounded-full border border-white"
            src={ebuka}
          />
          <div className="p-2 text-xs text-gray-400">
            <h2 className="text-black leading-2 font-bold">
              Chukwuebuka Udeala
            </h2>
            <p>FrontEnd Web Developer | Android Application Developer ...</p>
            <button
              className="mt-2 outline outline-1 rounded-2xl py-1 px-3 flex gap-1 text-sm text-black font-semibold"
              type="button"
            >
              <AiOutlinePlus className="h-4 w-4" />
              Follow
            </button>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">View all recommendations</p>{" "}
          <BiRightArrowAlt />
        </div>
      </div>
      <div className="rounded-md pb-2 w-[90%] mx-auto mt-2">
        <img src={ad} className=" w-full cursor-pointer" />
        <div className="text-xs text-gray-400">
          <ul className="flex justify-center gap-1  my-2 px-2">
            <li>About </li>
            <li>Accessibility</li>
            <li>Help Center </li>
          </ul>
          <ul className="flex justify-center gap-1 my-2 px-2">
            <li>Privacy & Terms </li>
            <li>Ad Choices </li>
            <li>Advertising </li>
          </ul>
          <ul
            className="
            flex
            justify-center
            gap-1 my-2 px-2
          "
          >
            <li>Business Services </li>
            <li>Get the LinkedIn app </li>
            <li>More</li>
          </ul>
        </div>
        <p className="text-xs mt-4 text-gray-400 font-bold flex gap-2">
          Built by Ameh Solomon Onyeke A.S.O <RiChatSmile3Fill />
        </p>
      </div>
    </div>
  );
};

export default SideNavRight;
