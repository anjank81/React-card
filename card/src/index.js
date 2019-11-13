import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import CardReducer from "./reducer/card.reducer";
import thunk from "redux-thunk";

const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(CardReducer);
ReactDOM.render(
  <Provider store={store}>
    
      <App />
  
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
