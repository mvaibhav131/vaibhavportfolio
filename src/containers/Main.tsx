import React, { Component } from "react";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio";
import Error404 from "../pages/errors/error404/Error";
import { ThemeProps } from "../types/portfolio";
import PortfolioChatBot from "../components/chatBot";

function ChatBotConditional({ theme }: ThemeProps) {
  const { pathname } = useLocation();
  const isSplash = pathname === "/" || pathname === "/splash";
  if (isSplash) return null;
  return <PortfolioChatBot theme={theme} />;
}

export default class Main extends Component<ThemeProps> {
  render() {
    const theme = this.props.theme;

    if (settings.isSplash) {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Splash theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            <Route path="/experience" element={<Experience theme={theme} />} />
            <Route path="/education" element={<Education theme={theme} />} />
            <Route path="/opensource" element={<Opensource theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/splash" element={<Splash theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
          <ChatBotConditional theme={theme} />
        </HashRouter>
      );
    }

    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/experience" element={<Experience theme={theme} />} />
          <Route path="/education" element={<Education theme={theme} />} />
          <Route path="/opensource" element={<Opensource theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="*" element={<Error404 theme={theme} />} />
        </Routes>
        <PortfolioChatBot theme={theme} />
      </HashRouter>
    );
  }
}