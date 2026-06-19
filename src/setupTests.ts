import "@testing-library/jest-dom";

// ── DOM API mocks (jsdom doesn't implement these) ─────────────────────────────
window.scrollTo = jest.fn();
(window as any).scrollIntoView = jest.fn();
Element.prototype.scrollIntoView = jest.fn();
Element.prototype.scrollTo = jest.fn();

window.matchMedia = window.matchMedia || function (query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

(global as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};

global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
};
