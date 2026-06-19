import React from "react";
import "./CompetitiveSites.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { CompetitiveLogo } from "../../types/portfolio";

interface Props {
  logos: CompetitiveLogo[];
}

class CompetitiveSites extends React.Component<Props> {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline">
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
