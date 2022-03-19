import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { PublicCtx } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <PublicCtx>
      <App />
    </PublicCtx>
  </React.StrictMode>,
  document.getElementById("root")
);
