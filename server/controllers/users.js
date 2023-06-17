import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;
  // res.send(userId);
  const user = await User.findOne({ _id: userId });
  if (!user) {
    res.status(404).send("No user found");
  } else {
    user.set(req.body);
    // res.status(200).json({ user });
  }

  try {
    const savedUser = await user.save();
    res.status(200).json({ user: savedUser });
  } catch (error) {
    res.status(500).send("Failed to update user");
  }
};
