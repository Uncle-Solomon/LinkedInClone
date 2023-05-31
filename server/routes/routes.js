import express from "express";
import { signup, login } from "../controllers/authentication.js";
import jwt from "jsonwebtoken";
import { getAllUsers } from "../controllers/getUser.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

routes.post("/signup", signup);
routes.post("/login", login);

routes.get("/users", getAllUsers);

export default routes;
