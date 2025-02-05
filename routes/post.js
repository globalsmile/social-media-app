const express = require("express");
const Post = require("../models/Post");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// Create a Post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { content, media } = req.body;
    const newPost = new Post({ user: req.user.userId, content, media });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like a Post
router.post("/:id/like", authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (!post.likes.includes(req.user.userId)) {
      post.likes.push(req.user.userId);
      await post.save();
    }

    res.json({ message: "Post liked!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Comment on a Post
router.post("/:id/comment", authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ user: req.user.userId, text: req.body.text });
    await post.save();

    res.json({ message: "Comment added!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
