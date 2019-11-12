import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

const composeEnhanchers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhanchers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
