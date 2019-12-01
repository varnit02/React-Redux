//informationn to display props come out of stste
//(State >> pros)-> it can change parents p[ass dstes props change]

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk"; //sees if any action return functions intead of objects tunnel action go through

import "./style.css";
import "tachyons";

import App from "./Containers/App";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger(); //makes logs

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  /*rootReducer-when here are large no. of reducers */
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
