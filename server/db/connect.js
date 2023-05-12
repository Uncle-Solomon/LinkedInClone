import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.connect(url).then(() => console.log("DB Connected successfully"));
};

export default connectDB;
