const blogService = require("../services/blogService");

const addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    const blog = await blogService.addBlog({
      title,
      description,
      userId,
    });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const userId = req.user.id;
    const blogs = await blogService.getAllBlogs(userId);
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updateData = req.body;
    const blog = await blogService.updateBlogById(id, userId, updateData);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.send(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const blog = await blogService.deleteBlogById(id, userId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.send(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { addBlog, getAllBlogs, updateBlogById, deleteBlogById };
