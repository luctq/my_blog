const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// EDIT POST

router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username) {
    try {
      const updatePost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your post!");
  }
});

// DELETE POST

router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  !post && res.status(404).json("Post not found")
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post");
    }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json("Post not found")
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json();
  }
});

module.exports = router;
