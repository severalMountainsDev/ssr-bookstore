import React from "react";
import { Provider } from "react-redux";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "./store/configureStore";
import Routes from "./Routes";

import "./styles/main.scss";

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

export const store = createStore(initialState);

const container = document.getElementById("root");
hydrateRoot(
  container,
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
