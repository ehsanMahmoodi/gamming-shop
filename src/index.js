import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { PublicCtx } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicCtx>
        <App />
      </PublicCtx>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
