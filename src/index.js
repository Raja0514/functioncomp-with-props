import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.css";
ReactDOM.render(
  <React.StrictMode>
    <h1>Function Component with Props</h1>
    <App name="Oman" location="Qurum" city="ruwi" mallname="carefour"></App>
  </React.StrictMode>,
  document.getElementById("root")
);
