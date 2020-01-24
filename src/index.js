import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
// 1. Import thunk
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import manageMeditations from "./reducers/manageMeditations";

// 2. Include thunk in createStore()
const store = createStore(
  manageMeditations,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
