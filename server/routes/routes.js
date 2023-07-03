import express from "express";
import {
  signup,
  login,
  forgotPassword,
} from "../controllers/authentication.js";
import {
  addPosition,
  editUser,
  getAllUsers,
  deletePosition,
  addEducation,
  deleteEducation,
} from "../controllers/users.js";
import { createPost, getAllPosts } from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: "true", message: "Welcome to the Backend!!!" });
});

routes.post("/signup", signup);
routes.post("/login", login);
routes.patch("/forgot-password", forgotPassword);

routes.get("/users", getAllUsers);
routes.patch("/users", editUser);
routes.patch("/users/add-position", addPosition);
routes.delete("/users/add-position", deletePosition);

routes.patch("/users/add-education", addEducation);
routes.delete("/users/add-education", deleteEducation);

routes.post("/posts", createPost);
routes.get("/posts", getAllPosts);

export default routes;
