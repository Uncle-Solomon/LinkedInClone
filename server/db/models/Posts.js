import mongoose, { Schema } from "mongoose";
import User from "./Users.js";

const replySchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: "Reply",
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
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    textBody: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    numberofLikes: {
      type: Number,
      required: false,
      default: 35,
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
    collection: "LinkedInClone.posts",
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
