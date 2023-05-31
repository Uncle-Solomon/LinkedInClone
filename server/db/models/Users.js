import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  UniversityName: {
    type: String,
    required: false,
  },
  degree: {
    type: String,
    required: false,
  },
  startDate: {
    type: Number,
    required: false,
  },
  endDate: {
    type: Number,
    required: false,
  },
  skills: {
    type: String,
    required: false,
  },
});

export const userSchema = new mongoose.Schema(
  {
    otherNames: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emailOrPhoneNumber: {
      type: String || Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileViews: {
      type: Number,
      required: false,
    },
    postImpressions: {
      type: Number,
      required: false,
    },
    searchAppearances: {
      type: Number,
      required: false,
    },
    headline: {
      type: String,
      required: false,
    },
    currentPosition: {
      type: String,
      required: false,
    },
    industry: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    education: educationSchema,
  },
  {
    timestamps: true,
    collection: "LinkedInClone.users",
  }
);

const User = mongoose.model("User", userSchema);

export default User;