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
      default: "https://indoanalytica.com/static/images/data-science-2.gif",
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
