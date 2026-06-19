import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.scss";
import { Accordion, Panel } from "baseui/accordion";
import { ExperienceSection } from "../../types/portfolio";
import { Theme } from "../../types/theme";

interface Props {
  sections: ExperienceSection[];
  theme: Theme;
}

class ExperienceAccordion extends Component<Props> {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion initialState={{ expanded: ["Work"] }}>
          {this.props.sections.map((section) => {
            return (
              <Panel
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
