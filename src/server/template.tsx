import express from "express";

import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Helmet } from "react-helmet";

import serialize from "serialize-javascript";

import App from "../common/app";

import { AppState } from "../common/store";

import configureStore from "../common/store/configure";
import path from "path";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

export const render = (req: express.Request, state: AppState) => {
  const store = configureStore(state);

  const context = {};
  // This is the stats file generated by webpack loadable plugin
  const statsFile = path.resolve("./build/loadable-stats.json");
  // We create an extractor from the statsFile
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ["client"] });

  const markup = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </ChunkExtractorManager>
  );

  const finalState = store.getState();

  const helmet = Helmet.renderStatic();
  const headHelmet = helmet.meta.toString() + helmet.title.toString() + helmet.link.toString();
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const styleTags = extractor.getStyleTags();

  return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000"/>
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                ${headHelmet}
                ${linkTags}
                ${styleTags}
            </head>
            <body class="${`theme-${state.global.theme}`}" style="display: none;">
                <div id="root">${markup}</div>
                <script>
                  window.__PRELOADED_STATE__ = ${serialize(finalState)}
                </script>
                ${scriptTags}
                <style>
                  body {
                    display: block !important;
                  }
                </style>
            </body>
        </html>`;
};
