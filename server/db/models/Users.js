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
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  skills: {
    type: String,
    required: false,
  },
});

const Education = mongoose.model("Education", educationSchema);

const experienceSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  locationType: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  skills: {
    type: String,
    required: false,
  },
});

const Experience = mongoose.model("Experience", experienceSchema);

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
      type: String,
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
    education: {
      type: educationSchema,
      ref: "Education",
    },
    experience: {
      type: experienceSchema,
      ref: "Experience",
    },
  },
  {
    timestamps: true,
    collection: "LinkedInClone.users",
  }
);

const User = mongoose.model("User", userSchema);

export default User;
