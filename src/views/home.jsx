import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "../components/navbar";
import heroImg from "../assets/images/hero-img.png";
import heroImgMobile from "../assets/images/hero-Img-mobile.svg";
import heroAnimation from "../assets/images/hero-animation.png";
import heroAnimationMobile from "../assets/images/hero-animation-mobile.svg";
import welcomeUrdu from "../assets/images/welcome-urdu-text.svg";
import headingBg1 from "../assets/images/heading-bg.svg";
import headingBg2 from "../assets/images/heading-bg-2.svg";
import headingBg3 from "../assets/images/heading-bg-3.svg";
import headingBg4 from "../assets/images/heading-bg-4.svg";
import headingBg5 from "../assets/images/heading-bg-5.svg";
import headingSubBg from "../assets/images/heading-sub-bg.svg";
import videoFrame from "../assets/images/video-frame.svg";
import playBtn from "../assets/images/play-btn.svg";
import teacherGif from "../assets/images/teacher-img.gif";
import teacherVideoThumbnail from "../assets/images/teacher-video-thumbnail.png";
import mobileGif from "../assets/images/mobile-gif.gif";
import Button from "../components/button";
import ButtonNew from "../components/buttonNew";
import PlayStoreBtn from "../components/playStoreBtn";
import appleLogo from "../assets/images/Apple_logo.svg";
import playStoreLogo from "../assets/images/playStoreLogo.svg";
import featureImg1 from "../assets/images/FEATURE-1.svg";
import featureImg2 from "../assets/images/FEATURE-2.svg";
import featureImg3 from "../assets/images/FEATURE-3.svg";
import featureImg4 from "../assets/images/FEATURE-4.svg";
import featuresCenterMobile from "../assets/images/features-center-mobile.svg";
import featuresCardContent1 from "../assets/images/features-card-1.svg";
import featuresCardContent2 from "../assets/images/features-card-2.svg";
import featuresCardHead1 from "../assets/images/features-card-head-1.svg";
import featuresCardHead2 from "../assets/images/features-card-head-2.svg";
import featuresContentList1 from "../assets/images/features-content-list-1.svg";
import featuresContentList2 from "../assets/images/features-content-list-2.svg";
import aboutUrduBg from "../assets/images/HISTORIC-PAGE.svg";
import aboutUrduBgMobile from "../assets/images/about-urdu-bg-mobile.svg";
import aboutUrduBg1k from "../assets/images/about-urdu-bg-13-15-1.svg";
import VideoPlayerFrame from "../assets/images/video-player-frame.svg";
import GhalibThumbNailVideo from "../assets/images/ghalib-thumbnail-video.svg";
import AboutUrduInk from "../assets/images/about-urdu-ink.svg";
import testimonialFrame from "../assets/images/testimonial-frame.svg";
import testimonialFrameTab from "../assets/images/testimonial-frame-tab.svg";
import testimonialProfileImg from "../assets/images/testimonial-profile-img.svg";
import testimonialSubHeading from "../assets/images/testimonial-sub-heading.svg";
import star from "../assets/images/star.svg";
import startFill from "../assets/images/star-fill.svg";
import contactUsFrame from "../assets/images/contact-us-frame.svg";
import ContactGhalib from "../assets/images/contact-ghalib.gif";
import btnBg from "../assets/images/btn-bg.png";
import loadingGif from "../assets/images/loading.gif";

import Footer from "../components/footer";
import DOMAIN from "../../environmentVariables";

import axios from "axios";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import FeaturesModal from "../components/modal";
import SliderFeatures from "../components/sliderFeatures/sliderFeatures";

