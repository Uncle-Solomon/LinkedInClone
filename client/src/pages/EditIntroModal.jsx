import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider";
import { BiPlus } from "react-icons/bi";
import { MdCancel, MdOutlineCancel } from "react-icons/md";

const EditIntroModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AppContext);
  let obj = {};
  useEffect(() => {
    if (!userData) {
      navigate("/signin");
    }
  }, [navigate, userData]);
  if (!userData) {
    console.log("There is an error");
    navigate("/signin");
  }
  console.log(userData);
  obj = JSON.parse(userData);
  let _id = obj._id;
  const [lastName, setlastName] = useState("");
  const [otherNames, setotherNames] = useState("");
  const [headline, setheadline] = useState("");
  const [currentPosition, setcurrentPosition] = useState("");
  const [title, settitle] = useState("");
  const [employmentType, setemploymentType] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [companyLocation, setcompanyLocation] = useState("");
  const [locationType, setlocationType] = useState("");

  const [workStartDate, setworkStartDate] = useState("");
  const [workEndDate, setworkEndDate] = useState("");
  const [school, setschool] = useState("");
  const [degree, setdegree] = useState("");
  const [fieldOfStudy, setfieldOfStudy] = useState("");

  const [schoolStartDate, setschoolStartDate] = useState("");
  const [schoolEndDate, setschoolEndDate] = useState("");
  const [about, setabout] = useState("");

  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");

  const [position, setposition] = useState(false);
  const [education, seteducation] = useState(false);
  const handlePosition = () => setposition(!position);
  const handleEducation = () => seteducation(!education);

  const handleExperience = (e) => {
    e.preventDefault();
    setposition(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          lastName,
          otherNames,
          headline,
          currentPosition,
          about,
          country,
          city,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        setUserData(JSON.stringify(data.user));
        onClose();
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
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
        <form onSubmit={handleEdit}>
          <p className="my-2 text-xs lg:text-sm">*indicates required</p>
          <p className="my-2 text-xs lg:text-sm">Last name *</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <p className="my-2 text-xs lg:text-sm">Other names*</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setotherNames(e.target.value);
            }}
          />

          <p className="my-2 text-xs lg:text-sm">Headline</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setheadline(e.target.value);
            }}
          />
          <p className="my-2 text-xs lg:text-sm">About</p>
          <textarea
            className="my-1 text-sm h-32 max-h-48 overflow-auto lg:text-sm p-2.5 rounded-md w-full border border-gray-800 hover:border-2"
            placeholder="Tell us aboout yourself"
            required
            onChange={(e) => {
              setabout(e.target.value);
            }}
          ></textarea>

          <p className="lg:text-lg  my-4 font-semibold">Current Position</p>

          <p className="my-2 text-xs lg:text-sm">Position*</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setcurrentPosition(e.target.value);
            }}
          />
          <span
            className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer"
            onClick={handlePosition}
          >
            <BiPlus />
            Add new position
          </span>
          {/* <div
            className={position ? `block` : `hidden`}
            // onSubmit={handleExperience}
          >
            <p className="my-2 text-xs lg:text-sm">Title*</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <p className="my-2 text-xs lg:text-sm">Employment type</p>
            <select
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              onChange={(e) => {
                setemploymentType(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
            <p className="my-2 text-xs lg:text-sm">Company Name</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              onChange={(e) => {
                setcompanyName(e.target.value);
              }}
            />
            <p className="my-2 text-xs lg:text-sm">Location</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              onChange={(e) => {
                setcompanyLocation(e.target.value);
              }}
            />
            <p className="my-2 text-xs lg:text-sm">Location type</p>
            <select
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              onChange={(e) => {
                setlocationType(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="On-Site">On-Site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>

            <p className="my-2 text-xs lg:text-sm">Start date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                onChange={(e) => {
                  setworkStartDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setworkStartDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setworkEndDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setworkEndDate(e.target.value);
                }}
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
          </div> */}
          <span
            className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer"
            onClick={handleEducation}
          >
            <BiPlus /> Add new education
          </span>
          {/* <div className={education ? `block` : `hidden`}>
            <p className="my-2 text-xs lg:text-sm">School*</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              onChange={(e) => {
                setschool(e.target.value);
              }}
            />
            <p className="my-2 text-xs lg:text-sm">Degree</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              placeholder="Ex: Bachelor's"
              onChange={(e) => {
                setdegree(e.target.value);
              }}
            />
            <p className="my-2 text-xs lg:text-sm">Field of Study</p>
            <input
              className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
              type="text"
              placeholder="Ex: Business"
              onChange={(e) => {
                setfieldOfStudy(e.target.value);
              }}
            />

            <p className="my-2 text-xs lg:text-sm">Start date*</p>
            <div className="flex justify-between">
              <select
                className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
                onChange={(e) => {
                  setschoolStartDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setschoolStartDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setschoolEndDate(e.target.value);
                }}
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
                onChange={(e) => {
                  setschoolEndDate(e.target.value);
                }}
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
          </div> */}

          <p className="lg:text-lg my-4 font-semibold">Location</p>
          <p className="my-2 text-xs lg:text-sm">Country/Region *</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setcountry(e.target.value);
            }}
          />
          <p className="my-2 text-xs lg:text-sm">City</p>
          <input
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
            type="text"
            required
            onChange={(e) => {
              setcity(e.target.value);
            }}
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
