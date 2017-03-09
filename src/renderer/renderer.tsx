import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import * as Redux from "redux";
import thunk from "redux-thunk";
import * as logger from "redux-logger";

import rootReducer from "./components/app/rootReducer";
import App from "./components/app/App";

const middlewares: Redux.Middleware[] = [thunk];

if(__DEVELOPMENT__) {
  middlewares.push(logger());
}

const middleware = Redux.applyMiddleware(...middlewares);
const store = Redux.createStore(rootReducer, middleware);

// Create div to mount react into
const body = document.querySelector("body");
const main = document.createElement("main");
body.appendChild(main);

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootElement, main);