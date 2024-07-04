import { toast } from "react-toastify";
import logo from "../assets/images/Humzabaan_Footer_Logo.svg";
import { Link, useNavigate } from "react-router-dom";
const DashboardSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("humzabaan-token");
    toast.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <div className="dashbaord-sidebar m-0 p-0 p-4 pt-0">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="sidebar-menu mt-4">
        <Link to="/dashboard" className="text-decoration-none text-dark">
          <div
            className={`menu-items ${
              location.pathname === "/dashboard" ? "active" : ""
            } d-flex rounded-3 align-items-center p-3 py-2 mb-3`}
          >
            <i className="bi bi-speedometer2 fs-5 me-2"></i>
            <p className="m-0 p-0 fs-5">Dashboard</p>
          </div>
        </Link>
        <Link
          to="/dashboard/testimonial"
          className="text-decoration-none text-dark"
        >
          <div
            className={`menu-items ${
              location.pathname === "/dashboard/testimonial" ? "active" : ""
            } d-flex rounded-3 align-items-center p-3 py-2 mb-3`}
          >
            <i className="bi bi-file-earmark fs-5 me-2"></i>
            <p className="m-0 p-0 fs-5">Testimonial</p>
          </div>
        </Link>
        <Link
          to="/dashboard/profile"
          className="text-decoration-none text-dark"
        >
          <div
            className={`menu-items ${
              location.pathname === "/dashboard/profile" ? "active" : ""
            } d-flex rounded-3 align-items-center p-3 py-2 mb-3`}
          >
            <i className="bi bi-person fs-5 me-2"></i>
            <p className="m-0 p-0 fs-5">Profile</p>
          </div>
        </Link>
        <Link
          to="/dashboard/email"
          className="text-decoration-none text-dark"
        >
          <div
            className={`menu-items ${
              location.pathname === "/dashboard/email" ? "active" : ""
            } d-flex rounded-3 align-items-center p-3 py-2 mb-3`}
          >
            <i className="bi bi-envelope fs-5 me-2"></i>
            <p className="m-0 p-0 fs-5">Messages</p>
          </div>
        </Link>
        <div
          className="menu-items d-flex rounded-3 align-items-center p-3 py-2 mb-3"
          onClick={handleLogout}
        >
          <i className="bi bi-box-arrow-left fs-5 me-2 text-danger"></i>
          <p className="m-0 p-0 fs-5 text-danger">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
