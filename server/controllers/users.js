import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;
  const {
    _id,
    lastName,
    otherNames,
    headline,
    currentPosition,
    title,
    employmentType,
    companyName,
    companyLocation,
    locationType,
    school,
    degree,
    fieldOfStudy,
    country,
    city,
  } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: userId },
    {
      lastName: lastName,
      otherNames: otherNames,
      headline: headline,
      currentPosition: currentPosition,
      country: country,
      city: city,
      // education: education.push({ UniversityName: school, degree: degree }),
      // experience: experience.push({
      //   companyName: companyName,
      //   role: title,
      //   location: companyLocation,
      //   locationType: locationType,
      // }),
    }
  );
  if (!user) {
    res.status(404).send("No user found");
  }

  const editedUser = await User.findById({ _id: userId });
  res.status(200).json({ editedUser });
};
