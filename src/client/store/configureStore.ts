import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./index";

export const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
export default createStore;
