import Navbar from "../components/navbar";
import heroImg from "../assets/images/hero-img.png";
import heroAnimation from "../assets/images/hero-animation.png";
const Home = () => {
  return (
    <div className="row m-0 p-0 overflow-hidden">
      {/** ================= Navbar-section ==================  */}
      <Navbar />

      {/** ================= Hero-section ==================  */}
      <div className="hero-section row m-0 p-0 position-relative">
        <img src={heroImg} alt="" className="m-0 p-0" />
        <div className="hero-animation w-100  d-flex m-0 p-0  position-relative">
          <img src={heroAnimation} alt="hero animation" className="m-0 p-0" />
          <img src={heroAnimation} alt="hero animation" className="m-0 p-0" />
          <img src={heroAnimation} alt="hero animation" className="m-0 p-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
