import modalBgImg from "../assets/images/modal-img-bg.svg";
import closeBtnImg from "../assets/images/close-btn-img.svg";
import contentImg from "../assets/images/modal-content-img.svg";
import modalBgImgMobile from '../assets/images/modal-img-bg-mobile.svg';
import Button from "./buttonNew";
const FeaturesModal = () => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body row m-0 p-0 justify-content-center  position-relative">
              <img
                src={closeBtnImg}
                alt="modal close img"
                className="close-btn-img m-0 p-0 position-absolute"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <img
                src={modalBgImg}
                alt="modal bg img"
                className="modal-bg-img d-lg-flex d-none m-0 p-0 "
              />
              <img
                src={modalBgImgMobile}
                alt="modal bg img"
                className="modal-bg-img d-lg-none m-0 p-0 "
              />
              <p className="modal-heading m-0 p-0 kiddo-font fs-3 position-absolute text-center">
                HEADING TEXT
              </p>
              <div className="modal-content-section row m-0 p-0 position-absolute justify-content-center">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <div
                    className="content-img-wrapper m-0 p-0 rounded-5 overflow-hidden"
                   
                  >
                    <img
                      src={contentImg}
                      alt=""
                      className="content-img m-0 p-0 rounded-5"
                      
                    />
                  </div>
                </div>
                <div className="col-lg-6">
              
                  <p className="m-0 p-0 kiddo-font mt-lg-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, quis nostrud exerci tation ullamcorper suscipit
                    lobortis nisl ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row m-0 p-0 align-items-center justify-content-center mt-3">
                  <Button
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
      </div>
    </>
  );
};

export default FeaturesModal;
