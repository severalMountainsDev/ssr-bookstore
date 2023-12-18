import "@testing-library/jest-dom";

declare global {
  interface Window {
    __PRELOADED_STATE__?: string;
  }
}

export {};
