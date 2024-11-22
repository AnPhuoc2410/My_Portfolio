import React, { useContext } from "react";
import { Fade } from "react-reveal";
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
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <Fade bottom duration={1000} distance="20px">
                <h3>I'm from VietNam</h3>
              </Fade>
              <Fade bottom duration={1000} distance="20px">
                <h3>Currently living in Ho Chi Minh City</h3>
              </Fade>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
                <p>Trying to Do Better!</p>
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