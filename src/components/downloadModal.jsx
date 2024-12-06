import modalBgImg from "../assets/images/modal-img-bg.svg";
import closeBtnImg from "../assets/images/close-btn-img.svg";
import contentImg from "../assets/images/modal-content-img.svg";
import modalBgImgMobile from "../assets/images/modal-img-bg-mobile.svg";
import Button from "./buttonNew";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleDownloadModal } from "../redux/slices/downloadModal/downloadModalSlice";
import PlayStoreBtn from "./playStoreBtn";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
import appleLogo from "../assets/images/Apple_logo.svg";
import appStoreQr from "../assets/images/app-store-qr.png";
import playStoreQr from "../assets/images/play-store-qr.png";
const DownloadModal = () => {
  const dispatch = useDispatch();
  const isOpenDownloadModal = useSelector(
    (state) => state.downloadModal.openDownloadModal
  );

  const handleCloseModal = () => {
    dispatch(handleDownloadModal(false));
  };

  useEffect(() => {
    console.log("Modal state changed:", isOpenDownloadModal);
  }, [isOpenDownloadModal]);

  return (
    <>
      <div
        className={`modal fade ${isOpenDownloadModal ? "show" : ""}`}
        id="downloadModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isOpenDownloadModal}
        style={{
          display: isOpenDownloadModal ? "flex" : "none", // Controls visibility
          background: "#00000054",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body row m-0 p-0 justify-content-center position-relative">
              <img
                src={closeBtnImg}
                alt="modal close img"
                className="close-btn-img m-0 p-0 position-absolute"
                onClick={() => {
                  handleCloseModal();
                }}
              />
              <img
                src={modalBgImg}
                alt="modal bg img"
                className="modal-bg-img d-lg-flex d-none m-0 p-0"
              />
              <img
                src={modalBgImgMobile}
                alt="modal bg img"
                className="modal-bg-img d-lg-none m-0 p-0"
              />
              <p className="modal-heading m-0 p-0 kiddo-font fs-3 position-absolute text-center">
                Download App
              </p>
              <div className="modal-content-section row m-0 p-0 position-absolute justify-content-center">
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mt-md-0 mt-2">
                  <div className="content-img-wrapper m-0 p-0 rounded-5 overflow-hidden">
                    <img
                      src={playStoreQr}
                      alt=""
                      className="content-img m-0 p-0 rounded-5"
                    />
                  </div>
                  <div className="mt-2" style={{ width: "17rem" }}>
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
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mt-md-0 mt-3">
                  <div className="content-img-wrapper m-0 p-0 rounded-5 overflow-hidden">
                    <img
                      src={appStoreQr}
                      alt=""
                      className="content-img m-0 p-0 rounded-5"
                    />
                  </div>

                  <div className="mt-2 " style={{ width: "17rem" }}>
                    <PlayStoreBtn
                      logo={appleLogo}
                      para="DOWNLOAD ON THE"
                      head="APP STORE"
                      btnCtmBackground="radial-gradient(rgb(45 45 45), rgb(36 35 35), rgb(47 46 46), rgb(44 43 43), rgb(52 51 51))"
                      boxShadow="0px 4px rgb(36 34 34)"
                      lineBackground="#000000"
                      outerBtnBorder="1px solid rgb(255, 255, 255)"
                      innerBtnBorder="2px dashed rgb(255, 255, 255)"
                      lineUpperOverlayBg="rgb(37 37 37)"
                      link="https://apps.apple.com/in/app/humzabaan/id1574441111"
                    />
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadModal;
