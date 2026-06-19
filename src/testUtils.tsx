/**
 * testUtils.jsx
 * Shared test helpers — wraps components with all required providers.
 */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

export const mockTheme = {
  body: "#ffffff",
  text: "#333333",
  imageHighlight: "#667eea",
  highlight: "#f0f0f8",
  dark: "#000000",
  secondaryText: "#555555",
  headerColor: "#333333",
  navColor: "#333333",
  splashBg: "#ffffff",
  jacketColor: "#667eea",
  compImgHighlight: "#E6E6E6",
  topLoadingBar: "#667eea",
  socialMediaColor: "#333333",
  buttonColor: "#667eea",
  achievementCertificateCardHoverHeader: "#ffffff",
  projectCard: "#ffffff",
  experienceColor: "#667eea",
  achievementBannerColor: "#667eea",
};

/**
 * Renders a component wrapped with MemoryRouter, ThemeProvider, HelmetProvider.
 */
export function renderWithProviders(ui, { route = "/", themeOverride = {} } = {}) {
  const theme = { ...mockTheme, ...themeOverride };
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          {ui}
        </ThemeProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
}
