import LogoDark from "../assets/images/Humzabaan_Footer_Logo.svg";
import { Link } from "react-router-dom";
import PlayStoreBtn from "./playStoreBtn";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
import appleLogo from "../assets/images/Apple_logo.svg";
import Button from "./button";
import ButtonNew from "./buttonNew";

const Footer = () => {
  return (
    <div className="row m-0 p-0" style={{backgroundColor:'#7FD839'}}>
      <div className="footer row m-0 p-0 pt-5 justify-content-center">
        <div className="footer-content row col-10 justify-content-center">
          <div className="col-lg-3 mt-lg-0 mt-5 d-flex flex-column align-items-center order-last order-lg-first">
            <h3 className="crunch-font m-0 p-0 mb-4">FOLLOW US</h3>
            <div className="row m-0 p-0">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-0"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-facebook fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-instagram fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.twitter.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-twitter-x fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.youtube.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-youtube fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/"
                target="_blank"
                className="m-0 p-0 w-auto ms-1"
              >
                <div className="icon rounded-circle d-flex m-0 p-0 justify-content-center align-items-center">
                  <i
                    className="w-auto m-0 p-0 bi bi-linkedin fs-4"
                    aria-hidden="true"
                  ></i>
                </div>
              </Link>
            </div>
            <Link to="/" className="m-0 p-0">
              <img
                src={LogoDark}
                alt="Logo dark"
                className=" m-0 p-0 mt-4 w-auto"
                style={{height:'93px'}}
              />
            </Link>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-5 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">DOWNLOAD APP</h3>
            <div className="" style={{ width: "15rem" }}>
            <PlayStoreBtn
                logo={playStoreLogo}
                para="GET IT ON"
                head="GOOGLE PLAY"
                btnCtmBackground="radial-gradient(#006b6b, #015a5e)"
                boxShadow="0px 4px #053f3e"
                lineBackground=" #006b6b"
                outerBtnBorder="1px solid #fff"
                innerBtnBorder="2px dashed #fff"
                lineUpperOverlayBg="#006465"
                link="https://play.google.com/store/apps/details?id=com.devhz.humzabaan"
              />
            </div>
            <div className="mt-4" style={{ width: "15rem" }}>
            <PlayStoreBtn
                logo={appleLogo}
                para="DOWNLOAD ON THE"
                head="APP STORE"
                btnCtmBackground="radial-gradient(#C3D80A, #BED30A, #AFC50C, #98AD10, #8AA012)"
                boxShadow="0px 4px #5b6404"
                lineBackground="#dcf314"
                outerBtnBorder="1px solid rgb(7, 90, 94)"
                innerBtnBorder="2px dashed rgba(7, 90, 94, 1)"
                lineUpperOverlayBg="#b3cb147e"
                link="https://apps.apple.com/in/app/humzabaan/id1574441111"
              />
            </div>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-5 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">SUBSCRIBE</h3>
            <form action="" className="m-0 p-0 w-100">
              <input
                className="m-0 p-2 mb-3 rounded-5 w-100"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                className="m-0 p-2 mb-3 rounded-5 w-100"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <div className="d-flex w-100 justify-content-center align-items-center">
                {/* <Button content="Submit" /> */}
                <ButtonNew
                  content="Submit"
                  btnCtmBackground="radial-gradient(#3e60f4 , #041ec8)"
                  boxShadow="0px 4px #00139e"
                  lineBackground="#3e60f4"
                  outerBtnBorder="1px solid #000d9c"
                  innerBtnBorder="2px dashed #fff"
                  lineUpperOverlayBg="#1d3ae2 "
                />
              </div>
            </form>
          </div>
          <div className=" quicks-links col-lg-3 mt-lg-0 mt-5 d-flex flex-column align-items-center">
            <h3 className="crunch-font m-0 p-0 mb-4">QUICK LINKS</h3>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Courses</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">dictionary</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Books</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Gallery</p>
            </Link>
            <Link to="/" className="kiddo-font m-0 p-0">
              <p className="m-0 p-0 kiddo-font fs-3">Events</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-last row m-0 p-lg-3 p-0  justify-content-sm-between justify-content-center align-items-center">
        <div className="left-part col-sm-6 m-0 p-2 p-sm-0 col-12 d-flex justify-content-center justify-content-lg-start">
          <Link to="/privacy-policy" className="text-light w-auto">
            PRIVACY POLICY
          </Link>
          <p className="m-0 p-0 text-light w-auto ps-2 pe-2"> | </p>
          <Link to="/community-guidelines" className="text-light w-auto">
            COMMUNITY GUIDELINES
          </Link>
          <p className="m-0 p-0 text-light w-auto ps-2 pe-2"> | </p>
          <Link to="/manage-your-data" className="text-light w-auto">
            MANAGE YOUR DATA
          </Link>
          {/* <p className="m-0 p-0 text-light w-auto ps-2 pe-2"> | </p>
          <Link to="/privacy" className="text-light w-auto">
            COPYRIGHT
          </Link> */}
        </div>
        <div className="right-part col-sm-6 col-12 m-0 p-2 p-sm-0 d-flex  justify-content-center justify-content-lg-end">
          <p className="m-0 p-0 text-light">
            © 2024 Humzabaan™ | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
