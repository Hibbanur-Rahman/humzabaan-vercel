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
    <>
      <div className="dashbaord-sidebar m-0 p-0 p-4 pt-0 d-lg-block d-none">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="sidebar-menu mt-4">
          <Link to="/dashboard" className="text-decoration-none text-dark">
            <div
              className={`menu-items ${
                location.pathname === "/dashboard" ? "active" : ""
              } ${
                location.pathname === "/dashboard/" ? "active" : ""
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
      <div
        className="row m-0 p-0 d-lg-none p-2 border border-1 align-items-center"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        }}
      >
        <div
          className="icon w-auto d-flex justify-content-center align-items-center border border-2 w-auto rounded-3 p-0 px-2"
          style={{ height: "fit-content" }}
        >
          <i
            className="bi bi-list fs-1 "
            style={{ cursor: "pointer" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></i>
        </div>

        <div className="logo col-9 d-flex justify-content-center align-items-center">
          <img src={logo} style={{ height: "50px" }} />
        </div>
      </div>
      <div
        class="offcanvas offcanvas-start dashbaord-sidebar"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="offcanvas-body dashbaord-sidebar"
          style={{ boxShadow: "none" }}
        >
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="sidebar-menu mt-4">
            <Link to="/dashboard" className="text-decoration-none text-dark">
              <div
                className={`menu-items ${
                  location.pathname === "/dashboard" ? "active" : ""
                } ${
                  location.pathname === "/dashboard/" ? "active" : ""
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
      </div>
    </>
  );
};

export default DashboardSidebar;
