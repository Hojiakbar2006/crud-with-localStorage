import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { Store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
