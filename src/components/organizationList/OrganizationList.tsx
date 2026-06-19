import React, { Component } from "react";
import "./OrganizationList.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";
import { OrgLogo } from "../../types/portfolio";

interface Props {
  logos: OrgLogo[];
}

class OrganizationList extends Component<Props> {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organizations-inline">
                  <Fade bottom duration={2000} distance="40px">
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                  </Fade>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
