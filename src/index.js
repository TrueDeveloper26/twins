import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./store";

import Routes from "./routes";
import Wrapper from "./components/wrapper";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Wrapper>
        <Routes />
      </Wrapper>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
