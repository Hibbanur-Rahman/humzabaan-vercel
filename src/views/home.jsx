import Navbar from "../components/navbar";
import heroImg from "../assets/images/hero-img.png";
import heroAnimation from "../assets/images/hero-animation.png";
import welcomeUrdu from "../assets/images/welcome-urdu-text.svg";
import headingBg from "../assets/images/heading-bg.svg";
const Home = () => {
  return (
    <div className="row m-0 p-0 overflow-hidden">
      {/** ================= Navbar-section ==================  */}
      <Navbar />

      {/** ================= Hero-section ==================  */}
      <div className="hero-section row m-0 p-0 position-relative">
        <img src={heroImg} alt="" className="m-0 p-0" />
        <div className="hero-animation w-100  d-flex m-0 p-0  position-relative">
          <img
            src={heroAnimation}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimation}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimation}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
        </div>
      </div>

      {/** ================= Welcome-section ==================  */}
      <section className="welcome-section row m-0 p-0 justify-content-center position-relative">
        <div className="col-10 d-flex align-items-center justify-content-center m-0 p-0 flex-column">
          <img
            src={welcomeUrdu}
            alt=""
            className="m-0 p-0"
            style={{ height: "auto", width: "17rem" }}
          />
          <p className="khush-aamdeed-text text-light fs-1 m-0 p-0 text-center">
            Khush Aamdeed !
          </p>
          <div className="heading m-0 p-0 mt-4 position-relative d-flex align-items-center justify-content-center">
            <img src={headingBg} alt="heading-bg" className="m-0 p-0 " />
            <h1 className="m-0 p-0 position-absolute">WELCOME TO HUMZABAAN</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
