import { useEffect, useState } from "react";
import API from "../api";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/").then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.map(blog => (
  <BlogCard
    key={blog._id}
    title={blog.title}
    content={blog.content}
    author={blog.author}
  />
))}
    </div>
  );
};

export default BlogList;
