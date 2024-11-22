import btnBg from "../assets/images/btn-bg.png";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
const PlayStoreBtn = ({
  head,
  para,
  logo,
  btnCtmBackground,
  boxShadow,
  lineBackground,
  outerBtnBorder,
  innerBtnBorder,
  lineUpperOverlayBg,
  link,
}) => {
  const handleNavigate=()=>{
    window.open(link,"_blank")
  }
  return (
    <div
      className="btn-ctm btn-ctm-new playStoreBtn btn rounded-4 m-0 p-0 position-relative overflow-hidden w-100 justify-content-center"
      style={{ background: btnCtmBackground, boxShadow: boxShadow }}
      onClick={()=>handleNavigate()}

    >
      <div
        className="line-upper-overlay row m-0 p-0 position-absolute w-100 "
        style={{ backgroundColor: lineUpperOverlayBg }}
      ></div>
      <div className="animation-div">
        <div className=" m-0 p-0 w-100 d-flex position-relative">
          <div className="line-group  m-0 p-0 w-100 d-flex">
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>

            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
            <div
              className="line-up"
              style={{ backgroundColor: lineBackground }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="outer-btn-border rounded-4 m-0 p-1 overflow-hidden"
        style={{ border: outerBtnBorder }}
      >
        <div
          className="inner-btn-border rounded-4 px-3 py-2 d-flex d-flex align-items-center justify-content-center"
          style={{ border: innerBtnBorder }}
        >
          <img src={logo} alt="" className=" btn-logo m-0 p-0" />
          <div className="w-auto m-0 p-0 ms-2">
            <p className="m-0 p-0 text-light fw-lighter text-start">{para}</p>
            <h4 className="m-0 p-0 text-light fs-4">{head}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreBtn;
