import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Features = () => {
  return (
    <div className="row m-0 p-0 flex-column bg-white align-items-center overflow-x-hidden">
      <Navbar />
      <div
        className="curriculum col-10 d-flex flex-column justify-content-center align-items-center"
        style={{ marginBottom: "10rem" }}
      ></div>
      <Footer />
    </div>
  );
};

export default Features;
