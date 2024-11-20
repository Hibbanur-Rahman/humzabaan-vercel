import React, { useRef, useState } from "react";
import Button from "../buttonNew";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import HeadingImg from "../../assets/images/features-heading.svg";
import sliderBg from "../../assets/images/features-slider-bg.svg";
import featuresVideoThumbnail from "../../assets/images/features-video-thumbnail.png";
import VideoPlayBtn from "../../assets/images/play-btn.svg";
import FeaturesSlideLine from "../../assets/images/features-thumbnail-line.svg";
export default function App() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center p-5">
      <div className="features-slider-wrapper col-lg-11  pt-5">
        <div className="heading w-100 d-flex justify-content-center align-items-center">
          <img src={HeadingImg} alt="" />
          <h1 className="position-absolute">Heading</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          loop={true}
          modules={[Pagination,Autoplay]}
          className="features-Swiper"
        >
          <SwiperSlide>
            <div className="position-relative d-flex align-items-center justify-content-center features-slide">
              <img src={sliderBg} alt="" className="slider-bg-img" />
              <div className="position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="thumbnail-section d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={featuresVideoThumbnail}
                    alt=""
                    className="features-video-thumbnail-img m-0 p-0"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="video-play-btn position-absolute"
                  />
                  <img src={FeaturesSlideLine} alt="" className="m-0 p-0" />
                </div>
                <p className="col-9 text-center text-black my-2 kiddo-font">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
                <div className="w-auto mt-3">
                  <Button
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative d-flex align-items-center justify-content-center features-slide">
              <img src={sliderBg} alt="" className="slider-bg-img" />
              <div className="position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="thumbnail-section d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={featuresVideoThumbnail}
                    alt=""
                    className="features-video-thumbnail-img m-0 p-0"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="video-play-btn position-absolute"
                  />
                  <img src={FeaturesSlideLine} alt="" className="m-0 p-0" />
                </div>
                <p className="col-9 text-center text-black my-2 kiddo-font">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
                <div className="w-auto mt-3">
                  <Button
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative d-flex align-items-center justify-content-center features-slide">
              <img src={sliderBg} alt="" className="slider-bg-img" />
              <div className="position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="thumbnail-section d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={featuresVideoThumbnail}
                    alt=""
                    className="features-video-thumbnail-img m-0 p-0"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="video-play-btn position-absolute"
                  />
                  <img src={FeaturesSlideLine} alt="" className="m-0 p-0" />
                </div>
                <p className="col-9 text-center text-black my-2 kiddo-font">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
                <div className="w-auto mt-3">
                  <Button
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative d-flex align-items-center justify-content-center features-slide">
              <img src={sliderBg} alt="" className="slider-bg-img" />
              <div className="position-absolute d-flex flex-column align-items-center justify-content-center">
                <div className="thumbnail-section d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={featuresVideoThumbnail}
                    alt=""
                    className="features-video-thumbnail-img m-0 p-0"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="video-play-btn position-absolute"
                  />
                  <img src={FeaturesSlideLine} alt="" className="m-0 p-0" />
                </div>
                <p className="col-9 text-center text-black my-2 kiddo-font">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore
                </p>
                <div className="w-auto mt-3">
                  <Button
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
