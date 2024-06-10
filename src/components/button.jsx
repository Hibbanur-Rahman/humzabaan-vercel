import btnBg from "../assets/images/btn-bg.png";

const Button = () => {
  return (
    <div className="btn-ctm btn rounded-4 m-0 p-0 position-relative overflow-hidden w-auto">
      <div className="animation-div">
        <img src={btnBg} alt="btnBg" />
        <img src={btnBg} alt="btnBg" />
        <img src={btnBg} alt="btnBg" />
      </div>
      <div className="outer-btn-border rounded-4 m-0 p-1 overflow-hidden">
        <div className="inner-btn-border rounded-4 px-3 py-2">
          <h4 className="m-0 p-0 text-light">DOWNLOAD NOW</h4>
        </div>
      </div>
    </div>
  );
};

export default Button;
