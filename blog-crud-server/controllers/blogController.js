const Blog = require("../models/blog");

const createBlog = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    // if (!title || !content || !author) {
    //   res.send("title, content and author all required");
    //   next();
    // }

    // Create a new instance of the Blog model
    const blog = new Blog({
      title,
      content,
      author,
      // Additional properties related to the blog, if any
    });

    // Save the blog to the database
    const savedBlog = await blog.save();

    res.status(201).json(savedBlog); // Return the saved blog in the response
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      data: blogs,
      message: "Successfully fetched all blogs",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      data: "",
      message: "unable to fetch all blogs",
      error: error,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({
      status: "success",
      data: blog,
      message: "Successfully fetched the blog",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      data: "",
      message: "unable to fetch the blog",
      error: error,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params; // Get the blog ID from the request parameters
    const { title, content, author } = req.body; // Get the updated blog data from the request body

    // Find the blog by ID in the database and update its properties
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog); // Return the updated blog in the response
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedBlog = await Blog.findByIdAndDelete(id);
    return res.status(200).json({
      status: "success",
      data: deleteBlog,
      message: "successfully deleted the blog",
      error: "",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failure",
      data: "",
      message: "unable to  delete the blog",
      error: error,
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
