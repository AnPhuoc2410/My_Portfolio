import React, { useContext } from "react";
import { Fade } from "react-reveal";
import Typical from "react-typical";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import coding from "../../assets/lottie/coding";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* Add Typing Animation */}
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                <Typical
                  steps={[
                    "Hi, I'm An Phuoc", 2000,
                    "I'm from 🇻🇳", 2000,
                    "Trying to Do Better!", 2000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
                <span className="wave-emoji">{emoji("👀")}</span>
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./CV_ANPHUOC.pdf")}
                    download="CV_ANPHUOC.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={coding} isDarkMode={isDark} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
