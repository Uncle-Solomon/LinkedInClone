import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db/connect.js";
import routes from "./routes/routes.js";

dotenv.config();

// Create an instance of an express application
const app = express();

// Connnect to database
connectDB(process.env.MONGO_URL);

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/", routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
