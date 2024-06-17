import { Link } from "react-router-dom";
import Button from "./button";
import NavbarBg from "../assets/images/Rectangle-5.png";
import NavbarBgMobile from "../assets/images/NavbarBgMobile.png";
import logo from "../assets/images/LOGO.svg";
import ButtonNew from "./buttonNew";
const Navbar = () => {
  return (
    <>
      {/**================= Navbar for desktop =================== */}
      <div className="Navbar row m-0 p-0 d-lg-flex d-none">
        <div className="Background row m-0 p-0 w-100 d-flex align-items-center justify-content-center">
          <img
            src={NavbarBg}
            alt=""
            className="m-0 p-0 h-100 w-100 img-fluid"
          />
        </div>
        <div className="row m-0 p-0 position-absolute ">
          <div className="logo col-3 d-flex align-items-center justify-content-center m-0 p-0">
            <img src={logo} alt="logo" className="m-0 p-0 h-75" />
          </div>
          <div className="col-6 m-0 p-0 d-flex align-items-end justify-content-center">
            <div className="d-flex col-10 m-0 p-0 align-items-center justify-content-center">
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="#" className="text-decoration-none">
                  Home
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="#" className="text-decoration-none">
                  CURRICULUM
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="#" className="text-decoration-none">
                  FEATURES
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="contact-us-section" className="text-decoration-none">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>

          <div className="logo col-3 d-flex align-items-center justify-content-center m-0 p-0">
            {/* <Button content="DOWNLOAD NOW" /> */}
            <ButtonNew content="DOWNLOAD NOW" />

          </div>
        </div>
      </div>
      {/**================= Navbar for Mobile =================== */}

      <div
        className="Navbar row m-0 p-0 d-lg-none d-flex"
        style={{ backgroundColor: "" }}
      >
        <div className="Background row m-0 p-0 w-100 d-flex align-items-center justify-content-center">
          <img
            src={NavbarBgMobile}
            alt=""
            className="m-0 p-0 h-100 w-100 img-fluid"
          />
        </div>
        <div className="row m-0 p-0 position-absolute ">
          <div className="logo col-9 d-flex align-items-center justify-content-center m-0 p-0">
            <img src={logo} alt="logo" className="m-0 p-0 h-75" />
          </div>
          <div className="col-3 m-0 p-0 d-flex align-items-end justify-content-center">
            <i
              className="bi bi-list"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            ></i>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="row m-0 p-0">
                <Link to="#" className="text-decoration-none mb-3 mt-3">
                  Home
                </Link>
                <Link to="#" className="text-decoration-none mb-3 mt-3">
                  CURRICULUM
                </Link>
                <Link to="#" className="text-decoration-none mb-3 mt-3">
                  FEATURES
                </Link>
                <Link to="/#contact-us-section" className="text-decoration-none mb-3 mt-3">
                  CONTACT
                </Link>
                <Button content="DOWNLOAD NOW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
