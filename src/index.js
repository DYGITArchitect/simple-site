import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainApp from "./mainApp";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>
);
