import mongoose, { Schema, SchemaType } from "mongoose";
import { userSchema } from "./Users.js";

const replySchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      ref: "User",
    },
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

const Reply = mongoose.model("Reply", replySchema);

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      ref: "User",
    },
    textBody: {
      type: String,
      required: true,
    },
    numberofLikes: {
      type: Number,
      required: false,
    },
    replies: {
      type: Array,
      of: [
        {
          type: replySchema,
          ref: "Reply",
        },
      ],
    },
  },
  {
    timestamps: true,
    collection: "LinkedInClone.comments",
  }
);

const Comment = mongoose.model("Comment", commentSchema);

const postSchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      ref: "User",
    },
    textHead: {
      type: String,
      required: true,
    },
    textBody: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?w=740&t=st=1685967248~exp=1685967848~hmac=064a7f2c03b67dd6f9b6519855a54090051bc7bf1ceb7c3ec48ccd263ff67d9e",
    },
    numberofLikes: {
      type: Number,
      required: false,
      default: 35,
    },
    comments: {
      type: Array,
      of: [
        {
          type: commentSchema,
          ref: "Comment",
        },
      ],
    },
  },
  {
    timestamps: true,
    collection: "LinkedInClone.posts",
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
