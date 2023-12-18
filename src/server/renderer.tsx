import React from "react";
import Helmet from "react-helmet";
import { Request } from "express";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import Routes from "../client/Routes";
import { fetchBooksAsync } from "../client/store/bookSlice";
import { createStore } from "../client/store/configureStore";

const renderer = async (req: Request) => {
  const store = createStore();

  await store.dispatch(fetchBooksAsync());

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const initialState = JSON.stringify(store.getState());
  const helmet = Helmet.renderStatic();

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head ${helmet.htmlAttributes.toString()}>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/main.css">
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${content}</div>
        <script>window.__PRELOADED_STATE__ = ${initialState}</script>
        <script src="/client_bundle.js"></script>
      </body>
    </html>
  `;

  return html;
};

export default renderer;
