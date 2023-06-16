import React from "react";
import { BiPlus } from "react-icons/bi";
import { MdCancel, MdOutlineCancel } from "react-icons/md";

const EditIntroModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen
          ? "absolute left-[10%] top-6 bg-white max-h-[80vh] overflow-scroll z-50 p-6 w-[80%] rounded-lg"
          : "hidden"
      }`}
    >
      <div className="flex justify-between pb-4 border-b border-gray-200">
        <p>Edit Intro</p>
        <MdOutlineCancel className="cursor-pointer h-6 w-6" onClick={onClose} />
      </div>
      <form>
        <p className="my-2 text-xs lg:text-sm">*indicates required</p>
        <p className="my-2 text-xs lg:text-sm">Last name *</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />
        <p className="my-2 text-xs lg:text-sm">Other names*</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />

        <p className="my-2 text-xs lg:text-sm">Headline</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />

        <p className="lg:text-lg  my-4 font-semibold">Current Position</p>

        <p className="my-2 text-xs lg:text-sm">Position*</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />
        <span className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer">
          <BiPlus /> Add new position
        </span>
        <span className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer">
          <BiPlus /> Add new education
        </span>

        <p className="lg:text-lg my-4 font-semibold">Location</p>
        <p className="my-2 text-xs lg:text-sm">Country/Region *</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />
        <p className="my-2 text-xs lg:text-sm">City</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          required
          type="text"
        />

        <button
          className="flex mt-2 p-1 px-2 bg-blue-600 text-white rounded-xl text-sm "
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditIntroModal;
