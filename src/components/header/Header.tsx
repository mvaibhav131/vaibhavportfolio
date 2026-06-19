import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio";
import SeoHeader from "../seoHeader/SeoHeader";
import ThemePicker from "../themePicker/ThemePicker";

const Header = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const link = settings.isSplash ? "/splash" : "home";

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header
          className="header"
          style={{
            "--accent": theme.imageHighlight,
            background: `linear-gradient(135deg, ${theme.imageHighlight}14 0%, ${theme.jacketColor}0d 100%)`,
            borderBottom: `1px solid ${theme.imageHighlight}35`,
            boxShadow: `0 2px 20px ${theme.imageHighlight}20`,
          } as React.CSSProperties}
        >
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />

          {/* Mobile: only hamburger */}
          <div className="header-mobile-right">
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </div>

          <ul className="menu" style={{ backgroundColor: "transparent" }}>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opensource"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Open Source
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-item-active" : ""}
                style={{ color: theme.text }}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          {!isMobile && <ThemePicker mobileOnly={false} />}
        </header>
      </div>
    </Fade>
  );
};

export default Header;
