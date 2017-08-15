import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import * as Redux from "redux";
import thunk from "redux-thunk";
import * as logger from "redux-logger";

import rootReducer from "./ui/rootReducer";
import App from "./ui/App";

const middlewares: Redux.Middleware[] = [thunk];

if(__DEVELOPMENT__) {
  middlewares.push((logger as any)());
}

const middleware = Redux.applyMiddleware(...middlewares);
const store = Redux.createStore(rootReducer, middleware);

// Create element to mount react into
const main = document.createElement("main");
document.querySelector("body").appendChild(main);

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootElement, main);