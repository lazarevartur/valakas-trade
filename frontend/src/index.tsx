import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/globalStyles/bootstrap.min.css";
import "./assets/globalStyles/index.scss";
import { store } from "./store/store";
import { App } from "./app";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
