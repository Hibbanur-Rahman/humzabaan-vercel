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
import HeadingImg from "../../assets/images/features-heading.svg";
import sliderBg from "../../assets/images/features-slider-bg.svg";
import featuresVideoThumbnail from "../../assets/images/features-video-thumbnail.png";
import VideoPlayBtn from "../../assets/images/play-btn.svg";
import FeaturesSlideLine from "../../assets/images/features-thumbnail-line.svg";
import historySliderBorder from "../../assets/images/history-slider-border.svg";
import historySliderThumbnail from "../../assets/images/history-slider-thumbnail.svg";
import iframeBorder from '../../assets/images/slides-iframe-border.svg';

const HistorySlider = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  return (
    <div className="history-slider m-0 p-0">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // autoplay={true}
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
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative d-flex align-items-center justify-content-center history-slide m-0 p-0">
            <img
              src={historySliderBorder}
              alt=""
              className="history-slider-bg-img relative m-0 p-0"
            />
            <div className="position-absolute d-flex flex-column align-items-center justify-content-center history-slide-bg m-0 p-0">
              {videoPlay ? (
                <div className="mt-4 mt-md-4 d-flex align-items-center justify-content-center">
                  <img src={iframeBorder} alt="" className="history-iframe-border position-absolute" />
                  <iframe
                    className="history-urdu-iframe position-relative "
                    src="https://www.youtube.com/embed/tq_b_HkixEY?si=L_wM3uXYb-_8mcOd"
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
                    src={historySliderThumbnail}
                    alt=""
                    className="history-thumbnail-img"
                  />
                  <img
                    src={VideoPlayBtn}
                    alt=""
                    className="position-absolute history-play-btn"
                    onClick={() => setVideoPlay(true)}
                  />
                </div>
              )}

              <p className={`${videoPlay?'mt-2':''}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore
              </p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HistorySlider;
