import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import ClientProjectsData from "../../shared/opensource/clientprojects.json";
import "./Projects.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import { PageProps } from "../../types/portfolio";

class Projects extends Component<PageProps> {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <Player autoplay loop src="/animations/projects.json" style={{ width: "100%", maxWidth: 520 }} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Button text={"Client Projects"} className="project-button pointer-none" newTab={false} theme={theme} />
        <div className="repo-cards-div-main">
          {ClientProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>
        <Button text={"Personal Projects"} className="project-button pointer-none" newTab={false} theme={theme} />
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>
        <Button text={"More Projects"} className="project-button" href={greeting.githubProfile} newTab={true} theme={theme} />

        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1 className="publications-heading-text" style={{ color: theme.text }}>
                    {publicationsHeader.title}
                  </h1>
                  <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub, i) => (
            <PublicationCard key={i} pub={pub} theme={theme} />
          ))}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
