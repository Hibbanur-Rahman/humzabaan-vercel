import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import featuresHeadingText from '../assets/images/Features-tab-heading-text.png'
import featuresImg1 from "../assets/images/features-img-tab-1.png";
import featuresImg2 from "../assets/images/features-img-tab-2.png";
import featuresImg3 from "../assets/images/features-img-tab-3.png";
const Features = () => {
  return (
    //features heading
    <div className="row m-0 p-0 flex-column bg-white align-items-center overflow-x-hidden">
      <Navbar />
      <div
        className="features-tab col-10 d-flex flex-column justify-content-center align-items-center"
        style={{ marginBottom: "10rem" }}
      >
        <img src={featuresHeadingText} alt="" className="features-heading-text" />
        <div className="row m-0 p-0 features-tab-row align-items-center">
          <div className="col-md-6 col-12">
            <h1>Courses</h1>
            <p>
              From Basics to Advanced, learn Urdu step by step through
              interactive courses.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <img src={featuresImg1} alt="features" />
          </div>
        </div>
        <div className="row m-0 p-0 features-tab-row align-items-center flex-row-reverse">
          <div className="col-md-6 col-12">
            <h1>Dictionary</h1>
            <p>
              A comprehensive dictionary powered by Oxford languages is embedded
              within the app and across the learning journeys.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <img src={featuresImg2} alt="features" />
          </div>
        </div>
        <div className="row m-0 p-0 features-tab-row align-items-center">
          <div className="col-md-6 col-12">
            <h1>History of Urdu</h1>
            <p>
              Presenting the rich history of Urdu Language from it’s origin and
              evolution to the future.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <img src={featuresImg3} alt="features" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
