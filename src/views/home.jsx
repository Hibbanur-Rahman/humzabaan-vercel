import Navbar from "../components/navbar";
import heroImg from "../assets/images/hero-img.png";
import heroAnimation from "../assets/images/hero-animation.png";
import welcomeUrdu from "../assets/images/welcome-urdu-text.svg";
import headingBg1 from "../assets/images/heading-bg.svg";
import headingBg2 from "../assets/images/heading-bg-2.svg";
import headingBg3 from "../assets/images/heading-bg-3.svg";
import headingSubBg from "../assets/images/heading-sub-bg.svg";
import videoFrame from "../assets/images/video-frame.svg";
import playBtn from "../assets/images/play-btn.svg";
import teacherGif from "../assets/images/teacher-img.gif";
import teacherVideoThumbnail from "../assets/images/teacher-video-thumbnail.svg";
import mobileGif from "../assets/images/mobile-gif.gif";
import Button from "../components/button";
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
import VideoPlayerFrame from '../assets/images/video-player-frame.svg';
import GhalibThumbNailVideo from '../assets/images/ghalib-thumbnail-video.svg';
import AboutUrduInk from '../assets/images/about-urdu-ink.svg';
const Home = () => {
  return (
    <div className="row m-0 p-0 overflow-hidden">
      {/** ================= Navbar-section ==================  */}
      <Navbar />

      {/** ================= Hero-section ==================  */}
      <div className="hero-section row m-0 p-0 position-relative">
        <img src={heroImg} alt="" className="m-0 p-0" />
        <div className="hero-animation w-100  d-flex m-0 p-0  position-relative">
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
      </div>

      {/** ================= Welcome-section ==================  */}
      <section className="welcome-section row m-0 p-0 justify-content-center position-relative">
        <div className="col-10 d-flex align-items-center justify-content-center m-0 p-0 flex-column">
          <img
            src={welcomeUrdu}
            alt=""
            className="m-0 p-0"
            style={{ height: "auto", width: "17rem" }}
          />
          <p className="khush-aamdeed-text text-light fs-1 m-0 p-0 text-center">
            Khush Aamdeed !
          </p>
          <div className="heading m-0 p-0 mt-4 position-relative d-flex align-items-center justify-content-center">
            <img src={headingBg1} alt="heading-bg" className="m-0 p-0 " />
            <h1 className="m-0 p-0 position-absolute">WELCOME TO HUMZABAAN</h1>
          </div>
        </div>
      </section>

      {/** ================= Who-we-are-section ==================  */}
      <div className="who-we-are-section row m-0 p-0 pt-3 justify-content-center">
        <p className="heading-p m-0 p-0 mt-5 text-center fs-1">WHO WE ARE</p>
        <div className="row col-10 m-0 p-0 z-2 justify-content-center">
          <div className="who-we-are-right col-6 m-0 p-3 d-flex flex-column justify-content-center">
            <p className="m-0 p-0 text-light kiddo-font text-center">
              Welcome to Humzabaan – your ultimate destination for delving into
              the enchanting world of Urdu! We're passionate about merging the
              timeless essence of Urdu with cutting-edge technology to offer you
              an unparalleled learning experience tailored to your unique
              journey. ​
            </p>
            <p className="m-0 p-0 mt-4 text-light kiddo-font text-center">
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
            className="col-6 m-0 p-3 d-flex align-items-center  position-relative"
            style={{ maxWidth: "fit-content" }}
          >
            <div className="video-frame m-0 p-0 w-auto d-flex justify-content-center align-items-center position-relative">
              <img
                src={videoFrame}
                alt="video frame"
                className="m-0 p-0 z-2"
                style={{ height: "400px", width: "400px" }}
              />
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
              />
              <img
                src={teacherGif}
                alt=""
                className="teacher-gif m-0 p-0 position-absolute z-3"
              />
            </div>
          </div>
        </div>
        <div className="mobile row m-0 p-0 col-10 position-relative z-5 justify-content-between">
          <div className="col-5 m-0 p-0 position-relative d-flex justify-content-end align-items-center">
            <img
              src={mobileGif}
              alt=""
              className="m-0 p-0 position-absolute w-auto"
              style={{ height: "400px", zIndex: "6" }}
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-end align-baseline">
            <div className="" style={{ width: "15rem" }}>
              <PlayStoreBtn
                logo={playStoreLogo}
                para="GET IT ON"
                head="GOOGLE PLAY"
              />
            </div>
            <div className="mt-4 " style={{ width: "15rem" }}>
              <PlayStoreBtn
                logo={appleLogo}
                para="DOWNLOAD ON THE"
                head="APP STORE"
              />
            </div>
          </div>
        </div>
      </div>

      {/** ================= Why-humzabaan-section ==================  */}
      <div className="why-humzabaan-section row m-0 p-0 justify-content-center">
        <div className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center">
          <img src={headingBg2} alt="heading-bg" className="m-0 p-0 " />
          <h1 className="m-0 p-0 position-absolute">WHY HUMZABAAN ?</h1>
        </div>
        <div className="features col-10 m-0 p-0 mt-5">
          <div className=" row m-0 p-0">
            <div className="col-6 m-0 p-0 position-relative d-flex justify-content-end">
              <img
                src={featureImg1}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-1 position-absolute">
                <h2 className="m-0 p-0 crunch-font text-center mb-4">
                  HISTORY OF URDU
                </h2>
                <p className="m-0 p-0 kiddo-font text-center">
                  Urdu, originating in the 13th century in North India, emerged
                  as a linguistic synthesis of Persian, Arabic, Turkish, and
                  local dialects, initially known as "Rekhta." Flourishing
                  during the Mughal era, it served as a language of the courts
                  and cultural exchange 
                </p>
              </div>
            </div>
            <div className="col-6 m-0 p-0 ps-2 position-relative d-flex justify-content-start">
              <img
                src={featureImg2}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-2 position-absolute">
                <h2 className="m-0 p-0 crunch-font text-center mb-4">
                  COURSES / QUIZ
                </h2>
                <p className="m-0 p-0 kiddo-font text-center">
                  Initially tailored for beginners starting their Urdu journey
                  from scratch, our courses at Humzabaan are designed to
                  gradually introduce foundational concepts. As we progress, we
                  aim to expand our offerings to accommodate the needs of more
                  advanced learners with additional levels.Each course is
                  complemented by quizzes, enriching the learning experience 
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 mb-3 position-relative align-items-center justify-content-center">
            <img
              src={featuresCenterMobile}
              alt=""
              className="features-center-mobile position-absolute m-0 p-0"
            />
          </div>
          <div className=" row m-0 p-0 mt-5">
            <div className="col-6 m-0 p-0 position-relative d-flex justify-content-end">
              <img
                src={featureImg3}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-1 position-absolute">
                <h2 className="m-0 p-0 crunch-font text-center mb-4">
                  DICTIONARY
                </h2>
                <p className="m-0 p-0 kiddo-font text-center">
                  Humzabaan aap is your all-in-one dictionary app for Hindi,
                  Urdu, and English. Search for words by typing, speaking, or
                  scanning text. Definitions include audio pronunciations and
                  additional helpful features like example sentences, synonyms,
                  antonyms, and a favorites list.
                </p>
              </div>
            </div>
            <div className="col-6 m-0 p-0 ps-2 position-relative d-flex justify-content-start">
              <img
                src={featureImg4}
                alt="feature image-1"
                className="m-0 p-0 "
              />
              <div className="content content-2 position-absolute">
                <h2 className="m-0 p-0 crunch-font text-center mb-4">
                  LITERATURE
                </h2>
                <p className="m-0 p-0 kiddo-font text-center">
                  Humzabaan app is more than just mastering the alphabet, words,
                  and numbers; we delve deeper to make your Urdu learning
                  journey engaging and immersive. That's where literature comes
                  in. We believe that by blending technology with literature,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card row m-0 p-0 mt-5 pb-5 position-relative">
          <div className="col-6 card-item-1 d-flex justify-content-end">
            <div className="card rounded-5">
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
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Learning Alphabet
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Alphabets Groups
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Understanding Shapes
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Forming Words
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Learning Vowels
                    </p>
                    <img
                      src={featuresContentList1}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="w-auto mt-3">
                    <Button content="LEARN MORE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 card-item-2 d-flex justify-content-start">
            <div className="card rounded-5">
              <div className="head row m-0 p-0 position-relative align-items-center justify-content-center">
                <img
                  src={featuresCardHead2}
                  alt=""
                  className="m-0 p-0"
                  style={{ height: "9rem" }}
                />
                <p className="kiddo-font m-0 p-0 fs-1 text-center position-absolute">
                  DICTIONARY
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
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Learning Alphabet
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Alphabets Groups
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Understanding Shapes
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Forming Words
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="list-item row m-0 p-0 mb-1 position-relative align-items-center justify-content-center">
                    <p className="kiddo-font m-0 p-0 w-auto fs-2">
                      Learning Vowels
                    </p>
                    <img
                      src={featuresContentList2}
                      alt=""
                      className="m-0 p-0"
                      style={{ height: "0.6rem", width: "80%" }}
                    />
                  </div>
                  <div className="w-auto mt-3">
                    <Button content="LEARN MORE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** ================= About-Urdu-section ==================  */}
      <section className="about-urdu row  m-0 p-0 pt-5 justify-content-center">
        <div className="row col-11 m-0 p-0 position-relative justify-content-center">
          <img src={aboutUrduBg} alt="" className="about-urdu-bg m-0 p-0 w-100" />
          <img src={AboutUrduInk} alt="" className="about-urdu-ink-img m-0 p-0 position-absolute" />

          <div className="about-urdu-content row col-11 m-0 p-0 position-absolute justify-content-center">
            <div className="heading m-0 p-0 mt-5 position-relative d-flex align-items-center justify-content-center">
              <img src={headingBg3} alt="heading-bg" className="m-0 p-0 " />
              <h1 className="m-0 p-0 position-absolute">ABOUT URDU</h1>
            </div>
            <p className="kiddo-font m-0 p-0 text-center mt-4 fs-5">
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
            <p className="kiddo-font m-0 p-0 text-center fs-2 mt-5">
              URDU FOR ALL
            </p>
            <p className="kiddo-font m-0 p-0 text-center fs-5">
              With an estimated more than 100 million speakers worldwide, Urdu
              holds a prominent position in global linguistic diversity.
              Pakistan stands as its heartland, with around 70-80 million native
              speakers, while in India, it thrives alongside other regional
              languages, boasting approximately 50-60 million speakers. Beyond
              South Asia, countries like the United Arab Emirates and the United
              Kingdom host significant Urdu-speaking populations.
            </p>
            <div className="row m-0 p-0 justify-content-center align-items-center">
              <div className="sub-heading m-0 p-0 mt-5 mb-5 position-relative d-flex align-items-center justify-content-center">
                <img src={headingSubBg} alt="heading-bg" className="m-0 p-0 " />
                <h1 className="kiddo-font m-0 p-0 position-absolute">
                  HISTORY OF URDU
                </h1>
              </div>

              <div className="col-5 m-0 p-0 d-flex align-content-end justify-content-end">
                  <div className="video-player position-relative d-flex justify-content-center align-items-center">
                    <img src={VideoPlayerFrame} alt="Video Player Frame" className="m-0 p-0 z-3" />
                    <img src={GhalibThumbNailVideo} alt="video thumbnail" className="m-0 p-0 position-absolute z-1"/>
                    <img src={playBtn} alt="" className="m-0 p-0 position-absolute " style={{zIndex:'7',cursor:'pointer'}} />
                  </div>
              </div>
              <div className="col-6 m-0 p-0 ms-5">
                <p className="kiddo-font m-0 p-0 text-center fs-5">
                  Urdu, originating in the 13th century in North India, emerged
                  as a linguistic synthesis of Persian, Arabic, Turkish, and
                  local dialects, initially known as "Rekhta." Flourishing
                  during the Mughal era, it served as a language of the courts
                  and cultural exchange among diverse communities. With the
                  patronage of Mughal rulers, Urdu evolved into a literary
                  language, fostering masterpieces of poetry, prose, and art.
                </p>
                <p className="kiddo-font m-0 p-0 text-center fs-5 mt-5">
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

    </div>
  );
};

export default Home;
