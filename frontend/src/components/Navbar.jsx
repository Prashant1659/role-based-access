import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getRole } from "../auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">BlogApp</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto text-decoration-none d-flex">
            {!isLoggedIn() ? (
              <>
                <li className="nav-item w-fit-content text-decoration-none">
                  <Link className="nav-link text-decoration-none" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <>
                {getRole() === "admin" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Dashboard</Link>
                  </li>
                )}
                <li className="nav-item">
                  <button className="btn btn-danger btn-sm ms-3" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
