import express from "express";
import { signup, login } from "../controllers/authentication.js";
import { editUser, getAllUsers } from "../controllers/users.js";
import { createPost, getAllPosts } from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: "true", message: "Welcome to the Backend!!!" });
});

routes.post("/signup", signup);
routes.post("/login", login);

routes.get("/users", getAllUsers);
routes.patch("/users", editUser);

routes.post("/posts", createPost);
routes.get("/posts", getAllPosts);

export default routes;
