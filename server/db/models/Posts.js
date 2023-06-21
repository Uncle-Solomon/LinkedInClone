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

const imageUrls = [
  "https://indoanalytica.com/static/images/data-science-2.gif",
  "https://miro.medium.com/v2/resize:fit:1400/1*GpqsEXDtCFv9ARY8wLFxUw.gif",
  "https://media.tenor.com/rtvoz_mxToQAAAAM/busy-working.gif",
  "https://media.tenor.com/Trqn0AC_d98AAAAM/document-email.gif",
  "https://assets.website-files.com/5d2b950d9ea87fc61f0c1f3e/5d55d3f19a649a41ddb5b1fd_os_0021_19.png",
  // Add more image URLs to the array as needed
];

const postSchema = new mongoose.Schema(
  {
    user: {
      type: userSchema,
      ref: "User",
    },
    textHead: {
      type: String,
      required: false,
    },
    textBody: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default: function () {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
      },
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
