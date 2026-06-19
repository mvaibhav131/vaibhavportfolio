import React from "react";
import { render } from "@testing-library/react";
import PortfolioChatBot from "./PortfolioChatBot";

// react-chatbotify uses browser-only APIs not available in jsdom
jest.mock("react-chatbotify", () => ({
  __esModule: true,
  default: () => <div data-testid="chatbot-mock" />,
}));

const mockTheme = {
  body: "#ffffff",
  text: "#333333",
  imageHighlight: "#667eea",
  highlight: "#f0f0f8",
  jacketColor: "#667eea",
};

describe("PortfolioChatBot", () => {
  it("renders without crashing", () => {
    expect(() => render(<PortfolioChatBot theme={mockTheme} />)).not.toThrow();
  });

  it("renders the chatbot container", () => {
    const { getByTestId } = render(<PortfolioChatBot theme={mockTheme} />);
    expect(getByTestId("chatbot-mock")).toBeInTheDocument();
  });
});
