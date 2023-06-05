import express from "express";
import { signup, login } from "../controllers/authentication.js";
import { getAllUsers } from "../controllers/users.js";
import { createPost, getAllPosts } from "../controllers/posts.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

routes.post("/signup", signup);
routes.post("/login", login);

routes.get("/users", getAllUsers);

routes.post("/posts", createPost);
routes.get("/posts", getAllPosts);

export default routes;