const Home = () => {
  AOS.init();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isIframeShow, setIsIframeShow] = useState(false);
  const [isTeacherIframeShow, setIsTeacherIframeShow] = useState(false);
  const [isSubmitingForm, setIsSubmitingForm] = useState(false);
  const [testimonialArr, setTestimonialArr] = useState([]);
  const [whyHumzabaanArr, setWhyHumzabaanArr] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        contactDetails.email === "" ||
        contactDetails.message === "" ||
        contactDetails.name === ""
      ) {
        toast.error("Please fill all the fields");
        return;
      }

      setIsSubmitingForm(true);
      const formData = new FormData();
      formData.append("name", contactDetails.name);
      formData.append("email", contactDetails.email);
      formData.append("message", contactDetails.message);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbymdG6MaoDG_pyYCo1O4N6hU8cq2HRJ2waADh3XNk7UVTGajb4ugyac_1mUFCNM6W-t3w/exec",
        formData
      );
      const responseDB = await axios.post(`${DOMAIN}/send-message-db`, {
        name: contactDetails.name,
        email: contactDetails.email,
        message: contactDetails.message,
      });
      console.log(response);
      if (response.data.result === "success" && responseDB.status === 201) {
        toast.success("Sent message successfully");
        setContactDetails({
          name: "",
          email: "",
          message: "",
        });
        setIsSubmitingForm(false);
      }
    } catch (error) {
      console.log("Failed to send message:", error);
      toast.error("Failed to send message");
      setIsSubmitingForm(false);
    }
  };
  const handleInputChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handlePlay = () => {
    setIsIframeShow(!isIframeShow);
  };

  const handlePlayTeacherVideo = () => {
    setIsTeacherIframeShow(!isTeacherIframeShow);
  };

  const handleViewTestimonial = async () => {
    try {
      const response = await axios.get(`${DOMAIN}/view-testimonial`);
      if (response.status === 200) {
        setTestimonialArr(response.data.data);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Failed to view Testimonial");
    }
  };

  const handleViewWhyHumzabaan = async () => {
    try {
      const response = await axios.get(`${DOMAIN}/view-features`);
      if (response.status === 200) {
        setWhyHumzabaanArr(response.data.data);
      }
    } catch (error) {
      console.log("error in the why humzabaan view: ", error);
    }
  };

  useEffect(() => {
    AOS.init();
    handleViewTestimonial();
    handleViewWhyHumzabaan();
  }, []);

  return (
    <div className="home row m-0 p-0 overflow-x-hidden">
      {/** ================= Navbar-section ==================  */}
      <Navbar />

      {/** ================= Hero-section ==================  */}
      <div
        id="hero-section"
        className="hero-section row m-0 p-0 position-relative"
      >
        <img src={heroImg} alt="" className="d-lg-flex d-none m-0 p-0" />
        <img
          src={heroImgMobile}
          alt=""
          className="d-lg-none d-flex m-0 p-0"
          style={{}}
        />
        <div className="d-lg-flex d-none hero-animation w-100  d-flex m-0 p-0  position-relative">
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
          <img
            src={heroAnimation}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
        </div>
        <div className="d-lg-none d-flex hero-animation w-100  d-flex m-0 p-0  position-relative">
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
          <img
            src={heroAnimationMobile}
            alt="hero animation"
            className="m-0 p-0 w-100"
          />
        </div>
      </div>

      {/** ================= Welcome-section ==================  */}
      <section
        id="welcome-section"
        className="welcome-section row m-0 p-0 justify-content-center position-relative"
      >
        <div className="col-10 d-flex align-items-center justify-content-center m-0 p-0 flex-column">
          <img
            src={welcomeUrdu}
            alt=""
            className="m-0 p-0"
            style={{ height: "auto", width: "17rem" }}
            data-aos="fade-up"
          />
          <p
            className="khush-aamdeed-text text-light fs-1 m-0 p-0 text-center"
            data-aos="fade-up"
          >
            Khush Aamdeed !
          </p>
          <div
            className="heading m-0 p-0 mt-4 position-relative d-flex align-items-center justify-content-center"
            data-aos="fade-right"
          >
            <img src={headingBg1} alt="heading-bg" className="m-0 p-0 " />
            <h1 className="m-0 p-0 position-absolute">WELCOME TO HUMZABAAN</h1>
          </div>
        </div>
      </section>

      {/** ================= Who-we-are-section ==================  */}
      <div
        id="about-us-section"
        className="who-we-are-section row m-0 p-0 pt-3 justify-content-center"
      >
        <p className="heading-p m-0 p-0 mt-lg-5 text-center fs-1">WHO WE ARE</p>
        <div className="row col-lg-10 m-0 p-0  z-2 justify-content-center">
          <div
            className="who-we-are-right col-lg-6 m-0 p-lg-3 p-3 d-flex flex-column justify-content-center"
            data-aos="fade-right"
          >
            <p
              className="m-0 p-0 text-light kiddo-font text-center"
              style={{ fontSize: "1.1rem" }}
            >
              Welcome to Humzabaan – your ultimate destination for delving into
              the enchanting world of Urdu! We're passionate about merging the
              timeless essence of Urdu with cutting-edge technology to offer you
              an unparalleled learning experience tailored to your unique
              journey. ​
            </p>
            <p
              className="m-0 p-0 mt-4 text-light kiddo-font text-center"
              style={{ fontSize: "1.1rem" }}
            >
              Here at Humzabaan, we're dedicated to nurturing the vibrant spirit
              of Urdu, whether you're taking your first steps or refining your
              skills. Our approach blends innovative digital tools with a
              genuine human connection. With access to interactive online
              modules and engaging live sessions led by our fantastic teachers
              in the near future, learning Urdu feels like embarking on a
              delightful journey with a supportive language buddy by your side.
            </p>
          </div>
          <div
            className="who-we-are-left col-lg-6 m-0 p-lg-3 d-flex align-items-center  position-relative"
            data-aos="fade-left"
            style={{ maxWidth: "fit-content" }}
          >
            <div className="video-frame m-0 p-0 w-auto d-flex justify-content-center align-items-center position-relative">
              <img
                src={videoFrame}
                alt="video frame"
                className="video-frame-img  m-0 p-0 z-2"
                style={{ height: "400px", width: "400px" }}
              />

              {isTeacherIframeShow ? (
                <iframe
                  className="urdu-iframe"
                  src="https://www.youtube.com/embed/YOhtkzlKyFQ?si=VWgD5P9btJ2EOsUb"
                  title="YouTube video player"
                  frameborder="0"
                  allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={teacherVideoThumbnail}
                    alt="thumbnail"
                    className=" thumbnail position-absolute w-100"
                  />
                  <img
                    src={playBtn}
                    alt="playbtn"
                    className="m-0 p-0 position-absolute"
                    style={{ cursor: "pointer", zIndex: "6" }}
                    onClick={handlePlayTeacherVideo}
                  />
                </>
              )}
              <img
                src={teacherGif}
                alt=""
                className="teacher-gif m-0 p-0 position-absolute z-3"
              />
            </div>
          </div>
        </div>
        <div className="mobile row m-0 p-0 col-lg-10 position-relative z-5 justify-content-between">
          <div
            className="col-lg-5 m-0 p-0 position-relative d-flex justify-content-lg-end justify-content-center align-items-center"
            data-aos="fade-right"
          >
            <img
              src={mobileGif}
              alt=""
              className="mobile-gif m-0 p-0 position-absolute w-auto"
              style={{ height: "400px", zIndex: "6" }}
            />
          </div>
          <div
            className="downloads-btns col-lg-6 mt-lg-0 mt-3 pb-3 d-flex flex-column justify-content-lg-end align-lg-baseline"
            data-aos="fade-left"
          >
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
            <div className="mt-4 " style={{ width: "15rem" }}>
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
                link="https://apps.apple.com/ae/app/humzabaan/id6736941196"
              />
            </div>
          </div>
        </div>
      </div>

      {/** ================= Why-humzabaan-section ==================  */}
      <div
        id="features-section"
        className="why-humzabaan-section row m-0 p-0 justify-content-center"
      >
        <div
          className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center"
          data-aos="fade-right"
        >
          <img src={headingBg2} alt="heading-bg" className="m-0 p-0 " />
          <h1 className="m-0 p-0 position-absolute">WHY HUMZABAAN ?</h1>
        </div>
        <div className="features col-lg-10 m-0 p-0 mt-lg-5">
          <div className=" row m-0 p-0 justify-content-center">
            <div
              className="col-lg-6 features-item features-item-margin-top  m-0 p-0 position-relative d-flex justify-content-end "
              data-aos="fade-right"
            >
              <img
                src={featureImg1}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-1 position-absolute">
                {whyHumzabaanArr.length > 0 && (
                  <h2 className="m-0 p-0 crunch-font text-center mb-lg-4 mb-2">
                    {whyHumzabaanArr[0].heading}
                  </h2>
                )}
                {whyHumzabaanArr.length > 0 && (
                  <p className="m-0 p-0 kiddo-font text-center">
                    {whyHumzabaanArr[0].description}
                  </p>
                )}
              </div>
            </div>
            <div
              className="col-lg-6 features-item m-0 p-0 ps-2 position-relative d-flex justify-content-start "
              data-aos="fade-left"
            >
              <img
                src={featureImg2}
                alt="feature image-1"
                className="feature-Img-2 m-0 p-0 "
              />
              <div className="content content-2 position-absolute">
                {whyHumzabaanArr.length > 0 && (
                  <h2 className="m-0 p-0 crunch-font text-center mb-lg-4 mb-0">
                    {whyHumzabaanArr[1].heading}
                  </h2>
                )}
                {whyHumzabaanArr.length > 0 && (
                  <p className="m-0 p-0 kiddo-font text-center">
                    {whyHumzabaanArr[1].description}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 mb-3 d-lg-flex d-none position-relative align-items-center justify-content-center ">
            <img
              src={featuresCenterMobile}
              alt=""
              className="features-center-mobile position-absolute m-0 p-0"
              data-aos="fade-right"
            />
          </div>
          <div className=" row m-0 p-0 mt-lg-5 justify-content-center">
            <div
              className="col-lg-6 features-item m-0 p-0 position-relative d-flex justify-content-end "
              data-aos="fade-right"
            >
              <img
                src={featureImg3}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-1 position-absolute">
                {whyHumzabaanArr.length > 0 && (
                  <h2 className="m-0 p-0 crunch-font text-center mb-lg-4 mb-2">
                    {whyHumzabaanArr[2].heading}
                  </h2>
                )}

                {whyHumzabaanArr.length > 0 && (
                  <p className="m-0 p-0 kiddo-font text-center">
                    {whyHumzabaanArr[2].description}
                  </p>
                )}
              </div>
            </div>
            <div
              className="col-lg-6 features-item m-0 p-0 ps-2 position-relative d-flex justify-content-start "
              data-aos="fade-left"
            >
              <img
                src={featureImg4}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-2 position-absolute">
                {whyHumzabaanArr.length > 0 && (
                  <h2 className="m-0 p-0 crunch-font text-center mb-lg-4 mb-2">
                    {whyHumzabaanArr[3].heading}
                  </h2>
                )}
                {whyHumzabaanArr.length > 0 && (
                  <p className="m-0 p-0 kiddo-font text-center">
                    {whyHumzabaanArr[3].description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="features-card row m-0 p-0 mt-lg-5 pb-lg-5 position-relative"
          id="features-card-section"
        >
          <div className="col-lg-6 card-item-1 d-flex justify-content-lg-end justify-content-center">
            <div className="card rounded-5" data-aos="fade-right">
              <div className="head row m-0 p-0 position-relative align-items-center justify-content-center">
                <img
                  src={featuresCardHead1}
                  alt=""
                  className="m-0 p-0"
                  style={{ height: "9rem" }}
                />
                <p className="kiddo-font m-0 p-0 fs-1 text-center position-absolute">
                  COURSES
                </p>
              </div>
              <div className="card-content row m-0 p-0 position-relative align-items-center justify-content-center">
                <img
                  src={featuresCardContent1}
                  alt=""
                  className="m-0 p-0"
                  style={{}}
                />
                <div className="content-list  row m-0 p-0 position-absolute justify-content-center align-items-center">
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-hover="Learning Alphabet"
                    >
                      <span>Learning Alphabet</span>
                    </p>

                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>

                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover  kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Alphabets Groups"
                    >
                      <span>Alphabets Groups</span>
                    </p>

                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover=" Understanding Shapes"
                    >
                      <span>Understanding Shapes</span>
                    </p>

                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Forming Words"
                    >
                      <span>Forming Words</span>
                    </p>

                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Learning Vowels"
                    >
                      <span>Learning Vowels</span>
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="w-auto mt-3">
                    <ButtonNew
                      content="LEARN MORE"
                      btnCtmBackground="radial-gradient(#ffd912 , #e5bd13)"
                      boxShadow="0px 4px #af900e"
                      lineBackground="#ffd912"
                      outerBtnBorder="1px solid #582c1a"
                      innerBtnBorder="2px dashed #582c1a"
                      lineUpperOverlayBg="#ffce00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 card-item-2 mt-lg-0 mt-4 d-flex justify-content-lg-start justify-content-center">
            <div className="card rounded-5" data-aos="fade-left">
              <div className="head row m-0 p-0 position-relative align-items-center justify-content-center">
                <img
                  src={featuresCardHead2}
                  alt=""
                  className="m-0 p-0"
                  style={{ height: "9rem" }}
                />
                <p className="kiddo-font m-0 p-0 fs-1 text-center position-absolute">
                  Features
                </p>
              </div>
              <div className="card-content row m-0 p-0 position-relative align-items-center justify-content-center">
                <img
                  src={featuresCardContent2}
                  alt=""
                  className="m-0 p-0"
                  style={{}}
                />
                <div className="content-list  row m-0 p-0 position-absolute justify-content-center align-items-center">
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-hover="Learning Alphabet"
                    >
                      <span>Learning Alphabet</span>
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover  kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Alphabets Groups"
                    >
                      <span>Alphabets Groups</span>
                    </p>

                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover=" Understanding Shapes"
                    >
                      <span>Understanding Shapes</span>
                    </p>

                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Forming Words"
                    >
                      <span>Forming Words</span>
                    </p>

                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="para-hover kiddo-font m-0 p-0 w-auto fs-2"
                      data-hover="Learning Vowels"
                    >
                      <span>Learning Vowels</span>
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="w-auto mt-3">
                    <ButtonNew
                      content="LEARN MORE"
                      btnCtmBackground="radial-gradient(#3e60f4 , #041ec8)"
                      boxShadow="0px 4px #00139e"
                      lineBackground="#3e60f4"
                      outerBtnBorder="1px solid #000d9c"
                      innerBtnBorder="2px dashed #fff"
                      lineUpperOverlayBg="#1d3ae2 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* <div
          className="features-card row m-0 p-0 mt-lg-5 pb-lg-5 position-relative"
          id="features-card-section"
        >
          <SliderFeatures/>
        </div> */}
      </div>
      <FeaturesModal />

      {/** ================= About-Urdu-section ==================  */}
      <section
        id="about-urdu-section"
        className="about-urdu row  m-0 p-0  ps-lg-0 ps-2 pe-lg-0 pe-2 pt-5 justify-content-center"
      >
        <div className="row col-lg-11 m-0 p-0 position-relative justify-content-center">
          <img
            src={aboutUrduBg}
            alt="About Urdu Background"
            className="about-urdu-bg d-xxl-flex d-none m-0 p-0 w-100"
          />
          <img
            src={aboutUrduBg1k}
            alt="About Urdu Background"
            className="about-urdu-bg d-lg-flex d-none d-xxl-none m-0 p-0 w-100"
          />
          <img
            src={aboutUrduBgMobile}
            alt=""
            className="about-urdu-bg d-lg-none d-flex m-0 p-0 w-100"
          />
          <img
            src={AboutUrduInk}
            alt=""
            className={`about-urdu-ink-img ${
              isIframeShow ? "about-urdu-ink-img-slide" : ""
            } m-0 p-0 position-absolute`}
          />

          <div className="about-urdu-content row col-11 m-0 p-0 position-absolute justify-content-center">
            <div
              className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center"
              data-aos="fade-left"
            >
              <img src={headingBg3} alt="heading-bg" className="m-0 p-0 " />
              <h1 className="m-0 p-0 position-absolute">ABOUT URDU</h1>
            </div>
            <p
              className="kiddo-font m-0 p-0 text-center mt-lg-4 fs-5"
              data-aos="fade-right"
            >
              Urdu, known for its soul-stirring poetry and profound literary
              heritage, serves as a beacon of cultural identity for millions
              worldwide. Originating from the Indo-Aryan lineage, Urdu's
              linguistic tapestry is woven with influences from Persian, Arabic,
              and Turkish, enriching its vocabulary with depth and diversity.
              Spoken predominantly in South Asia, notably in Pakistan and parts
              of India, Urdu's influence resonates deeply with diaspora
              communities across the globe, including in countries like the
              United Arab Emirates, United Kingdom, Saudi Arabia, United States,
              Canada, Australia, and South Africa.
            </p>
            <p
              className="kiddo-font m-0 p-0 text-center fs-2 mt-lg-5"
              data-aos="fade-left"
            >
              URDU FOR ALL
            </p>
            <p
              className="kiddo-font m-0 p-0 text-center fs-5"
              data-aos="fade-right"
            >
              With an estimated more than 100 million speakers worldwide, Urdu
              holds a prominent position in global linguistic diversity.
              Pakistan stands as its heartland, with around 70-80 million native
              speakers, while in India, it thrives alongside other regional
              languages, boasting approximately 50-60 million speakers. Beyond
              South Asia, countries like the United Arab Emirates and the United
              Kingdom host significant Urdu-speaking populations.
            </p>
            <div className="row m-0 p-0 justify-content-center align-items-center">
              <div
                className="sub-heading m-0 p-0 mt-lg-5 mb-lg-5 position-relative d-flex align-items-center justify-content-center"
                data-aos="fade-left"
              >
                <img src={headingSubBg} alt="heading-bg" className="m-0 p-0 " />
                <h1 className="kiddo-font m-0 p-0 position-absolute">
                  HISTORY OF URDU
                </h1>
              </div>

              <div className="history-urdu col-lg-5 m-0 p-0 d-flex align-content-end justify-content-lg-end justify-content-center ">
                <div
                  className="video-player position-relative d-flex justify-content-center align-items-center"
                  data-aos="fade-right"
                >
                  <img
                    src={VideoPlayerFrame}
                    alt="Video Player Frame"
                    className="ghalib-video-frame m-0 p-0 z-2"
                  />
                  {isIframeShow ? (
                    <iframe
                      className="urdu-iframe"
                      src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
                      title="YouTube video player"
                      frameborder="0"
                      allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={GhalibThumbNailVideo}
                        alt="video thumbnail"
                        className="ghalib-video-thumbnail m-0 p-0 position-absolute z-1"
                      />
                      <img
                        src={playBtn}
                        alt=""
                        className="m-0 p-0 position-absolute "
                        style={{ zIndex: "20", cursor: "pointer" }}
                        onClick={handlePlay}
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-6 m-0 p-0 ms-lg-5" data-aos="fade-left">
                <p className="kiddo-font m-0 p-0 text-center fs-5">
                  Urdu, originating in the 13th century in North India, emerged
                  as a linguistic synthesis of Persian, Arabic, Turkish, and
                  local dialects, initially known as "Rekhta." Flourishing
                  during the Mughal era, it served as a language of the courts
                  and cultural exchange among diverse communities. With the
                  patronage of Mughal rulers, Urdu evolved into a literary
                  language, fostering masterpieces of poetry, prose, and art.
                </p>
                <p className="kiddo-font m-0 p-0 text-center fs-5 mt-lg-5 mt-4">
                  During British colonial rule, it became a symbol of resistance
                  and cultural identity, propelling Urdu literature and
                  journalism movements. Partition in 1947 saw Urdu become the
                  official language of Pakistan, while Hindi became India's
                  language, marking a pivotal moment in Urdu's history. Despite
                  political divisions, Urdu retained its status as a unifying
                  force,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** ================= Testimonial-section ==================  */}
      <section
        id="testimonial-section"
        className="testimonial row m-0 p-0 pt-5  justify-content-center position-relative"
      >
        <div className="col-lg-11 m-0 p-0 mt-5 position-relative d-flex justify-content-center">
          <img
            src={testimonialFrame}
            alt="testimonial frame"
            className="testimonial-frame  m-0 p-0 "
          />
         
          <div className="testimonial-content row col-lg-10 m-0 p-0 position-absolute justify-content-center align-items-center ">
            <div
              className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center"
              data-aos="fade-left"
            >
              <img src={headingBg4} alt="heading-bg" className="m-0 p-0 " />
              <h1 className="m-0 p-0 position-absolute">TESTIMONIAL</h1>
            </div>
            <div
              className="testimonial-list row m-0 p-0 justify-content-center mt-4 d-lg-flex d-none"
              data-aos="fade-right"
            >
              {Array.isArray(testimonialArr) &&
                testimonialArr.map((item,index) => (
                  <div
                    className="testimonial-list-item col-lg-4 d-flex justify-content-end"
                    id={item._id}
                    key={index}
                  >
                    <div className="card m-0 p-0 p-4 rounded-3 justify-content-center align-items-center">
                      <div className="image rounded-circle m-0 p-0 overflow-hidden border border-3 d-flex justify-content-center align-items-end">
                        <img
                          src={item.image}
                          className="m-0 p-0 rounded-circle"
                          alt="profile-img"
                        />
                      </div>
                      <div className="sub-heading crunch-font m-0 p-0 mt-2 position-relative d-flex align-items-center justify-content-center">
                        <img
                          src={testimonialSubHeading}
                          alt="heading-bg"
                          className="m-0 p-0 "
                        />
                        <h2 className="m-0 p-0 position-absolute">
                          {item.name}
                        </h2>
                      </div>
                      <div className="rating row m-0 p-0 mt-2">
                        {[...Array(5)].map((_, index) => (
                          <img
                          key={index}
                            src={`${item.rating > index ? startFill : star}`}
                            alt=""
                            className="m-0 p-0  ps-1 w-auto"
                          />
                        ))}
                      </div>
                      <p className="review m-0 p-0 text-center kiddo-font col-10 mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div
              className="testimonial-list row d-lg-none d-flex m-0 p-0 justify-content-center mt-4 "
              data-aos="fade-left"
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  className: "swiper-pagination-top-spacing",
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper position-absolute"
              >
                {Array.isArray(testimonialArr) &&
                  testimonialArr.map((item,index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className="testimonial-list-item col-12 d-flex justify-content-center">
                        <div className="card m-0 p-0 p-4 rounded-3 justify-content-center align-items-center">
                          <div className="image rounded-circle m-0 p-0 overflow-hidden border border-3 d-flex justify-content-center align-items-end">
                            <img
                              src={item.image}
                              className="m-0 p-0 rounded-circle"
                              alt="profile-img"
                            />
                          </div>
                          <div className="sub-heading crunch-font m-0 p-0 mt-2 position-relative d-flex align-items-center justify-content-center">
                            <img
                              src={testimonialSubHeading}
                              alt="heading-bg"
                              className="m-0 p-0 "
                            />
                            <h2 className="m-0 p-0 position-absolute">
                              {item.name}
                            </h2>
                          </div>
                          <div className="rating row m-0 p-0 mt-2">
                            {[...Array(5)].map((_, index) => (
                              <img
                              key={index}
                                src={`${
                                  item.rating > index ? startFill : star
                                }`}
                                alt=""
                                className="m-0 p-0  ps-1 w-auto"
                              />
                            ))}
                          </div>
                          <p className="review m-0 p-0 text-center kiddo-font col-10 mt-4">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/** ================= Contact-us-section ==================  */}
      <section
        id="contact-us-section"
        className="contact-us row m-0 p-0 justify-content-center"
      >
        <div className="col-lg-11 m-0 p-0 mt-5 position-relative d-flex justify-content-center">
          <img
            src={contactUsFrame}
            alt="contact us frame"
            className="contact-us-frame m-0 p-0"
          />
          <div className="contact-content row col-lg-10 m-0 p-0 mt-5 position-absolute justify-content-center align-items-center ">
            <div
              className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center"
              data-aos="fade-left"
            >
              <img src={headingBg5} alt="heading-bg" className="m-0 p-0 " />
              <h1 className="m-0 p-0 position-absolute">CONTACT US</h1>
            </div>
            <div className="row m-0 p-0 w-100  justify-content-center">
              <div
                className="col-lg-6 m-0 p-0 d-flex justify-content-lg-end justify-content-center pt-lg-4 mt-lg-1"
                data-aos="fade-right"
              >
                <form
                  action=""
                  className="m-0 p-0 mt-lg-5 pt-lg-5 pt-4"
                  name="submit-to-google-sheet"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="m-0 p-3 mb-4 rounded-5 w-100"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    value={contactDetails.name}
                  />
                  <input
                    className="m-0 p-3 mb-4 rounded-5 w-100"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    value={contactDetails.email}
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="m-0 p-0 mb-4 rounded-5 w-100 p-3"
                    placeholder="Message"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    value={contactDetails.message}
                  ></textarea>
                  <div className="d-flex w-100 justify-content-center align-items-center">
                    {isSubmitingForm ? (
                      <div className="m-0 p-0 position-relative">
                        <ButtonNew
                          content="Sending..."
                          btnCtmBackground="radial-gradient(#C3D80A, #BED30A, #AFC50C, #98AD10, #8AA012)"
                          boxShadow="0px 4px #5b6404"
                          lineBackground="#dcf314"
                          outerBtnBorder="1px solid rgb(7, 90, 94)"
                          innerBtnBorder="2px dashed rgba(7, 90, 94, 1)"
                          lineUpperOverlayBg="#b3cb147e"
                        />
                      </div>
                    ) : (
                      <div onClick={handleSubmit}>
                        <ButtonNew
                          content="Submit"
                          btnCtmBackground="radial-gradient(#C3D80A, #BED30A, #AFC50C, #98AD10, #8AA012)"
                          boxShadow="0px 4px #5b6404"
                          lineBackground="#dcf314"
                          outerBtnBorder="1px solid rgb(7, 90, 94)"
                          innerBtnBorder="2px dashed rgba(7, 90, 94, 1)"
                          lineUpperOverlayBg="#b3cb147e"
                        />
                      </div>
                    )}
                  </div>
                </form>
                <div className="line d-lg-flex d-none"></div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-lg-start justify-content-center"
                data-aos="fade-left"
              >
                <div className="w-auto">
                  <img
                    src={ContactGhalib}
                    alt="ghalib img"
                    className="contact-ghalib-img m-0 p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** ================= Footer-section ==================  */}
      <Footer />
    </div>
  );
};

export default Home;
