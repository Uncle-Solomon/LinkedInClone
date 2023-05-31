import mongoose from "mongoose";
import { userSchema } from "./Users";

const replySchema = new mongoose.Schema(
  {
    user: userSchema,
    textBody: {
      type: String,
      required: true,
    },
    numberofLikes: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "LinkedInClone.replies",
  }
);

const commentSchema = new mongoose.Schema(
  {
    user: userSchema,
    textBody: {
      type: String,
      required: true,
    },
    numberofLikes: {
      type: Number,
      required: false,
    },
    replies: replySchema,
  },
  {
    timestamps: true,
    collection: "LinkedInClone.comments",
  }
);
const Posts = new mongoose.Schema(
  {
    user: userSchema,
    textBody: {
      type: String,
      required: true,
    },
    numberofLikes: {
      type: Number,
      required: false,
    },
    comments: commentSchema,
  },
  {
    timestamps: true,
    collection: "LinkedInClone.posts",
  }
);
