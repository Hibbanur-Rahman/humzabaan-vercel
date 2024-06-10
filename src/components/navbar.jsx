import { Link } from "react-router-dom";
import Button from "./button";
import NavbarBg from "../assets/images/Rectangle-5.png";
import logo from "../assets/images/LOGO.svg";
const Navbar = () => {
  return (
    <div className="Navbar row m-0 p-0">
      <div className="Background row m-0 p-0 w-100 d-flex align-items-center justify-content-center">
        <img src={NavbarBg} alt="" className="m-0 p-0 h-100 w-100 img-fluid" />
      </div>
      <div className="row m-0 p-0 position-absolute ">
        <div className="logo col-3 d-flex align-items-center justify-content-center m-0 p-0">
          <img src={logo} alt="logo" className="m-0 p-0 h-75"/>
        </div>
        <div className="col-6 m-0 p-0 d-flex align-items-end justify-content-center">
            <div className="d-flex col-10 m-0 p-0 align-items-center justify-content-center">
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Link to='#' className="text-decoration-none">Home</Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Link to='#' className="text-decoration-none">CURRICULUM</Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Link to='#' className="text-decoration-none">FEATURES</Link>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Link to='#' className="text-decoration-none">CONTACT</Link>
                </div>
            </div>
        </div>

        <div className="logo col-3 d-flex align-items-center justify-content-center m-0 p-0">
            <Button content='DOWNLOAD NOW'/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
