import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;
  const useredit = await User.findByIdAndUpdate({ _id: userId }, req.body);
  if (!useredit) {
    res.status(404).send("No user found");
  }

  const user = await User.findById({ _id: userId });
  res.status(200).json({ user });
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

  const convertIso = (x, y) => {
    let dateStr = `${x} 22, ${y}`;
    let dateObj = new Date(dateStr);

    return dateObj.toISOString();
  };
  const workStartDate = convertIso(workStartDateMonth, workStartDateYear);
  const workEndDate = convertIso(workEndDateMonth, workEndDateYear);
  experienceObj = {
    role: title,
    employmentType: employmentType,
    companyName: companyName,
    location: companyLocation,
    locationType: locationType,
    startDate: workStartDate,
    endDate: workEndDate,
    skills: workSkills,
  };

  User.findByIdAndUpdate(
    userId,
    { $push: { experience: experienceObj } },
    { new: true }
  )
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

  // res.status(200).json({ experienceObj });
};

export const deletePosition = (req, res) => {
  const userId = req.body._id;
  // Find the user by ID and update the experience field
  User.findByIdAndUpdate(
    userId,
    { $pop: { experience: 1 } }, // Use $pop with a value of 1 to remove the last element from the array
    { new: true }
  )
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
