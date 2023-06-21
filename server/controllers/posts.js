import Post from "../db/models/Posts.js";
import User from "../db/models/Users.js";

export const createPost = async (req, res) => {
  // const post = await Post.create(req.body);
  let { textHead, textBody, obj } = req.body;
  const post = new Post({
    user: obj,
    textHead: textHead,
    textBody: textBody,
  });
  post
    .save()
    .then((response) => {
      res.status(201).json({
        success: true,
        result: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
  // res.status(201).json({ post });
};

export const getAllPosts = async (req, res) => {
  const post = await Post.find({});
  // const user = post.user;
  res.status(200).json({ post });
};
