import React, { useRef, useState } from "react";
import Button from "../buttonNew";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required module
import { Autoplay, Pagination } from "swiper/modules";

import HeadingImg from "../../assets/images/features-heading.svg";
import sliderBg from "../../assets/images/features-slider-bg.svg";
import featuresVideoThumbnail from "../../assets/images/features-video-thumbnail.png";
import VideoPlayBtn from "../../assets/images/play-btn.svg";
import FeaturesSlideLine from "../../assets/images/features-thumbnail-line.svg";
export default function App() {
  const [videoPlayId, setVideoPlayId] = useState(null);
  const [sliderArr, setSliderArr] = useState([
    {
      id: 1,
      videoLink: "https://www.youtube.com/embed/ZkuZKBEj6Xw",
      thumbnail: "https://i.ytimg.com/vi/ZkuZKBEj6Xw/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 2,
      videoLink: "https://www.youtube.com/embed/dchR13x2B6w",
      thumbnail: "https://i.ytimg.com/vi/dchR13x2B6w/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 3,
      videoLink: "https://www.youtube.com/embed/6tlgJlYyV80",
      thumbnail: "https://i.ytimg.com/vi/6tlgJlYyV80/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 4,
      videoLink: "https://www.youtube.com/embed/D-JMAYtVRLo",
      thumbnail: "https://i.ytimg.com/vi/D-JMAYtVRLo/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 5,
      videoLink: "https://www.youtube.com/embed/i2qMoy93mDc",
      thumbnail: "https://i.ytimg.com/vi/i2qMoy93mDc/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 6,
      videoLink: "https://www.youtube.com/embed/ytdsbjrdMG4",
      thumbnail: "https://i.ytimg.com/vi/ytdsbjrdMG4/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
  ]);
  return (
    <div className="w-100 d-flex justify-content-center align-items-center p-5">
      <div className="features-slider-wrapper col-lg-11  pt-5">
        <div className="heading w-100 d-flex justify-content-center align-items-center">
          <img src={HeadingImg} alt="" className="tutorial-heading" />
          <h1 className="position-absolute">Tutorial</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={true}
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1, // Show one slide for devices with width 0px and above
              spaceBetween: 0, // Adjust spacing for smaller screens
            },
            768: {
              slidesPerView: 1, // Show two slides for devices with width 768px and above
              // spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // Default configuration for devices with width 1024px and above
              spaceBetween: 20,
            },
          }}
          className="features-Swiper"
        >
          {Array.isArray(sliderArr) &&
            sliderArr.length > 0 &&
            sliderArr.map((item) => (
              <SwiperSlide>
                <div className="position-relative d-flex align-items-center justify-content-center features-slide">
                  <img src={sliderBg} alt="" className="slider-bg-img" />
                  <div className="position-absolute d-flex flex-column align-items-center justify-content-center">
                    {videoPlayId === item?.id ? (
                      <div className=" thumbnail-section d-flex flex-column align-items-center justify-content-center">
                        {/* <img
                          src={iframeBorder}
                          alt=""
                          className="history-iframe-border position-absolute"
                        /> */}
                        <iframe
                          className="features-video-iframe position-relative "
                          src={item?.videoLink}
                          title="YouTube video player"
                          frameborder="0"
                          allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                        <img
                          src={FeaturesSlideLine}
                          alt=""
                          className="m-0 p-0"
                        />
                      </div>
                    ) : (
                      <div className="thumbnail-section d-flex flex-column align-items-center justify-content-center">
                        <div className="overflow-hidden features-video-thumbnail-img">
                          <img
                            src={item?.thumbnail || featuresVideoThumbnail}
                            alt=""
                            className=" m-0 p-0 h-100 w-100"
                          />
                        </div>
                        <img
                          src={VideoPlayBtn}
                          alt=""
                          className="video-play-btn position-absolute"
                          onClick={() => setVideoPlayId(item?.id)}
                        />
                        <img
                          src={FeaturesSlideLine}
                          alt=""
                          className="m-0 p-0"
                        />
                      </div>
                    )}
                    <p className="col-9 text-center text-black my-2 kiddo-font">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore
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
            ))}
        </Swiper>
      </div>
    </div>
  );
}
