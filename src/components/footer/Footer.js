import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";

const iconMap = {
  "fa-github": "fab fa-github",
  "fa-linkedin-in": "fab fa-linkedin-in",
  "fa-twitter": "fab fa-twitter",
  "fa-instagram": "fab fa-instagram",
  "fa-youtube": "fab fa-youtube",
};

export default function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer-div"
      style={{
        "--accent": props.theme.imageHighlight,
        background: `linear-gradient(180deg, ${props.theme.imageHighlight}08 0%, ${props.theme.jacketColor}12 100%)`,
        borderTop: `1px solid ${props.theme.imageHighlight}30`,
      }}
    >
      <Fade bottom distance="20px">
        <div className="footer-inner">
          <div className="footer-social">
            {socialMediaLinks.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                style={{ "--icon-color": s.backgroundColor }}
                title={s.name}
              >
                <i
                  className={
                    iconMap[s.fontAwesomeIcon] || `fab ${s.fontAwesomeIcon}`
                  }
                />
              </a>
            ))}
          </div>
          <div className="footer-divider" />
          <p
            className="footer-copy"
            style={{ color: props.theme.secondaryText }}
          >
            &copy; {year} &middot; Designed &amp; Developed with{" "}
            {greeting.title}
          </p>
        </div>
      </Fade>
    </footer>
  );
}
