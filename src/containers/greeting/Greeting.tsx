import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  <TypeAnimation
                    sequence={[
                      "Senior Software Engineer",
                      1500,
                      "Full Stack Developer",
                      1500,
                      "MERN Stack Developer",
                      1500,
                      "DevOps Engineer",
                      1500,
                      "React Developer",
                      1500,
                      "Node.js Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    style={{ display: "inline-block" }}
                  />
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div
                className="portfolio-repo-btn-div"
                style={{ display: "flex" }}
              >
                <div style={{ marginRight: "10px" }}>
                  <Button
                    text="💼 Experience"
                    newTab={true}
                    href={"#experience"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
                <div>
                  <Button
                    text="📂 Projects"
                    newTab={true}
                    href="#projects"
                    theme={theme}
                    className="main-btn"
                  />
                </div>
              </div>

              {/* <div className="button-greeting-div"> */}
              {/* <Button text="Contact me" href="#contact" /> */}
              {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
              {/* </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <Player
              autoplay
              loop
              src="/animations/developer.json"
              style={{ width: "100%", maxWidth: 520 }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
