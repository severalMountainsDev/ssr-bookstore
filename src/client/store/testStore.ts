import { configureStore } from "@reduxjs/toolkit";
import rootReducer from ".";

export function createTestStore(preloadedState?: any) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
