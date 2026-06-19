import React from "react";
import "./LoaderLogo.scss";
import { Theme } from "../../types/theme";

interface Props {
  id?: string;
  theme?: Theme;
}

class LogoLoader extends React.Component<Props> {
  render() {
    const accent    = this.props.theme?.imageHighlight || "#667eea";
    const accentAlt = this.props.theme?.jacketColor    || "#764ba2";

    return (
      <div
        className="splash-loader"
        style={{ "--accent": accent, "--accent-alt": accentAlt } as React.CSSProperties}
      >
        {/* -- Animated ring + VM overlay ------------------- */}
        <div className="splash-ring-wrap">
          {/* ring SVG — rotated so arc starts at 12 o'clock */}
          <svg className="splash-ring-svg" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor={accent} />
                <stop offset="100%" stopColor={accentAlt} />
              </linearGradient>
            </defs>
            {/* animated arc only */}
            <circle
              className="splash-arc"
              cx="100" cy="100" r="88"
              stroke="url(#ring-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="553"
              strokeDashoffset="553"
            />
          </svg>

          {/* VM text — separate so it is NOT rotated */}
          <svg className="splash-vm-svg" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="vm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#ffffff" />
                <stop offset="55%"  stopColor={accent} />
                <stop offset="100%" stopColor={accentAlt} />
              </linearGradient>
            </defs>
            <text
              className="splash-vm"
              x="100" y="115"
              textAnchor="middle"
              fill="url(#vm-grad)"
              fontFamily="'Segoe UI', 'SF Pro Display', Arial, sans-serif"
              fontWeight="800"
              fontSize="56"
              letterSpacing="-2"
            >VM</text>
          </svg>
        </div>

        {/* ── Expanding divider ──────────────────── */}
        <div className="splash-line" />

        {/* ── Name ──────────────────────────────── */}
        <p className="splash-name">Vaibhav More</p>

        {/* ── Role ──────────────────────────────── */}
        <p className="splash-role">Full Stack Engineer</p>

        {/* ── Loading dots ──────────────────────── */}
        <div className="splash-dots">
          <span /><span /><span />
        </div>
      </div>
    );
  }
}

export default LogoLoader;

