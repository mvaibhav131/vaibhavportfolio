import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const [popup, setPopup] = useState<string | null>(null);

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  function handleLive() {
    if (repo.view_url) {
      openRepoinNewTab(repo.view_url);
    } else {
      setPopup("live");
      setTimeout(() => setPopup(null), 3500);
    }
  }

  function handleCode() {
    if (repo.url) {
      openRepoinNewTab(repo.url);
    } else {
      setPopup("code");
      setTimeout(() => setPopup(null), 3500);
    }
  }

  function getInitials(name) {
    return (name || "P")
      .replace(/[^a-zA-Z\s]/g, " ")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div className="repo-card-inner" style={{ backgroundColor: theme.highlight }}>

          {/* Poster */}
          {repo.poster_url ? (
            <div className="repo-avatar-div" style={{ cursor: "pointer" }} onClick={handleLive}>
              <img src={repo.poster_url} alt={repo.name} className="repo-avatar" />
            </div>
          ) : (
            <div className="repo-avatar-div repo-avatar-placeholder" style={{ cursor: "pointer" }} onClick={handleLive}>
              <span className="repo-placeholder-initials">{getInitials(repo.name)}</span>
            </div>
          )}

          {/* Details */}
          <div className="repo-details" style={{ backgroundColor: theme.highlight }}>
            {repo.name && (
              <div className="repo-name-div">
                <p className="repo-name" style={{ color: theme.text }}>{repo.name}</p>
              </div>
            )}
            {repo.sector && (
              <div className="repo-sector-div">
                <p className="repo-sector" style={{ color: theme.secondaryText }}>{`(${repo.sector})`}</p>
              </div>
            )}
            {repo.description && (
              <p className="repo-description" style={{ color: theme.text }} title={repo.description}>
                {repo.description}
              </p>
            )}
            {repo.createdAt && repo.createdAt.trim() && (
              <p className="repo-creation-date subTitle" style={{ color: theme.secondaryText }}>
                Created on {repo.createdAt.split("T")[0]}
              </p>
            )}
          </div>

          {/* Languages */}
          {repo.languages && (
            <div className="repo-languages" style={{ backgroundColor: theme.highlight }}>
              <ProjectLanguages logos={repo.languages} />
            </div>
          )}

          {/* Popup warning */}
          {popup && (
            <div className="repo-popup" style={{ background: theme.body, color: theme.text, borderColor: theme.imageHighlight }}>
              {popup === "code" ? (
                <>
                  <span className="repo-popup-icon">&#9888;&#65039;</span>
                  <span>Source code is not publicly available due to client confidentiality.</span>
                </>
              ) : (
                <>
                  <span className="repo-popup-icon">&#128279;</span>
                  <span>Live link not found for this project.</span>
                </>
              )}
            </div>
          )}

          {/* Buttons - always at bottom */}
          <div className="repo-buttons" style={{ backgroundColor: theme.highlight, borderTopColor: theme.imageHighlight + "33" }}>
            <button
              className="view-project-button repo-btn-half"
              onClick={handleLive}
              style={{ background: theme.imageHighlight, color: "#fff", border: "none" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live
            </button>
            <button
              className="source-code-button repo-btn-half"
              onClick={handleCode}
              style={{ borderColor: theme.imageHighlight, color: theme.imageHighlight, background: theme.highlight }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Code
            </button>
          </div>

        </div>
      </Fade>
    </div>
  );
}