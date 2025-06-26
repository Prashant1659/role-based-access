import { useEffect, useState } from "react";
import API from "../api";

const AdminDashboard = () => {
  const [form, setForm] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await API.post("/blogs", form);
      setSuccess("Blog post created successfully!");
      setForm({ title: "", content: "" });
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to create blog post.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`);
      setSuccess("Blog post deleted successfully!");
      fetchBlogs();
    } catch (err) {
      console.error(err);
      setError("Failed to delete blog post.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {/* Blog Creation Form */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Create New Blog Post</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Content"
                rows={4}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Create
            </button>
          </form>
        </div>
      </div>

      {/* List of Blogs */}
      <h4 className="mb-3">All Blog Posts</h4>
      {blogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        blogs.map((blog) => (
          <div className="card mb-3 shadow-sm" key={blog._id}>
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content}</p>
              <p className="card-text">
                <small className="text-muted">By: {blog.author?.name}</small>
              </p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
