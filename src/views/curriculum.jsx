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
import Aos from "aos";
// Course data array
const courseData = [
  {
    img: courseImg1,
    title: "Abjad",
    subtitle: "Learning Alphabets",
    duration: "1hr",
    subCourses: "38 Sub-courses",
  },
  {
    img: courseImg2,
    title: "Huroof",
    subtitle: "Alphabet Groups",
    duration: "1hr",
    subCourses: "16 Sub-courses",
  },
  {
    img: courseImg3,
    title: "Shakl",
    subtitle: "Understanding",
    duration: "1hr",
    subCourses: "16 Sub-courses",
  },
  {
    img: courseImg4,
    title: "Aaraab",
    subtitle: "Understanding Symbols",
    duration: "1hr",
    subCourses: "10 Sub-courses",
  },
  {
    img: courseImg5,
    title: "Alfaaz",
    subtitle: "Forming Words",
    duration: "1hr",
    subCourses: "4 Sub-courses",
  },
  {
    img: courseImg6,
    title: "Aadaad",
    subtitle: "Identify Numerals",
    duration: "1hr",
    subCourses: "10 Sub-courses",
  },
  {
    img: courseImg7,
    title: "Hum Log",
    subtitle: "About Us",
    duration: "1hr",
    subCourses: "5 Sub-courses",
  },
  {
    img: courseImg8,
    title: "Zamaan O Makaan",
    subtitle: "Time and Place",
    duration: "1hr",
    subCourses: "5 Sub-courses",
  },
  {
    img: courseImg9,
    title: "Jazbaat O Harkaat",
    subtitle: "Feelings & Actions",
    duration: "1hr",
    subCourses: "4 Sub-courses",
  },
  {
    img: courseImg10,
    title: "Qurb O Janvaar",
    subtitle: "Around Us",
    duration: "1hr",
    subCourses: "5 Sub-courses",
  },
  {
    img: courseImg11,
    title: "Roz Marra",
    subtitle: "Social Habits",
    duration: "1hr",
    subCourses: "6 Sub-courses",
  },
  // Add more courses here...
];

// Reusable CourseItem Component
const CourseItem = ({
  img,
  title,
  subtitle,
  duration,
  subCourses,
  alignRight,
}) => (
  <div
    className={`circle-wrapper d-flex justify-content-${
      alignRight ? "end" : "start"
    } w-100 align-items-center`}
    data-aos={alignRight?'fade-left':'fade-right'}
  >
    <div className="d-flex gap-3 align-items-center">
      {!alignRight && (
        <div className="circle-item p-3 d-flex align-items-center justify-content-center">
          <div className="inner-circle p-3 overflow-hidden">
            <img src={img} alt={title} />
          </div>
        </div>
      )}
      <div>
        <p className={`righteous-regular m-0 p-0 fs-3 ${alignRight?'text-end':''}`}>{title}</p>
        <p className={`roboto-medium m-0 p-0 fs-5 chapter-name-para-2  ${alignRight?'text-end':''}`}>
          {subtitle}
        </p>
        <p className={`roboto-regular m-0 p-0  ${alignRight?'text-end':''}`}>Duration: {duration}</p>
        <p className={`roboto-regular m-0 p-0  ${alignRight?'text-end':''}`}>{subCourses}</p>
      </div>
      {alignRight && (
        <div className="circle-item p-3 d-flex align-items-center justify-content-center">
          <div className="inner-circle p-3 overflow-hidden">
            <img src={img} alt={title} />
          </div>
        </div>
      )}
    </div>
  </div>
);

// Main Curriculum Component
const Curriculum = () => {
  Aos.init();
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
          alt="Curriculum Heading"
        />
        <p className="curriculum-heading-para col-7 text-center mt-3">
          Explore our catalog for Urdu courses, designed to help beginners learn
          essential vocabulary, grammar, and conversational skills.
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center col-8">
          {courseData.map((course, index) => (
            <React.Fragment key={index}>
              <CourseItem
                img={course.img}
                title={course.title}
                subtitle={course.subtitle}
                duration={course.duration}
                subCourses={course.subCourses}
                alignRight={index % 2 !== 0}
              />
              {index < courseData.length - 1 && (
                <div
                  className={
                    index % 2 === 0
                      ? "line-connection"
                      : "line-connection-right"
                  }
                 
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Curriculum;
