import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "../common/store/configure";
import { history } from "../common/store";
import App from "../common/app";
import { AppWindow } from "./window";
import "../style/theme-day.scss";
import "../style/theme-night.scss";
import "./base-handlers";
import { loadableReady } from "@loadable/component";
import { SSRProvider } from "react-bootstrap";

declare var window: AppWindow;

const store = configureStore(window["__PRELOADED_STATE__"]);

if (process.env.NODE_ENV === "production") {
  console.log("%c%s", "font-size: 16px;", "Do not paste any sensitive information here!");
  console.log(
    "%c%s",
    "font-size: 12px;",
    "Are you developer, looking ways to contribute? \nhttps://github.com/ecency/hivexplorer \n\n"
  );
}
// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('welcome_to_react')}</h2>;
// }
loadableReady().then(() => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history!}>
        <App />
      </ConnectedRouter>
    </Provider>,

    document.getElementById("root")
  );
});

if (module.hot) {
  module.hot.accept("../common/app", () => {
    hydrate(
      <SSRProvider>
        <Provider store={store}>
          <ConnectedRouter history={history!}>
            <App />
          </ConnectedRouter>
        </Provider>
      </SSRProvider>,
      document.getElementById("root")
    );
  });
}
