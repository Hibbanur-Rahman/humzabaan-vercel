import { useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/styles/main.scss";
import "../assets/styles/privacyPolicy.scss";
import headingBg1 from "../assets/images/heading-bg.svg";
import headingBg2 from "../assets/images/heading-bg-2.svg";
import headingBg3 from "../assets/images/heading-bg-3.svg";
import headingBg4 from "../assets/images/heading-bg-4.svg";
import headingBg5 from "../assets/images/heading-bg-5.svg";
import headingSubBg from "../assets/images/heading-sub-bg.svg";

const CommunityGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="community-guidelines 3row m-0 p-0 flex-column bg-white align-items-center overflow-x-hidden">
      <Navbar />
      <div
        className="community-guidelines-container col-10 p-0 position-relative "
        style={{ marginBottom: "10rem" }}
      >
        <div
          className="community-guidelines-heading heading m-0 p-0 mt-4 position-relative d-flex align-items-center justify-content-center"
          data-aos="fade-right"
        >
          <img src={headingBg4} alt="heading-bg" className="m-0 p-0 " />
          <h1 className="m-0 p-0 position-absolute">Community Guidelines</h1>
        </div>

        <h2> Humzabaan is a global community of language learners</h2>
        <p>
          We believe that everyone should have access to free language
          education. Our guidelines are meant to build a mutual understanding of
          what being a part of this community is all about. We will take action
          if any of these guidelines are not upheld, so please read carefully.
        </p>
        <h2>Always be Respectful</h2>
        <p>
          We come together from across the world at varying language levels with
          the same goal in mind - to learn. Curiosity, questioning, and cultural
          understanding are something we celebrate. Be respectful of others and
          where they’re coming from.
        </p>
        <h2> Help and support across all skill levels</h2>
        <p>
          We are all in this together. Learning a language is hard and takes a
          lot of courage and dedication. If someone uses incorrect grammar or
          has a question you think has an obvious answer, kindly and calmly help
          them out. Heckling and being straight up mean doesn’t help anyone
          learn. Can’t say it nicely? Don’t weigh in.
        </p>
        <h2> Embrace and share regional language differences</h2>
        <p>
          A language can have many words, accents and ways to say the same
          thing. We think that’s one of the wonders of languages. Approach these
          conversations with an open mind and attitude.
        </p>
        <h2> Think before you share</h2>
        <p>
          We care about your safety. Speaking another language is inherently
          social, but please beware of swapping or posting any private
          information that could be misused. That includes your phone number,
          age, address, what time you’ll be at home, school name, email, or
          other personal information that could put your privacy at risk. Simply
          put: don’t over-share. Sharing and encouraging others to share
          personal data might get your post, and possibly your account, removed.
        </p>

        <h2> Please don’t use Humzabaan to...</h2>
        <ul>
          <li>
            <h3>Attack a person or group of people with words and actions</h3>

            <p>
              {" "}
              Humzabaan is a safe place for learners of all backgrounds.
              Harassment and hurtful content will not be tolerated. Using
              symbols, names and text that promote hate—as well as harassing,
              stalking, impersonating, and making sexual remarks towards
              someone—are considered abuse. The same goes for nudity and
              disturbing profile pictures and usernames. As stated in the terms,
              Humzabaan reserves the right to replace images or remove these
              accounts at its sole discretion. Rule of thumb: if you are making
              someone feel attacked or hurt, then you shouldn’t be doing it. We
              take these reports seriously and may delete your account without
              previous notice if such activity is verified by our team.
            </p>
          </li>
          <li>
            <h3> Script or cheat maliciously</h3>
            <p>
              Humzabaan believes in honest learning. If you are scripting for
              the purposes of cheating or sharing information and instructions
              about using Humzabaan in a way that may impact the system,
              community, learning, data or experience in a negative or
              significant manner, your account and posts may be removed.
            </p>
          </li>
          <li>
            <h3> Write inflammatory comments</h3>
            <p>
              Hateful, obscene and off-topic comments don’t contribute to
              learning. Cursing doesn’t either (let people discover those words
              in the wild). Leave them out of the language discussions.
            </p>
          </li>
          <li>
            <h3> To Summarize</h3>
            <p>We do not tolerate content that is:</p>
            <ul>
              <li>Illegal</li>
              <li>Pornographic</li>
              <li>Excessively profane or violent</li>
              <li>Spam</li>
              <li>Threatening, harassing, or bullying</li>
              <li>Associated with racism or intolerance</li>
              <li>Impersonating someone in a misleading or deceptive manner</li>
              <li>Personal confidential information</li>
            </ul>
            <li>
              Please don't waste your time looking for loopholes; we will
              remove any content that violates the spirit of these guidelines
              and you will risk losing partial or full access to Humzabaan
              without warning. By following these guidelines, we will all
              contribute to an interesting and helpful learning community.
            </li>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
