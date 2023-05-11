import React from "react";
import ebuka from "../../assets/ebuka.jpeg";
import { FaPaperPlane } from "react-icons/fa";

const SingularPeopleViewed = () => {
  return (
    <div className="flex gap-4 items-start my-6 text-xs ">
      <img src={ebuka} className="h-12 w-12 rounded-full" />
      <div>
        <p className="my-2 font-bold">Chukwuebuka UdealaChukwuebuka Udeala</p>
        <p className="my-2">
          FrontEnd Web Developer | Android Application Developer | Computer
          Engineering Graduate
        </p>
        <button className="border rounded-3xl px-4 py-2 flex gap-1 text-blue-600 font-semibold hover:bg-blue-200">
          <FaPaperPlane />
          Message
        </button>
      </div>
    </div>
  );
};

export default SingularPeopleViewed;
