import Post from "../db/models/Posts.js";
import User from "../db/models/Users.js";

export const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json({ post });
};

export const getAllPosts = async (req, res) => {
  const post = await Post.find({});
  // const user = post.user;
  res.status(200).json({ post });
};
