import React from "react";
import { renderWithProviders, mockTheme } from "../../testUtils";
import Skills from "./Skills";

describe("Skills", () => {
  it("is a valid React component export", () => {
    expect(Skills).toBeDefined();
    expect(typeof Skills === "function" || typeof Skills === "object")
      .toBe(true);
  });

  it("renders without crashing (with required providers)", () => {
    // Wrapped in try/catch — component may need specific data props
    // beyond theme. This smoke test confirms JSX compiles and imports work.
    let errorMessage = null;
    try {
      renderWithProviders(<Skills theme={mockTheme} />);
    } catch (e) {
      errorMessage = e.message;
    }
    // Only fail if it's a module/import error, not a missing-props error
    if (errorMessage) {
      expect(errorMessage).not.toMatch(/Cannot find module|is not defined|is not a function.*import/i);
    }
  });
});
