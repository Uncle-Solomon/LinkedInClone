import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { MdCancel, MdOutlineCancel } from "react-icons/md";

const EditIntroModal = ({ isOpen, onClose }) => {
  const [position, setposition] = useState(false);
  const [education, seteducation] = useState(false);
  const handlePosition = () => setposition(!position);
  const handleEducation = () => seteducation(!education);

  const handleExperience = (e) => {
    e.preventDefault();
    setposition(false);
  };

  return (
    <div
      className={`${
        isOpen
          ? "absolute left-[10%] top-6 bg-white max-h-[80vh] overflow-scroll z-50 p-6 w-[80%] rounded-lg"
          : "hidden"
      }`}
    >
      <div>
        <div className="flex justify-between pb-4 border-b border-gray-200">
          <p>Edit Intro</p>
          <MdOutlineCancel
            className="cursor-pointer h-6 w-6"
            onClick={onClose}
          />
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
          <span
            className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer"
            onClick={handlePosition}
          >
            <BiPlus />
            Add new position
          </span>
          <form
            className={position ? `block` : `hidden`}
            onSubmit={handleExperience}
          >
            <p className="my-2 text-xs lg:text-sm">Title*</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              required
              type="text"
            />
            <p className="my-2 text-xs lg:text-sm">Employment type</p>
            <select className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2">
              <option>Please Select</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Freelance</option>
              <option>Internship</option>
            </select>
            <p className="my-2 text-xs lg:text-sm">Company Name</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
            />
            <p className="my-2 text-xs lg:text-sm">Location</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
            />
            <p className="my-2 text-xs lg:text-sm">Location type</p>
            <select className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2">
              <option>Please Select</option>
              <option>On-Site</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>

            <p className="my-2 text-xs lg:text-sm">Start date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
            </div>

            <p className="my-2 text-xs lg:text-sm">End date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
            </div>

            <button
              className="flex mt-2 p-1 px-2 bg-blue-600 text-white rounded-xl text-sm "
              type="submit"
            >
              Save
            </button>
          </form>
          <span
            className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer"
            onClick={handleEducation}
          >
            <BiPlus /> Add new education
          </span>
          <form className={education ? `block` : `hidden`}>
            <p className="my-2 text-xs lg:text-sm">School*</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              required
              type="text"
            />
            <p className="my-2 text-xs lg:text-sm">Degree</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              placeholder="Ex: Bachelor's"
            />
            <p className="my-2 text-xs lg:text-sm">Field of Study</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              placeholder="Ex: Business"
            />

            <p className="my-2 text-xs lg:text-sm">Start date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
            </div>

            <p className="my-2 text-xs lg:text-sm">End date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                required
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
              </select>
            </div>

            <button
              className="flex mt-2 p-1 px-2 bg-blue-600 text-white rounded-xl text-sm "
              type="submit"
            >
              Save
            </button>
          </form>

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
    </div>
  );
};

export default EditIntroModal;
