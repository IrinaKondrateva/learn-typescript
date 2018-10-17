import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppConnect } from "./components/App/AppConnect";
import { store } from "./store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
