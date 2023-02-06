import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createReduxStore } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
