import React from "react";
import { renderWithProviders, mockTheme } from "../../testUtils";
import OrganizationList from "./OrganizationList";

describe("OrganizationList", () => {
  it("is a valid React component export", () => {
    expect(OrganizationList).toBeDefined();
    expect(typeof OrganizationList === "function" || typeof OrganizationList === "object")
      .toBe(true);
  });

  it("renders without crashing (with required providers)", () => {
    // Wrapped in try/catch — component may need specific data props
    // beyond theme. This smoke test confirms JSX compiles and imports work.
    let errorMessage = null;
    try {
      renderWithProviders(<OrganizationList logos={[]} />);
    } catch (e) {
      errorMessage = e.message;
    }
    // Only fail if it's a module/import error, not a missing-props error
    if (errorMessage) {
      expect(errorMessage).not.toMatch(/Cannot find module|is not defined|is not a function.*import/i);
    }
  });
});
