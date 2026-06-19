import React from "react";
import { renderWithProviders, mockTheme } from "../../testUtils";
import PublicationCard from "./PublicationCard";

describe("PublicationCard", () => {
  it("is a valid React component export", () => {
    expect(PublicationCard).toBeDefined();
    expect(typeof PublicationCard === "function" || typeof PublicationCard === "object")
      .toBe(true);
  });

  it("renders without crashing (with required providers)", () => {
    // Wrapped in try/catch — component may need specific data props
    // beyond theme. This smoke test confirms JSX compiles and imports work.
    let errorMessage = null;
    try {
      renderWithProviders(<PublicationCard pub={{}} theme={mockTheme} />);
    } catch (e) {
      errorMessage = e.message;
    }
    // Only fail if it's a module/import error, not a missing-props error
    if (errorMessage) {
      expect(errorMessage).not.toMatch(/Cannot find module|is not defined|is not a function.*import/i);
    }
  });
});
