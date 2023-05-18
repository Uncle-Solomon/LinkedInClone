import express from "express";
import { signup, login } from "../controllers/authentication.js";

const authRoutes = express.Router();

authRoutes.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);

export default authRoutes;
