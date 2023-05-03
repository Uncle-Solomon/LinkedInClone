import React from "react";

import { RiChatSmile3Fill } from "react-icons/ri";

const RandomFooter = () => {
  return (
    <div>
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
        <span>Built by Ameh Solomon Onyeke A.S.O 2023</span>{" "}
        <RiChatSmile3Fill />
      </p>
    </div>
  );
};

export default RandomFooter;
