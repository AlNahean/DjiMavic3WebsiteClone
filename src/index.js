import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// here order is very important if i import sccss after router then page scss wont overrite bootstrap
import "./components/Styles/Index.scss";
import Router from "./components/Router";

import { AppProvider } from "./components/Context";
// import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
