import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
            onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
