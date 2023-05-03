import React from "react";

import ebuka from "../assets/ebuka.jpeg";

const Invitations = () => {
  return (
    <div className="bg-white w-full text-sm">
      <div className="flex justify-between px-4 pt-4 pb-2 border-b mb-2">
        <p>Invitations</p>
        <p>
          See all <span>5</span>
        </p>
      </div>
      <div className="flex justify-between px-4 pt-4 pb-2 border-b mb-2">
        <div className="flex gap-2">
          <img
            className="w-16 h-16 rounded-full border border-white"
            src={ebuka}
          />
          <div className="p-2 text-sm text-gray-400 ">
            <h2 className="text-black leading-2 font-bold">
              Chukwuebuka Udeala
            </h2>
            <p>Chukwuebuka Udeala wants to connect</p>
          </div>
        </div>
        <div>
          <button type="button">Ignore</button>
          <button type="button">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default Invitations;
