import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BlogList from "./pages/BlogList";
import AdminDashboard from "./pages/AdminDashboard";
import { isLoggedIn, getRole } from "./auth";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin"
        element={
          isLoggedIn() && getRole() === "admin"
            ? <AdminDashboard />
            : <Navigate to="/login" />
        }
      />
    </Routes>
  </Router>
);

export default App;
