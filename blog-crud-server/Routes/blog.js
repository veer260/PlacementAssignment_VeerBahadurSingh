const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.post("/", blogController.createBlog);
router.put("/:id", blogController.updateBlog);
router.get("/single/:id", blogController.getBlogById);
router.get("/", blogController.getBlogs);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
