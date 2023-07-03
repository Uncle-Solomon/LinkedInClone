import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;
  // const {
  //   _id,
  //   lastName,
  //   otherNames,
  //   headline,
  //   currentPosition,
  //   about,
  //   country,
  //   city
  // } = req.body;

  const useredit = await User.findByIdAndUpdate({ _id: userId }, req.body);
  if (!useredit) {
    res.status(404).send("No user found");
  }

  const user = await User.findById({ _id: userId });
  res.status(200).json({ user });
  // } catch (error) {
  //   console.log("There is an error, says Solomon!");
  // }
};

export const addPosition = async (req, res) => {
  const userId = req.body._id;
  let experienceObj = {};
  const {
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
  } = req.body;

  experienceObj = {
    role: title,
    employmentType: employmentType,
    companyName: companyName,
    location: companyLocation,
    locationType: locationType,
    workStartDateMonth: workStartDateMonth,
    workEndDateMonth: workEndDateMonth,
    workStartDateYear: workStartDateYear,
    workEndDateYear: workEndDateYear,
    skills: workSkills,
  };

  res.status(200).json({ experienceObj });
};
