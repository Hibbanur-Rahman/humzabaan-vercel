import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import curriculumHeading from "../assets/images/curriculum-heading.svg";
import courseImg1 from "../assets/images/curriculum-img-1.svg";
import courseImg2 from "../assets/images/curriculum-img-2.svg";
import courseImg3 from "../assets/images/curriculum-img-3.svg";
import courseImg4 from "../assets/images/curriculum-img-4.svg";
import courseImg5 from "../assets/images/curriculum-img-5.svg";
import courseImg6 from "../assets/images/curriculum-img-6.svg";
import courseImg7 from "../assets/images/curriculum-img-7.svg";
import courseImg8 from "../assets/images/curriculum-img-8.svg";
import courseImg9 from "../assets/images/curriculum-img-9.svg";
import courseImg10 from "../assets/images/curriculum-img-10.svg";
import courseImg11 from "../assets/images/curriculum-img-11.svg";
const Curriculum = () => {
  return (
    <div className="row m-0 p-0 flex-column bg-white align-items-center overflow-x-hidden">
      <Navbar />
      <div
        className="curriculum col-10 d-flex flex-column justify-content-center align-items-center"
        style={{ marginBottom: "10rem" }}
      >
        <img
          src={curriculumHeading}
          className="curriculum-heading m-0 p-0 mt-5"
        />
        <p className="curriculum-heading-para col-7 text-center mt-3">
          Explore our catalog for Urdu courses, designed to help beginners learn
          essential vocabulary, grammar, and conversational skills.
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center col-8">
          <div className="circle-wrapper d-flex justify-content-start w-100">
            <div className="d-flex gap-3 align-items-center">
              <div className="circle-item p-3 d-flex align-items-center justify-content-center">
                <div className="inner-circle p-3">
                  <img src={courseImg1} alt="" />
                </div>
              </div>
              <div className="">
                <p className="righteous-regular m-0 p-0 fs-3">Abjad</p>
                <p className="roboto-medium m-0 p-0 fs-5 chapter-name-para-2">
                  Learning Alphabets
                </p>
                <p className="roboto-regular m-0 p-0">Duration: 1hr</p>
                <p className="roboto-regular m-0 p-0">30 Sub-courses</p>
              </div>
            </div>
          </div>
          <div className="line-connection"></div>
          <div className="circle-wrapper d-flex justify-content-end w-100 ">
            <div className="d-flex gap-3 align-items-center">
              <div className="">
                <p className="righteous-regular m-0 p-0 fs-3">Abjad</p>
                <p className="roboto-medium m-0 p-0 fs-5 chapter-name-para-2">
                  Learning Alphabets
                </p>
                <p className="roboto-regular m-0 p-0">Duration: 1hr</p>
                <p className="roboto-regular m-0 p-0">30 Sub-courses</p>
              </div>
              <div className="circle-item p-3 d-flex align-items-center justify-content-center">
                <div className="inner-circle p-3">
                  <img src={courseImg2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="line-connection-right"></div>
          <div className="circle-wrapper d-flex justify-content-start w-100 ">
            <div className="d-flex gap-3 align-items-center">
              <div className="circle-item p-3 d-flex align-items-center justify-content-center">
                <div className="inner-circle p-3">
                  <img src={courseImg3} alt="" />
                </div>
              </div>
              <div className="">
                <p className="righteous-regular m-0 p-0 fs-3">Abjad</p>
                <p className="roboto-medium m-0 p-0 fs-5 chapter-name-para-2">
                  Learning Alphabets
                </p>
                <p className="roboto-regular m-0 p-0">Duration: 1hr</p>
                <p className="roboto-regular m-0 p-0">30 Sub-courses</p>
              </div>
            </div>
          </div>
          <div className="line-connection"></div>
          <div className="circle-wrapper d-flex justify-content-end w-100 ">
            <div className="d-flex gap-3 align-items-center">
              <div className="">
                <p className="righteous-regular m-0 p-0 fs-3">Abjad</p>
                <p className="roboto-medium m-0 p-0 fs-5 chapter-name-para-2">
                  Learning Alphabets
                </p>
                <p className="roboto-regular m-0 p-0">Duration: 1hr</p>
                <p className="roboto-regular m-0 p-0">30 Sub-courses</p>
              </div>
              <div className="circle-item p-3 d-flex align-items-center justify-content-center">
                <div className="inner-circle p-3">
                  <img src={courseImg4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="line-connection-right"></div>
          <div className="circle-wrapper d-flex justify-content-start w-100 ">
            <div className="d-flex gap-3 align-items-center">
              <div className="circle-item p-3 d-flex align-items-center justify-content-center">
                <div className="inner-circle p-3">
                  <img src={courseImg5} alt="" />
                </div>
              </div>
              <div className="">
                <p className="righteous-regular m-0 p-0 fs-3">Abjad</p>
                <p className="roboto-medium m-0 p-0 fs-5 chapter-name-para-2">
                  Learning Alphabets
                </p>
                <p className="roboto-regular m-0 p-0">Duration: 1hr</p>
                <p className="roboto-regular m-0 p-0">30 Sub-courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Curriculum;
