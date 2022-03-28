import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { PublicCtx } from "./context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PublicCtx>
          <App />
        </PublicCtx>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
