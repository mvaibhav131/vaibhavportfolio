import React, { Component } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import { ThemeProps } from "../../types/portfolio";

const skillAnimations: Record<string, string> = {
  DataScienceImg: "/animations/datascience.json",
  FullStackImg: "/animations/fullstack.json",
  CloudInfraImg: "/animations/cloud.json",
  DesignImg: "/animations/uiux.json",
};

function GetSkillSvg(props) {
  const src = skillAnimations[props.fileName] || skillAnimations.FullStackImg;
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ width: "100%", maxWidth: 520 }}
    />
  );
}

class SkillSection extends Component<ThemeProps> {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Vaibhav is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
