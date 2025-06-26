const router = require("express").Router();
const authenticate = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/role.middleware");
const {
  getAllBlogs,
  createBlog,
  deleteBlog,
  dashboard
} = require("../controllers/blog.controller");

router.get("/", authenticate, getAllBlogs);
router.get('/dashboard',authenticate,isAdmin,dashboard);
router.post("/", authenticate, isAdmin, createBlog);
router.delete("/:id", authenticate, isAdmin, deleteBlog);

module.exports = router;
