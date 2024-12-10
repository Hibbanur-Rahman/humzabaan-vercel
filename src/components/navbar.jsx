import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "./button";
import NavbarBg from "../assets/images/Rectangle-5.png";
import NavbarBgMobile from "../assets/images/NavbarBgMobile.png";
import logo from "../assets/images/Humzabaan_MAIN_LOGO.svg";
import ButtonNew from "./buttonNew";
import { useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Function to navigate to '/' and store a flag in state or local storage
  const handleContactNavigate = () => {
    navigate("/");
    localStorage.setItem("scrollToContact", "true");
  };

  // Scroll to contact-us-section if the flag is set in local storage
  useEffect(() => {
    if (
      location.pathname === "/" &&
      localStorage.getItem("scrollToContact") === "true"
    ) {
      const contactSection = document.getElementById("contact-us-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      localStorage.removeItem("scrollToContact"); // Clean up the flag
    }
  }, [location]);
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
            <img
              src={logo}
              alt="logo"
              className="m-0 p-0 d-lg-flex d-none"
              style={{ width: "181px", height: "90px" }}
            />
          </div>
          <div className="col-6 m-0 p-0 d-flex align-items-end justify-content-center">
            <div className="d-flex col-10 m-0 p-0 align-items-center justify-content-center">
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="/" className={`text-decoration-none`}>
                  Home
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link to="/curriculum" className={`text-decoration-none`}>
                  Curriculum
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <Link
                  to="/features"
                  className={`text-decoration-none`}
                  style={{ cursor: "pointer" }}
                >
                  Features
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                {location.pathname !== "/" ? (
                  <p
                    className="m-0 p-0 "
                    style={{ cursor: "pointer" }}
                    onClick={() => handleContactNavigate()}
                  >
                    Contact
                  </p>
                ) : (
                  <ScrollLink
                    to="contact-us-section"
                    className={`text-decoration-none`}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </ScrollLink>
                )}
              </div>
            </div>
          </div>

          <div className="logo col-3 d-flex align-items-center justify-content-center m-0 p-0">
            {/* <Button content="DOWNLOAD NOW" /> */}
            <ButtonNew
              content="DOWNLOAD NOW"
              btnCtmBackground="radial-gradient(#C3D80A, #BED30A, #AFC50C, #98AD10, #8AA012)"
              boxShadow="0px 4px #5b6404"
              lineBackground="#dcf314"
              outerBtnBorder="1px solid rgb(7, 90, 94)"
              innerBtnBorder="2px dashed rgba(7, 90, 94, 1)"
              lineUpperOverlayBg="#b3cb147e"
            />
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
            <img
              src={logo}
              alt="logo"
              className="m-0 p-0 "
              style={{ width: "181px", height: "90px" }}
            />
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
                <p
                  onClick={() => navigate("/")}
                  className="text-decoration-none mb-3 mt-3"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </p>
                <p
                  onClick={() => navigate("/curriculum")}
                  className="text-decoration-none mb-3 mt-3"
                  data-bs-dismiss="offcanvas"
                >
                  Curriculum
                </p>

                <p
                  onClick={() => navigate("/features")}
                  className="text-decoration-none mb-3 mt-3"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Features
                </p>
                {location.pathname !== "/" ? (
                  <p
                    onClick={() => handleContactNavigate()}
                    className="m-0 p-0 "
                    style={{ cursor: "pointer" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    Contact
                  </p>
                ) : (
                  <ScrollLink
                    to="contact-us-section"
                    className={`text-decoration-none`}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </ScrollLink>
                )}
                <ButtonNew
                  content="DOWNLOAD NOW"
                  btnCtmBackground="radial-gradient(#C3D80A, #BED30A, #AFC50C, #98AD10, #8AA012)"
                  boxShadow="0px 4px #5b6404"
                  lineBackground="#dcf314"
                  outerBtnBorder="1px solid rgb(7, 90, 94)"
                  innerBtnBorder="2px dashed rgba(7, 90, 94, 1)"
                  lineUpperOverlayBg="#b3cb147e"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
