import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Create an instance of an express application
const app = express();

// Connnect to database

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
