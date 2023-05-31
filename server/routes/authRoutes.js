import express from "express";
import { signup, login } from "../controllers/authentication.js";
import jwt from "jsonwebtoken";
import { getAllUsers } from "../controllers/getUser.js";

const authRoutes = express.Router();

authRoutes.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/users", getAllUsers);

export default authRoutes;
