import React, { useState } from "react";
import Button from "../buttonNew";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

// import required module
import { Autoplay, Pagination } from "swiper/modules";

import VideoPlayBtn from "../../assets/images/play-btn.svg";
import historySliderBorder from "../../assets/images/history-slider-border.svg";
import historySliderThumbnail from "../../assets/images/history-slider-thumbnail.svg";
import iframeBorder from "../../assets/images/slides-iframe-border.svg";

const HistorySlider = () => {
  const [videoPlayId, setVideoPlayId] = useState(null);
  const [historySliderArr, setHistorySliderArr] = useState([
    {
      id: 1,
      videoLink:
        "https://www.youtube.com/embed/YeJ7AiGeoZc?si=1lt8liYFMYmVyraT",
      thumbnail: "https://i.ytimg.com/vi/YeJ7AiGeoZc/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 2,
      videoLink:
        "https://www.youtube.com/embed/ZjhWV-s35zg?si=NdXRzik6l6wpG4Fs",
      thumbnail: "https://i.ytimg.com/vi/ZjhWV-s35zg/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 3,
      videoLink:
        "https://www.youtube.com/embed/KsKQH8XmWrI?si=O51yuWkmOr0PiVk4",
      thumbnail: "https://i.ytimg.com/vi/KsKQH8XmWrI/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 4,
      videoLink:
        "https://www.youtube.com/embed/8Pj3Dta5XgQ?si=FHaua12iCppZdAKo",
      thumbnail: "https://i.ytimg.com/vi/8Pj3Dta5XgQ/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 5,
      videoLink:
        "https://www.youtube.com/embed/4BG0OvgnHuQ?si=vo0DbiDpiS0a25W4",
      thumbnail: "https://i.ytimg.com/vi/4BG0OvgnHuQ/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
    {
      id: 6,
      videoLink:
        "https://www.youtube.com/embed/4ryZkia5CpY?si=2kGvfnRskd7aNjax",
      thumbnail: "https://i.ytimg.com/vi/4ryZkia5CpY/sddefault.jpg",
      desc: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore`,
    },
  ]);
  return (
    <div className="history-slider m-0 p-0">
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
        className="history-swiper"
      >
        {Array.isArray(historySliderArr) &&
          historySliderArr.length > 0 &&
          historySliderArr.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
                <img
                  src={historySliderBorder}
                  alt=""
                  className="history-slider-bg-img relative m-0 p-0"
                />
                <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
                  {videoPlayId === item?.id ? (
                    <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                      <img
                        src={iframeBorder}
                        alt=""
                        className="history-iframe-border position-absolute"
                      />
                      <iframe
                        className="history-urdu-iframe position-relative "
                        src={item?.videoLink}
                        title="YouTube video player"
                        frameborder="0"
                        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="m-0 p-0 mt-4 mt-md-4 relative d-flex align-items-center justify-content-center">
                      <img
                        src={iframeBorder}
                        alt=""
                        className="history-iframe-border-youtube position-absolute"
                      />
                      <div className="history-thumbnail-img overflow-hidden">
                        <img
                          src={item?.thumbnail || historySliderThumbnail}
                          alt=""
                          className="h-100 w-100 "
                        />
                      </div>
                      <img
                        src={VideoPlayBtn}
                        alt=""
                        className="position-absolute history-play-btn"
                        onClick={() => setVideoPlayId(item?.id)}
                      />
                    </div>
                  )}

                  <p className={`${videoPlayId === item?.id ? "mt-2" : "mt-1"}`}>
                    {item?.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HistorySlider;
