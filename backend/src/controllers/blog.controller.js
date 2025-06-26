const Blog = require("../models/post.models");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "name email");
  res.json(blogs);
};

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = new Blog({ title, content, author: req.user.id });
  await blog.save();
  res.status(201).json(blog);
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
};

exports.dashboard = async (req,res) => {
    const blogs = await Blog.find().populate("author", "name email");
    res.json(blogs);
}