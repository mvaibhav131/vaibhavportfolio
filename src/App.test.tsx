import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// react-chatbotify uses browser-only APIs (crypto, matchMedia) not in jsdom
jest.mock("./components/chatBot", () => ({
  __esModule: true,
  default: () => <div data-testid="chatbot-mock" />,
}));

it("renders without crashing", () => {
  expect(() => render(<App />)).not.toThrow();
});

