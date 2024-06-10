import btnBg from "../assets/images/btn-bg.png";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
const PlayStoreBtn = ({head,para,logo}) => {
  return (
    <div className="btn-ctm btn rounded-4 m-0 p-0 position-relative overflow-hidden w-auto">
      <div className="animation-div">
        <img src={btnBg} alt="btnBg" />
        <img src={btnBg} alt="btnBg" />
        <img src={btnBg} alt="btnBg" />
      </div>
      <div className="outer-btn-border rounded-4 m-0 p-1 overflow-hidden">
        <div className="inner-btn-border rounded-4 px-3 py-2 d-flex d-flex align-items-center">
          <img src={logo} alt="" className=" btn-logo m-0 p-0" />
          <div className="w-auto m-0 p-0 ms-2">
            <p className="m-0 p-0 text-light fw-lighter text-start">
             {para}
            </p>
            <h4 className="m-0 p-0 text-light fs-4">{head}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreBtn;
