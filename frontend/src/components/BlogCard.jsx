const BlogCard = ({ title, content, author }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>By: {author?.name}</small>
    </div>
  );
};

export default BlogCard;
