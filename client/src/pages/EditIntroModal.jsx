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
  //(userData);
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

  const [workStartDateMonth, setworkStartDateMonth] = useState("");
  const [workEndDateMonth, setworkEndDateMonth] = useState("");
  const [workStartDateYear, setworkStartDateYear] = useState("");
  const [workEndDateYear, setworkEndDateYear] = useState("");
  const [workSkills, setWorkSkills] = useState("");

  const [school, setschool] = useState("");
  const [degree, setdegree] = useState("");
  const [fieldOfStudy, setfieldOfStudy] = useState("");
  const [schoolSkills, setSchoolSkills] = useState("");

  const [schoolStartDateMonth, setschoolStartDateMonth] = useState("");
  const [schoolEndDateMonth, setschoolEndDateMonth] = useState("");
  const [schoolStartDateYear, setschoolStartDateYear] = useState("");
  const [schoolEndDateYear, setschoolEndDateYear] = useState("");
  const [about, setabout] = useState("");

  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");

  const [position, setposition] = useState(false);
  const [education, seteducation] = useState(false);
  const handlePosition = () => {
    onClose();
    setposition(!position);
  };
  const handleEducation = () => {
    onClose();
    seteducation(!education);
  };

  const [editModal, setEditModal] = useState(null);

  const handleExperience = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/add-position", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          title,
          employmentType,
          companyName,
          companyLocation,
          locationType,
          workStartDateMonth,
          workEndDateMonth,
          workStartDateYear,
          workEndDateYear,
          workSkills,
        }),
      });

      const data = await response.json();
      //(data);
      if (data) {
        setUserData(JSON.stringify(data));
        onClose();
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
    setposition(false);
  };

  const handleEducationalBackground = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/add-position", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id,
          school,
          degree,
          fieldOfStudy,
          schoolSkills,
          schoolStartDateMonth,
          schoolEndDateMonth,
          schoolStartDateYear,
          schoolEndDateYear,
        }),
      });

      const data = await response.json();
      //(data);
      if (data) {
        setUserData(JSON.stringify(data));
        onClose();
      }
    } catch (error) {
      alert(
        "There is an issue with communicatng with the backend, please give it some time :)"
      );
    }
    seteducation(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://linked-in-clone-backend.onrender.com/users",
        {
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
        }
      );

      const data = await response.json();
      //(data);
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
    <div>
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

            <span
              className="flex items-center my-2 text-blue-600 font-semibold cursor-pointer"
              onClick={handleEducation}
            >
              <BiPlus /> Add new education
            </span>

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
      <form
        className={
          position
            ? `absolute left-[10%] top-6 bg-white max-h-[80vh] overflow-scroll z-50 p-6 w-[80%] rounded-lg`
            : `hidden`
        }
        // onSubmit={handleExperience}
      >
        <div className="flex justify-between pb-4 border-b border-gray-200">
          <p>Add New Position</p>
          <MdOutlineCancel
            className="cursor-pointer h-6 w-6"
            onClick={handlePosition}
          />
        </div>
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

        <p className="my-2 text-xs lg:text-sm">Skills</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          type="text"
          onChange={(e) => {
            setWorkSkills(e.target.value);
          }}
        />

        <p className="my-2 text-xs lg:text-sm">Start date*</p>
        <div className="flex justify-between">
          <select
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
            onChange={(e) => {
              setworkStartDateMonth(e.target.value);
            }}
          >
            <option>Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
            onChange={(e) => {
              setworkStartDateYear(e.target.value);
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
              setworkEndDateMonth(e.target.value);
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
              setworkEndDateYear(e.target.value);
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
          onClick={handleExperience}
        >
          Save
        </button>
      </form>

      <form
        className={
          education
            ? `absolute left-[10%] top-6 bg-white max-h-[80vh] overflow-scroll z-50 p-6 w-[80%] rounded-lg`
            : `hidden`
        }
        // onSubmit={handleExperience}
      >
        <div className="flex justify-between pb-4 border-b border-gray-200">
          <p>Add New Education</p>
          <MdOutlineCancel
            className="cursor-pointer h-6 w-6"
            onClick={handleEducation}
          />
        </div>
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

        <p className="my-2 text-xs lg:text-sm">Skiils</p>
        <input
          className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-full border border-gray-800 hover:border-2"
          type="text"
          placeholder="Ex: Technical Writing, Public Speaking"
          onChange={(e) => {
            setSchoolSkills(e.target.value);
          }}
        />

        <p className="my-2 text-xs lg:text-sm">Start date*</p>
        <div className="flex justify-between">
          <select
            className="my-1 text-xs lg:text-sm p-1.5 rounded-md w-[45%] border border-gray-800 hover:border-2"
            onChange={(e) => {
              setschoolStartDateMonth(e.target.value);
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
              setschoolStartDateYear(e.target.value);
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
              setschoolEndDateMonth(e.target.value);
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
              setschoolEndDateYear(e.target.value);
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
          onClick={handleEducationalBackground}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditIntroModal;
