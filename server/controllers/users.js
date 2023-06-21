import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;

  const user = await User.findOneAndReplace({ _id: userId }, req.body);
  if (!user) {
    res.status(404).send("No user found");
  }

  const editedUser = await User.findById({ _id: userId });
  res.status(200).json({ editedUser });
};
