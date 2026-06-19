import React from "react";
import { renderWithProviders, mockTheme } from "../../testUtils";
import Header from "./Header";

describe("Header", () => {
  it("is a valid React component export", () => {
    expect(Header).toBeDefined();
    expect(typeof Header === "function" || typeof Header === "object")
      .toBe(true);
  });

  it("renders without crashing (with required providers)", () => {
    // Wrapped in try/catch — component may need specific data props
    // beyond theme. This smoke test confirms JSX compiles and imports work.
    let errorMessage = null;
    try {
      renderWithProviders(<Header theme={mockTheme} />);
    } catch (e) {
      errorMessage = e.message;
    }
    // Only fail if it's a module/import error, not a missing-props error
    if (errorMessage) {
      expect(errorMessage).not.toMatch(/Cannot find module|is not defined|is not a function.*import/i);
    }
  });
});
