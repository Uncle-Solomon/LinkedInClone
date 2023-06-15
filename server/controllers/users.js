import User from "../db/models/Users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users });
};

export const editUser = async (req, res) => {
  const userId = req.body._id;
  // res.send(userId);
  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: false,
    runValidators: true,
  });
  if (!user) {
    res.status(404).send("No user found");
  }
  res.status(200).json({ user });
};
