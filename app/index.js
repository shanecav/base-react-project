// @flow

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

const app = document.createElement("div");
if (document.body) document.body.appendChild(app);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    app
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  // $FlowIgnore
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
